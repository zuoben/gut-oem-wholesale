import sharp from 'sharp';
import fs from 'fs';

const dir = 'public/images';
for (const f of fs.readdirSync(dir).filter((x) => /^(fda|iso|ce|sgs)/.test(x))) {
  const m = await sharp(`${dir}/${f}`).metadata();
  console.log(f, `${m.width}x${m.height}`, (m.width / m.height).toFixed(2));
}