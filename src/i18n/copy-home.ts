import type { Locale } from './locales';

export type FaqItem = { title: string; description: string };
export type FeatureItem = { title: string; description: string; icon: string };
export type StepItem = { title: string; description: string; icon: string };

export type HomeCopy = {
  title: string;
  description: string;
  heroTitleBefore: string;
  heroTitleAccent: string;
  heroSub: string;
  heroNote: string;
  oemCta: string;
  wholesaleCta: string;
  complianceStrong: string;
  compliance: string;
  valueTag: string;
  valueTitle: string;
  valueItems: FeatureItem[];
  examplesKicker: string;
  examplesTitle: string;
  examplesBody: string;
  examplesCta: string;
  entranceTag: string;
  entranceTitle: string;
  entranceItems: FeatureItem[];
  stepsTitle: string;
  steps: StepItem[];
  stepsCta: string;
  faqTitle: string;
  faqs: FaqItem[];
  ctaTitle: string;
  ctaSub: string;
  contactCta: string;
  webName: string;
  webDesc: string;
};

const HOME: Record<Locale, HomeCopy> = {
  "en": {
    "title": "Private Label Digestive Enzymes & Probiotics | OEM + Wholesale",
    "description": "GutSource — B2B OEM private label and wholesale for digestive enzyme capsules, probiotics, and optional fiber powder. Structure/function dietary supplements only.",
    "heroTitleBefore": "Private label ",
    "heroTitleAccent": "digestive enzymes & probiotics",
    "heroSub": "B2B dual funnel: <strong>OEM private label</strong> for brand builders and <strong>wholesale</strong> case packs for retailers, gyms, and distributors.",
    "heroNote": "Dietary supplements · Structure/function language only · No disease-treatment claims",
    "oemCta": "OEM / Private Label",
    "wholesaleCta": "Wholesale",
    "complianceStrong": "Compliance:",
    "compliance": "Products discussed here are <strong>dietary supplements</strong>. Statements have not been evaluated by the FDA (or equivalent). Not intended to diagnose, treat, cure, or prevent any disease. We do not market “detox,” “cure leaky gut,” or disease claims (including IBS/Crohn’s).",
    "valueTag": "Why GutSource",
    "valueTitle": "Two clear B2B paths — one factory partner",
    "valueItems": [
      {
        "title": "OEM / Private Label",
        "description": "Custom or standard formulas, capsule and powder formats, label artwork, sampling, and production under your brand.",
        "icon": "tabler:flask"
      },
      {
        "title": "Wholesale restock",
        "description": "Open a wholesale account for standard digestive enzyme and probiotic SKUs — case MOQs and reorder pricing.",
        "icon": "tabler:package"
      },
      {
        "title": "Hero SKUs",
        "description": "Broad-spectrum digestive enzyme capsules, pillar probiotics, optional fiber powder. No RTD soda national shipping in early programs.",
        "icon": "tabler:pill"
      },
      {
        "title": "Compliance-aware copy",
        "description": "We help keep marketing in structure/function lane — certificates language available; no medical claims.",
        "icon": "tabler:shield-check"
      }
    ],
    "examplesKicker": "Capability examples",
    "examplesTitle": "Enzymes, probiotics & fiber — sample formats",
    "examplesBody": "Browse representative OEM capability examples (powder, capsule, pack concepts) drawn from public 1688 indexed cards. Structure/function dietary supplements only — inquire for private label or wholesale.",
    "examplesCta": "View product examples",
    "entranceTag": "Choose your entrance",
    "entranceTitle": "OEM or Wholesale — pick the right CTA",
    "entranceItems": [
      {
        "title": "Start an OEM project",
        "description": "Formula brief, format (capsule/powder), bottle & label, MOQ, sampling timeline. Best for brands and private-label entrepreneurs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Open wholesale account",
        "description": "Price list request, case packs, ship-to region, reorder cadence. Best for retailers, gyms/spas, and distributors.",
        "icon": "tabler:building-store"
      }
    ],
    "stepsTitle": "How B2B inquiries work",
    "steps": [
      {
        "title": "Tell us your channel",
        "description": "OEM custom formula, private label, wholesale pricing, or sample — plus buyer type and volume.",
        "icon": "tabler:message"
      },
      {
        "title": "We reply with MOQ & next steps",
        "description": "Working-day response with sampling options, indicative tiers, and document checklist.",
        "icon": "tabler:file-invoice"
      },
      {
        "title": "Sample → pilot → production / reorder",
        "description": "Approve samples, lock artwork and specs, then run production or open wholesale reorders.",
        "icon": "tabler:truck-delivery"
      }
    ],
    "stepsCta": "Request quote",
    "faqTitle": "FAQ",
    "faqs": [
      {
        "title": "Do you sell to retail consumers online?",
        "description": "No. <strong>GutSource is B2B only</strong> — OEM/private label programs and wholesale accounts for brands, retailers, gyms/spas, and distributors. There is no consumer cart or personal subscription path on this site."
      },
      {
        "title": "What SKUs can we private-label first?",
        "description": "Hero lines: <strong>broad-spectrum digestive enzyme capsules</strong> and <strong>pillar probiotic formulas</strong>. Optional: fiber powder. Early programs do <strong>not</strong> include RTD probiotic/protein soda national shipping."
      },
      {
        "title": "What is a typical OEM MOQ?",
        "description": "MOQ depends on formula complexity, bottle count, and packaging. Many private-label runs start in the low hundreds to low thousands of bottles after sampling — share your target volume on the inquiry form."
      },
      {
        "title": "Can we open a wholesale account for standard SKUs?",
        "description": "Yes. Use the Wholesale page and request a price list / account. Case packs and reorder MOQs are confirmed in writing."
      },
      {
        "title": "Do you make disease-treatment or detox claims?",
        "description": "No. We support <strong>dietary supplement structure/function</strong> labeling only. We do not market products to treat IBS, Crohn’s, or any disease, and we avoid “detox / cure leaky gut” style claims."
      }
    ],
    "ctaTitle": "Ready to brief or restock?",
    "ctaSub": "Share your buyer type, channel, and estimated bottles/cases — we route OEM vs wholesale correctly.",
    "contactCta": "Contact form",
    "webName": "Private Label Digestive Enzymes & Probiotics | OEM + Wholesale | GutSource",
    "webDesc": "Private label digestive enzymes and probiotics — OEM custom formulas and wholesale case packs for B2B buyers."
  },
  "zh-tw": {
    "title": "消化酶與益生菌貼牌｜OEM＋批發｜GutSource",
    "description": "GutSource — 消化酶膠囊、益生菌與可選纖維粉的 B2B OEM 貼牌與批發。僅結構／功能膳食補充劑宣稱。",
    "heroTitleBefore": "貼牌 ",
    "heroTitleAccent": "消化酶與益生菌",
    "heroSub": "B2B 雙入口：品牌方的<strong>OEM 貼牌</strong>，以及零售、健身房與經銷商的<strong>批發</strong>整箱。",
    "heroNote": "膳食補充劑 · 僅結構／功能語言 · 無疾病治療宣稱",
    "oemCta": "OEM／貼牌",
    "wholesaleCta": "批發",
    "complianceStrong": "合規：",
    "compliance": "此處討論的產品為<strong>膳食補充劑</strong>。聲明未經 FDA（或同等機構）評估。無意診斷、治療、治癒或預防任何疾病。我們不以「排毒」「治癒腸漏」或疾病（含 IBS／克隆氏症）方式行銷。",
    "valueTag": "為何選 GutSource",
    "valueTitle": "兩條清楚的 B2B 路徑 — 同一工廠夥伴",
    "valueItems": [
      {
        "title": "OEM／貼牌",
        "description": "客製或標準配方、膠囊與粉劑、標籤稿、打樣，以您的品牌量產。",
        "icon": "tabler:flask"
      },
      {
        "title": "批發補貨",
        "description": "為標準消化酶與益生菌 SKU 開批發帳戶 — 整箱 MOQ 與再訂價。",
        "icon": "tabler:package"
      },
      {
        "title": "主力 SKU",
        "description": "廣譜消化酶膠囊、核心益生菌、可選纖維粉。早期方案不含 RTD 汽水全國直郵。",
        "icon": "tabler:pill"
      },
      {
        "title": "合規文案意識",
        "description": "協助行銷維持結構／功能範圍 — 可提供證書用語；無醫療宣稱。",
        "icon": "tabler:shield-check"
      }
    ],
    "examplesKicker": "能力示例",
    "examplesTitle": "酶、益生菌與纖維 — 示例劑型",
    "examplesBody": "瀏覽來自公開 1688 索引卡片的代表性 OEM 能力示例。僅結構／功能膳食補充劑 — 歡迎洽詢貼牌或批發。",
    "examplesCta": "查看產品示例",
    "entranceTag": "選擇入口",
    "entranceTitle": "OEM 或批發 — 選對 CTA",
    "entranceItems": [
      {
        "title": "啟動 OEM 專案",
        "description": "配方簡報、劑型、瓶與標、MOQ、打樣時程。適合品牌與貼牌創業者。",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "開立批發帳戶",
        "description": "價目表申請、整箱、收貨地區、再訂節奏。適合零售、健身房／SPA 與經銷商。",
        "icon": "tabler:building-store"
      }
    ],
    "stepsTitle": "B2B 詢盤如何進行",
    "steps": [
      {
        "title": "告訴我們您的通路",
        "description": "OEM 客製配方、貼牌、批發報價或樣品 — 加上買家類型與量。",
        "icon": "tabler:message"
      },
      {
        "title": "我們回覆 MOQ 與下一步",
        "description": "工作日回覆打樣方案、參考階梯價與文件清單。",
        "icon": "tabler:file-invoice"
      },
      {
        "title": "樣品 → 試產 → 量產／再訂",
        "description": "確認樣品、鎖定稿件與規格，再量產或開批發再訂。",
        "icon": "tabler:truck-delivery"
      }
    ],
    "stepsCta": "索取報價",
    "faqTitle": "常見問題",
    "faqs": [
      {
        "title": "你們有賣給線上零售消費者嗎？",
        "description": "沒有。<strong>GutSource 僅做 B2B</strong> — 品牌、零售、健身房／SPA 與經銷商的 OEM／貼牌與批發帳戶。本站無消費者購物車。"
      },
      {
        "title": "我們可以先貼哪些 SKU？",
        "description": "主力：<strong>廣譜消化酶膠囊</strong>與<strong>核心益生菌配方</strong>。可選：纖維粉。早期方案<strong>不含</strong> RTD 汽水全國直郵。"
      },
      {
        "title": "典型 OEM MOQ 是多少？",
        "description": "視配方複雜度、瓶數與包裝而定。許多貼牌在打樣後從數百至數千瓶起 — 請在詢價表填寫目標量。"
      },
      {
        "title": "標準 SKU 可以開批發帳戶嗎？",
        "description": "可以。請到批發頁申請價目表／帳戶。整箱與再訂 MOQ 以書面確認。"
      },
      {
        "title": "你們會做疾病治療或排毒宣稱嗎？",
        "description": "不會。我們僅支援<strong>膳食補充劑結構／功能</strong>標示。不以治療 IBS、克隆氏症或任何疾病行銷，並避免「排毒／治癒腸漏」類宣稱。"
      }
    ],
    "ctaTitle": "準備好簡報或補貨了嗎？",
    "ctaSub": "告訴我們買家類型、通路與預估瓶／箱數 — 我們正確分流 OEM 與批發。",
    "contactCta": "聯絡表單",
    "webName": "消化酶與益生菌貼牌｜OEM＋批發｜GutSource",
    "webDesc": "消化酶與益生菌貼牌 — B2B 買家的 OEM 客製配方與批發整箱。"
  },
  "es": {
    "title": "Enzimas digestivas y probióticos marca privada | OEM + Mayoreo",
    "description": "GutSource — OEM marca privada y mayoreo B2B de enzimas digestivas, probióticos y fibra. Solo estructura/función.",
    "heroTitleBefore": "Marca privada ",
    "heroTitleAccent": "enzimas digestivas y probióticos",
    "heroSub": "Doble embudo B2B: <strong>OEM marca privada</strong> para marcas y <strong>mayoreo</strong> en cajas para retailers, gimnasios y distribuidores.",
    "heroNote": "Suplementos dietéticos · Solo estructura/función · Sin claims de enfermedad",
    "oemCta": "OEM / Marca privada",
    "wholesaleCta": "Mayoreo",
    "complianceStrong": "Cumplimiento:",
    "compliance": "Los productos tratados aquí son <strong>suplementos dietéticos</strong>. Declaraciones no evaluadas por la FDA (o equivalente). No destinados a diagnosticar, tratar, curar o prevenir enfermedades. No comercializamos “detox”, “curar leaky gut” ni claims de enfermedad (incluido IBS/Crohn).",
    "valueTag": "Por qué GutSource",
    "valueTitle": "Dos rutas B2B claras — un socio de fábrica",
    "valueItems": [
      {
        "title": "OEM / Private Label",
        "description": "Custom or standard formulas, capsule and powder formats, label artwork, sampling, and production under your brand.",
        "icon": "tabler:flask"
      },
      {
        "title": "Wholesale restock",
        "description": "Open a wholesale account for standard digestive enzyme and probiotic SKUs — case MOQs and reorder pricing.",
        "icon": "tabler:package"
      },
      {
        "title": "Hero SKUs",
        "description": "Broad-spectrum digestive enzyme capsules, pillar probiotics, optional fiber powder. No RTD soda national shipping in early programs.",
        "icon": "tabler:pill"
      },
      {
        "title": "Compliance-aware copy",
        "description": "We help keep marketing in structure/function lane — certificates language available; no medical claims.",
        "icon": "tabler:shield-check"
      }
    ],
    "examplesKicker": "Ejemplos de capacidad",
    "examplesTitle": "Enzimas, probióticos y fibra — formatos de muestra",
    "examplesBody": "Explore ejemplos OEM representativos de fichas 1688 públicas. Solo suplementos estructura/función.",
    "examplesCta": "Ver ejemplos de producto",
    "entranceTag": "Elija su entrada",
    "entranceTitle": "OEM o Mayoreo — elija el CTA correcto",
    "entranceItems": [
      {
        "title": "Start an OEM project",
        "description": "Formula brief, format (capsule/powder), bottle & label, MOQ, sampling timeline. Best for brands and private-label entrepreneurs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Open wholesale account",
        "description": "Price list request, case packs, ship-to region, reorder cadence. Best for retailers, gyms/spas, and distributors.",
        "icon": "tabler:building-store"
      }
    ],
    "stepsTitle": "Cómo funcionan las consultas B2B",
    "steps": [
      {
        "title": "Tell us your channel",
        "description": "OEM custom formula, private label, wholesale pricing, or sample — plus buyer type and volume.",
        "icon": "tabler:message"
      },
      {
        "title": "We reply with MOQ & next steps",
        "description": "Working-day response with sampling options, indicative tiers, and document checklist.",
        "icon": "tabler:file-invoice"
      },
      {
        "title": "Sample → pilot → production / reorder",
        "description": "Approve samples, lock artwork and specs, then run production or open wholesale reorders.",
        "icon": "tabler:truck-delivery"
      }
    ],
    "stepsCta": "Pedir cotización",
    "faqTitle": "FAQ",
    "faqs": [
      {
        "title": "Do you sell to retail consumers online?",
        "description": "No. <strong>GutSource is B2B only</strong> — OEM/private label programs and wholesale accounts for brands, retailers, gyms/spas, and distributors. There is no consumer cart or personal subscription path on this site."
      },
      {
        "title": "What SKUs can we private-label first?",
        "description": "Hero lines: <strong>broad-spectrum digestive enzyme capsules</strong> and <strong>pillar probiotic formulas</strong>. Optional: fiber powder. Early programs do <strong>not</strong> include RTD probiotic/protein soda national shipping."
      },
      {
        "title": "What is a typical OEM MOQ?",
        "description": "MOQ depends on formula complexity, bottle count, and packaging. Many private-label runs start in the low hundreds to low thousands of bottles after sampling — share your target volume on the inquiry form."
      },
      {
        "title": "Can we open a wholesale account for standard SKUs?",
        "description": "Yes. Use the Wholesale page and request a price list / account. Case packs and reorder MOQs are confirmed in writing."
      },
      {
        "title": "Do you make disease-treatment or detox claims?",
        "description": "No. We support <strong>dietary supplement structure/function</strong> labeling only. We do not market products to treat IBS, Crohn’s, or any disease, and we avoid “detox / cure leaky gut” style claims."
      }
    ],
    "ctaTitle": "¿Listo para brief o reposición?",
    "ctaSub": "Comparta tipo de comprador, canal y frascos/cajas estimados.",
    "contactCta": "Formulario de contacto",
    "webName": "Enzimas digestivas y probióticos marca privada | GutSource",
    "webDesc": "OEM y mayoreo de enzimas digestivas y probióticos para compradores B2B."
  },
  "ar": {
    "title": "إنزيمات هضمية وبروبيوتيك بعلامة خاصة | OEM + جملة",
    "description": "GutSource — OEM وجملة B2B لكابسولات الإنزيمات الهضمية والبروبيوتيك. مكملات هيكل/وظيفة فقط.",
    "heroTitleBefore": "علامة خاصة ",
    "heroTitleAccent": "إنزيمات هضمية وبروبيوتيك",
    "heroSub": "مساران B2B: <strong>OEM علامة خاصة</strong> للعلامات و<strong>جملة</strong> بكراتين للمتاجر والجيمات والموزعين.",
    "heroNote": "مكملات غذائية · هيكل/وظيفة فقط · بلا ادعاءات مرض",
    "oemCta": "OEM / علامة خاصة",
    "wholesaleCta": "الجملة",
    "complianceStrong": "الامتثال:",
    "compliance": "المنتجات هنا <strong>مكملات غذائية</strong>. البيانات لم تقيّمها FDA. ليست للتشخيص أو العلاج أو الوقاية من أي مرض. لا نسوّق «إزالة السموم» أو «علاج الأمعاء المتسربة» أو ادعاءات مرض (بما فيها القولون العصبي/كرون).",
    "valueTag": "لماذا GutSource",
    "valueTitle": "مساران B2B واضحان — شريك مصنع واحد",
    "valueItems": [
      {
        "title": "OEM / Private Label",
        "description": "Custom or standard formulas, capsule and powder formats, label artwork, sampling, and production under your brand.",
        "icon": "tabler:flask"
      },
      {
        "title": "Wholesale restock",
        "description": "Open a wholesale account for standard digestive enzyme and probiotic SKUs — case MOQs and reorder pricing.",
        "icon": "tabler:package"
      },
      {
        "title": "Hero SKUs",
        "description": "Broad-spectrum digestive enzyme capsules, pillar probiotics, optional fiber powder. No RTD soda national shipping in early programs.",
        "icon": "tabler:pill"
      },
      {
        "title": "Compliance-aware copy",
        "description": "We help keep marketing in structure/function lane — certificates language available; no medical claims.",
        "icon": "tabler:shield-check"
      }
    ],
    "examplesKicker": "أمثلة القدرات",
    "examplesTitle": "إنزيمات وبروبيوتيك وألياف — أشكال نموذجية",
    "examplesBody": "تصفح أمثلة OEM من بطاقات 1688 العامة. هيكل/وظيفة فقط.",
    "examplesCta": "عرض أمثلة المنتجات",
    "entranceTag": "اختر المدخل",
    "entranceTitle": "OEM أو جملة — اختر الـ CTA",
    "entranceItems": [
      {
        "title": "Start an OEM project",
        "description": "Formula brief, format (capsule/powder), bottle & label, MOQ, sampling timeline. Best for brands and private-label entrepreneurs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Open wholesale account",
        "description": "Price list request, case packs, ship-to region, reorder cadence. Best for retailers, gyms/spas, and distributors.",
        "icon": "tabler:building-store"
      }
    ],
    "stepsTitle": "كيف تعمل استفسارات B2B",
    "steps": [
      {
        "title": "Tell us your channel",
        "description": "OEM custom formula, private label, wholesale pricing, or sample — plus buyer type and volume.",
        "icon": "tabler:message"
      },
      {
        "title": "We reply with MOQ & next steps",
        "description": "Working-day response with sampling options, indicative tiers, and document checklist.",
        "icon": "tabler:file-invoice"
      },
      {
        "title": "Sample → pilot → production / reorder",
        "description": "Approve samples, lock artwork and specs, then run production or open wholesale reorders.",
        "icon": "tabler:truck-delivery"
      }
    ],
    "stepsCta": "طلب عرض سعر",
    "faqTitle": "الأسئلة",
    "faqs": [
      {
        "title": "Do you sell to retail consumers online?",
        "description": "No. <strong>GutSource is B2B only</strong> — OEM/private label programs and wholesale accounts for brands, retailers, gyms/spas, and distributors. There is no consumer cart or personal subscription path on this site."
      },
      {
        "title": "What SKUs can we private-label first?",
        "description": "Hero lines: <strong>broad-spectrum digestive enzyme capsules</strong> and <strong>pillar probiotic formulas</strong>. Optional: fiber powder. Early programs do <strong>not</strong> include RTD probiotic/protein soda national shipping."
      },
      {
        "title": "What is a typical OEM MOQ?",
        "description": "MOQ depends on formula complexity, bottle count, and packaging. Many private-label runs start in the low hundreds to low thousands of bottles after sampling — share your target volume on the inquiry form."
      },
      {
        "title": "Can we open a wholesale account for standard SKUs?",
        "description": "Yes. Use the Wholesale page and request a price list / account. Case packs and reorder MOQs are confirmed in writing."
      },
      {
        "title": "Do you make disease-treatment or detox claims?",
        "description": "No. We support <strong>dietary supplement structure/function</strong> labeling only. We do not market products to treat IBS, Crohn’s, or any disease, and we avoid “detox / cure leaky gut” style claims."
      }
    ],
    "ctaTitle": "جاهز للملخص أو إعادة التخزين؟",
    "ctaSub": "شارك نوع المشتري والقناة والحجم التقديري.",
    "contactCta": "نموذج الاتصال",
    "webName": "إنزيمات هضمية وبروبيوتيك بعلامة خاصة | GutSource",
    "webDesc": "OEM وجملة لإنزيمات هضمية وبروبيوتيك لمشتري B2B."
  },
  "fr": {
    "title": "Enzymes digestives et probiotiques marque blanche | OEM + Gros",
    "description": "GutSource — OEM marque blanche et gros B2B pour enzymes digestives et probiotiques. Structure/fonction uniquement.",
    "heroTitleBefore": "Marque blanche ",
    "heroTitleAccent": "enzymes digestives et probiotiques",
    "heroSub": "Double entonnoir B2B : <strong>OEM marque blanche</strong> pour les marques et <strong>gros</strong> en cartons pour détaillants, salles et distributeurs.",
    "heroNote": "Compléments alimentaires · Structure/fonction uniquement · Pas de claims maladie",
    "oemCta": "OEM / Marque blanche",
    "wholesaleCta": "Gros",
    "complianceStrong": "Conformité :",
    "compliance": "Les produits évoqués sont des <strong>compléments alimentaires</strong>. Déclarations non évaluées par la FDA. Non destinés à diagnostiquer, traiter, guérir ou prévenir une maladie. Pas de marketing « détox », « leaky gut » ou claims maladie (dont SII/Crohn).",
    "valueTag": "Pourquoi GutSource",
    "valueTitle": "Deux voies B2B claires — un partenaire usine",
    "valueItems": [
      {
        "title": "OEM / Private Label",
        "description": "Custom or standard formulas, capsule and powder formats, label artwork, sampling, and production under your brand.",
        "icon": "tabler:flask"
      },
      {
        "title": "Wholesale restock",
        "description": "Open a wholesale account for standard digestive enzyme and probiotic SKUs — case MOQs and reorder pricing.",
        "icon": "tabler:package"
      },
      {
        "title": "Hero SKUs",
        "description": "Broad-spectrum digestive enzyme capsules, pillar probiotics, optional fiber powder. No RTD soda national shipping in early programs.",
        "icon": "tabler:pill"
      },
      {
        "title": "Compliance-aware copy",
        "description": "We help keep marketing in structure/function lane — certificates language available; no medical claims.",
        "icon": "tabler:shield-check"
      }
    ],
    "examplesKicker": "Exemples de capacités",
    "examplesTitle": "Enzymes, probiotiques et fibres — formats d’exemple",
    "examplesBody": "Parcourez des exemples OEM issus de fiches 1688 publiques. Structure/fonction uniquement.",
    "examplesCta": "Voir les exemples produits",
    "entranceTag": "Choisissez l’entrée",
    "entranceTitle": "OEM ou Gros — le bon CTA",
    "entranceItems": [
      {
        "title": "Start an OEM project",
        "description": "Formula brief, format (capsule/powder), bottle & label, MOQ, sampling timeline. Best for brands and private-label entrepreneurs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Open wholesale account",
        "description": "Price list request, case packs, ship-to region, reorder cadence. Best for retailers, gyms/spas, and distributors.",
        "icon": "tabler:building-store"
      }
    ],
    "stepsTitle": "Comment fonctionnent les demandes B2B",
    "steps": [
      {
        "title": "Tell us your channel",
        "description": "OEM custom formula, private label, wholesale pricing, or sample — plus buyer type and volume.",
        "icon": "tabler:message"
      },
      {
        "title": "We reply with MOQ & next steps",
        "description": "Working-day response with sampling options, indicative tiers, and document checklist.",
        "icon": "tabler:file-invoice"
      },
      {
        "title": "Sample → pilot → production / reorder",
        "description": "Approve samples, lock artwork and specs, then run production or open wholesale reorders.",
        "icon": "tabler:truck-delivery"
      }
    ],
    "stepsCta": "Demander un devis",
    "faqTitle": "FAQ",
    "faqs": [
      {
        "title": "Do you sell to retail consumers online?",
        "description": "No. <strong>GutSource is B2B only</strong> — OEM/private label programs and wholesale accounts for brands, retailers, gyms/spas, and distributors. There is no consumer cart or personal subscription path on this site."
      },
      {
        "title": "What SKUs can we private-label first?",
        "description": "Hero lines: <strong>broad-spectrum digestive enzyme capsules</strong> and <strong>pillar probiotic formulas</strong>. Optional: fiber powder. Early programs do <strong>not</strong> include RTD probiotic/protein soda national shipping."
      },
      {
        "title": "What is a typical OEM MOQ?",
        "description": "MOQ depends on formula complexity, bottle count, and packaging. Many private-label runs start in the low hundreds to low thousands of bottles after sampling — share your target volume on the inquiry form."
      },
      {
        "title": "Can we open a wholesale account for standard SKUs?",
        "description": "Yes. Use the Wholesale page and request a price list / account. Case packs and reorder MOQs are confirmed in writing."
      },
      {
        "title": "Do you make disease-treatment or detox claims?",
        "description": "No. We support <strong>dietary supplement structure/function</strong> labeling only. We do not market products to treat IBS, Crohn’s, or any disease, and we avoid “detox / cure leaky gut” style claims."
      }
    ],
    "ctaTitle": "Prêt pour un brief ou un réassort ?",
    "ctaSub": "Indiquez type d’acheteur, canal et volumes estimés.",
    "contactCta": "Formulaire de contact",
    "webName": "Enzymes digestives et probiotiques marque blanche | GutSource",
    "webDesc": "OEM et gros d’enzymes digestives et probiotiques pour acheteurs B2B."
  },
  "de": {
    "title": "Verdauungsenzyme & Probiotika Private Label | OEM + Großhandel",
    "description": "GutSource — B2B OEM Private Label und Großhandel für Verdauungsenzyme und Probiotika. Nur Structure/Function.",
    "heroTitleBefore": "Private Label ",
    "heroTitleAccent": "Verdauungsenzyme & Probiotika",
    "heroSub": "Zwei B2B-Wege: <strong>OEM Private Label</strong> für Marken und <strong>Großhandel</strong> in Kartons für Retailer, Gyms und Distributoren.",
    "heroNote": "Nahrungsergänzung · Nur Structure/Function · Keine Krankheitsclaims",
    "oemCta": "OEM / Private Label",
    "wholesaleCta": "Großhandel",
    "complianceStrong": "Compliance:",
    "compliance": "Hier besprochene Produkte sind <strong>Nahrungsergänzungsmittel</strong>. Aussagen nicht von der FDA bewertet. Nicht zur Diagnose, Behandlung, Heilung oder Vorbeugung von Krankheiten bestimmt. Kein Marketing mit „Detox“, „Leaky Gut heilen“ oder Krankheitsclaims (inkl. Reizdarm/Morbus Crohn).",
    "valueTag": "Warum GutSource",
    "valueTitle": "Zwei klare B2B-Wege — ein Fabrikpartner",
    "valueItems": [
      {
        "title": "OEM / Private Label",
        "description": "Custom or standard formulas, capsule and powder formats, label artwork, sampling, and production under your brand.",
        "icon": "tabler:flask"
      },
      {
        "title": "Wholesale restock",
        "description": "Open a wholesale account for standard digestive enzyme and probiotic SKUs — case MOQs and reorder pricing.",
        "icon": "tabler:package"
      },
      {
        "title": "Hero SKUs",
        "description": "Broad-spectrum digestive enzyme capsules, pillar probiotics, optional fiber powder. No RTD soda national shipping in early programs.",
        "icon": "tabler:pill"
      },
      {
        "title": "Compliance-aware copy",
        "description": "We help keep marketing in structure/function lane — certificates language available; no medical claims.",
        "icon": "tabler:shield-check"
      }
    ],
    "examplesKicker": "Fähigkeitsbeispiele",
    "examplesTitle": "Enzyme, Probiotika & Ballaststoffe — Beispielformate",
    "examplesBody": "Repräsentative OEM-Beispiele aus öffentlichen 1688-Karten. Nur Structure/Function.",
    "examplesCta": "Produktbeispiele ansehen",
    "entranceTag": "Eingang wählen",
    "entranceTitle": "OEM oder Großhandel — richtiger CTA",
    "entranceItems": [
      {
        "title": "Start an OEM project",
        "description": "Formula brief, format (capsule/powder), bottle & label, MOQ, sampling timeline. Best for brands and private-label entrepreneurs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Open wholesale account",
        "description": "Price list request, case packs, ship-to region, reorder cadence. Best for retailers, gyms/spas, and distributors.",
        "icon": "tabler:building-store"
      }
    ],
    "stepsTitle": "So laufen B2B-Anfragen",
    "steps": [
      {
        "title": "Tell us your channel",
        "description": "OEM custom formula, private label, wholesale pricing, or sample — plus buyer type and volume.",
        "icon": "tabler:message"
      },
      {
        "title": "We reply with MOQ & next steps",
        "description": "Working-day response with sampling options, indicative tiers, and document checklist.",
        "icon": "tabler:file-invoice"
      },
      {
        "title": "Sample → pilot → production / reorder",
        "description": "Approve samples, lock artwork and specs, then run production or open wholesale reorders.",
        "icon": "tabler:truck-delivery"
      }
    ],
    "stepsCta": "Angebot anfordern",
    "faqTitle": "FAQ",
    "faqs": [
      {
        "title": "Do you sell to retail consumers online?",
        "description": "No. <strong>GutSource is B2B only</strong> — OEM/private label programs and wholesale accounts for brands, retailers, gyms/spas, and distributors. There is no consumer cart or personal subscription path on this site."
      },
      {
        "title": "What SKUs can we private-label first?",
        "description": "Hero lines: <strong>broad-spectrum digestive enzyme capsules</strong> and <strong>pillar probiotic formulas</strong>. Optional: fiber powder. Early programs do <strong>not</strong> include RTD probiotic/protein soda national shipping."
      },
      {
        "title": "What is a typical OEM MOQ?",
        "description": "MOQ depends on formula complexity, bottle count, and packaging. Many private-label runs start in the low hundreds to low thousands of bottles after sampling — share your target volume on the inquiry form."
      },
      {
        "title": "Can we open a wholesale account for standard SKUs?",
        "description": "Yes. Use the Wholesale page and request a price list / account. Case packs and reorder MOQs are confirmed in writing."
      },
      {
        "title": "Do you make disease-treatment or detox claims?",
        "description": "No. We support <strong>dietary supplement structure/function</strong> labeling only. We do not market products to treat IBS, Crohn’s, or any disease, and we avoid “detox / cure leaky gut” style claims."
      }
    ],
    "ctaTitle": "Bereit für Briefing oder Nachbestellung?",
    "ctaSub": "Teilen Sie Käufertyp, Kanal und geschätzte Flaschen/Kartons.",
    "contactCta": "Kontaktformular",
    "webName": "Verdauungsenzyme & Probiotika Private Label | GutSource",
    "webDesc": "OEM und Großhandel für Verdauungsenzyme und Probiotika für B2B-Käufer."
  },
  "ja": {
    "title": "消化酵素・プロバイオティクスのプライベートラベル｜OEM＋卸売",
    "description": "GutSource — 消化酵素・プロバイオティクスのB2B OEM／卸売。構造／機能のみ。",
    "heroTitleBefore": "プライベートラベル ",
    "heroTitleAccent": "消化酵素とプロバイオティクス",
    "heroSub": "B2Bの二経路：ブランド向け<strong>OEMプライベートラベル</strong>と、小売・ジム・卸向け<strong>卸売</strong>ケースパック。",
    "heroNote": "ダイエタリーサプリメント · 構造／機能のみ · 疾病治療主張なし",
    "oemCta": "OEM／プライベートラベル",
    "wholesaleCta": "卸売",
    "complianceStrong": "コンプライアンス：",
    "compliance": "ここで扱う製品は<strong>ダイエタリーサプリメント</strong>です。FDAによる評価は受けていません。疾病の診断・治療・治癒・予防を目的としません。「デトックス」「リーキーガット治癒」や疾病主張（IBS／クローン病含む）は行いません。",
    "valueTag": "GutSourceを選ぶ理由",
    "valueTitle": "明確な二つのB2B経路 — 一つの工場パートナー",
    "valueItems": [
      {
        "title": "OEM / Private Label",
        "description": "Custom or standard formulas, capsule and powder formats, label artwork, sampling, and production under your brand.",
        "icon": "tabler:flask"
      },
      {
        "title": "Wholesale restock",
        "description": "Open a wholesale account for standard digestive enzyme and probiotic SKUs — case MOQs and reorder pricing.",
        "icon": "tabler:package"
      },
      {
        "title": "Hero SKUs",
        "description": "Broad-spectrum digestive enzyme capsules, pillar probiotics, optional fiber powder. No RTD soda national shipping in early programs.",
        "icon": "tabler:pill"
      },
      {
        "title": "Compliance-aware copy",
        "description": "We help keep marketing in structure/function lane — certificates language available; no medical claims.",
        "icon": "tabler:shield-check"
      }
    ],
    "examplesKicker": "能力事例",
    "examplesTitle": "酵素・プロバイオ・食物繊維 — サンプル剤形",
    "examplesBody": "公開1688カードに基づく代表的OEM事例。構造／機能のみ。",
    "examplesCta": "製品事例を見る",
    "entranceTag": "入口を選ぶ",
    "entranceTitle": "OEMか卸売か — 正しいCTA",
    "entranceItems": [
      {
        "title": "Start an OEM project",
        "description": "Formula brief, format (capsule/powder), bottle & label, MOQ, sampling timeline. Best for brands and private-label entrepreneurs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Open wholesale account",
        "description": "Price list request, case packs, ship-to region, reorder cadence. Best for retailers, gyms/spas, and distributors.",
        "icon": "tabler:building-store"
      }
    ],
    "stepsTitle": "B2B問い合わせの流れ",
    "steps": [
      {
        "title": "Tell us your channel",
        "description": "OEM custom formula, private label, wholesale pricing, or sample — plus buyer type and volume.",
        "icon": "tabler:message"
      },
      {
        "title": "We reply with MOQ & next steps",
        "description": "Working-day response with sampling options, indicative tiers, and document checklist.",
        "icon": "tabler:file-invoice"
      },
      {
        "title": "Sample → pilot → production / reorder",
        "description": "Approve samples, lock artwork and specs, then run production or open wholesale reorders.",
        "icon": "tabler:truck-delivery"
      }
    ],
    "stepsCta": "見積依頼",
    "faqTitle": "FAQ",
    "faqs": [
      {
        "title": "Do you sell to retail consumers online?",
        "description": "No. <strong>GutSource is B2B only</strong> — OEM/private label programs and wholesale accounts for brands, retailers, gyms/spas, and distributors. There is no consumer cart or personal subscription path on this site."
      },
      {
        "title": "What SKUs can we private-label first?",
        "description": "Hero lines: <strong>broad-spectrum digestive enzyme capsules</strong> and <strong>pillar probiotic formulas</strong>. Optional: fiber powder. Early programs do <strong>not</strong> include RTD probiotic/protein soda national shipping."
      },
      {
        "title": "What is a typical OEM MOQ?",
        "description": "MOQ depends on formula complexity, bottle count, and packaging. Many private-label runs start in the low hundreds to low thousands of bottles after sampling — share your target volume on the inquiry form."
      },
      {
        "title": "Can we open a wholesale account for standard SKUs?",
        "description": "Yes. Use the Wholesale page and request a price list / account. Case packs and reorder MOQs are confirmed in writing."
      },
      {
        "title": "Do you make disease-treatment or detox claims?",
        "description": "No. We support <strong>dietary supplement structure/function</strong> labeling only. We do not market products to treat IBS, Crohn’s, or any disease, and we avoid “detox / cure leaky gut” style claims."
      }
    ],
    "ctaTitle": "ブリーフまたは補充の準備は？",
    "ctaSub": "バイヤー種別・チャネル・想定本数／ケースをお知らせください。",
    "contactCta": "お問い合わせフォーム",
    "webName": "消化酵素・プロバイオティクスのプライベートラベル｜GutSource",
    "webDesc": "B2B向け消化酵素・プロバイオティクスのOEMと卸売。"
  },
  "ko": {
    "title": "소화 효소·프로바이오틱 프라이빗 라벨 | OEM + 도매",
    "description": "GutSource — 소화 효소·프로바이오틱 B2B OEM 및 도매. 구조/기능만.",
    "heroTitleBefore": "프라이빗 라벨 ",
    "heroTitleAccent": "소화 효소와 프로바이오틱",
    "heroSub": "B2B 이중 경로: 브랜드용 <strong>OEM 프라이빗 라벨</strong>, 소매·체육관·유통용 <strong>도매</strong> 케이스 팩.",
    "heroNote": "건강기능식품 · 구조/기능만 · 질병 치료 클레임 없음",
    "oemCta": "OEM / 프라이빗 라벨",
    "wholesaleCta": "도매",
    "complianceStrong": "컴플라이언스:",
    "compliance": "여기서 다루는 제품은 <strong>건강기능식품</strong>입니다. FDA 평가를 받지 않았습니다. 질병의 진단·치료·치유·예방 목적이 아닙니다. “디톡스”, “리키 거트 치료” 또는 질병 클레임(IBS/크론 포함)을 하지 않습니다.",
    "valueTag": "GutSource를 선택하는 이유",
    "valueTitle": "두 가지 명확한 B2B 경로 — 하나의 공장 파트너",
    "valueItems": [
      {
        "title": "OEM / Private Label",
        "description": "Custom or standard formulas, capsule and powder formats, label artwork, sampling, and production under your brand.",
        "icon": "tabler:flask"
      },
      {
        "title": "Wholesale restock",
        "description": "Open a wholesale account for standard digestive enzyme and probiotic SKUs — case MOQs and reorder pricing.",
        "icon": "tabler:package"
      },
      {
        "title": "Hero SKUs",
        "description": "Broad-spectrum digestive enzyme capsules, pillar probiotics, optional fiber powder. No RTD soda national shipping in early programs.",
        "icon": "tabler:pill"
      },
      {
        "title": "Compliance-aware copy",
        "description": "We help keep marketing in structure/function lane — certificates language available; no medical claims.",
        "icon": "tabler:shield-check"
      }
    ],
    "examplesKicker": "역량 예시",
    "examplesTitle": "효소, 프로바이오틱, 식이섬유 — 샘플 제형",
    "examplesBody": "공개 1688 카드 기반 대표 OEM 예시. 구조/기능만.",
    "examplesCta": "제품 예시 보기",
    "entranceTag": "진입 선택",
    "entranceTitle": "OEM 또는 도매 — 올바른 CTA",
    "entranceItems": [
      {
        "title": "Start an OEM project",
        "description": "Formula brief, format (capsule/powder), bottle & label, MOQ, sampling timeline. Best for brands and private-label entrepreneurs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Open wholesale account",
        "description": "Price list request, case packs, ship-to region, reorder cadence. Best for retailers, gyms/spas, and distributors.",
        "icon": "tabler:building-store"
      }
    ],
    "stepsTitle": "B2B 문의 진행 방식",
    "steps": [
      {
        "title": "Tell us your channel",
        "description": "OEM custom formula, private label, wholesale pricing, or sample — plus buyer type and volume.",
        "icon": "tabler:message"
      },
      {
        "title": "We reply with MOQ & next steps",
        "description": "Working-day response with sampling options, indicative tiers, and document checklist.",
        "icon": "tabler:file-invoice"
      },
      {
        "title": "Sample → pilot → production / reorder",
        "description": "Approve samples, lock artwork and specs, then run production or open wholesale reorders.",
        "icon": "tabler:truck-delivery"
      }
    ],
    "stepsCta": "견적 요청",
    "faqTitle": "FAQ",
    "faqs": [
      {
        "title": "Do you sell to retail consumers online?",
        "description": "No. <strong>GutSource is B2B only</strong> — OEM/private label programs and wholesale accounts for brands, retailers, gyms/spas, and distributors. There is no consumer cart or personal subscription path on this site."
      },
      {
        "title": "What SKUs can we private-label first?",
        "description": "Hero lines: <strong>broad-spectrum digestive enzyme capsules</strong> and <strong>pillar probiotic formulas</strong>. Optional: fiber powder. Early programs do <strong>not</strong> include RTD probiotic/protein soda national shipping."
      },
      {
        "title": "What is a typical OEM MOQ?",
        "description": "MOQ depends on formula complexity, bottle count, and packaging. Many private-label runs start in the low hundreds to low thousands of bottles after sampling — share your target volume on the inquiry form."
      },
      {
        "title": "Can we open a wholesale account for standard SKUs?",
        "description": "Yes. Use the Wholesale page and request a price list / account. Case packs and reorder MOQs are confirmed in writing."
      },
      {
        "title": "Do you make disease-treatment or detox claims?",
        "description": "No. We support <strong>dietary supplement structure/function</strong> labeling only. We do not market products to treat IBS, Crohn’s, or any disease, and we avoid “detox / cure leaky gut” style claims."
      }
    ],
    "ctaTitle": "브리프 또는 재고 보충 준비되셨나요?",
    "ctaSub": "구매자 유형, 채널, 예상 병/케이스를 알려 주세요.",
    "contactCta": "문의 양식",
    "webName": "소화 효소·프로바이오틱 프라이빗 라벨 | GutSource",
    "webDesc": "B2B 구매자를 위한 소화 효소·프로바이오틱 OEM 및 도매."
  },
  "pt": {
    "title": "Enzimas digestivas e probióticos marca própria | OEM + Atacado",
    "description": "GutSource — OEM marca própria e atacado B2B de enzimas digestivas e probióticos. Apenas estrutura/função.",
    "heroTitleBefore": "Marca própria ",
    "heroTitleAccent": "enzimas digestivas e probióticos",
    "heroSub": "Dois funis B2B: <strong>OEM marca própria</strong> para marcas e <strong>atacado</strong> em caixas para varejo, academias e distribuidores.",
    "heroNote": "Suplementos alimentares · Apenas estrutura/função · Sem claims de doença",
    "oemCta": "OEM / Marca própria",
    "wholesaleCta": "Atacado",
    "complianceStrong": "Conformidade:",
    "compliance": "Os produtos aqui são <strong>suplementos alimentares</strong>. Declarações não avaliadas pela FDA. Não destinados a diagnosticar, tratar, curar ou prevenir doenças. Não comercializamos “detox”, “curar leaky gut” nem claims de doença (incluindo IBS/Crohn).",
    "valueTag": "Por que GutSource",
    "valueTitle": "Dois caminhos B2B claros — um parceiro de fábrica",
    "valueItems": [
      {
        "title": "OEM / Private Label",
        "description": "Custom or standard formulas, capsule and powder formats, label artwork, sampling, and production under your brand.",
        "icon": "tabler:flask"
      },
      {
        "title": "Wholesale restock",
        "description": "Open a wholesale account for standard digestive enzyme and probiotic SKUs — case MOQs and reorder pricing.",
        "icon": "tabler:package"
      },
      {
        "title": "Hero SKUs",
        "description": "Broad-spectrum digestive enzyme capsules, pillar probiotics, optional fiber powder. No RTD soda national shipping in early programs.",
        "icon": "tabler:pill"
      },
      {
        "title": "Compliance-aware copy",
        "description": "We help keep marketing in structure/function lane — certificates language available; no medical claims.",
        "icon": "tabler:shield-check"
      }
    ],
    "examplesKicker": "Exemplos de capacidade",
    "examplesTitle": "Enzimas, probióticos e fibra — formatos de exemplo",
    "examplesBody": "Veja exemplos OEM de cartões 1688 públicos. Apenas estrutura/função.",
    "examplesCta": "Ver exemplos de produtos",
    "entranceTag": "Escolha a entrada",
    "entranceTitle": "OEM ou Atacado — o CTA certo",
    "entranceItems": [
      {
        "title": "Start an OEM project",
        "description": "Formula brief, format (capsule/powder), bottle & label, MOQ, sampling timeline. Best for brands and private-label entrepreneurs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Open wholesale account",
        "description": "Price list request, case packs, ship-to region, reorder cadence. Best for retailers, gyms/spas, and distributors.",
        "icon": "tabler:building-store"
      }
    ],
    "stepsTitle": "Como funcionam as consultas B2B",
    "steps": [
      {
        "title": "Tell us your channel",
        "description": "OEM custom formula, private label, wholesale pricing, or sample — plus buyer type and volume.",
        "icon": "tabler:message"
      },
      {
        "title": "We reply with MOQ & next steps",
        "description": "Working-day response with sampling options, indicative tiers, and document checklist.",
        "icon": "tabler:file-invoice"
      },
      {
        "title": "Sample → pilot → production / reorder",
        "description": "Approve samples, lock artwork and specs, then run production or open wholesale reorders.",
        "icon": "tabler:truck-delivery"
      }
    ],
    "stepsCta": "Pedir orçamento",
    "faqTitle": "FAQ",
    "faqs": [
      {
        "title": "Do you sell to retail consumers online?",
        "description": "No. <strong>GutSource is B2B only</strong> — OEM/private label programs and wholesale accounts for brands, retailers, gyms/spas, and distributors. There is no consumer cart or personal subscription path on this site."
      },
      {
        "title": "What SKUs can we private-label first?",
        "description": "Hero lines: <strong>broad-spectrum digestive enzyme capsules</strong> and <strong>pillar probiotic formulas</strong>. Optional: fiber powder. Early programs do <strong>not</strong> include RTD probiotic/protein soda national shipping."
      },
      {
        "title": "What is a typical OEM MOQ?",
        "description": "MOQ depends on formula complexity, bottle count, and packaging. Many private-label runs start in the low hundreds to low thousands of bottles after sampling — share your target volume on the inquiry form."
      },
      {
        "title": "Can we open a wholesale account for standard SKUs?",
        "description": "Yes. Use the Wholesale page and request a price list / account. Case packs and reorder MOQs are confirmed in writing."
      },
      {
        "title": "Do you make disease-treatment or detox claims?",
        "description": "No. We support <strong>dietary supplement structure/function</strong> labeling only. We do not market products to treat IBS, Crohn’s, or any disease, and we avoid “detox / cure leaky gut” style claims."
      }
    ],
    "ctaTitle": "Pronto para brief ou reposição?",
    "ctaSub": "Informe tipo de comprador, canal e frascos/caixas estimados.",
    "contactCta": "Formulário de contato",
    "webName": "Enzimas digestivas e probióticos marca própria | GutSource",
    "webDesc": "OEM e atacado de enzimas digestivas e probióticos para compradores B2B."
  },
  "vi": {
    "title": "Enzyme tiêu hóa & probiotic nhãn riêng | OEM + Bán sỉ",
    "description": "GutSource — OEM nhãn riêng và bán sỉ B2B cho enzyme tiêu hóa và probiotic. Chỉ cấu trúc/chức năng.",
    "heroTitleBefore": "Nhãn riêng ",
    "heroTitleAccent": "enzyme tiêu hóa & probiotic",
    "heroSub": "Hai kênh B2B: <strong>OEM nhãn riêng</strong> cho thương hiệu và <strong>bán sỉ</strong> theo thùng cho bán lẻ, gym và nhà phân phối.",
    "heroNote": "TPCN · Chỉ cấu trúc/chức năng · Không claim bệnh",
    "oemCta": "OEM / Nhãn riêng",
    "wholesaleCta": "Bán sỉ",
    "complianceStrong": "Tuân thủ:",
    "compliance": "Sản phẩm ở đây là <strong>thực phẩm chức năng</strong>. Tuyên bố chưa được FDA đánh giá. Không nhằm chẩn đoán, điều trị hoặc phòng ngừa bệnh. Không marketing “thải độc”, “chữa leaky gut” hay claim bệnh (gồm IBS/Crohn).",
    "valueTag": "Vì sao GutSource",
    "valueTitle": "Hai lộ trình B2B rõ ràng — một đối tác nhà máy",
    "valueItems": [
      {
        "title": "OEM / Private Label",
        "description": "Custom or standard formulas, capsule and powder formats, label artwork, sampling, and production under your brand.",
        "icon": "tabler:flask"
      },
      {
        "title": "Wholesale restock",
        "description": "Open a wholesale account for standard digestive enzyme and probiotic SKUs — case MOQs and reorder pricing.",
        "icon": "tabler:package"
      },
      {
        "title": "Hero SKUs",
        "description": "Broad-spectrum digestive enzyme capsules, pillar probiotics, optional fiber powder. No RTD soda national shipping in early programs.",
        "icon": "tabler:pill"
      },
      {
        "title": "Compliance-aware copy",
        "description": "We help keep marketing in structure/function lane — certificates language available; no medical claims.",
        "icon": "tabler:shield-check"
      }
    ],
    "examplesKicker": "Ví dụ năng lực",
    "examplesTitle": "Enzyme, probiotic & chất xơ — dạng mẫu",
    "examplesBody": "Xem ví dụ OEM từ thẻ 1688 công khai. Chỉ cấu trúc/chức năng.",
    "examplesCta": "Xem ví dụ sản phẩm",
    "entranceTag": "Chọn lối vào",
    "entranceTitle": "OEM hoặc Bán sỉ — CTA đúng",
    "entranceItems": [
      {
        "title": "Start an OEM project",
        "description": "Formula brief, format (capsule/powder), bottle & label, MOQ, sampling timeline. Best for brands and private-label entrepreneurs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Open wholesale account",
        "description": "Price list request, case packs, ship-to region, reorder cadence. Best for retailers, gyms/spas, and distributors.",
        "icon": "tabler:building-store"
      }
    ],
    "stepsTitle": "Cách hoạt động yêu cầu B2B",
    "steps": [
      {
        "title": "Tell us your channel",
        "description": "OEM custom formula, private label, wholesale pricing, or sample — plus buyer type and volume.",
        "icon": "tabler:message"
      },
      {
        "title": "We reply with MOQ & next steps",
        "description": "Working-day response with sampling options, indicative tiers, and document checklist.",
        "icon": "tabler:file-invoice"
      },
      {
        "title": "Sample → pilot → production / reorder",
        "description": "Approve samples, lock artwork and specs, then run production or open wholesale reorders.",
        "icon": "tabler:truck-delivery"
      }
    ],
    "stepsCta": "Yêu cầu báo giá",
    "faqTitle": "FAQ",
    "faqs": [
      {
        "title": "Do you sell to retail consumers online?",
        "description": "No. <strong>GutSource is B2B only</strong> — OEM/private label programs and wholesale accounts for brands, retailers, gyms/spas, and distributors. There is no consumer cart or personal subscription path on this site."
      },
      {
        "title": "What SKUs can we private-label first?",
        "description": "Hero lines: <strong>broad-spectrum digestive enzyme capsules</strong> and <strong>pillar probiotic formulas</strong>. Optional: fiber powder. Early programs do <strong>not</strong> include RTD probiotic/protein soda national shipping."
      },
      {
        "title": "What is a typical OEM MOQ?",
        "description": "MOQ depends on formula complexity, bottle count, and packaging. Many private-label runs start in the low hundreds to low thousands of bottles after sampling — share your target volume on the inquiry form."
      },
      {
        "title": "Can we open a wholesale account for standard SKUs?",
        "description": "Yes. Use the Wholesale page and request a price list / account. Case packs and reorder MOQs are confirmed in writing."
      },
      {
        "title": "Do you make disease-treatment or detox claims?",
        "description": "No. We support <strong>dietary supplement structure/function</strong> labeling only. We do not market products to treat IBS, Crohn’s, or any disease, and we avoid “detox / cure leaky gut” style claims."
      }
    ],
    "ctaTitle": "Sẵn sàng brief hoặc nhập hàng?",
    "ctaSub": "Cho biết loại khách, kênh và số chai/thùng ước tính.",
    "contactCta": "Form liên hệ",
    "webName": "Enzyme tiêu hóa & probiotic nhãn riêng | GutSource",
    "webDesc": "OEM và bán sỉ enzyme tiêu hóa & probiotic cho khách B2B."
  },
  "id": {
    "title": "Enzim pencernaan & probiotik private label | OEM + Grosir",
    "description": "GutSource — OEM private label dan grosir B2B untuk enzim pencernaan dan probiotik. Struktur/fungsi saja.",
    "heroTitleBefore": "Private label ",
    "heroTitleAccent": "enzim pencernaan & probiotik",
    "heroSub": "Dua jalur B2B: <strong>OEM private label</strong> untuk merek dan <strong>grosir</strong> case pack untuk retailer, gym, dan distributor.",
    "heroNote": "Suplemen makanan · Hanya struktur/fungsi · Tanpa klaim penyakit",
    "oemCta": "OEM / Private Label",
    "wholesaleCta": "Grosir",
    "complianceStrong": "Kepatuhan:",
    "compliance": "Produk di sini adalah <strong>suplemen makanan</strong>. Pernyataan belum dievaluasi FDA. Tidak untuk mendiagnosis, mengobati, atau mencegah penyakit. Kami tidak memasarkan “detoks”, “sembuhkan leaky gut”, atau klaim penyakit (termasuk IBS/Crohn).",
    "valueTag": "Mengapa GutSource",
    "valueTitle": "Dua jalur B2B jelas — satu mitra pabrik",
    "valueItems": [
      {
        "title": "OEM / Private Label",
        "description": "Custom or standard formulas, capsule and powder formats, label artwork, sampling, and production under your brand.",
        "icon": "tabler:flask"
      },
      {
        "title": "Wholesale restock",
        "description": "Open a wholesale account for standard digestive enzyme and probiotic SKUs — case MOQs and reorder pricing.",
        "icon": "tabler:package"
      },
      {
        "title": "Hero SKUs",
        "description": "Broad-spectrum digestive enzyme capsules, pillar probiotics, optional fiber powder. No RTD soda national shipping in early programs.",
        "icon": "tabler:pill"
      },
      {
        "title": "Compliance-aware copy",
        "description": "We help keep marketing in structure/function lane — certificates language available; no medical claims.",
        "icon": "tabler:shield-check"
      }
    ],
    "examplesKicker": "Contoh kapabilitas",
    "examplesTitle": "Enzim, probiotik & serat — format contoh",
    "examplesBody": "Jelajahi contoh OEM dari kartu 1688 publik. Hanya struktur/fungsi.",
    "examplesCta": "Lihat contoh produk",
    "entranceTag": "Pilih pintu masuk",
    "entranceTitle": "OEM atau Grosir — CTA yang tepat",
    "entranceItems": [
      {
        "title": "Start an OEM project",
        "description": "Formula brief, format (capsule/powder), bottle & label, MOQ, sampling timeline. Best for brands and private-label entrepreneurs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Open wholesale account",
        "description": "Price list request, case packs, ship-to region, reorder cadence. Best for retailers, gyms/spas, and distributors.",
        "icon": "tabler:building-store"
      }
    ],
    "stepsTitle": "Cara kerja permintaan B2B",
    "steps": [
      {
        "title": "Tell us your channel",
        "description": "OEM custom formula, private label, wholesale pricing, or sample — plus buyer type and volume.",
        "icon": "tabler:message"
      },
      {
        "title": "We reply with MOQ & next steps",
        "description": "Working-day response with sampling options, indicative tiers, and document checklist.",
        "icon": "tabler:file-invoice"
      },
      {
        "title": "Sample → pilot → production / reorder",
        "description": "Approve samples, lock artwork and specs, then run production or open wholesale reorders.",
        "icon": "tabler:truck-delivery"
      }
    ],
    "stepsCta": "Minta penawaran",
    "faqTitle": "FAQ",
    "faqs": [
      {
        "title": "Do you sell to retail consumers online?",
        "description": "No. <strong>GutSource is B2B only</strong> — OEM/private label programs and wholesale accounts for brands, retailers, gyms/spas, and distributors. There is no consumer cart or personal subscription path on this site."
      },
      {
        "title": "What SKUs can we private-label first?",
        "description": "Hero lines: <strong>broad-spectrum digestive enzyme capsules</strong> and <strong>pillar probiotic formulas</strong>. Optional: fiber powder. Early programs do <strong>not</strong> include RTD probiotic/protein soda national shipping."
      },
      {
        "title": "What is a typical OEM MOQ?",
        "description": "MOQ depends on formula complexity, bottle count, and packaging. Many private-label runs start in the low hundreds to low thousands of bottles after sampling — share your target volume on the inquiry form."
      },
      {
        "title": "Can we open a wholesale account for standard SKUs?",
        "description": "Yes. Use the Wholesale page and request a price list / account. Case packs and reorder MOQs are confirmed in writing."
      },
      {
        "title": "Do you make disease-treatment or detox claims?",
        "description": "No. We support <strong>dietary supplement structure/function</strong> labeling only. We do not market products to treat IBS, Crohn’s, or any disease, and we avoid “detox / cure leaky gut” style claims."
      }
    ],
    "ctaTitle": "Siap brief atau restock?",
    "ctaSub": "Bagikan tipe pembeli, saluran, dan volume perkiraan.",
    "contactCta": "Formulir kontak",
    "webName": "Enzim pencernaan & probiotik private label | GutSource",
    "webDesc": "OEM dan grosir enzim pencernaan & probiotik untuk pembeli B2B."
  },
  "th": {
    "title": "เอนไซม์ย่อยอาหารและโปรไบโอติกไพรเวทเลเบล | OEM + ขายส่ง",
    "description": "GutSource — OEM และขายส่ง B2B สำหรับเอนไซม์ย่อยอาหารและโปรไบโอติก เฉพาะโครงสร้าง/หน้าที่",
    "heroTitleBefore": "ไพรเวทเลเบล ",
    "heroTitleAccent": "เอนไซม์ย่อยอาหารและโปรไบโอติก",
    "heroSub": "สองช่องทาง B2B: <strong>OEM ไพรเวทเลเบล</strong>สำหรับแบรนด์ และ<strong>ขายส่ง</strong>แบบเคสสำหรับร้านค้า ยิม และตัวแทนจำหน่าย",
    "heroNote": "ผลิตภัณฑ์เสริมอาหาร · เฉพาะโครงสร้าง/หน้าที่ · ไม่เคลมรักษาโรค",
    "oemCta": "OEM / ไพรเวทเลเบล",
    "wholesaleCta": "ขายส่ง",
    "complianceStrong": "การปฏิบัติตาม:",
    "compliance": "ผลิตภัณฑ์ที่กล่าวถึงเป็น<strong>ผลิตภัณฑ์เสริมอาหาร</strong> คำกล่าวไม่ได้ผ่านการประเมินโดย FDA ไม่ได้มีไว้เพื่อวินิจฉัย รักษา หรือป้องกันโรคใดๆ เราไม่ทำการตลาดแบบ “ดีท็อกซ์” “รักษา leaky gut” หรือเคลมโรค (รวม IBS/Crohn)",
    "valueTag": "ทำไมต้อง GutSource",
    "valueTitle": "สองเส้นทาง B2B ที่ชัดเจน — พาร์ทเนอร์โรงงานเดียว",
    "valueItems": [
      {
        "title": "OEM / Private Label",
        "description": "Custom or standard formulas, capsule and powder formats, label artwork, sampling, and production under your brand.",
        "icon": "tabler:flask"
      },
      {
        "title": "Wholesale restock",
        "description": "Open a wholesale account for standard digestive enzyme and probiotic SKUs — case MOQs and reorder pricing.",
        "icon": "tabler:package"
      },
      {
        "title": "Hero SKUs",
        "description": "Broad-spectrum digestive enzyme capsules, pillar probiotics, optional fiber powder. No RTD soda national shipping in early programs.",
        "icon": "tabler:pill"
      },
      {
        "title": "Compliance-aware copy",
        "description": "We help keep marketing in structure/function lane — certificates language available; no medical claims.",
        "icon": "tabler:shield-check"
      }
    ],
    "examplesKicker": "ตัวอย่างความสามารถ",
    "examplesTitle": "เอนไซม์ โปรไบโอติก และไฟเบอร์ — รูปแบบตัวอย่าง",
    "examplesBody": "ดูตัวอย่าง OEM จากบัตร 1688 สาธารณะ เฉพาะโครงสร้าง/หน้าที่",
    "examplesCta": "ดูตัวอย่างผลิตภัณฑ์",
    "entranceTag": "เลือกทางเข้า",
    "entranceTitle": "OEM หรือขายส่ง — CTA ที่ถูกต้อง",
    "entranceItems": [
      {
        "title": "Start an OEM project",
        "description": "Formula brief, format (capsule/powder), bottle & label, MOQ, sampling timeline. Best for brands and private-label entrepreneurs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Open wholesale account",
        "description": "Price list request, case packs, ship-to region, reorder cadence. Best for retailers, gyms/spas, and distributors.",
        "icon": "tabler:building-store"
      }
    ],
    "stepsTitle": "การสอบถาม B2B ทำงานอย่างไร",
    "steps": [
      {
        "title": "Tell us your channel",
        "description": "OEM custom formula, private label, wholesale pricing, or sample — plus buyer type and volume.",
        "icon": "tabler:message"
      },
      {
        "title": "We reply with MOQ & next steps",
        "description": "Working-day response with sampling options, indicative tiers, and document checklist.",
        "icon": "tabler:file-invoice"
      },
      {
        "title": "Sample → pilot → production / reorder",
        "description": "Approve samples, lock artwork and specs, then run production or open wholesale reorders.",
        "icon": "tabler:truck-delivery"
      }
    ],
    "stepsCta": "ขอใบเสนอราคา",
    "faqTitle": "คำถาม",
    "faqs": [
      {
        "title": "Do you sell to retail consumers online?",
        "description": "No. <strong>GutSource is B2B only</strong> — OEM/private label programs and wholesale accounts for brands, retailers, gyms/spas, and distributors. There is no consumer cart or personal subscription path on this site."
      },
      {
        "title": "What SKUs can we private-label first?",
        "description": "Hero lines: <strong>broad-spectrum digestive enzyme capsules</strong> and <strong>pillar probiotic formulas</strong>. Optional: fiber powder. Early programs do <strong>not</strong> include RTD probiotic/protein soda national shipping."
      },
      {
        "title": "What is a typical OEM MOQ?",
        "description": "MOQ depends on formula complexity, bottle count, and packaging. Many private-label runs start in the low hundreds to low thousands of bottles after sampling — share your target volume on the inquiry form."
      },
      {
        "title": "Can we open a wholesale account for standard SKUs?",
        "description": "Yes. Use the Wholesale page and request a price list / account. Case packs and reorder MOQs are confirmed in writing."
      },
      {
        "title": "Do you make disease-treatment or detox claims?",
        "description": "No. We support <strong>dietary supplement structure/function</strong> labeling only. We do not market products to treat IBS, Crohn’s, or any disease, and we avoid “detox / cure leaky gut” style claims."
      }
    ],
    "ctaTitle": "พร้อม brief หรือเติมสต็อก?",
    "ctaSub": "บอกประเภทผู้ซื้อ ช่องทาง และปริมาณโดยประมาณ",
    "contactCta": "แบบฟอร์มติดต่อ",
    "webName": "เอนไซม์ย่อยอาหารและโปรไบโอติกไพรเวทเลเบล | GutSource",
    "webDesc": "OEM และขายส่งเอนไซม์ย่อยอาหารและโปรไบโอติกสำหรับผู้ซื้อ B2B"
  },
  "hi": {
    "title": "प्राइवेट लेबल डाइजेस्टिव एंजाइम और प्रोबायोटिक्स | OEM + होलसेल",
    "description": "GutSource — डाइजेस्टिव एंजाइम और प्रोबायोटिक्स के लिए B2B OEM और होलसेल। केवल संरचना/कार्य।",
    "heroTitleBefore": "प्राइवेट लेबल ",
    "heroTitleAccent": "डाइजेस्टिव एंजाइम और प्रोबायोटिक्स",
    "heroSub": "B2B दो मार्ग: ब्रांडों के लिए <strong>OEM प्राइवेट लेबल</strong> और रिटेलर/जिम/डिस्ट्रीब्यूटर के लिए <strong>होलसेल</strong> केस पैक।",
    "heroNote": "आहार पूरक · केवल संरचना/कार्य · कोई रोग उपचार दावा नहीं",
    "oemCta": "OEM / प्राइवेट लेबल",
    "wholesaleCta": "होलसेल",
    "complianceStrong": "अनुपालन:",
    "compliance": "यहाँ चर्चा उत्पाद <strong>आहार पूरक</strong> हैं। FDA द्वारा मूल्यांकित नहीं। किसी रोग के निदान/उपचार/रोकथाम हेतु नहीं। हम “डिटॉक्स”, “लीकी गट इलाज” या रोग दावे (IBS/Crohn सहित) नहीं करते।",
    "valueTag": "GutSource क्यों",
    "valueTitle": "दो स्पष्ट B2B मार्ग — एक फैक्टरी पार्टनर",
    "valueItems": [
      {
        "title": "OEM / Private Label",
        "description": "Custom or standard formulas, capsule and powder formats, label artwork, sampling, and production under your brand.",
        "icon": "tabler:flask"
      },
      {
        "title": "Wholesale restock",
        "description": "Open a wholesale account for standard digestive enzyme and probiotic SKUs — case MOQs and reorder pricing.",
        "icon": "tabler:package"
      },
      {
        "title": "Hero SKUs",
        "description": "Broad-spectrum digestive enzyme capsules, pillar probiotics, optional fiber powder. No RTD soda national shipping in early programs.",
        "icon": "tabler:pill"
      },
      {
        "title": "Compliance-aware copy",
        "description": "We help keep marketing in structure/function lane — certificates language available; no medical claims.",
        "icon": "tabler:shield-check"
      }
    ],
    "examplesKicker": "क्षमता उदाहरण",
    "examplesTitle": "एंजाइम, प्रोबायोटिक और फाइबर — नमूना प्रारूप",
    "examplesBody": "सार्वजनिक 1688 कार्ड से OEM उदाहरण देखें। केवल संरचना/कार्य।",
    "examplesCta": "उत्पाद उदाहरण देखें",
    "entranceTag": "प्रवेश चुनें",
    "entranceTitle": "OEM या होलसेल — सही CTA",
    "entranceItems": [
      {
        "title": "Start an OEM project",
        "description": "Formula brief, format (capsule/powder), bottle & label, MOQ, sampling timeline. Best for brands and private-label entrepreneurs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Open wholesale account",
        "description": "Price list request, case packs, ship-to region, reorder cadence. Best for retailers, gyms/spas, and distributors.",
        "icon": "tabler:building-store"
      }
    ],
    "stepsTitle": "B2B पूछताछ कैसे काम करती है",
    "steps": [
      {
        "title": "Tell us your channel",
        "description": "OEM custom formula, private label, wholesale pricing, or sample — plus buyer type and volume.",
        "icon": "tabler:message"
      },
      {
        "title": "We reply with MOQ & next steps",
        "description": "Working-day response with sampling options, indicative tiers, and document checklist.",
        "icon": "tabler:file-invoice"
      },
      {
        "title": "Sample → pilot → production / reorder",
        "description": "Approve samples, lock artwork and specs, then run production or open wholesale reorders.",
        "icon": "tabler:truck-delivery"
      }
    ],
    "stepsCta": "कोट अनुरोध",
    "faqTitle": "प्रश्न",
    "faqs": [
      {
        "title": "Do you sell to retail consumers online?",
        "description": "No. <strong>GutSource is B2B only</strong> — OEM/private label programs and wholesale accounts for brands, retailers, gyms/spas, and distributors. There is no consumer cart or personal subscription path on this site."
      },
      {
        "title": "What SKUs can we private-label first?",
        "description": "Hero lines: <strong>broad-spectrum digestive enzyme capsules</strong> and <strong>pillar probiotic formulas</strong>. Optional: fiber powder. Early programs do <strong>not</strong> include RTD probiotic/protein soda national shipping."
      },
      {
        "title": "What is a typical OEM MOQ?",
        "description": "MOQ depends on formula complexity, bottle count, and packaging. Many private-label runs start in the low hundreds to low thousands of bottles after sampling — share your target volume on the inquiry form."
      },
      {
        "title": "Can we open a wholesale account for standard SKUs?",
        "description": "Yes. Use the Wholesale page and request a price list / account. Case packs and reorder MOQs are confirmed in writing."
      },
      {
        "title": "Do you make disease-treatment or detox claims?",
        "description": "No. We support <strong>dietary supplement structure/function</strong> labeling only. We do not market products to treat IBS, Crohn’s, or any disease, and we avoid “detox / cure leaky gut” style claims."
      }
    ],
    "ctaTitle": "Brief या रीस्टॉक के लिए तैयार?",
    "ctaSub": "खरीदार प्रकार, चैनल और अनुमानित मात्रा साझा करें।",
    "contactCta": "संपर्क फ़ॉर्म",
    "webName": "प्राइवेट लेबल डाइजेस्टिव एंजाइम और प्रोबायोटिक्स | GutSource",
    "webDesc": "B2B के लिए OEM और होलसेल डाइजेस्टिव एंजाइम व प्रोबायोटिक्स।"
  },
  "bn": {
    "title": "প্রাইভেট লেবেল ডাইজেস্টিভ এনজাইম ও প্রোবায়োটিক | OEM + হোলসেল",
    "description": "GutSource — ডাইজেস্টিভ এনজাইম ও প্রোবায়োটিকের B2B OEM ও হোলসেল। শুধু গঠন/কার্য।",
    "heroTitleBefore": "প্রাইভেট লেবেল ",
    "heroTitleAccent": "ডাইজেস্টিভ এনজাইম ও প্রোবায়োটিক",
    "heroSub": "B2B দুই পথ: ব্র্যান্ডের জন্য <strong>OEM প্রাইভেট লেবেল</strong> এবং রিটেইল/জিম/ডিস্ট্রিবিউটরের জন্য <strong>হোলসেল</strong> কেস প্যাক।",
    "heroNote": "খাদ্য সম্পূরক · শুধু গঠন/কার্য · কোনো রোগ দাবি নয়",
    "oemCta": "OEM / প্রাইভেট লেবেল",
    "wholesaleCta": "হোলসেল",
    "complianceStrong": "কমপ্লায়েন্স:",
    "compliance": "এখানকার পণ্য <strong>খাদ্য সম্পূরক</strong>। FDA মূল্যায়ন করেনি। কোনো রোগ নির্ণয়/চিকিৎসা/প্রতিরোধের জন্য নয়। আমরা “ডিটক্স”, “লিকি গাট নিরাময়” বা রোগ দাবি (IBS/Crohn সহ) করি না।",
    "valueTag": "কেন GutSource",
    "valueTitle": "দুটি স্পষ্ট B2B পথ — এক কারখানা অংশীদার",
    "valueItems": [
      {
        "title": "OEM / Private Label",
        "description": "Custom or standard formulas, capsule and powder formats, label artwork, sampling, and production under your brand.",
        "icon": "tabler:flask"
      },
      {
        "title": "Wholesale restock",
        "description": "Open a wholesale account for standard digestive enzyme and probiotic SKUs — case MOQs and reorder pricing.",
        "icon": "tabler:package"
      },
      {
        "title": "Hero SKUs",
        "description": "Broad-spectrum digestive enzyme capsules, pillar probiotics, optional fiber powder. No RTD soda national shipping in early programs.",
        "icon": "tabler:pill"
      },
      {
        "title": "Compliance-aware copy",
        "description": "We help keep marketing in structure/function lane — certificates language available; no medical claims.",
        "icon": "tabler:shield-check"
      }
    ],
    "examplesKicker": "সক্ষমতার উদাহরণ",
    "examplesTitle": "এনজাইম, প্রোবায়োটিক ও ফাইবার — নমুনা ফরম্যাট",
    "examplesBody": "পাবলিক 1688 কার্ড থেকে OEM উদাহরণ দেখুন। শুধু গঠন/কার্য।",
    "examplesCta": "পণ্য উদাহরণ দেখুন",
    "entranceTag": "প্রবেশ বেছে নিন",
    "entranceTitle": "OEM বা হোলসেল — সঠিক CTA",
    "entranceItems": [
      {
        "title": "Start an OEM project",
        "description": "Formula brief, format (capsule/powder), bottle & label, MOQ, sampling timeline. Best for brands and private-label entrepreneurs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Open wholesale account",
        "description": "Price list request, case packs, ship-to region, reorder cadence. Best for retailers, gyms/spas, and distributors.",
        "icon": "tabler:building-store"
      }
    ],
    "stepsTitle": "B2B অনুসন্ধান কীভাবে কাজ করে",
    "steps": [
      {
        "title": "Tell us your channel",
        "description": "OEM custom formula, private label, wholesale pricing, or sample — plus buyer type and volume.",
        "icon": "tabler:message"
      },
      {
        "title": "We reply with MOQ & next steps",
        "description": "Working-day response with sampling options, indicative tiers, and document checklist.",
        "icon": "tabler:file-invoice"
      },
      {
        "title": "Sample → pilot → production / reorder",
        "description": "Approve samples, lock artwork and specs, then run production or open wholesale reorders.",
        "icon": "tabler:truck-delivery"
      }
    ],
    "stepsCta": "কোট অনুরোধ",
    "faqTitle": "প্রশ্ন",
    "faqs": [
      {
        "title": "Do you sell to retail consumers online?",
        "description": "No. <strong>GutSource is B2B only</strong> — OEM/private label programs and wholesale accounts for brands, retailers, gyms/spas, and distributors. There is no consumer cart or personal subscription path on this site."
      },
      {
        "title": "What SKUs can we private-label first?",
        "description": "Hero lines: <strong>broad-spectrum digestive enzyme capsules</strong> and <strong>pillar probiotic formulas</strong>. Optional: fiber powder. Early programs do <strong>not</strong> include RTD probiotic/protein soda national shipping."
      },
      {
        "title": "What is a typical OEM MOQ?",
        "description": "MOQ depends on formula complexity, bottle count, and packaging. Many private-label runs start in the low hundreds to low thousands of bottles after sampling — share your target volume on the inquiry form."
      },
      {
        "title": "Can we open a wholesale account for standard SKUs?",
        "description": "Yes. Use the Wholesale page and request a price list / account. Case packs and reorder MOQs are confirmed in writing."
      },
      {
        "title": "Do you make disease-treatment or detox claims?",
        "description": "No. We support <strong>dietary supplement structure/function</strong> labeling only. We do not market products to treat IBS, Crohn’s, or any disease, and we avoid “detox / cure leaky gut” style claims."
      }
    ],
    "ctaTitle": "Brief বা রিস্টকের জন্য প্রস্তুত?",
    "ctaSub": "ক্রেতার ধরন, চ্যানেল ও আনুমানিক পরিমাণ জানান।",
    "contactCta": "যোগাযোগ ফর্ম",
    "webName": "প্রাইভেট লেবেল ডাইজেস্টিভ এনজাইম ও প্রোবায়োটিক | GutSource",
    "webDesc": "B2B ক্রেতাদের জন্য OEM ও হোলসেল ডাইজেস্টিভ এনজাইম ও প্রোবায়োটিক।"
  },
  "ru": {
    "title": "Пищеварительные ферменты и пробиотики private label | OEM + опт",
    "description": "GutSource — B2B OEM и опт пищеварительных ферментов и пробиотиков. Только структура/функция.",
    "heroTitleBefore": "Private label ",
    "heroTitleAccent": "пищеварительные ферменты и пробиотики",
    "heroSub": "Два B2B пути: <strong>OEM private label</strong> для брендов и <strong>опт</strong> коробами для ритейла, залов и дистрибьюторов.",
    "heroNote": "БАД · только структура/функция · без заявлений о лечении болезней",
    "oemCta": "OEM / Private Label",
    "wholesaleCta": "Опт",
    "complianceStrong": "Соответствие:",
    "compliance": "Продукты здесь — <strong>БАД</strong>. Заявления не оценены FDA. Не предназначены для диагностики, лечения или профилактики заболеваний. Мы не продвигаем «детокс», «лечение leaky gut» или claims о болезнях (включая СРК/Крон).",
    "valueTag": "Почему GutSource",
    "valueTitle": "Два чётких B2B пути — один завод-партнёр",
    "valueItems": [
      {
        "title": "OEM / Private Label",
        "description": "Custom or standard formulas, capsule and powder formats, label artwork, sampling, and production under your brand.",
        "icon": "tabler:flask"
      },
      {
        "title": "Wholesale restock",
        "description": "Open a wholesale account for standard digestive enzyme and probiotic SKUs — case MOQs and reorder pricing.",
        "icon": "tabler:package"
      },
      {
        "title": "Hero SKUs",
        "description": "Broad-spectrum digestive enzyme capsules, pillar probiotics, optional fiber powder. No RTD soda national shipping in early programs.",
        "icon": "tabler:pill"
      },
      {
        "title": "Compliance-aware copy",
        "description": "We help keep marketing in structure/function lane — certificates language available; no medical claims.",
        "icon": "tabler:shield-check"
      }
    ],
    "examplesKicker": "Примеры возможностей",
    "examplesTitle": "Ферменты, пробиотики и клетчатка — примеры форматов",
    "examplesBody": "Смотрите OEM-примеры с публичных карточек 1688. Только структура/функция.",
    "examplesCta": "Смотреть примеры продуктов",
    "entranceTag": "Выберите вход",
    "entranceTitle": "OEM или опт — правильный CTA",
    "entranceItems": [
      {
        "title": "Start an OEM project",
        "description": "Formula brief, format (capsule/powder), bottle & label, MOQ, sampling timeline. Best for brands and private-label entrepreneurs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Open wholesale account",
        "description": "Price list request, case packs, ship-to region, reorder cadence. Best for retailers, gyms/spas, and distributors.",
        "icon": "tabler:building-store"
      }
    ],
    "stepsTitle": "Как работают B2B-запросы",
    "steps": [
      {
        "title": "Tell us your channel",
        "description": "OEM custom formula, private label, wholesale pricing, or sample — plus buyer type and volume.",
        "icon": "tabler:message"
      },
      {
        "title": "We reply with MOQ & next steps",
        "description": "Working-day response with sampling options, indicative tiers, and document checklist.",
        "icon": "tabler:file-invoice"
      },
      {
        "title": "Sample → pilot → production / reorder",
        "description": "Approve samples, lock artwork and specs, then run production or open wholesale reorders.",
        "icon": "tabler:truck-delivery"
      }
    ],
    "stepsCta": "Запросить цену",
    "faqTitle": "FAQ",
    "faqs": [
      {
        "title": "Do you sell to retail consumers online?",
        "description": "No. <strong>GutSource is B2B only</strong> — OEM/private label programs and wholesale accounts for brands, retailers, gyms/spas, and distributors. There is no consumer cart or personal subscription path on this site."
      },
      {
        "title": "What SKUs can we private-label first?",
        "description": "Hero lines: <strong>broad-spectrum digestive enzyme capsules</strong> and <strong>pillar probiotic formulas</strong>. Optional: fiber powder. Early programs do <strong>not</strong> include RTD probiotic/protein soda national shipping."
      },
      {
        "title": "What is a typical OEM MOQ?",
        "description": "MOQ depends on formula complexity, bottle count, and packaging. Many private-label runs start in the low hundreds to low thousands of bottles after sampling — share your target volume on the inquiry form."
      },
      {
        "title": "Can we open a wholesale account for standard SKUs?",
        "description": "Yes. Use the Wholesale page and request a price list / account. Case packs and reorder MOQs are confirmed in writing."
      },
      {
        "title": "Do you make disease-treatment or detox claims?",
        "description": "No. We support <strong>dietary supplement structure/function</strong> labeling only. We do not market products to treat IBS, Crohn’s, or any disease, and we avoid “detox / cure leaky gut” style claims."
      }
    ],
    "ctaTitle": "Готовы к брифу или пополнению?",
    "ctaSub": "Укажите тип покупателя, канал и объём.",
    "contactCta": "Форма контакта",
    "webName": "Пищеварительные ферменты и пробиотики private label | GutSource",
    "webDesc": "OEM и опт пищеварительных ферментов и пробиотиков для B2B."
  },
  "ur": {
    "title": "پرائیویٹ لیبل ڈائجسٹو اینزائم اور پروبائیوٹکس | OEM + ہول سیل",
    "description": "GutSource — ڈائجسٹو اینزائم اور پروبائیوٹکس کے لیے B2B OEM اور ہول سیل۔ صرف ساخت/فعل۔",
    "heroTitleBefore": "پرائیویٹ لیبل ",
    "heroTitleAccent": "ڈائجسٹو اینزائم اور پروبائیوٹکس",
    "heroSub": "B2B دو راستے: برانڈز کے لیے <strong>OEM پرائیویٹ لیبل</strong> اور ریٹیلر/جم/ڈسٹری بیوٹرز کے لیے <strong>ہول سیل</strong> کیس پیک۔",
    "heroNote": "غذائی سپلیمنٹس · صرف ساخت/فعل · کوئی بیماری کا دعویٰ نہیں",
    "oemCta": "OEM / پرائیویٹ لیبل",
    "wholesaleCta": "ہول سیل",
    "complianceStrong": "کمپلائنس:",
    "compliance": "یہاں مصنوعات <strong>غذائی سپلیمنٹس</strong> ہیں۔ FDA نے تصدیق نہیں کی۔ کسی بیماری کی تشخیص/علاج/روک تھام کے لیے نہیں۔ ہم “ڈیٹاکس”، “لیکی گٹ علاج” یا بیماری کے دعوے (بشمول IBS/Crohn) نہیں کرتے۔",
    "valueTag": "GutSource کیوں",
    "valueTitle": "دو واضح B2B راستے — ایک فیکٹری پارٹنر",
    "valueItems": [
      {
        "title": "OEM / Private Label",
        "description": "Custom or standard formulas, capsule and powder formats, label artwork, sampling, and production under your brand.",
        "icon": "tabler:flask"
      },
      {
        "title": "Wholesale restock",
        "description": "Open a wholesale account for standard digestive enzyme and probiotic SKUs — case MOQs and reorder pricing.",
        "icon": "tabler:package"
      },
      {
        "title": "Hero SKUs",
        "description": "Broad-spectrum digestive enzyme capsules, pillar probiotics, optional fiber powder. No RTD soda national shipping in early programs.",
        "icon": "tabler:pill"
      },
      {
        "title": "Compliance-aware copy",
        "description": "We help keep marketing in structure/function lane — certificates language available; no medical claims.",
        "icon": "tabler:shield-check"
      }
    ],
    "examplesKicker": "صلاحیت کی مثالیں",
    "examplesTitle": "اینزائم، پروبائیوٹک اور فائبر — نمونہ فارمیٹس",
    "examplesBody": "عوامی 1688 کارڈز سے OEM مثالیں دیکھیں۔ صرف ساخت/فعل۔",
    "examplesCta": "مصنوعات کی مثالیں دیکھیں",
    "entranceTag": "داخلہ منتخب کریں",
    "entranceTitle": "OEM یا ہول سیل — درست CTA",
    "entranceItems": [
      {
        "title": "Start an OEM project",
        "description": "Formula brief, format (capsule/powder), bottle & label, MOQ, sampling timeline. Best for brands and private-label entrepreneurs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Open wholesale account",
        "description": "Price list request, case packs, ship-to region, reorder cadence. Best for retailers, gyms/spas, and distributors.",
        "icon": "tabler:building-store"
      }
    ],
    "stepsTitle": "B2B استفسار کیسے کام کرتا ہے",
    "steps": [
      {
        "title": "Tell us your channel",
        "description": "OEM custom formula, private label, wholesale pricing, or sample — plus buyer type and volume.",
        "icon": "tabler:message"
      },
      {
        "title": "We reply with MOQ & next steps",
        "description": "Working-day response with sampling options, indicative tiers, and document checklist.",
        "icon": "tabler:file-invoice"
      },
      {
        "title": "Sample → pilot → production / reorder",
        "description": "Approve samples, lock artwork and specs, then run production or open wholesale reorders.",
        "icon": "tabler:truck-delivery"
      }
    ],
    "stepsCta": "کوٹ درخواست",
    "faqTitle": "سوالات",
    "faqs": [
      {
        "title": "Do you sell to retail consumers online?",
        "description": "No. <strong>GutSource is B2B only</strong> — OEM/private label programs and wholesale accounts for brands, retailers, gyms/spas, and distributors. There is no consumer cart or personal subscription path on this site."
      },
      {
        "title": "What SKUs can we private-label first?",
        "description": "Hero lines: <strong>broad-spectrum digestive enzyme capsules</strong> and <strong>pillar probiotic formulas</strong>. Optional: fiber powder. Early programs do <strong>not</strong> include RTD probiotic/protein soda national shipping."
      },
      {
        "title": "What is a typical OEM MOQ?",
        "description": "MOQ depends on formula complexity, bottle count, and packaging. Many private-label runs start in the low hundreds to low thousands of bottles after sampling — share your target volume on the inquiry form."
      },
      {
        "title": "Can we open a wholesale account for standard SKUs?",
        "description": "Yes. Use the Wholesale page and request a price list / account. Case packs and reorder MOQs are confirmed in writing."
      },
      {
        "title": "Do you make disease-treatment or detox claims?",
        "description": "No. We support <strong>dietary supplement structure/function</strong> labeling only. We do not market products to treat IBS, Crohn’s, or any disease, and we avoid “detox / cure leaky gut” style claims."
      }
    ],
    "ctaTitle": "Brief یا ری اسٹاک کے لیے تیار؟",
    "ctaSub": "خریدار کی قسم، چینل اور تخمینی مقدار بتائیں۔",
    "contactCta": "رابطہ فارم",
    "webName": "پرائیویٹ لیبل ڈائجسٹو اینزائم اور پروبائیوٹکس | GutSource",
    "webDesc": "B2B خریداروں کے لیے OEM اور ہول سیل ڈائجسٹو اینزائم و پروبائیوٹکس۔"
  }
};

export function getHomeCopy(locale: Locale): HomeCopy {
  return HOME[locale] || HOME.en;
}

export type OemCopy = {
  title: string;
  description: string;
  heroTitleBefore: string;
  heroTitleAccent: string;
  heroSub: string;
  startCta: string;
  wholesaleInstead: string;
  capTag: string;
  capTitle: string;
  capItems: FeatureItem[];
  examplesTag: string;
  examplesTitle: string;
  examplesSub: string;
  examplesItems: FeatureItem[];
  examplesCta: string;
  pathTitle: string;
  pathSteps: StepItem[];
  faqTitle: string;
  faqs: FaqItem[];
  formTitle: string;
  formSub: string;
  ctaTitle: string;
  ctaSub: string;
  wholesaleChannel: string;
};

const OEM_EN: OemCopy = {
  "title": "OEM / Private Label Digestive Enzymes & Probiotics",
  "description": "Private label OEM for digestive enzyme capsules, probiotics, and optional fiber powder — MOQ, sampling, formula/format capabilities. B2B structure/function only.",
  "heroTitleBefore": "OEM / ",
  "heroTitleAccent": "Private Label",
  "heroSub": "Build your brand on digestive enzyme and probiotic dietary supplements — formula, format, bottle, and label under your name.",
  "startCta": "Start OEM inquiry",
  "wholesaleInstead": "Wholesale instead",
  "capTag": "Capabilities",
  "capTitle": "What we private-label",
  "capItems": [
    {
      "title": "Broad-spectrum digestive enzymes",
      "description": "Capsule SKUs positioned with structure/function digestive support language — not disease claims.",
      "icon": "tabler:pill"
    },
    {
      "title": "Pillar probiotics",
      "description": "Core probiotic formulas for private label — CFU and strain details confirmed in technical packs during RFQ.",
      "icon": "tabler:flask"
    },
    {
      "title": "Optional fiber powder",
      "description": "Powder format programs for qualified buyers — packaging and scoop specs scoped in the brief.",
      "icon": "tabler:package"
    },
    {
      "title": "Label & bottle artwork",
      "description": "Your brand front-of-pack; we help keep claims in structure/function lane for dietary supplements.",
      "icon": "tabler:palette"
    }
  ],
  "examplesTag": "Examples",
  "examplesTitle": "See representative OEM formats",
  "examplesSub": "Browse enzyme, probiotic, and fiber powder capability examples sourced from public 1688 indexed cards — then inquire for private label.",
  "examplesItems": [
    {
      "title": "Product examples",
      "description": "Bromelain enzyme powders, probiotic capsules/packs, and dietary-fiber powder pack concepts — not retail cart SKUs.",
      "icon": "tabler:layout-grid"
    },
    {
      "title": "Open the gallery",
      "description": "Review images, visible-card specs, and selling points, then start an OEM or wholesale inquiry.",
      "icon": "tabler:chevron-right"
    }
  ],
  "examplesCta": "View product examples",
  "pathTitle": "OEM path",
  "pathSteps": [
    {
      "title": "Brief",
      "description": "Buyer type, target SKU, format, markets, estimated bottles.",
      "icon": "tabler:message"
    },
    {
      "title": "Sample",
      "description": "Approve formula and packaging direction before scale.",
      "icon": "tabler:box"
    },
    {
      "title": "Pilot / production",
      "description": "Lock MOQ, artwork, and ship schedule.",
      "icon": "tabler:truck-delivery"
    }
  ],
  "faqTitle": "OEM FAQ",
  "faqs": [
    {
      "title": "What formats do you support for private label?",
      "description": "Primary: <strong>capsules</strong> for digestive enzymes and probiotics. Powder fills and optional <strong>fiber powder</strong> are available for qualified programs. Early OEM does not include RTD probiotic/protein soda national shipping."
    },
    {
      "title": "What certificates language can you share?",
      "description": "We can discuss facility quality systems and documentation typically requested for dietary supplement OEM (e.g. COA per lot where applicable). Certificate lists are shared during RFQ — we do <strong>not</strong> use certificates to imply disease treatment."
    },
    {
      "title": "How does sampling work?",
      "description": "Sample-first is recommended: approve formula sensory and label mockups before pilot or mass production. Sample fees and credit against first PO are confirmed case by case."
    }
  ],
  "formTitle": "Start an OEM / private label project",
  "formSub": "Select OEM custom formula or Private label in the form so we route correctly. Structure/function dietary supplements only.",
  "ctaTitle": "Need case packs of standard SKUs instead?",
  "ctaSub": "Open a wholesale account for ready enzyme and probiotic lines.",
  "wholesaleChannel": "Wholesale channel"
};
const OEM_OVERRIDES: Partial<Record<Locale, Partial<OemCopy>>> = {
  "zh-tw": {
    "title": "OEM／貼牌消化酶與益生菌",
    "description": "消化酶膠囊、益生菌與可選纖維粉的貼牌 OEM。僅 B2B 結構／功能。",
    "heroTitleBefore": "OEM／",
    "heroTitleAccent": "貼牌",
    "heroSub": "以消化酶與益生菌膳食補充劑打造您的品牌 — 配方、劑型、瓶與標皆用您的名稱。",
    "startCta": "開始 OEM 詢盤",
    "wholesaleInstead": "改看批發",
    "capTag": "能力",
    "capTitle": "我們可貼牌的品項",
    "examplesTag": "示例",
    "examplesTitle": "查看代表性 OEM 劑型",
    "examplesCta": "查看產品示例",
    "pathTitle": "OEM 路徑",
    "faqTitle": "OEM 常見問題",
    "formTitle": "啟動 OEM／貼牌專案",
    "formSub": "請在表單選擇 OEM 客製配方或貼牌。僅結構／功能膳食補充劑。",
    "ctaTitle": "需要標準 SKU 整箱？",
    "ctaSub": "為現成酶與益生菌線開立批發帳戶。",
    "wholesaleChannel": "批發通路"
  },
  "es": {
    "title": "OEM / Marca privada enzimas digestivas y probióticos",
    "description": "OEM marca privada de enzimas, probióticos y fibra. Solo estructura/función B2B.",
    "heroTitleBefore": "OEM / ",
    "heroTitleAccent": "Marca privada",
    "heroSub": "Construya su marca sobre suplementos de enzimas digestivas y probióticos.",
    "startCta": "Iniciar consulta OEM",
    "wholesaleInstead": "Mayoreo en su lugar",
    "capTag": "Capacidades",
    "capTitle": "Qué marcamos en privado",
    "examplesTag": "Ejemplos",
    "examplesTitle": "Ver formatos OEM representativos",
    "examplesCta": "Ver ejemplos de producto",
    "pathTitle": "Ruta OEM",
    "faqTitle": "FAQ OEM",
    "formTitle": "Iniciar proyecto OEM / marca privada",
    "formSub": "Seleccione fórmula OEM o Marca privada. Solo estructura/función.",
    "ctaTitle": "¿Necesita cajas de SKUs estándar?",
    "ctaSub": "Abra cuenta mayoreo para líneas listas.",
    "wholesaleChannel": "Canal mayoreo"
  },
  "ar": {
    "title": "OEM / علامة خاصة لإنزيمات هضمية وبروبيوتيك",
    "heroTitleBefore": "OEM / ",
    "heroTitleAccent": "علامة خاصة",
    "heroSub": "ابنِ علامتك على مكملات إنزيمات هضمية وبروبيوتيك.",
    "startCta": "بدء استفسار OEM",
    "wholesaleInstead": "الجملة بدلاً من ذلك",
    "capTag": "القدرات",
    "capTitle": "ما نضع عليه علامة خاصة",
    "examplesTag": "أمثلة",
    "examplesTitle": "أشكال OEM تمثيلية",
    "examplesCta": "عرض أمثلة المنتجات",
    "pathTitle": "مسار OEM",
    "faqTitle": "أسئلة OEM",
    "formTitle": "بدء مشروع OEM / علامة خاصة",
    "formSub": "اختر صيغة OEM أو علامة خاصة. هيكل/وظيفة فقط.",
    "ctaTitle": "تحتاج كراتين SKUs قياسية؟",
    "ctaSub": "افتح حساب جملة لخطوط جاهزة.",
    "wholesaleChannel": "قناة الجملة",
    "description": "OEM علامة خاصة لإنزيمات وبروبيوتيك. هيكل/وظيفة B2B فقط."
  },
  "fr": {
    "title": "OEM / Marque blanche enzymes digestives et probiotiques",
    "heroTitleBefore": "OEM / ",
    "heroTitleAccent": "Marque blanche",
    "heroSub": "Construisez votre marque sur des compléments enzymes digestives et probiotiques.",
    "startCta": "Démarrer une demande OEM",
    "wholesaleInstead": "Gros à la place",
    "capTag": "Capacités",
    "capTitle": "Ce que nous marquons en privé",
    "examplesTag": "Exemples",
    "examplesTitle": "Formats OEM représentatifs",
    "examplesCta": "Voir les exemples produits",
    "pathTitle": "Parcours OEM",
    "faqTitle": "FAQ OEM",
    "formTitle": "Démarrer un projet OEM / marque blanche",
    "formSub": "Sélectionnez formule OEM ou Marque blanche. Structure/fonction uniquement.",
    "ctaTitle": "Besoin de cartons de SKUs standards ?",
    "ctaSub": "Ouvrez un compte gros pour des lignes prêtes.",
    "wholesaleChannel": "Canal gros",
    "description": "OEM marque blanche pour enzymes et probiotiques. Structure/fonction B2B."
  },
  "de": {
    "title": "OEM / Private Label Verdauungsenzyme & Probiotika",
    "heroTitleBefore": "OEM / ",
    "heroTitleAccent": "Private Label",
    "heroSub": "Bauen Sie Ihre Marke auf Verdauungsenzym- und Probiotika-Nahrungsergänzung.",
    "startCta": "OEM-Anfrage starten",
    "wholesaleInstead": "Stattdessen Großhandel",
    "capTag": "Fähigkeiten",
    "capTitle": "Was wir private-labeln",
    "examplesTag": "Beispiele",
    "examplesTitle": "Repräsentative OEM-Formate",
    "examplesCta": "Produktbeispiele ansehen",
    "pathTitle": "OEM-Pfad",
    "faqTitle": "OEM-FAQ",
    "formTitle": "OEM- / Private-Label-Projekt starten",
    "formSub": "Wählen Sie OEM-Sonderformel oder Private Label. Nur Structure/Function.",
    "ctaTitle": "Brauchen Sie Kartons Standard-SKUs?",
    "ctaSub": "Öffnen Sie ein Großhandelskonto für fertige Linien.",
    "wholesaleChannel": "Großhandelskanal",
    "description": "Private-Label-OEM für Enzyme und Probiotika. Nur Structure/Function B2B."
  },
  "ja": {
    "title": "OEM／プライベートラベル 消化酵素・プロバイオティクス",
    "heroTitleBefore": "OEM／",
    "heroTitleAccent": "プライベートラベル",
    "heroSub": "消化酵素・プロバイオのダイエタリーサプリでブランドを構築。",
    "startCta": "OEM問い合わせ開始",
    "wholesaleInstead": "卸売を見る",
    "capTag": "能力",
    "capTitle": "プライベートラベル対応",
    "examplesTag": "事例",
    "examplesTitle": "代表的なOEM剤形",
    "examplesCta": "製品事例を見る",
    "pathTitle": "OEMの流れ",
    "faqTitle": "OEM FAQ",
    "formTitle": "OEM／PLプロジェクト開始",
    "formSub": "フォームでOEMカスタム処方またはPLを選択。構造／機能のみ。",
    "ctaTitle": "標準SKUのケースが必要？",
    "ctaSub": "既製ラインの卸売口座を開設。",
    "wholesaleChannel": "卸売チャネル",
    "description": "消化酵素・プロバイオのPL OEM。B2B構造／機能のみ。"
  },
  "ko": {
    "title": "OEM / 프라이빗 라벨 소화 효소 & 프로바이오틱",
    "heroTitleBefore": "OEM / ",
    "heroTitleAccent": "프라이빗 라벨",
    "heroSub": "소화 효소·프로바이오틱 건강기능식품으로 브랜드를 구축하세요.",
    "startCta": "OEM 문의 시작",
    "wholesaleInstead": "도매 보기",
    "capTag": "역량",
    "capTitle": "프라이빗 라벨 가능 항목",
    "examplesTag": "예시",
    "examplesTitle": "대표 OEM 제형",
    "examplesCta": "제품 예시 보기",
    "pathTitle": "OEM 경로",
    "faqTitle": "OEM FAQ",
    "formTitle": "OEM / 프라이빗 라벨 프로젝트 시작",
    "formSub": "양식에서 OEM 맞춤 또는 프라이빗 라벨 선택. 구조/기능만.",
    "ctaTitle": "표준 SKU 케이스가 필요하신가요?",
    "ctaSub": "준비된 라인 도매 계정을 여세요.",
    "wholesaleChannel": "도매 채널",
    "description": "소화 효소·프로바이오틱 PL OEM. B2B 구조/기능만."
  },
  "pt": {
    "title": "OEM / Marca própria enzimas digestivas e probióticos",
    "heroTitleBefore": "OEM / ",
    "heroTitleAccent": "Marca própria",
    "heroSub": "Construa sua marca em suplementos de enzimas digestivas e probióticos.",
    "startCta": "Iniciar consulta OEM",
    "wholesaleInstead": "Atacado em vez disso",
    "capTag": "Capacidades",
    "capTitle": "O que private-labelamos",
    "examplesTag": "Exemplos",
    "examplesTitle": "Formatos OEM representativos",
    "examplesCta": "Ver exemplos de produtos",
    "pathTitle": "Caminho OEM",
    "faqTitle": "FAQ OEM",
    "formTitle": "Iniciar projeto OEM / marca própria",
    "formSub": "Selecione fórmula OEM ou Marca própria. Apenas estrutura/função.",
    "ctaTitle": "Precisa de caixas de SKUs padrão?",
    "ctaSub": "Abra conta atacado para linhas prontas.",
    "wholesaleChannel": "Canal atacado",
    "description": "OEM marca própria de enzimas e probióticos. Apenas estrutura/função B2B."
  },
  "vi": {
    "title": "OEM / Nhãn riêng enzyme tiêu hóa & probiotic",
    "heroTitleBefore": "OEM / ",
    "heroTitleAccent": "Nhãn riêng",
    "heroSub": "Xây thương hiệu trên TPCN enzyme tiêu hóa và probiotic.",
    "startCta": "Bắt đầu hỏi OEM",
    "wholesaleInstead": "Xem bán sỉ",
    "capTag": "Năng lực",
    "capTitle": "Chúng tôi private-label gì",
    "examplesTag": "Ví dụ",
    "examplesTitle": "Dạng OEM đại diện",
    "examplesCta": "Xem ví dụ sản phẩm",
    "pathTitle": "Lộ trình OEM",
    "faqTitle": "FAQ OEM",
    "formTitle": "Bắt đầu dự án OEM / nhãn riêng",
    "formSub": "Chọn công thức OEM hoặc Nhãn riêng. Chỉ cấu trúc/chức năng.",
    "ctaTitle": "Cần thùng SKU tiêu chuẩn?",
    "ctaSub": "Mở tài khoản sỉ cho dòng sẵn.",
    "wholesaleChannel": "Kênh bán sỉ",
    "description": "OEM nhãn riêng enzyme và probiotic. Chỉ cấu trúc/chức năng B2B."
  },
  "id": {
    "title": "OEM / Private Label enzim pencernaan & probiotik",
    "heroTitleBefore": "OEM / ",
    "heroTitleAccent": "Private Label",
    "heroSub": "Bangun merek Anda pada suplemen enzim pencernaan dan probiotik.",
    "startCta": "Mulai pertanyaan OEM",
    "wholesaleInstead": "Lihat grosir",
    "capTag": "Kapabilitas",
    "capTitle": "Apa yang kami private-label",
    "examplesTag": "Contoh",
    "examplesTitle": "Format OEM representatif",
    "examplesCta": "Lihat contoh produk",
    "pathTitle": "Jalur OEM",
    "faqTitle": "FAQ OEM",
    "formTitle": "Mulai proyek OEM / private label",
    "formSub": "Pilih formula OEM kustom atau Private label. Hanya struktur/fungsi.",
    "ctaTitle": "Butuh karton SKU standar?",
    "ctaSub": "Buka akun grosir untuk lini siap.",
    "wholesaleChannel": "Saluran grosir",
    "description": "OEM private label enzim dan probiotik. Hanya struktur/fungsi B2B."
  },
  "th": {
    "title": "OEM / ไพรเวทเลเบลเอนไซม์ย่อยอาหารและโปรไบโอติก",
    "heroTitleBefore": "OEM / ",
    "heroTitleAccent": "ไพรเวทเลเบล",
    "heroSub": "สร้างแบรนด์ของคุณบนผลิตภัณฑ์เสริมอาหารเอนไซม์ย่อยอาหารและโปรไบโอติก",
    "startCta": "เริ่มสอบถาม OEM",
    "wholesaleInstead": "ดูขายส่งแทน",
    "capTag": "ความสามารถ",
    "capTitle": "สิ่งที่เราไพรเวทเลเบลได้",
    "examplesTag": "ตัวอย่าง",
    "examplesTitle": "รูปแบบ OEM ตัวแทน",
    "examplesCta": "ดูตัวอย่างผลิตภัณฑ์",
    "pathTitle": "เส้นทาง OEM",
    "faqTitle": "คำถาม OEM",
    "formTitle": "เริ่มโครงการ OEM / ไพรเวทเลเบล",
    "formSub": "เลือกสูตร OEM หรือไพรเวทเลเบล เฉพาะโครงสร้าง/หน้าที่",
    "ctaTitle": "ต้องการเคส SKU มาตรฐาน?",
    "ctaSub": "เปิดบัญชีขายส่งสำหรับไลน์พร้อมใช้",
    "wholesaleChannel": "ช่องทางขายส่ง",
    "description": "OEM ไพรเวทเลเบลเอนไซม์และโปรไบโอติก เฉพาะโครงสร้าง/หน้าที่ B2B"
  },
  "hi": {
    "title": "OEM / प्राइवेट लेबल डाइजेस्टिव एंजाइम और प्रोबायोटिक्स",
    "heroTitleBefore": "OEM / ",
    "heroTitleAccent": "प्राइवेट लेबल",
    "heroSub": "डाइजेस्टिव एंजाइम और प्रोबायोटिक आहार पूरकों पर अपना ब्रांड बनाएं।",
    "startCta": "OEM पूछताछ शुरू करें",
    "wholesaleInstead": "होलसेल देखें",
    "capTag": "क्षमताएँ",
    "capTitle": "हम क्या private-label करते हैं",
    "examplesTag": "उदाहरण",
    "examplesTitle": "प्रतिनिधि OEM प्रारूप",
    "examplesCta": "उत्पाद उदाहरण देखें",
    "pathTitle": "OEM पथ",
    "faqTitle": "OEM प्रश्न",
    "formTitle": "OEM / प्राइवेट लेबल प्रोजेक्ट शुरू करें",
    "formSub": "फॉर्म में OEM कस्टम या प्राइवेट लेबल चुनें। केवल संरचना/कार्य।",
    "ctaTitle": "मानक SKU केस चाहिए?",
    "ctaSub": "तैयार लाइनों के लिए होलसेल खाता खोलें।",
    "wholesaleChannel": "होलसेल चैनल",
    "description": "एंजाइम और प्रोबायोटिक्स का PL OEM। केवल B2B संरचना/कार्य।"
  },
  "bn": {
    "title": "OEM / প্রাইভেট লেবেল ডাইজেস্টিভ এনজাইম ও প্রোবায়োটিক",
    "heroTitleBefore": "OEM / ",
    "heroTitleAccent": "প্রাইভেট লেবেল",
    "heroSub": "ডাইজেস্টিভ এনজাইম ও প্রোবায়োটিক খাদ্য সম্পূরকে আপনার ব্র্যান্ড গড়ুন।",
    "startCta": "OEM জিজ্ঞাসা শুরু",
    "wholesaleInstead": "হোলসেল দেখুন",
    "capTag": "সক্ষমতা",
    "capTitle": "আমরা কী private-label করি",
    "examplesTag": "উদাহরণ",
    "examplesTitle": "প্রতিনিধিত্বমূলক OEM ফরম্যাট",
    "examplesCta": "পণ্য উদাহরণ দেখুন",
    "pathTitle": "OEM পথ",
    "faqTitle": "OEM প্রশ্ন",
    "formTitle": "OEM / প্রাইভেট লেবেল প্রকল্প শুরু",
    "formSub": "ফর্মে OEM কাস্টম বা প্রাইভেট লেবেল বেছে নিন। শুধু গঠন/কার্য।",
    "ctaTitle": "স্ট্যান্ডার্ড SKU কেস দরকার?",
    "ctaSub": "প্রস্তুত লাইনের হোলসেল অ্যাকাউন্ট খুলুন।",
    "wholesaleChannel": "হোলসেল চ্যানেল",
    "description": "এনজাইম ও প্রোবায়োটিকের PL OEM। শুধু B2B গঠন/কার্য।"
  },
  "ru": {
    "title": "OEM / Private Label пищеварительные ферменты и пробиотики",
    "heroTitleBefore": "OEM / ",
    "heroTitleAccent": "Private Label",
    "heroSub": "Создайте бренд на БАД с пищеварительными ферментами и пробиотиками.",
    "startCta": "Начать OEM-запрос",
    "wholesaleInstead": "Смотреть опт",
    "capTag": "Возможности",
    "capTitle": "Что мы делаем private label",
    "examplesTag": "Примеры",
    "examplesTitle": "Репрезентативные OEM-форматы",
    "examplesCta": "Смотреть примеры продуктов",
    "pathTitle": "Путь OEM",
    "faqTitle": "OEM FAQ",
    "formTitle": "Начать проект OEM / private label",
    "formSub": "Выберите OEM-формулу или Private label. Только структура/функция.",
    "ctaTitle": "Нужны короба стандартных SKU?",
    "ctaSub": "Откройте оптовый счёт на готовые линии.",
    "wholesaleChannel": "Оптовый канал",
    "description": "OEM private label ферментов и пробиотиков. Только структура/функция B2B."
  },
  "ur": {
    "title": "OEM / پرائیویٹ لیبل ڈائجسٹو اینزائم اور پروبائیوٹکس",
    "heroTitleBefore": "OEM / ",
    "heroTitleAccent": "پرائیویٹ لیبل",
    "heroSub": "ڈائجسٹو اینزائم اور پروبائیوٹک غذائی سپلیمنٹس پر اپنا برانڈ بنائیں۔",
    "startCta": "OEM استفسار شروع کریں",
    "wholesaleInstead": "ہول سیل دیکھیں",
    "capTag": "صلاحیتیں",
    "capTitle": "ہم کیا private-label کرتے ہیں",
    "examplesTag": "مثالیں",
    "examplesTitle": "نمائندہ OEM فارمیٹس",
    "examplesCta": "مصنوعات کی مثالیں دیکھیں",
    "pathTitle": "OEM راستہ",
    "faqTitle": "OEM سوالات",
    "formTitle": "OEM / پرائیویٹ لیبل پروجیکٹ شروع کریں",
    "formSub": "فارم میں OEM کسٹم یا پرائیویٹ لیبل منتخب کریں۔ صرف ساخت/فعل۔",
    "ctaTitle": "معیاری SKU کیس چاہیے؟",
    "ctaSub": "تیار لائنز کے لیے ہول سیل اکاؤنٹ کھولیں۔",
    "wholesaleChannel": "ہول سیل چینل",
    "description": "اینزائم اور پروبائیوٹکس کا PL OEM۔ صرف B2B ساخت/فعل۔"
  }
};

export function getOemCopy(locale: Locale): OemCopy {
  return { ...OEM_EN, ...(OEM_OVERRIDES[locale] || {}) };
}

export type WholesaleCopy = {
  title: string;
  description: string;
  heroTitleBefore: string;
  heroTitleAccent: string;
  heroSub: string;
  priceCta: string;
  oemCta: string;
  assortmentTag: string;
  assortmentTitle: string;
  assortmentItems: FeatureItem[];
  applyTitle: string;
  applyItems: FeatureItem[];
  faqTitle: string;
  faqs: FaqItem[];
  formTitle: string;
  formSub: string;
  ctaTitle: string;
  ctaSub: string;
  needCustom: string;
};

const WH_EN: WholesaleCopy = {
  "title": "Wholesale Digestive Enzymes & Probiotics",
  "description": "Open a wholesale account or request a price list for standard digestive enzyme and probiotic dietary supplement SKUs. Case packs for retailers, gyms, and distributors.",
  "heroTitleBefore": "Wholesale ",
  "heroTitleAccent": "account & price list",
  "heroSub": "Restock standard digestive enzyme and probiotic SKUs in case packs — for stores, gyms, spas, and distributors.",
  "priceCta": "Request price list",
  "oemCta": "OEM / Private Label",
  "assortmentTag": "Wholesale assortment",
  "assortmentTitle": "Early hero SKUs",
  "assortmentItems": [
    {
      "title": "Digestive enzyme capsules",
      "description": "Broad-spectrum enzyme bottles in case packs — structure/function positioning only.",
      "icon": "tabler:pill"
    },
    {
      "title": "Probiotic SKUs",
      "description": "Pillar probiotic lines for shelf and wellness channels — reorder-friendly case MOQs.",
      "icon": "tabler:stack"
    },
    {
      "title": "Optional fiber powder",
      "description": "Available where logistics fit; confirm packaging and MOQ on inquiry.",
      "icon": "tabler:package"
    },
    {
      "title": "No RTD soda (early)",
      "description": "We are not offering RTD probiotic/protein soda national shipping in the early wholesale catalog.",
      "icon": "tabler:shield-check"
    }
  ],
  "applyTitle": "How to apply",
  "applyItems": [
    {
      "title": "1. Tell us who you are",
      "description": "Retailer, gym/spa, or distributor — plus ship-to region.",
      "icon": "tabler:user"
    },
    {
      "title": "2. Select Wholesale pricing",
      "description": "Use the form channel so we send the right price list pack.",
      "icon": "tabler:tag"
    },
    {
      "title": "3. Confirm MOQ & terms",
      "description": "Case packs, freight terms, and reorder cadence in writing.",
      "icon": "tabler:check"
    }
  ],
  "faqTitle": "Wholesale FAQ",
  "faqs": [
    {
      "title": "Who can open a wholesale account?",
      "description": "Retailers, gyms/spas, wellness channels, and distributors. This is <strong>not</strong> a consumer subscription or personal retail cart."
    },
    {
      "title": "What are typical case packs?",
      "description": "Standard digestive enzyme and probiotic SKUs ship in case packs (bottle counts per case confirmed on the price list). MOQ may be one or more cases depending on SKU."
    },
    {
      "title": "Do you wholesale RTD probiotic soda nationally?",
      "description": "Not in early programs. Focus is capsule/powder dietary supplement SKUs — enzymes, probiotics, optional fiber powder."
    }
  ],
  "formTitle": "Open wholesale account / request price list",
  "formSub": "Choose Wholesale pricing (or Sample) in the form. B2B dietary supplements only — no consumer checkout.",
  "ctaTitle": "Building your own brand?",
  "ctaSub": "See OEM / private label for custom formula and packaging programs.",
  "needCustom": "Need custom formula?"
};
const WH_OVERRIDES: Partial<Record<Locale, Partial<WholesaleCopy>>> = {
  "zh-tw": {
    "title": "批發消化酶與益生菌",
    "description": "為標準消化酶與益生菌 SKU 開批發帳戶或索取價目表。",
    "heroTitleBefore": "批發",
    "heroTitleAccent": "帳戶與價目表",
    "heroSub": "以整箱補貨標準消化酶與益生菌 SKU — 適合門市、健身房、SPA 與經銷商。",
    "priceCta": "索取價目表",
    "oemCta": "OEM／貼牌",
    "assortmentTag": "批發品項",
    "assortmentTitle": "早期主力 SKU",
    "applyTitle": "如何申請",
    "faqTitle": "批發常見問題",
    "formTitle": "開立批發帳戶／索取價目表",
    "formSub": "請在表單選擇批發報價（或樣品）。僅 B2B 膳食補充劑。",
    "ctaTitle": "要打造自有品牌？",
    "ctaSub": "查看 OEM／貼牌的客製配方與包裝方案。",
    "needCustom": "需要客製配方？"
  },
  "es": {
    "title": "Mayoreo enzimas digestivas y probióticos",
    "description": "Abra cuenta mayoreo o pida lista de precios para SKUs estándar.",
    "heroTitleBefore": "Mayoreo ",
    "heroTitleAccent": "cuenta y lista de precios",
    "heroSub": "Reponga SKUs estándar de enzimas y probióticos en cajas.",
    "priceCta": "Pedir lista de precios",
    "oemCta": "OEM / Marca privada",
    "assortmentTag": "Surtido mayoreo",
    "assortmentTitle": "SKUs héroe iniciales",
    "applyTitle": "Cómo solicitar",
    "faqTitle": "FAQ mayoreo",
    "formTitle": "Abrir cuenta mayoreo / pedir lista",
    "formSub": "Elija Precio mayoreo (o Muestra). Solo B2B.",
    "ctaTitle": "¿Construye su propia marca?",
    "ctaSub": "Vea OEM / marca privada para fórmula a medida.",
    "needCustom": "¿Necesita fórmula a medida?"
  },
  "ar": {
    "title": "جملة إنزيمات هضمية وبروبيوتيك",
    "description": "افتح حساب جملة أو اطلب قائمة أسعار لـ SKUs قياسية.",
    "heroTitleBefore": "جملة ",
    "heroTitleAccent": "حساب وقائمة أسعار",
    "heroSub": "أعد تخزين SKUs إنزيمات وبروبيوتيك قياسية بكراتين.",
    "priceCta": "طلب قائمة أسعار",
    "oemCta": "OEM / علامة خاصة",
    "assortmentTag": "تشكيلة الجملة",
    "assortmentTitle": "SKU بطلة مبكرة",
    "applyTitle": "كيفية التقديم",
    "faqTitle": "أسئلة الجملة",
    "formTitle": "فتح حساب جملة / طلب قائمة",
    "formSub": "اختر أسعار الجملة (أو عينة). B2B فقط.",
    "ctaTitle": "تبني علامتك؟",
    "ctaSub": "انظر OEM / علامة خاصة للصيغ المخصصة.",
    "needCustom": "تحتاج صيغة مخصصة؟"
  },
  "fr": {
    "title": "Gros enzymes digestives et probiotiques",
    "description": "Ouvrez un compte gros ou demandez une liste de prix pour SKUs standards.",
    "heroTitleBefore": "Gros ",
    "heroTitleAccent": "compte et liste de prix",
    "heroSub": "Réassortissez des SKUs standards d’enzymes et probiotiques en cartons.",
    "priceCta": "Demander la liste de prix",
    "oemCta": "OEM / Marque blanche",
    "assortmentTag": "Assortiment gros",
    "assortmentTitle": "SKUs héros initiaux",
    "applyTitle": "Comment postuler",
    "faqTitle": "FAQ gros",
    "formTitle": "Ouvrir compte gros / demander tarif",
    "formSub": "Choisissez Tarif gros (ou Échantillon). B2B uniquement.",
    "ctaTitle": "Vous créez votre marque ?",
    "ctaSub": "Voir OEM / marque blanche pour formule sur mesure.",
    "needCustom": "Formule sur mesure ?"
  },
  "de": {
    "title": "Großhandel Verdauungsenzyme & Probiotika",
    "description": "Großhandelskonto öffnen oder Preisliste für Standard-SKUs anfordern.",
    "heroTitleBefore": "Großhandel ",
    "heroTitleAccent": "Konto & Preisliste",
    "heroSub": "Standard-Enzym- und Probiotika-SKUs in Kartons nachbestellen.",
    "priceCta": "Preisliste anfordern",
    "oemCta": "OEM / Private Label",
    "assortmentTag": "Großhandelssortiment",
    "assortmentTitle": "Frühe Hero-SKUs",
    "applyTitle": "So bewerben",
    "faqTitle": "Großhandels-FAQ",
    "formTitle": "Großhandelskonto / Preisliste",
    "formSub": "Wählen Sie Großhandelspreis (oder Muster). Nur B2B.",
    "ctaTitle": "Eigene Marke aufbauen?",
    "ctaSub": "Siehe OEM / Private Label für Sonderformel.",
    "needCustom": "Sonderformel nötig?"
  },
  "ja": {
    "title": "卸売 消化酵素・プロバイオティクス",
    "description": "標準SKUの卸売口座開設または価格表請求。",
    "heroTitleBefore": "卸売",
    "heroTitleAccent": "口座と価格表",
    "heroSub": "標準の消化酵素・プロバイオSKUをケースで補充。",
    "priceCta": "価格表を請求",
    "oemCta": "OEM／PL",
    "assortmentTag": "卸売品揃え",
    "assortmentTitle": "初期ヒーローSKU",
    "applyTitle": "申請方法",
    "faqTitle": "卸売FAQ",
    "formTitle": "卸売口座／価格表請求",
    "formSub": "フォームで卸価格（またはサンプル）を選択。B2Bのみ。",
    "ctaTitle": "自社ブランドを作る？",
    "ctaSub": "カスタム処方はOEM／PLをご覧ください。",
    "needCustom": "カスタム処方が必要？"
  },
  "ko": {
    "title": "도매 소화 효소 & 프로바이오틱",
    "description": "표준 SKU 도매 계정 개설 또는 가격표 요청.",
    "heroTitleBefore": "도매 ",
    "heroTitleAccent": "계정 & 가격표",
    "heroSub": "표준 소화 효소·프로바이오틱 SKU를 케이스로 재입고.",
    "priceCta": "가격표 요청",
    "oemCta": "OEM / 프라이빗 라벨",
    "assortmentTag": "도매 구색",
    "assortmentTitle": "초기 히어로 SKU",
    "applyTitle": "신청 방법",
    "faqTitle": "도매 FAQ",
    "formTitle": "도매 계정 / 가격표 요청",
    "formSub": "양식에서 도매 가격(또는 샘플) 선택. B2B만.",
    "ctaTitle": "자체 브랜드를 만드시나요?",
    "ctaSub": "맞춤 포뮬러는 OEM / 프라이빗 라벨을 보세요.",
    "needCustom": "맞춤 포뮬러가 필요하신가요?"
  },
  "pt": {
    "title": "Atacado enzimas digestivas e probióticos",
    "description": "Abra conta atacado ou peça lista de preços para SKUs padrão.",
    "heroTitleBefore": "Atacado ",
    "heroTitleAccent": "conta e lista de preços",
    "heroSub": "Reponha SKUs padrão de enzimas e probióticos em caixas.",
    "priceCta": "Pedir lista de preços",
    "oemCta": "OEM / Marca própria",
    "assortmentTag": "Sortimento atacado",
    "assortmentTitle": "SKUs herói iniciais",
    "applyTitle": "Como solicitar",
    "faqTitle": "FAQ atacado",
    "formTitle": "Abrir conta atacado / pedir lista",
    "formSub": "Escolha Preço atacado (ou Amostra). Somente B2B.",
    "ctaTitle": "Construindo sua marca?",
    "ctaSub": "Veja OEM / marca própria para fórmula sob medida.",
    "needCustom": "Precisa de fórmula sob medida?"
  },
  "vi": {
    "title": "Bán sỉ enzyme tiêu hóa & probiotic",
    "description": "Mở tài khoản sỉ hoặc yêu cầu bảng giá SKU chuẩn.",
    "heroTitleBefore": "Bán sỉ ",
    "heroTitleAccent": "tài khoản & bảng giá",
    "heroSub": "Nhập lại SKU enzyme và probiotic chuẩn theo thùng.",
    "priceCta": "Yêu cầu bảng giá",
    "oemCta": "OEM / Nhãn riêng",
    "assortmentTag": "Danh mục sỉ",
    "assortmentTitle": "SKU chủ lực ban đầu",
    "applyTitle": "Cách đăng ký",
    "faqTitle": "FAQ bán sỉ",
    "formTitle": "Mở tài khoản sỉ / yêu cầu bảng giá",
    "formSub": "Chọn Giá sỉ (hoặc Mẫu). Chỉ B2B.",
    "ctaTitle": "Đang xây thương hiệu riêng?",
    "ctaSub": "Xem OEM / nhãn riêng cho công thức tùy chỉnh.",
    "needCustom": "Cần công thức tùy chỉnh?"
  },
  "id": {
    "title": "Grosir enzim pencernaan & probiotik",
    "description": "Buka akun grosir atau minta daftar harga SKU standar.",
    "heroTitleBefore": "Grosir ",
    "heroTitleAccent": "akun & daftar harga",
    "heroSub": "Restock SKU enzim dan probiotik standar dalam karton.",
    "priceCta": "Minta daftar harga",
    "oemCta": "OEM / Private Label",
    "assortmentTag": "Assortment grosir",
    "assortmentTitle": "SKU hero awal",
    "applyTitle": "Cara mengajukan",
    "faqTitle": "FAQ grosir",
    "formTitle": "Buka akun grosir / minta daftar harga",
    "formSub": "Pilih Harga grosir (atau Sampel). Hanya B2B.",
    "ctaTitle": "Membangun merek sendiri?",
    "ctaSub": "Lihat OEM / private label untuk formula kustom.",
    "needCustom": "Butuh formula kustom?"
  },
  "th": {
    "title": "ขายส่งเอนไซม์ย่อยอาหารและโปรไบโอติก",
    "description": "เปิดบัญชีขายส่งหรือขอรายการราคาสำหรับ SKU มาตรฐาน",
    "heroTitleBefore": "ขายส่ง ",
    "heroTitleAccent": "บัญชีและรายการราคา",
    "heroSub": "เติมสต็อก SKU เอนไซม์และโปรไบโอติกมาตรฐานแบบเคส",
    "priceCta": "ขอรายการราคา",
    "oemCta": "OEM / ไพรเวทเลเบล",
    "assortmentTag": "สินค้าขายส่ง",
    "assortmentTitle": "SKU ฮีโร่ช่วงแรก",
    "applyTitle": "วิธีสมัคร",
    "faqTitle": "คำถามขายส่ง",
    "formTitle": "เปิดบัญชีขายส่ง / ขอรายการราคา",
    "formSub": "เลือก ราคาขายส่ง (หรือตัวอย่าง) เฉพาะ B2B",
    "ctaTitle": "กำลังสร้างแบรนด์เอง?",
    "ctaSub": "ดู OEM / ไพรเวทเลเบลสำหรับสูตรตามสั่ง",
    "needCustom": "ต้องการสูตรตามสั่ง?"
  },
  "hi": {
    "title": "होलसेल डाइजेस्टिव एंजाइम और प्रोबायोटिक्स",
    "description": "मानक SKU के लिए होलसेल खाता खोलें या मूल्य सूची माँगें।",
    "heroTitleBefore": "होलसेल ",
    "heroTitleAccent": "खाता और मूल्य सूची",
    "heroSub": "मानक एंजाइम और प्रोबायोटिक SKU केस पैक में रीस्टॉक करें।",
    "priceCta": "मूल्य सूची माँगें",
    "oemCta": "OEM / प्राइवेट लेबल",
    "assortmentTag": "होलसेल असोर्टमेंट",
    "assortmentTitle": "प्रारंभिक हीरो SKU",
    "applyTitle": "कैसे आवेदन करें",
    "faqTitle": "होलसेल प्रश्न",
    "formTitle": "होलसेल खाता / मूल्य सूची",
    "formSub": "फॉर्म में होलसेल मूल्य (या सैंपल) चुनें। केवल B2B।",
    "ctaTitle": "अपना ब्रांड बना रहे हैं?",
    "ctaSub": "कस्टम फॉर्मूला के लिए OEM / प्राइवेट लेबल देखें।",
    "needCustom": "कस्टम फॉर्मूला चाहिए?"
  },
  "bn": {
    "title": "হোলসেল ডাইজেস্টিভ এনজাইম ও প্রোবায়োটিক",
    "description": "স্ট্যান্ডার্ড SKU-এর হোলসেল অ্যাকাউন্ট খুলুন বা মূল্য তালিকা চান।",
    "heroTitleBefore": "হোলসেল ",
    "heroTitleAccent": "অ্যাকাউন্ট ও মূল্য তালিকা",
    "heroSub": "স্ট্যান্ডার্ড এনজাইম ও প্রোবায়োটিক SKU কেস প্যাকে রিস্টক করুন।",
    "priceCta": "মূল্য তালিকা চান",
    "oemCta": "OEM / প্রাইভেট লেবেল",
    "assortmentTag": "হোলসেল অ্যাসোর্টমেন্ট",
    "assortmentTitle": "প্রাথমিক হিরো SKU",
    "applyTitle": "কীভাবে আবেদন",
    "faqTitle": "হোলসেল প্রশ্ন",
    "formTitle": "হোলসেল অ্যাকাউন্ট / মূল্য তালিকা",
    "formSub": "ফর্মে হোলসেল মূল্য (বা নমুনা) বেছে নিন। শুধু B2B।",
    "ctaTitle": "নিজের ব্র্যান্ড গড়ছেন?",
    "ctaSub": "কাস্টম ফর্মুলার জন্য OEM / প্রাইভেট লেবেল দেখুন।",
    "needCustom": "কাস্টম ফর্মুলা দরকার?"
  },
  "ru": {
    "title": "Опт пищеварительные ферменты и пробиотики",
    "description": "Откройте оптовый счёт или запросите прайс на стандартные SKU.",
    "heroTitleBefore": "Опт ",
    "heroTitleAccent": "счёт и прайс-лист",
    "heroSub": "Пополняйте стандартные SKU ферментов и пробиотиков коробами.",
    "priceCta": "Запросить прайс",
    "oemCta": "OEM / Private Label",
    "assortmentTag": "Оптовый ассортимент",
    "assortmentTitle": "Ранние hero SKU",
    "applyTitle": "Как подать заявку",
    "faqTitle": "Оптовый FAQ",
    "formTitle": "Открыть оптовый счёт / запросить прайс",
    "formSub": "Выберите Оптовые цены (или Образец). Только B2B.",
    "ctaTitle": "Создаёте свой бренд?",
    "ctaSub": "См. OEM / private label для кастомной формулы.",
    "needCustom": "Нужна кастомная формула?"
  },
  "ur": {
    "title": "ہول سیل ڈائجسٹو اینزائم اور پروبائیوٹکس",
    "description": "معیاری SKU کے لیے ہول سیل اکاؤنٹ کھولیں یا قیمت کی فہرست مانگیں۔",
    "heroTitleBefore": "ہول سیل ",
    "heroTitleAccent": "اکاؤنٹ اور قیمت کی فہرست",
    "heroSub": "معیاری اینزائم اور پروبائیوٹک SKU کیس پیک میں ری اسٹاک کریں۔",
    "priceCta": "قیمت کی فہرست مانگیں",
    "oemCta": "OEM / پرائیویٹ لیبل",
    "assortmentTag": "ہول سیل اسورٹمنٹ",
    "assortmentTitle": "ابتدائی ہیرو SKU",
    "applyTitle": "درخواست کیسے کریں",
    "faqTitle": "ہول سیل سوالات",
    "formTitle": "ہول سیل اکاؤنٹ / قیمت کی فہرست",
    "formSub": "فارم میں ہول سیل قیمت (یا سیمپل) منتخب کریں۔ صرف B2B۔",
    "ctaTitle": "اپنا برانڈ بنا رہے ہیں؟",
    "ctaSub": "کسٹم فارمولے کے لیے OEM / پرائیویٹ لیبل دیکھیں۔",
    "needCustom": "کسٹم فارمولا چاہیے؟"
  }
};

export function getWholesaleCopy(locale: Locale): WholesaleCopy {
  return { ...WH_EN, ...(WH_OVERRIDES[locale] || {}) };
}
