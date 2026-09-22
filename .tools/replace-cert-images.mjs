import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const D_ROOT = 'D:\\111111111111111111111111111111111111111111111';
const OUT_DIR = path.resolve('public/images');
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 85;

function findCertDir() {
  const outer = fs.readdirSync(D_ROOT, { withFileTypes: true }).find((d) => d.isDirectory() && d.name.includes('证书'));
  if (!outer) throw new Error('Certificate root folder not found on D: drive');
  const outerPath = path.join(D_ROOT, outer.name);
  const inner = fs.readdirSync(outerPath, { withFileTypes: true }).find((d) => d.isDirectory());
  if (!inner) throw new Error('Certificate inner folder not found');
  return path.join(outerPath, inner.name);
}

function findFile(dir, matcher) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const nested = findFile(full, matcher);
      if (nested) return nested;
    } else if (matcher(entry.name)) {
      return full;
    }
  }
  return null;
}

function resolveSources(certDir) {
  const patentDir = fs
    .readdirSync(certDir, { withFileTypes: true })
    .find((d) => d.isDirectory() && d.name.includes('专利'));
  const patentPath = patentDir ? path.join(certDir, patentDir.name) : certDir;
  const firstPatent =
    patentDir &&
    fs
      .readdirSync(patentPath)
      .filter((f) => /\.(jpe?g|png)$/i.test(f))
      .sort()[0];

  const byName = (name) => path.join(certDir, name);
  const byPrefix = (prefix) => findFile(certDir, (n) => n.startsWith(prefix) && /\.(jpe?g|png)$/i.test(n));

  return {
    FDA2023: byName('FDA2023.jpg'),
    ISO13485: byName('Zuoben-ISO13485.jpg'),
    CE: byName('CE.jpg'),
    ISO9001: byName('ISO9001.png'),
    ISO10993_5: byName('ISO10993-5.jpg'),
    ISO10993_10: byName('ISO10993-10.jpg'),
    ISO10993_10_2: byName('ISO10993-10-2.jpg'),
    MSDS: byName('MSDS.jpg'),
    EPA: byName('EPA.jpg'),
    RoHS: byName('RoHS.jpg'),
    REACH: byName('REACH.jpg'),
    EN71: byPrefix('EN71-3'),
    PATENT: firstPatent ? path.join(patentPath, firstPatent) : byName('CE.jpg'),
  };
}

const MAPPING = [
  // FDA
  ['FDA2023', 'fda-registration.jpg'],
  ['ISO10993_5', 'fda-buyers.jpg'],
  ['MSDS', 'fda-documentation.jpg'],
  ['ISO13485', 'fda-manufacturing.jpg'],
  ['EPA', 'fda-market.jpg'],
  // ISO
  ['ISO13485', 'iso-system.jpg'],
  ['ISO9001', 'iso-process.jpg'],
  ['ISO10993_10_2', 'iso-audit.jpg'],
  ['EPA', 'iso-documentation.jpg'],
  ['PATENT', 'iso-oem.jpg'],
  // CE
  ['CE', 'ce-overview.jpg'],
  ['ISO10993_10', 'ce-mdr.jpg'],
  ['REACH', 'ce-technical-file.jpg'],
  ['RoHS', 'ce-market-access.jpg'],
  // SGS
  ['RoHS', 'sgs-partnership.jpg'],
  ['EN71', 'sgs-test-items.jpg'],
  ['ISO10993_5', 'sgs-reports.jpg'],
  ['REACH', 'sgs-export.jpg'],
];

async function processImage(src, dest) {
  const pipeline = sharp(src).rotate();
  const meta = await pipeline.metadata();
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }
  await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(dest);
}

async function main() {
  const certDir = findCertDir();
  const sources = resolveSources(certDir);
  fs.mkdirSync(OUT_DIR, { recursive: true });

  console.log(`Certificate folder: ${certDir}\n`);

  for (const [key, destName] of MAPPING) {
    const src = sources[key];
    if (!src || !fs.existsSync(src)) {
      throw new Error(`Missing source for ${destName}: key=${key}`);
    }
    const dest = path.join(OUT_DIR, destName);
    await processImage(src, dest);
    const stat = fs.statSync(dest);
    console.log(`OK ${destName} <- ${path.basename(src)} (${Math.round(stat.size / 1024)} KB)`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});