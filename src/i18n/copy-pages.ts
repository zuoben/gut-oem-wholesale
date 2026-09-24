import type { Locale } from './locales';
import type { FeatureItem, FaqItem } from './copy-home';

export type ContactCopy = {
  title: string; description: string; heroTitleBefore: string; heroTitleAccent: string; heroSub: string;
  sendCta: string; waCta: string; formTitle: string; formSub: string; channelsTag: string; channelsTitle: string;
  channels: FeatureItem[]; faqTitle: string; faqs: FaqItem[]; ctaTitle: string; ctaSub: string;
  oemPage: string; wholesalePage: string; formTitleShort: string; formSubShort: string; wa: string;
};

const CONTACT: Record<Locale, ContactCopy> = {
  "en": {
    "title": "Contact — OEM & Wholesale Inquiry",
    "description": "Contact GutSource for private label digestive enzymes & probiotics OEM, or wholesale price lists. B2B inquiry form and WhatsApp.",
    "heroTitleBefore": "Contact ",
    "heroTitleAccent": "GutSource",
    "heroSub": "OEM private label and wholesale inquiries for digestive enzyme and probiotic dietary supplements.<br />Structure/function language only — no disease-treatment claims.",
    "sendCta": "Send Inquiry",
    "waCta": "WhatsApp",
    "formTitle": "Request a B2B quote",
    "formSub": "Select your buyer type and OEM vs Wholesale channel. We follow up with MOQ, sampling, and pricing next steps.",
    "channelsTag": "Channels",
    "channelsTitle": "How to reach us",
    "channels": [
      {
        "title": "OEM / Private Label",
        "description": "Custom formula, private label packaging, sampling, and production MOQs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Wholesale",
        "description": "Price lists, case packs, and open-account requests for standard SKUs.",
        "icon": "tabler:building-store"
      },
      {
        "title": "WhatsApp",
        "description": "PHONE",
        "icon": "tabler:brand-whatsapp"
      }
    ],
    "faqTitle": "Inquiry FAQ",
    "faqs": [
      {
        "title": "How quickly will you respond?",
        "description": "We typically reply within <strong>24 hours</strong> on working days. Include buyer type, OEM vs wholesale, estimated bottles/cases, and ship-to country."
      },
      {
        "title": "What volume should I select?",
        "description": "Use bottles/cases ranges on the form — from sample-only to 1,000+ cases. Exact MOQ is confirmed in the quote."
      },
      {
        "title": "Can I request samples first?",
        "description": "Yes. Choose Sample (or mention sampling in OEM/Wholesale). Sample path is recommended before private-label production."
      }
    ],
    "ctaTitle": "Prefer a guided page first?",
    "ctaSub": "Review OEM or Wholesale capabilities, then submit the same inquiry form.",
    "oemPage": "OEM page",
    "wholesalePage": "Wholesale page",
    "formTitleShort": "Request a B2B quote",
    "formSubShort": "OEM private label or wholesale — we reply with MOQ and next steps.",
    "wa": "WhatsApp"
  },
  "zh-tw": {
    "title": "聯絡 — OEM 與批發詢盤",
    "description": "聯絡 GutSource 洽詢消化酶與益生菌貼牌 OEM 或批發價目表。",
    "heroTitleBefore": "聯絡 ",
    "heroTitleAccent": "GutSource",
    "heroSub": "消化酶與益生菌膳食補充劑的 OEM 貼牌與批發詢盤。<br />僅結構／功能語言 — 無疾病治療宣稱。",
    "sendCta": "送出詢盤",
    "waCta": "WhatsApp",
    "formTitle": "索取 B2B 報價",
    "formSub": "選擇買家類型與 OEM／批發通路。我們會回覆 MOQ、打樣與報價下一步。",
    "channelsTag": "通路",
    "channelsTitle": "如何聯絡我們",
    "channels": [
      {
        "title": "OEM / Private Label",
        "description": "Custom formula, private label packaging, sampling, and production MOQs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Wholesale",
        "description": "Price lists, case packs, and open-account requests for standard SKUs.",
        "icon": "tabler:building-store"
      },
      {
        "title": "WhatsApp",
        "description": "PHONE",
        "icon": "tabler:brand-whatsapp"
      }
    ],
    "faqTitle": "詢盤常見問題",
    "faqs": [
      {
        "title": "How quickly will you respond?",
        "description": "We typically reply within <strong>24 hours</strong> on working days. Include buyer type, OEM vs wholesale, estimated bottles/cases, and ship-to country."
      },
      {
        "title": "What volume should I select?",
        "description": "Use bottles/cases ranges on the form — from sample-only to 1,000+ cases. Exact MOQ is confirmed in the quote."
      },
      {
        "title": "Can I request samples first?",
        "description": "Yes. Choose Sample (or mention sampling in OEM/Wholesale). Sample path is recommended before private-label production."
      }
    ],
    "ctaTitle": "想先看導覽頁？",
    "ctaSub": "先瀏覽 OEM 或批發能力，再提交同一張詢價表。",
    "oemPage": "OEM 頁",
    "wholesalePage": "批發頁",
    "formTitleShort": "索取 B2B 報價",
    "formSubShort": "OEM 貼牌或批發 — 我們回覆 MOQ 與下一步。",
    "wa": "WhatsApp"
  },
  "es": {
    "title": "Contacto — Consulta OEM y Mayoreo",
    "description": "Contacte GutSource para OEM marca privada o listas de precios mayoreo.",
    "heroTitleBefore": "Contacto ",
    "heroTitleAccent": "GutSource",
    "heroSub": "Consultas OEM marca privada y mayoreo de enzimas digestivas y probióticos.<br />Solo estructura/función — sin claims de enfermedad.",
    "sendCta": "Enviar consulta",
    "waCta": "WhatsApp",
    "formTitle": "Pedir cotización B2B",
    "formSub": "Seleccione tipo de comprador y canal OEM vs Mayoreo.",
    "channelsTag": "Canales",
    "channelsTitle": "Cómo contactarnos",
    "channels": [
      {
        "title": "OEM / Private Label",
        "description": "Custom formula, private label packaging, sampling, and production MOQs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Wholesale",
        "description": "Price lists, case packs, and open-account requests for standard SKUs.",
        "icon": "tabler:building-store"
      },
      {
        "title": "WhatsApp",
        "description": "PHONE",
        "icon": "tabler:brand-whatsapp"
      }
    ],
    "faqTitle": "FAQ de consultas",
    "faqs": [
      {
        "title": "How quickly will you respond?",
        "description": "We typically reply within <strong>24 hours</strong> on working days. Include buyer type, OEM vs wholesale, estimated bottles/cases, and ship-to country."
      },
      {
        "title": "What volume should I select?",
        "description": "Use bottles/cases ranges on the form — from sample-only to 1,000+ cases. Exact MOQ is confirmed in the quote."
      },
      {
        "title": "Can I request samples first?",
        "description": "Yes. Choose Sample (or mention sampling in OEM/Wholesale). Sample path is recommended before private-label production."
      }
    ],
    "ctaTitle": "¿Prefiere una página guiada primero?",
    "ctaSub": "Revise OEM o Mayoreo y luego envíe el mismo formulario.",
    "oemPage": "Página OEM",
    "wholesalePage": "Página mayoreo",
    "formTitleShort": "Pedir cotización B2B",
    "formSubShort": "OEM marca privada o mayoreo — respondemos con MOQ y siguientes pasos.",
    "wa": "WhatsApp"
  },
  "ar": {
    "title": "اتصل — استفسار OEM والجملة",
    "description": "تواصل مع GutSource لـ OEM علامة خاصة أو قوائم أسعار الجملة.",
    "heroTitleBefore": "اتصل ",
    "heroTitleAccent": "GutSource",
    "heroSub": "استفسارات OEM علامة خاصة والجملة لإنزيمات هضمية وبروبيوتيك.<br />هيكل/وظيفة فقط — بلا ادعاءات مرض.",
    "sendCta": "إرسال الاستفسار",
    "waCta": "WhatsApp",
    "formTitle": "طلب عرض سعر B2B",
    "formSub": "اختر نوع المشتري وقناة OEM مقابل الجملة.",
    "channelsTag": "القنوات",
    "channelsTitle": "كيف تصل إلينا",
    "channels": [
      {
        "title": "OEM / Private Label",
        "description": "Custom formula, private label packaging, sampling, and production MOQs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Wholesale",
        "description": "Price lists, case packs, and open-account requests for standard SKUs.",
        "icon": "tabler:building-store"
      },
      {
        "title": "WhatsApp",
        "description": "PHONE",
        "icon": "tabler:brand-whatsapp"
      }
    ],
    "faqTitle": "أسئلة الاستفسار",
    "faqs": [
      {
        "title": "How quickly will you respond?",
        "description": "We typically reply within <strong>24 hours</strong> on working days. Include buyer type, OEM vs wholesale, estimated bottles/cases, and ship-to country."
      },
      {
        "title": "What volume should I select?",
        "description": "Use bottles/cases ranges on the form — from sample-only to 1,000+ cases. Exact MOQ is confirmed in the quote."
      },
      {
        "title": "Can I request samples first?",
        "description": "Yes. Choose Sample (or mention sampling in OEM/Wholesale). Sample path is recommended before private-label production."
      }
    ],
    "ctaTitle": "تفضل صفحة إرشادية أولاً؟",
    "ctaSub": "راجع OEM أو الجملة ثم أرسل نفس النموذج.",
    "oemPage": "صفحة OEM",
    "wholesalePage": "صفحة الجملة",
    "formTitleShort": "طلب عرض سعر B2B",
    "formSubShort": "OEM أو جملة — نرد بالحد الأدنى والخطوات التالية.",
    "wa": "واتساب"
  },
  "fr": {
    "title": "Contact — Demande OEM & Gros",
    "description": "Contactez GutSource pour OEM marque blanche ou listes de prix gros.",
    "heroTitleBefore": "Contact ",
    "heroTitleAccent": "GutSource",
    "heroSub": "Demandes OEM marque blanche et gros pour enzymes digestives et probiotiques.<br />Structure/fonction uniquement.",
    "sendCta": "Envoyer la demande",
    "waCta": "WhatsApp",
    "formTitle": "Demander un devis B2B",
    "formSub": "Sélectionnez type d’acheteur et canal OEM vs Gros.",
    "channelsTag": "Canaux",
    "channelsTitle": "Comment nous joindre",
    "channels": [
      {
        "title": "OEM / Private Label",
        "description": "Custom formula, private label packaging, sampling, and production MOQs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Wholesale",
        "description": "Price lists, case packs, and open-account requests for standard SKUs.",
        "icon": "tabler:building-store"
      },
      {
        "title": "WhatsApp",
        "description": "PHONE",
        "icon": "tabler:brand-whatsapp"
      }
    ],
    "faqTitle": "FAQ demandes",
    "faqs": [
      {
        "title": "How quickly will you respond?",
        "description": "We typically reply within <strong>24 hours</strong> on working days. Include buyer type, OEM vs wholesale, estimated bottles/cases, and ship-to country."
      },
      {
        "title": "What volume should I select?",
        "description": "Use bottles/cases ranges on the form — from sample-only to 1,000+ cases. Exact MOQ is confirmed in the quote."
      },
      {
        "title": "Can I request samples first?",
        "description": "Yes. Choose Sample (or mention sampling in OEM/Wholesale). Sample path is recommended before private-label production."
      }
    ],
    "ctaTitle": "Préférez une page guidée d’abord ?",
    "ctaSub": "Consultez OEM ou Gros, puis envoyez le même formulaire.",
    "oemPage": "Page OEM",
    "wholesalePage": "Page gros",
    "formTitleShort": "Demander un devis B2B",
    "formSubShort": "OEM ou gros — nous répondons avec MOQ et prochaines étapes.",
    "wa": "WhatsApp"
  },
  "de": {
    "title": "Kontakt — OEM- & Großhandelsanfrage",
    "description": "Kontaktieren Sie GutSource für Private-Label-OEM oder Großhandelspreislisten.",
    "heroTitleBefore": "Kontakt ",
    "heroTitleAccent": "GutSource",
    "heroSub": "OEM Private Label und Großhandelsanfragen für Verdauungsenzyme und Probiotika.<br />Nur Structure/Function.",
    "sendCta": "Anfrage senden",
    "waCta": "WhatsApp",
    "formTitle": "B2B-Angebot anfordern",
    "formSub": "Wählen Sie Käufertyp und OEM vs Großhandel.",
    "channelsTag": "Kanäle",
    "channelsTitle": "So erreichen Sie uns",
    "channels": [
      {
        "title": "OEM / Private Label",
        "description": "Custom formula, private label packaging, sampling, and production MOQs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Wholesale",
        "description": "Price lists, case packs, and open-account requests for standard SKUs.",
        "icon": "tabler:building-store"
      },
      {
        "title": "WhatsApp",
        "description": "PHONE",
        "icon": "tabler:brand-whatsapp"
      }
    ],
    "faqTitle": "Anfrage-FAQ",
    "faqs": [
      {
        "title": "How quickly will you respond?",
        "description": "We typically reply within <strong>24 hours</strong> on working days. Include buyer type, OEM vs wholesale, estimated bottles/cases, and ship-to country."
      },
      {
        "title": "What volume should I select?",
        "description": "Use bottles/cases ranges on the form — from sample-only to 1,000+ cases. Exact MOQ is confirmed in the quote."
      },
      {
        "title": "Can I request samples first?",
        "description": "Yes. Choose Sample (or mention sampling in OEM/Wholesale). Sample path is recommended before private-label production."
      }
    ],
    "ctaTitle": "Lieber zuerst eine Führungsseite?",
    "ctaSub": "Prüfen Sie OEM oder Großhandel, dann dasselbe Formular.",
    "oemPage": "OEM-Seite",
    "wholesalePage": "Großhandelsseite",
    "formTitleShort": "B2B-Angebot anfordern",
    "formSubShort": "OEM oder Großhandel — wir antworten mit MOQ und nächsten Schritten.",
    "wa": "WhatsApp"
  },
  "ja": {
    "title": "お問い合わせ — OEM・卸売",
    "description": "消化酵素・プロバイオのOEMまたは卸価格表についてGutSourceへ。",
    "heroTitleBefore": "お問い合わせ ",
    "heroTitleAccent": "GutSource",
    "heroSub": "消化酵素・プロバイオのOEMプライベートラベルと卸売のお問い合わせ。<br />構造／機能のみ。",
    "sendCta": "問い合わせ送信",
    "waCta": "WhatsApp",
    "formTitle": "B2B見積を依頼",
    "formSub": "バイヤー種別とOEM／卸のチャネルを選択してください。",
    "channelsTag": "チャネル",
    "channelsTitle": "連絡方法",
    "channels": [
      {
        "title": "OEM / Private Label",
        "description": "Custom formula, private label packaging, sampling, and production MOQs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Wholesale",
        "description": "Price lists, case packs, and open-account requests for standard SKUs.",
        "icon": "tabler:building-store"
      },
      {
        "title": "WhatsApp",
        "description": "PHONE",
        "icon": "tabler:brand-whatsapp"
      }
    ],
    "faqTitle": "問い合わせFAQ",
    "faqs": [
      {
        "title": "How quickly will you respond?",
        "description": "We typically reply within <strong>24 hours</strong> on working days. Include buyer type, OEM vs wholesale, estimated bottles/cases, and ship-to country."
      },
      {
        "title": "What volume should I select?",
        "description": "Use bottles/cases ranges on the form — from sample-only to 1,000+ cases. Exact MOQ is confirmed in the quote."
      },
      {
        "title": "Can I request samples first?",
        "description": "Yes. Choose Sample (or mention sampling in OEM/Wholesale). Sample path is recommended before private-label production."
      }
    ],
    "ctaTitle": "まず案内ページを見ますか？",
    "ctaSub": "OEMまたは卸売を確認してから同じフォームを送信。",
    "oemPage": "OEMページ",
    "wholesalePage": "卸売ページ",
    "formTitleShort": "B2B見積を依頼",
    "formSubShort": "OEMまたは卸売 — MOQと次のステップを返信します。",
    "wa": "WhatsApp"
  },
  "ko": {
    "title": "문의 — OEM & 도매",
    "description": "소화 효소·프로바이오틱 OEM 또는 도매 가격표는 GutSource로 문의하세요.",
    "heroTitleBefore": "문의 ",
    "heroTitleAccent": "GutSource",
    "heroSub": "소화 효소·프로바이오틱 OEM 프라이빗 라벨 및 도매 문의.<br />구조/기능만.",
    "sendCta": "문의 보내기",
    "waCta": "WhatsApp",
    "formTitle": "B2B 견적 요청",
    "formSub": "구매자 유형과 OEM vs 도매 채널을 선택하세요.",
    "channelsTag": "채널",
    "channelsTitle": "연락 방법",
    "channels": [
      {
        "title": "OEM / Private Label",
        "description": "Custom formula, private label packaging, sampling, and production MOQs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Wholesale",
        "description": "Price lists, case packs, and open-account requests for standard SKUs.",
        "icon": "tabler:building-store"
      },
      {
        "title": "WhatsApp",
        "description": "PHONE",
        "icon": "tabler:brand-whatsapp"
      }
    ],
    "faqTitle": "문의 FAQ",
    "faqs": [
      {
        "title": "How quickly will you respond?",
        "description": "We typically reply within <strong>24 hours</strong> on working days. Include buyer type, OEM vs wholesale, estimated bottles/cases, and ship-to country."
      },
      {
        "title": "What volume should I select?",
        "description": "Use bottles/cases ranges on the form — from sample-only to 1,000+ cases. Exact MOQ is confirmed in the quote."
      },
      {
        "title": "Can I request samples first?",
        "description": "Yes. Choose Sample (or mention sampling in OEM/Wholesale). Sample path is recommended before private-label production."
      }
    ],
    "ctaTitle": "안내 페이지를 먼저 보시겠어요?",
    "ctaSub": "OEM 또는 도매를 확인한 뒤 같은 양식을 제출하세요.",
    "oemPage": "OEM 페이지",
    "wholesalePage": "도매 페이지",
    "formTitleShort": "B2B 견적 요청",
    "formSubShort": "OEM 또는 도매 — MOQ와 다음 단계를 회신합니다.",
    "wa": "WhatsApp"
  },
  "pt": {
    "title": "Contato — Consulta OEM e Atacado",
    "description": "Contate a GutSource para OEM marca própria ou listas de preços atacado.",
    "heroTitleBefore": "Contato ",
    "heroTitleAccent": "GutSource",
    "heroSub": "Consultas OEM marca própria e atacado de enzimas digestivas e probióticos.<br />Apenas estrutura/função.",
    "sendCta": "Enviar consulta",
    "waCta": "WhatsApp",
    "formTitle": "Pedir orçamento B2B",
    "formSub": "Selecione tipo de comprador e canal OEM vs Atacado.",
    "channelsTag": "Canais",
    "channelsTitle": "Como falar conosco",
    "channels": [
      {
        "title": "OEM / Private Label",
        "description": "Custom formula, private label packaging, sampling, and production MOQs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Wholesale",
        "description": "Price lists, case packs, and open-account requests for standard SKUs.",
        "icon": "tabler:building-store"
      },
      {
        "title": "WhatsApp",
        "description": "PHONE",
        "icon": "tabler:brand-whatsapp"
      }
    ],
    "faqTitle": "FAQ de consultas",
    "faqs": [
      {
        "title": "How quickly will you respond?",
        "description": "We typically reply within <strong>24 hours</strong> on working days. Include buyer type, OEM vs wholesale, estimated bottles/cases, and ship-to country."
      },
      {
        "title": "What volume should I select?",
        "description": "Use bottles/cases ranges on the form — from sample-only to 1,000+ cases. Exact MOQ is confirmed in the quote."
      },
      {
        "title": "Can I request samples first?",
        "description": "Yes. Choose Sample (or mention sampling in OEM/Wholesale). Sample path is recommended before private-label production."
      }
    ],
    "ctaTitle": "Prefere uma página guiada primeiro?",
    "ctaSub": "Revise OEM ou Atacado e envie o mesmo formulário.",
    "oemPage": "Página OEM",
    "wholesalePage": "Página atacado",
    "formTitleShort": "Pedir orçamento B2B",
    "formSubShort": "OEM ou atacado — respondemos com MOQ e próximos passos.",
    "wa": "WhatsApp"
  },
  "vi": {
    "title": "Liên hệ — Hỏi OEM & Bán sỉ",
    "description": "Liên hệ GutSource cho OEM nhãn riêng hoặc bảng giá sỉ.",
    "heroTitleBefore": "Liên hệ ",
    "heroTitleAccent": "GutSource",
    "heroSub": "Yêu cầu OEM nhãn riêng và bán sỉ enzyme tiêu hóa & probiotic.<br />Chỉ cấu trúc/chức năng.",
    "sendCta": "Gửi yêu cầu",
    "waCta": "WhatsApp",
    "formTitle": "Yêu cầu báo giá B2B",
    "formSub": "Chọn loại khách và kênh OEM vs Bán sỉ.",
    "channelsTag": "Kênh",
    "channelsTitle": "Cách liên hệ",
    "channels": [
      {
        "title": "OEM / Private Label",
        "description": "Custom formula, private label packaging, sampling, and production MOQs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Wholesale",
        "description": "Price lists, case packs, and open-account requests for standard SKUs.",
        "icon": "tabler:building-store"
      },
      {
        "title": "WhatsApp",
        "description": "PHONE",
        "icon": "tabler:brand-whatsapp"
      }
    ],
    "faqTitle": "FAQ yêu cầu",
    "faqs": [
      {
        "title": "How quickly will you respond?",
        "description": "We typically reply within <strong>24 hours</strong> on working days. Include buyer type, OEM vs wholesale, estimated bottles/cases, and ship-to country."
      },
      {
        "title": "What volume should I select?",
        "description": "Use bottles/cases ranges on the form — from sample-only to 1,000+ cases. Exact MOQ is confirmed in the quote."
      },
      {
        "title": "Can I request samples first?",
        "description": "Yes. Choose Sample (or mention sampling in OEM/Wholesale). Sample path is recommended before private-label production."
      }
    ],
    "ctaTitle": "Muốn xem trang hướng dẫn trước?",
    "ctaSub": "Xem OEM hoặc Bán sỉ rồi gửi cùng form.",
    "oemPage": "Trang OEM",
    "wholesalePage": "Trang bán sỉ",
    "formTitleShort": "Yêu cầu báo giá B2B",
    "formSubShort": "OEM hoặc bán sỉ — chúng tôi trả lời MOQ và bước tiếp theo.",
    "wa": "WhatsApp"
  },
  "id": {
    "title": "Kontak — Pertanyaan OEM & Grosir",
    "description": "Hubungi GutSource untuk OEM private label atau daftar harga grosir.",
    "heroTitleBefore": "Kontak ",
    "heroTitleAccent": "GutSource",
    "heroSub": "Pertanyaan OEM private label dan grosir enzim pencernaan & probiotik.<br />Hanya struktur/fungsi.",
    "sendCta": "Kirim pertanyaan",
    "waCta": "WhatsApp",
    "formTitle": "Minta penawaran B2B",
    "formSub": "Pilih tipe pembeli dan saluran OEM vs Grosir.",
    "channelsTag": "Saluran",
    "channelsTitle": "Cara menghubungi kami",
    "channels": [
      {
        "title": "OEM / Private Label",
        "description": "Custom formula, private label packaging, sampling, and production MOQs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Wholesale",
        "description": "Price lists, case packs, and open-account requests for standard SKUs.",
        "icon": "tabler:building-store"
      },
      {
        "title": "WhatsApp",
        "description": "PHONE",
        "icon": "tabler:brand-whatsapp"
      }
    ],
    "faqTitle": "FAQ pertanyaan",
    "faqs": [
      {
        "title": "How quickly will you respond?",
        "description": "We typically reply within <strong>24 hours</strong> on working days. Include buyer type, OEM vs wholesale, estimated bottles/cases, and ship-to country."
      },
      {
        "title": "What volume should I select?",
        "description": "Use bottles/cases ranges on the form — from sample-only to 1,000+ cases. Exact MOQ is confirmed in the quote."
      },
      {
        "title": "Can I request samples first?",
        "description": "Yes. Choose Sample (or mention sampling in OEM/Wholesale). Sample path is recommended before private-label production."
      }
    ],
    "ctaTitle": "Lebih suka halaman panduan dulu?",
    "ctaSub": "Tinjau OEM atau Grosir lalu kirim formulir yang sama.",
    "oemPage": "Halaman OEM",
    "wholesalePage": "Halaman grosir",
    "formTitleShort": "Minta penawaran B2B",
    "formSubShort": "OEM atau grosir — kami balas MOQ dan langkah berikutnya.",
    "wa": "WhatsApp"
  },
  "th": {
    "title": "ติดต่อ — สอบถาม OEM และขายส่ง",
    "description": "ติดต่อ GutSource สำหรับ OEM ไพรเวทเลเบลหรือรายการราคาขายส่ง",
    "heroTitleBefore": "ติดต่อ ",
    "heroTitleAccent": "GutSource",
    "heroSub": "สอบถาม OEM ไพรเวทเลเบลและขายส่งเอนไซม์ย่อยอาหารและโปรไบโอติก<br />เฉพาะโครงสร้าง/หน้าที่",
    "sendCta": "ส่งคำถาม",
    "waCta": "WhatsApp",
    "formTitle": "ขอใบเสนอราคา B2B",
    "formSub": "เลือกประเภทผู้ซื้อและช่องทาง OEM กับขายส่ง",
    "channelsTag": "ช่องทาง",
    "channelsTitle": "วิธีติดต่อเรา",
    "channels": [
      {
        "title": "OEM / Private Label",
        "description": "Custom formula, private label packaging, sampling, and production MOQs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Wholesale",
        "description": "Price lists, case packs, and open-account requests for standard SKUs.",
        "icon": "tabler:building-store"
      },
      {
        "title": "WhatsApp",
        "description": "PHONE",
        "icon": "tabler:brand-whatsapp"
      }
    ],
    "faqTitle": "คำถามการสอบถาม",
    "faqs": [
      {
        "title": "How quickly will you respond?",
        "description": "We typically reply within <strong>24 hours</strong> on working days. Include buyer type, OEM vs wholesale, estimated bottles/cases, and ship-to country."
      },
      {
        "title": "What volume should I select?",
        "description": "Use bottles/cases ranges on the form — from sample-only to 1,000+ cases. Exact MOQ is confirmed in the quote."
      },
      {
        "title": "Can I request samples first?",
        "description": "Yes. Choose Sample (or mention sampling in OEM/Wholesale). Sample path is recommended before private-label production."
      }
    ],
    "ctaTitle": "อยากดูหน้าแนะนำก่อน?",
    "ctaSub": "ดู OEM หรือขายส่งแล้วส่งฟอร์มเดียวกัน",
    "oemPage": "หน้า OEM",
    "wholesalePage": "หน้าขายส่ง",
    "formTitleShort": "ขอใบเสนอราคา B2B",
    "formSubShort": "OEM หรือขายส่ง — เราตอบ MOQ และขั้นตอนถัดไป",
    "wa": "WhatsApp"
  },
  "hi": {
    "title": "संपर्क — OEM और होलसेल पूछताछ",
    "description": "प्राइवेट लेबल OEM या होलसेल मूल्य सूची के लिए GutSource से संपर्क करें।",
    "heroTitleBefore": "संपर्क ",
    "heroTitleAccent": "GutSource",
    "heroSub": "डाइजेस्टिव एंजाइम और प्रोबायोटिक्स के OEM और होलसेल पूछताछ।<br />केवल संरचना/कार्य।",
    "sendCta": "पूछताछ भेजें",
    "waCta": "WhatsApp",
    "formTitle": "B2B कोट अनुरोध",
    "formSub": "खरीदार प्रकार और OEM vs होलसेल चैनल चुनें।",
    "channelsTag": "चैनल",
    "channelsTitle": "हमसे कैसे जुड़ें",
    "channels": [
      {
        "title": "OEM / Private Label",
        "description": "Custom formula, private label packaging, sampling, and production MOQs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Wholesale",
        "description": "Price lists, case packs, and open-account requests for standard SKUs.",
        "icon": "tabler:building-store"
      },
      {
        "title": "WhatsApp",
        "description": "PHONE",
        "icon": "tabler:brand-whatsapp"
      }
    ],
    "faqTitle": "पूछताछ प्रश्न",
    "faqs": [
      {
        "title": "How quickly will you respond?",
        "description": "We typically reply within <strong>24 hours</strong> on working days. Include buyer type, OEM vs wholesale, estimated bottles/cases, and ship-to country."
      },
      {
        "title": "What volume should I select?",
        "description": "Use bottles/cases ranges on the form — from sample-only to 1,000+ cases. Exact MOQ is confirmed in the quote."
      },
      {
        "title": "Can I request samples first?",
        "description": "Yes. Choose Sample (or mention sampling in OEM/Wholesale). Sample path is recommended before private-label production."
      }
    ],
    "ctaTitle": "पहले गाइडेड पेज देखें?",
    "ctaSub": "OEM या होलसेल देखें, फिर वही फ़ॉर्म भेजें।",
    "oemPage": "OEM पेज",
    "wholesalePage": "होलसेल पेज",
    "formTitleShort": "B2B कोट अनुरोध",
    "formSubShort": "OEM या होलसेल — हम MOQ और अगले कदम भेजते हैं।",
    "wa": "WhatsApp"
  },
  "bn": {
    "title": "যোগাযোগ — OEM ও হোলসেল জিজ্ঞাসা",
    "description": "প্রাইভেট লেবেল OEM বা হোলসেল মূল্য তালিকার জন্য GutSource-এ যোগাযোগ করুন।",
    "heroTitleBefore": "যোগাযোগ ",
    "heroTitleAccent": "GutSource",
    "heroSub": "ডাইজেস্টিভ এনজাইম ও প্রোবায়োটিকের OEM ও হোলসেল জিজ্ঞাসা।<br />শুধু গঠন/কার্য।",
    "sendCta": "জিজ্ঞাসা পাঠান",
    "waCta": "WhatsApp",
    "formTitle": "B2B কোট অনুরোধ",
    "formSub": "ক্রেতার ধরন এবং OEM vs হোলসেল চ্যানেল বেছে নিন।",
    "channelsTag": "চ্যানেল",
    "channelsTitle": "কীভাবে যোগাযোগ করবেন",
    "channels": [
      {
        "title": "OEM / Private Label",
        "description": "Custom formula, private label packaging, sampling, and production MOQs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Wholesale",
        "description": "Price lists, case packs, and open-account requests for standard SKUs.",
        "icon": "tabler:building-store"
      },
      {
        "title": "WhatsApp",
        "description": "PHONE",
        "icon": "tabler:brand-whatsapp"
      }
    ],
    "faqTitle": "জিজ্ঞাসার প্রশ্ন",
    "faqs": [
      {
        "title": "How quickly will you respond?",
        "description": "We typically reply within <strong>24 hours</strong> on working days. Include buyer type, OEM vs wholesale, estimated bottles/cases, and ship-to country."
      },
      {
        "title": "What volume should I select?",
        "description": "Use bottles/cases ranges on the form — from sample-only to 1,000+ cases. Exact MOQ is confirmed in the quote."
      },
      {
        "title": "Can I request samples first?",
        "description": "Yes. Choose Sample (or mention sampling in OEM/Wholesale). Sample path is recommended before private-label production."
      }
    ],
    "ctaTitle": "আগে গাইডেড পেজ দেখবেন?",
    "ctaSub": "OEM বা হোলসেল দেখে একই ফর্ম পাঠান।",
    "oemPage": "OEM পেজ",
    "wholesalePage": "হোলসেল পেজ",
    "formTitleShort": "B2B কোট অনুরোধ",
    "formSubShort": "OEM বা হোলসেল — আমরা MOQ ও পরবর্তী ধাপ পাঠাই।",
    "wa": "WhatsApp"
  },
  "ru": {
    "title": "Контакты — OEM и оптовый запрос",
    "description": "Свяжитесь с GutSource по OEM private label или оптовым прайсам.",
    "heroTitleBefore": "Контакты ",
    "heroTitleAccent": "GutSource",
    "heroSub": "Запросы OEM private label и опта по пищеварительным ферментам и пробиотикам.<br />Только структура/функция.",
    "sendCta": "Отправить запрос",
    "waCta": "WhatsApp",
    "formTitle": "Запросить B2B цену",
    "formSub": "Выберите тип покупателя и канал OEM vs опт.",
    "channelsTag": "Каналы",
    "channelsTitle": "Как связаться",
    "channels": [
      {
        "title": "OEM / Private Label",
        "description": "Custom formula, private label packaging, sampling, and production MOQs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Wholesale",
        "description": "Price lists, case packs, and open-account requests for standard SKUs.",
        "icon": "tabler:building-store"
      },
      {
        "title": "WhatsApp",
        "description": "PHONE",
        "icon": "tabler:brand-whatsapp"
      }
    ],
    "faqTitle": "FAQ запросов",
    "faqs": [
      {
        "title": "How quickly will you respond?",
        "description": "We typically reply within <strong>24 hours</strong> on working days. Include buyer type, OEM vs wholesale, estimated bottles/cases, and ship-to country."
      },
      {
        "title": "What volume should I select?",
        "description": "Use bottles/cases ranges on the form — from sample-only to 1,000+ cases. Exact MOQ is confirmed in the quote."
      },
      {
        "title": "Can I request samples first?",
        "description": "Yes. Choose Sample (or mention sampling in OEM/Wholesale). Sample path is recommended before private-label production."
      }
    ],
    "ctaTitle": "Сначала смотреть страницу-гид?",
    "ctaSub": "Изучите OEM или опт, затем отправьте ту же форму.",
    "oemPage": "Страница OEM",
    "wholesalePage": "Страница опта",
    "formTitleShort": "Запросить B2B цену",
    "formSubShort": "OEM или опт — ответим MOQ и следующими шагами.",
    "wa": "WhatsApp"
  },
  "ur": {
    "title": "رابطہ — OEM اور ہول سیل استفسار",
    "description": "پرائیویٹ لیبل OEM یا ہول سیل قیمت کی فہرست کے لیے GutSource سے رابطہ کریں۔",
    "heroTitleBefore": "رابطہ ",
    "heroTitleAccent": "GutSource",
    "heroSub": "ڈائجسٹو اینزائم اور پروبائیوٹکس کے OEM اور ہول سیل استفسارات۔<br />صرف ساخت/فعل۔",
    "sendCta": "استفسار بھیجیں",
    "waCta": "WhatsApp",
    "formTitle": "B2B کوٹ درخواست",
    "formSub": "خریدار کی قسم اور OEM vs ہول سیل چینل منتخب کریں۔",
    "channelsTag": "چینلز",
    "channelsTitle": "ہم سے رابطہ کیسے کریں",
    "channels": [
      {
        "title": "OEM / Private Label",
        "description": "Custom formula, private label packaging, sampling, and production MOQs.",
        "icon": "tabler:building-factory-2"
      },
      {
        "title": "Wholesale",
        "description": "Price lists, case packs, and open-account requests for standard SKUs.",
        "icon": "tabler:building-store"
      },
      {
        "title": "WhatsApp",
        "description": "PHONE",
        "icon": "tabler:brand-whatsapp"
      }
    ],
    "faqTitle": "استفسار سوالات",
    "faqs": [
      {
        "title": "How quickly will you respond?",
        "description": "We typically reply within <strong>24 hours</strong> on working days. Include buyer type, OEM vs wholesale, estimated bottles/cases, and ship-to country."
      },
      {
        "title": "What volume should I select?",
        "description": "Use bottles/cases ranges on the form — from sample-only to 1,000+ cases. Exact MOQ is confirmed in the quote."
      },
      {
        "title": "Can I request samples first?",
        "description": "Yes. Choose Sample (or mention sampling in OEM/Wholesale). Sample path is recommended before private-label production."
      }
    ],
    "ctaTitle": "پہلے رہنما صفحہ دیکھیں؟",
    "ctaSub": "OEM یا ہول سیل دیکھیں، پھر وہی فارم بھیجیں۔",
    "oemPage": "OEM صفحہ",
    "wholesalePage": "ہول سیل صفحہ",
    "formTitleShort": "B2B کوٹ درخواست",
    "formSubShort": "OEM یا ہول سیل — ہم MOQ اور اگلے قدم بھیجتے ہیں۔",
    "wa": "WhatsApp"
  }
};

export function getContactCopy(locale: Locale = 'en'): ContactCopy {
  return CONTACT[locale] || CONTACT.en;
}

export type AboutCopy = {
  title: string; description: string; heroTitleBefore: string; heroTitleAccent: string; heroSub: string;
  quoteCta: string; oemCta: string; howTitle: string; howItems: FeatureItem[];
  ctaTitle: string; ctaSub: string; contactCta: string;
};

const ABOUT: Record<Locale, AboutCopy> = {
  "en": {
    "title": "About GutSource",
    "description": "GutSource is a B2B partner for private label digestive enzymes and probiotics — OEM and wholesale dietary supplements.",
    "heroTitleBefore": "About ",
    "heroTitleAccent": "GutSource",
    "heroSub": "We help brands and channel buyers launch or restock digestive enzyme and probiotic dietary supplements — via OEM private label and wholesale.",
    "quoteCta": "Request quote",
    "oemCta": "OEM",
    "howTitle": "How we work",
    "howItems": [
      {
        "title": "B2B only",
        "description": "No consumer retail cart or personal subscription as the main path. Two funnels: OEM and Wholesale.",
        "icon": "tabler:building-store"
      },
      {
        "title": "Compliance-aware",
        "description": "Dietary supplement structure/function positioning. No disease-treatment or detox marketing.",
        "icon": "tabler:shield-check"
      },
      {
        "title": "Practical MOQs",
        "description": "Sample-first when needed; bottle and case volumes sized for private label and wholesale reorders.",
        "icon": "tabler:package"
      }
    ],
    "ctaTitle": "Talk with the export / OEM desk",
    "ctaSub": "Share your brief — we route OEM vs wholesale correctly.",
    "contactCta": "Contact us"
  },
  "zh-tw": {
    "title": "關於 GutSource",
    "description": "GutSource 是消化酶與益生菌貼牌的 B2B 夥伴 — OEM 與批發膳食補充劑。",
    "heroTitleBefore": "關於 ",
    "heroTitleAccent": "GutSource",
    "heroSub": "我們協助品牌與通路買家透過 OEM 貼牌與批發，推出或補貨消化酶與益生菌膳食補充劑。",
    "quoteCta": "索取報價",
    "oemCta": "OEM",
    "howTitle": "我們如何合作",
    "howItems": [
      {
        "title": "B2B only",
        "description": "No consumer retail cart or personal subscription as the main path. Two funnels: OEM and Wholesale.",
        "icon": "tabler:building-store"
      },
      {
        "title": "Compliance-aware",
        "description": "Dietary supplement structure/function positioning. No disease-treatment or detox marketing.",
        "icon": "tabler:shield-check"
      },
      {
        "title": "Practical MOQs",
        "description": "Sample-first when needed; bottle and case volumes sized for private label and wholesale reorders.",
        "icon": "tabler:package"
      }
    ],
    "ctaTitle": "與出口／OEM 窗口洽談",
    "ctaSub": "分享您的簡報 — 我們正確分流 OEM 與批發。",
    "contactCta": "聯絡我們"
  },
  "es": {
    "title": "Sobre GutSource",
    "description": "GutSource es socio B2B de enzimas digestivas y probióticos marca privada — OEM y mayoreo.",
    "heroTitleBefore": "Sobre ",
    "heroTitleAccent": "GutSource",
    "heroSub": "Ayudamos a marcas y compradores de canal a lanzar o reponer suplementos de enzimas y probióticos — vía OEM y mayoreo.",
    "quoteCta": "Pedir cotización",
    "oemCta": "OEM",
    "howTitle": "Cómo trabajamos",
    "howItems": [
      {
        "title": "B2B only",
        "description": "No consumer retail cart or personal subscription as the main path. Two funnels: OEM and Wholesale.",
        "icon": "tabler:building-store"
      },
      {
        "title": "Compliance-aware",
        "description": "Dietary supplement structure/function positioning. No disease-treatment or detox marketing.",
        "icon": "tabler:shield-check"
      },
      {
        "title": "Practical MOQs",
        "description": "Sample-first when needed; bottle and case volumes sized for private label and wholesale reorders.",
        "icon": "tabler:package"
      }
    ],
    "ctaTitle": "Hable con el escritorio export / OEM",
    "ctaSub": "Comparta su brief — enrutamos OEM vs mayoreo.",
    "contactCta": "Contáctenos"
  },
  "ar": {
    "title": "عن GutSource",
    "description": "GutSource شريك B2B لإنزيمات هضمية وبروبيوتيك بعلامة خاصة — OEM والجملة.",
    "heroTitleBefore": "عن ",
    "heroTitleAccent": "GutSource",
    "heroSub": "نساعد العلامات ومشتري القنوات على إطلاق أو إعادة تخزين مكملات إنزيمات وبروبيوتيك عبر OEM والجملة.",
    "quoteCta": "طلب عرض سعر",
    "oemCta": "OEM",
    "howTitle": "كيف نعمل",
    "howItems": [
      {
        "title": "B2B only",
        "description": "No consumer retail cart or personal subscription as the main path. Two funnels: OEM and Wholesale.",
        "icon": "tabler:building-store"
      },
      {
        "title": "Compliance-aware",
        "description": "Dietary supplement structure/function positioning. No disease-treatment or detox marketing.",
        "icon": "tabler:shield-check"
      },
      {
        "title": "Practical MOQs",
        "description": "Sample-first when needed; bottle and case volumes sized for private label and wholesale reorders.",
        "icon": "tabler:package"
      }
    ],
    "ctaTitle": "تحدث مع مكتب التصدير / OEM",
    "ctaSub": "شارك ملخصك — نوجّه OEM مقابل الجملة.",
    "contactCta": "اتصل بنا"
  },
  "fr": {
    "title": "À propos de GutSource",
    "description": "GutSource est un partenaire B2B pour enzymes digestives et probiotiques marque blanche — OEM et gros.",
    "heroTitleBefore": "À propos de ",
    "heroTitleAccent": "GutSource",
    "heroSub": "Nous aidons marques et acheteurs canaux à lancer ou réassortir des compléments enzymes et probiotiques — via OEM et gros.",
    "quoteCta": "Demander un devis",
    "oemCta": "OEM",
    "howTitle": "Comment nous travaillons",
    "howItems": [
      {
        "title": "B2B only",
        "description": "No consumer retail cart or personal subscription as the main path. Two funnels: OEM and Wholesale.",
        "icon": "tabler:building-store"
      },
      {
        "title": "Compliance-aware",
        "description": "Dietary supplement structure/function positioning. No disease-treatment or detox marketing.",
        "icon": "tabler:shield-check"
      },
      {
        "title": "Practical MOQs",
        "description": "Sample-first when needed; bottle and case volumes sized for private label and wholesale reorders.",
        "icon": "tabler:package"
      }
    ],
    "ctaTitle": "Parlez au desk export / OEM",
    "ctaSub": "Partagez votre brief — nous routons OEM vs gros.",
    "contactCta": "Nous contacter"
  },
  "de": {
    "title": "Über GutSource",
    "description": "GutSource ist B2B-Partner für Verdauungsenzyme und Probiotika Private Label — OEM und Großhandel.",
    "heroTitleBefore": "Über ",
    "heroTitleAccent": "GutSource",
    "heroSub": "Wir helfen Marken und Kanalkäufern, Enzym- und Probiotika-Nahrungsergänzung via OEM und Großhandel zu starten oder nachzubestellen.",
    "quoteCta": "Angebot anfordern",
    "oemCta": "OEM",
    "howTitle": "So arbeiten wir",
    "howItems": [
      {
        "title": "B2B only",
        "description": "No consumer retail cart or personal subscription as the main path. Two funnels: OEM and Wholesale.",
        "icon": "tabler:building-store"
      },
      {
        "title": "Compliance-aware",
        "description": "Dietary supplement structure/function positioning. No disease-treatment or detox marketing.",
        "icon": "tabler:shield-check"
      },
      {
        "title": "Practical MOQs",
        "description": "Sample-first when needed; bottle and case volumes sized for private label and wholesale reorders.",
        "icon": "tabler:package"
      }
    ],
    "ctaTitle": "Sprechen Sie mit dem Export-/OEM-Desk",
    "ctaSub": "Teilen Sie Ihr Briefing — wir routen OEM vs Großhandel.",
    "contactCta": "Kontaktieren Sie uns"
  },
  "ja": {
    "title": "GutSourceについて",
    "description": "GutSourceは消化酵素・プロバイオのPL向けB2Bパートナー — OEMと卸売。",
    "heroTitleBefore": "",
    "heroTitleAccent": "GutSourceについて",
    "heroSub": "ブランドとチャネルバイヤーがOEMと卸売で消化酵素・プロバイオを立ち上げ／補充できるよう支援します。",
    "quoteCta": "見積依頼",
    "oemCta": "OEM",
    "howTitle": "私たちの働き方",
    "howItems": [
      {
        "title": "B2B only",
        "description": "No consumer retail cart or personal subscription as the main path. Two funnels: OEM and Wholesale.",
        "icon": "tabler:building-store"
      },
      {
        "title": "Compliance-aware",
        "description": "Dietary supplement structure/function positioning. No disease-treatment or detox marketing.",
        "icon": "tabler:shield-check"
      },
      {
        "title": "Practical MOQs",
        "description": "Sample-first when needed; bottle and case volumes sized for private label and wholesale reorders.",
        "icon": "tabler:package"
      }
    ],
    "ctaTitle": "輸出／OEMデスクに相談",
    "ctaSub": "ブリーフを共有 — OEMと卸を正しく振り分けます。",
    "contactCta": "お問い合わせ"
  },
  "ko": {
    "title": "GutSource 소개",
    "description": "GutSource는 소화 효소·프로바이오틱 프라이빗 라벨 B2B 파트너 — OEM과 도매.",
    "heroTitleBefore": "",
    "heroTitleAccent": "GutSource 소개",
    "heroSub": "브랜드와 채널 구매자가 OEM과 도매로 소화 효소·프로바이오틱을 출시하거나 재입고하도록 돕습니다.",
    "quoteCta": "견적 요청",
    "oemCta": "OEM",
    "howTitle": "협업 방식",
    "howItems": [
      {
        "title": "B2B only",
        "description": "No consumer retail cart or personal subscription as the main path. Two funnels: OEM and Wholesale.",
        "icon": "tabler:building-store"
      },
      {
        "title": "Compliance-aware",
        "description": "Dietary supplement structure/function positioning. No disease-treatment or detox marketing.",
        "icon": "tabler:shield-check"
      },
      {
        "title": "Practical MOQs",
        "description": "Sample-first when needed; bottle and case volumes sized for private label and wholesale reorders.",
        "icon": "tabler:package"
      }
    ],
    "ctaTitle": "수출 / OEM 데스크와 상담",
    "ctaSub": "브리프를 공유하세요 — OEM vs 도매를 올바르게 연결합니다.",
    "contactCta": "문의하기"
  },
  "pt": {
    "title": "Sobre a GutSource",
    "description": "GutSource é parceiro B2B de enzimas digestivas e probióticos marca própria — OEM e atacado.",
    "heroTitleBefore": "Sobre ",
    "heroTitleAccent": "GutSource",
    "heroSub": "Ajudamos marcas e compradores de canal a lançar ou repor suplementos de enzimas e probióticos — via OEM e atacado.",
    "quoteCta": "Pedir orçamento",
    "oemCta": "OEM",
    "howTitle": "Como trabalhamos",
    "howItems": [
      {
        "title": "B2B only",
        "description": "No consumer retail cart or personal subscription as the main path. Two funnels: OEM and Wholesale.",
        "icon": "tabler:building-store"
      },
      {
        "title": "Compliance-aware",
        "description": "Dietary supplement structure/function positioning. No disease-treatment or detox marketing.",
        "icon": "tabler:shield-check"
      },
      {
        "title": "Practical MOQs",
        "description": "Sample-first when needed; bottle and case volumes sized for private label and wholesale reorders.",
        "icon": "tabler:package"
      }
    ],
    "ctaTitle": "Fale com o desk export / OEM",
    "ctaSub": "Compartilhe seu brief — roteamos OEM vs atacado.",
    "contactCta": "Fale conosco"
  },
  "vi": {
    "title": "Giới thiệu GutSource",
    "description": "GutSource là đối tác B2B cho enzyme tiêu hóa & probiotic nhãn riêng — OEM và bán sỉ.",
    "heroTitleBefore": "Giới thiệu ",
    "heroTitleAccent": "GutSource",
    "heroSub": "Chúng tôi giúp thương hiệu và kênh ra mắt hoặc nhập lại TPCN enzyme & probiotic qua OEM và bán sỉ.",
    "quoteCta": "Yêu cầu báo giá",
    "oemCta": "OEM",
    "howTitle": "Cách chúng tôi làm việc",
    "howItems": [
      {
        "title": "B2B only",
        "description": "No consumer retail cart or personal subscription as the main path. Two funnels: OEM and Wholesale.",
        "icon": "tabler:building-store"
      },
      {
        "title": "Compliance-aware",
        "description": "Dietary supplement structure/function positioning. No disease-treatment or detox marketing.",
        "icon": "tabler:shield-check"
      },
      {
        "title": "Practical MOQs",
        "description": "Sample-first when needed; bottle and case volumes sized for private label and wholesale reorders.",
        "icon": "tabler:package"
      }
    ],
    "ctaTitle": "Nói chuyện với bàn export / OEM",
    "ctaSub": "Chia sẻ brief — chúng tôi định tuyến OEM vs bán sỉ.",
    "contactCta": "Liên hệ chúng tôi"
  },
  "id": {
    "title": "Tentang GutSource",
    "description": "GutSource mitra B2B enzim pencernaan & probiotik private label — OEM dan grosir.",
    "heroTitleBefore": "Tentang ",
    "heroTitleAccent": "GutSource",
    "heroSub": "Kami membantu merek dan pembeli saluran meluncurkan atau restock suplement enzim & probiotik via OEM dan grosir.",
    "quoteCta": "Minta penawaran",
    "oemCta": "OEM",
    "howTitle": "Cara kami bekerja",
    "howItems": [
      {
        "title": "B2B only",
        "description": "No consumer retail cart or personal subscription as the main path. Two funnels: OEM and Wholesale.",
        "icon": "tabler:building-store"
      },
      {
        "title": "Compliance-aware",
        "description": "Dietary supplement structure/function positioning. No disease-treatment or detox marketing.",
        "icon": "tabler:shield-check"
      },
      {
        "title": "Practical MOQs",
        "description": "Sample-first when needed; bottle and case volumes sized for private label and wholesale reorders.",
        "icon": "tabler:package"
      }
    ],
    "ctaTitle": "Bicara dengan desk ekspor / OEM",
    "ctaSub": "Bagikan brief — kami arahkan OEM vs grosir.",
    "contactCta": "Hubungi kami"
  },
  "th": {
    "title": "เกี่ยวกับ GutSource",
    "description": "GutSource เป็นพาร์ทเนอร์ B2B สำหรับเอนไซม์ย่อยอาหารและโปรไบโอติกไพรเวทเลเบล — OEM และขายส่ง",
    "heroTitleBefore": "เกี่ยวกับ ",
    "heroTitleAccent": "GutSource",
    "heroSub": "เราช่วยแบรนด์และผู้ซื้อช่องทางเปิดตัวหรือเติมสต็อกผลิตภัณฑ์เสริมอาหารเอนไซม์และโปรไบโอติกผ่าน OEM และขายส่ง",
    "quoteCta": "ขอใบเสนอราคา",
    "oemCta": "OEM",
    "howTitle": "เราทำงานอย่างไร",
    "howItems": [
      {
        "title": "B2B only",
        "description": "No consumer retail cart or personal subscription as the main path. Two funnels: OEM and Wholesale.",
        "icon": "tabler:building-store"
      },
      {
        "title": "Compliance-aware",
        "description": "Dietary supplement structure/function positioning. No disease-treatment or detox marketing.",
        "icon": "tabler:shield-check"
      },
      {
        "title": "Practical MOQs",
        "description": "Sample-first when needed; bottle and case volumes sized for private label and wholesale reorders.",
        "icon": "tabler:package"
      }
    ],
    "ctaTitle": "คุยกับโต๊ะส่งออก / OEM",
    "ctaSub": "แชร์ brief ของคุณ — เราจัดเส้นทาง OEM กับขายส่ง",
    "contactCta": "ติดต่อเรา"
  },
  "hi": {
    "title": "GutSource के बारे में",
    "description": "GutSource डाइजेस्टिव एंजाइम और प्रोबायोटिक्स प्राइवेट लेबल का B2B पार्टनर — OEM और होलसेल।",
    "heroTitleBefore": "",
    "heroTitleAccent": "GutSource के बारे में",
    "heroSub": "हम ब्रांड और चैनल खरीदारों को OEM और होलसेल के माध्यम से एंजाइम व प्रोबायोटिक आहार पूरक लॉन्च या रीस्टॉक करने में मदद करते हैं।",
    "quoteCta": "कोट अनुरोध",
    "oemCta": "OEM",
    "howTitle": "हम कैसे काम करते हैं",
    "howItems": [
      {
        "title": "B2B only",
        "description": "No consumer retail cart or personal subscription as the main path. Two funnels: OEM and Wholesale.",
        "icon": "tabler:building-store"
      },
      {
        "title": "Compliance-aware",
        "description": "Dietary supplement structure/function positioning. No disease-treatment or detox marketing.",
        "icon": "tabler:shield-check"
      },
      {
        "title": "Practical MOQs",
        "description": "Sample-first when needed; bottle and case volumes sized for private label and wholesale reorders.",
        "icon": "tabler:package"
      }
    ],
    "ctaTitle": "एक्सपोर्ट / OEM डेस्क से बात करें",
    "ctaSub": "अपना brief साझा करें — हम OEM vs होलसेल रूट करते हैं।",
    "contactCta": "संपर्क करें"
  },
  "bn": {
    "title": "GutSource সম্পর্কে",
    "description": "GutSource ডাইজেস্টিভ এনজাইম ও প্রোবায়োটিক প্রাইভেট লেবেলের B2B অংশীদার — OEM ও হোলসেল।",
    "heroTitleBefore": "",
    "heroTitleAccent": "GutSource সম্পর্কে",
    "heroSub": "আমরা ব্র্যান্ড ও চ্যানেল ক্রেতাদের OEM ও হোলসেলের মাধ্যমে এনজাইম ও প্রোবায়োটিক লঞ্চ বা রিস্টক করতে সাহায্য করি।",
    "quoteCta": "কোট অনুরোধ",
    "oemCta": "OEM",
    "howTitle": "আমরা কীভাবে কাজ করি",
    "howItems": [
      {
        "title": "B2B only",
        "description": "No consumer retail cart or personal subscription as the main path. Two funnels: OEM and Wholesale.",
        "icon": "tabler:building-store"
      },
      {
        "title": "Compliance-aware",
        "description": "Dietary supplement structure/function positioning. No disease-treatment or detox marketing.",
        "icon": "tabler:shield-check"
      },
      {
        "title": "Practical MOQs",
        "description": "Sample-first when needed; bottle and case volumes sized for private label and wholesale reorders.",
        "icon": "tabler:package"
      }
    ],
    "ctaTitle": "এক্সপোর্ট / OEM ডেস্কের সাথে কথা বলুন",
    "ctaSub": "আপনার brief শেয়ার করুন — আমরা OEM vs হোলসেল রাউট করি।",
    "contactCta": "যোগাযোগ করুন"
  },
  "ru": {
    "title": "О GutSource",
    "description": "GutSource — B2B-партнёр по private label пищеварительных ферментов и пробиотиков — OEM и опт.",
    "heroTitleBefore": "О ",
    "heroTitleAccent": "GutSource",
    "heroSub": "Мы помогаем брендам и канальным покупателям запускать или пополнять БАД с ферментами и пробиотиками через OEM и опт.",
    "quoteCta": "Запросить цену",
    "oemCta": "OEM",
    "howTitle": "Как мы работаем",
    "howItems": [
      {
        "title": "B2B only",
        "description": "No consumer retail cart or personal subscription as the main path. Two funnels: OEM and Wholesale.",
        "icon": "tabler:building-store"
      },
      {
        "title": "Compliance-aware",
        "description": "Dietary supplement structure/function positioning. No disease-treatment or detox marketing.",
        "icon": "tabler:shield-check"
      },
      {
        "title": "Practical MOQs",
        "description": "Sample-first when needed; bottle and case volumes sized for private label and wholesale reorders.",
        "icon": "tabler:package"
      }
    ],
    "ctaTitle": "Свяжитесь с экспортным / OEM-деском",
    "ctaSub": "Поделитесь брифом — направим OEM vs опт.",
    "contactCta": "Связаться с нами"
  },
  "ur": {
    "title": "GutSource کے بارے میں",
    "description": "GutSource ڈائجسٹو اینزائم اور پروبائیوٹکس پرائیویٹ لیبل کا B2B پارٹنر — OEM اور ہول سیل۔",
    "heroTitleBefore": "",
    "heroTitleAccent": "GutSource کے بارے میں",
    "heroSub": "ہم برانڈز اور چینل خریداروں کو OEM اور ہول سیل کے ذریعے اینزائم و پروبائیوٹک غذائی سپلیمنٹس لانچ یا ری اسٹاک کرنے میں مدد کرتے ہیں۔",
    "quoteCta": "کوٹ درخواست",
    "oemCta": "OEM",
    "howTitle": "ہم کیسے کام کرتے ہیں",
    "howItems": [
      {
        "title": "B2B only",
        "description": "No consumer retail cart or personal subscription as the main path. Two funnels: OEM and Wholesale.",
        "icon": "tabler:building-store"
      },
      {
        "title": "Compliance-aware",
        "description": "Dietary supplement structure/function positioning. No disease-treatment or detox marketing.",
        "icon": "tabler:shield-check"
      },
      {
        "title": "Practical MOQs",
        "description": "Sample-first when needed; bottle and case volumes sized for private label and wholesale reorders.",
        "icon": "tabler:package"
      }
    ],
    "ctaTitle": "ایکسپورٹ / OEM ڈیسک سے بات کریں",
    "ctaSub": "اپنا brief شیئر کریں — ہم OEM vs ہول سیل روٹ کرتے ہیں۔",
    "contactCta": "رابطہ کریں"
  }
};

export function getAboutCopy(locale: Locale = 'en'): AboutCopy {
  return ABOUT[locale] || ABOUT.en;
}

export type ProductsCopy = {
  title: string; description: string; tagline: string; heroTitleBefore: string; heroTitleAccent: string; heroSub: string;
  quoteCta: string; oemCta: string; noteStrong: string; note: string; viewDetails: string;
  ctaTitle: string; ctaSub: string; oemCta2: string; wholesaleCta: string; contactCta: string;
  categories: { enzyme: string; probiotic: string; fiber: string };
  detail: {
    specsTitle: string; sellingTitle: string; inquireOem: string; wholesale: string; allExamples: string;
    complianceStrong: string; compliance: string; ctaTitle: string; ctaSub: string; contactCta: string;
    oemPrograms: string; home: string; products: string; sourceNote: string;
  };
};

const PRODUCTS: Record<Locale, ProductsCopy> = {
  "en": {
    "title": "OEM Capability Examples — Enzymes, Probiotics & Fiber | GutSource",
    "description": "Representative OEM capability examples for digestive enzyme powders, probiotic capsules/packs, and dietary-fiber powder — B2B inquiry only. Structure/function dietary supplements.",
    "tagline": "Capability examples",
    "heroTitleBefore": "Product examples for ",
    "heroTitleAccent": "OEM & wholesale",
    "heroSub": "Representative formats from public 1688 indexed cards — enzymes, probiotics, and fiber powder. Not retail SKUs; inquire for private label or wholesale.",
    "quoteCta": "Request OEM quote",
    "oemCta": "OEM programs",
    "noteStrong": "Note:",
    "note": "These are <strong>OEM capability examples</strong>, not a shopping cart. Specs reflect visible indexed-card wording (1688 login can limit fuller offer detail). Dietary supplements · structure/function only · no disease or detox claims · no RTD soda programs.",
    "viewDetails": "View details →",
    "ctaTitle": "Ready to brief a similar SKU?",
    "ctaSub": "Tell us format, pack count, and estimated volume — we route OEM vs wholesale correctly.",
    "oemCta2": "OEM / Private Label",
    "wholesaleCta": "Wholesale",
    "contactCta": "Contact form",
    "categories": {
      "enzyme": "Digestive Enzymes",
      "probiotic": "Probiotics",
      "fiber": "Fiber Powder"
    },
    "detail": {
      "specsTitle": "Specs (visible card wording)",
      "sellingTitle": "Selling points",
      "inquireOem": "Inquire about OEM / private label",
      "wholesale": "Wholesale",
      "allExamples": "All examples",
      "complianceStrong": "Compliance:",
      "compliance": "Dietary supplement structure/function language only. Not intended to diagnose, treat, cure, or prevent any disease. No IBS, detox, or leaky-gut claims. No RTD soda products in early programs.",
      "ctaTitle": "Want a private-label version of this format?",
      "ctaSub": "Share target pack count, markets, and estimated volume — we confirm MOQ, sampling, and documentation during RFQ.",
      "contactCta": "Contact / inquiry form",
      "oemPrograms": "OEM programs",
      "home": "Home",
      "products": "Products",
      "sourceNote": "Representative OEM capability example sourced from public 1688 indexed cards — not a retail SKU for cart checkout. Specs reflect visible card wording only."
    }
  },
  "zh-tw": {
    "title": "OEM 能力示例 — 酶、益生菌與纖維｜GutSource",
    "description": "消化酶粉、益生菌膠囊／包與膳食纖維粉的代表性 OEM 能力示例 — 僅 B2B 詢盤。",
    "tagline": "能力示例",
    "heroTitleBefore": "產品示例：",
    "heroTitleAccent": "OEM 與批發",
    "heroSub": "來自公開 1688 索引卡片的代表性劑型 — 酶、益生菌與纖維粉。非零售 SKU；歡迎洽詢貼牌或批發。",
    "quoteCta": "索取 OEM 報價",
    "oemCta": "OEM 方案",
    "noteStrong": "說明：",
    "note": "這些是<strong>OEM 能力示例</strong>，不是購物車。規格反映可見索引卡用語。膳食補充劑 · 僅結構／功能 · 無疾病或排毒宣稱 · 無 RTD 汽水方案。",
    "viewDetails": "查看詳情 →",
    "ctaTitle": "準備好簡報類似 SKU？",
    "ctaSub": "告訴我們劑型、包裝數量與預估量 — 我們正確分流 OEM 與批發。",
    "oemCta2": "OEM／貼牌",
    "wholesaleCta": "批發",
    "contactCta": "聯絡表單",
    "categories": {
      "enzyme": "消化酶",
      "probiotic": "益生菌",
      "fiber": "纖維粉"
    },
    "detail": {
      "specsTitle": "規格（可見卡片用語）",
      "sellingTitle": "賣點",
      "inquireOem": "洽詢 OEM／貼牌",
      "wholesale": "批發",
      "allExamples": "全部示例",
      "complianceStrong": "合規：",
      "compliance": "僅膳食補充劑結構／功能語言。無意診斷、治療、治癒或預防任何疾病。無 IBS、排毒或腸漏宣稱。早期方案無 RTD 汽水。",
      "ctaTitle": "想要此劑型的貼牌版本？",
      "ctaSub": "分享目標包裝數、市場與預估量 — RFQ 期間確認 MOQ、打樣與文件。",
      "contactCta": "聯絡／詢價表",
      "oemPrograms": "OEM 方案",
      "home": "首頁",
      "products": "產品",
      "sourceNote": "代表性 OEM 能力示例，來自公開 1688 索引卡片 — 非零售購物車 SKU。規格僅反映可見卡片用語。"
    }
  },
  "es": {
    "title": "Ejemplos de capacidad OEM — Enzimas, probióticos y fibra | GutSource",
    "description": "Ejemplos OEM representativos de polvos de enzimas, cápsulas/packs probióticos y fibra — solo consulta B2B.",
    "tagline": "Ejemplos de capacidad",
    "heroTitleBefore": "Ejemplos de producto para ",
    "heroTitleAccent": "OEM y mayoreo",
    "heroSub": "Formatos representativos de fichas 1688 públicas — enzimas, probióticos y fibra. No son SKUs retail.",
    "quoteCta": "Pedir cotización OEM",
    "oemCta": "Programas OEM",
    "noteStrong": "Nota:",
    "note": "Estos son <strong>ejemplos de capacidad OEM</strong>, no un carrito. Solo estructura/función · sin claims de enfermedad o detox · sin soda RTD.",
    "viewDetails": "Ver detalles →",
    "ctaTitle": "¿Listo para brief de un SKU similar?",
    "ctaSub": "Indique formato, conteo de pack y volumen estimado.",
    "oemCta2": "OEM / Marca privada",
    "wholesaleCta": "Mayoreo",
    "contactCta": "Formulario de contacto",
    "categories": {
      "enzyme": "Enzimas digestivas",
      "probiotic": "Probióticos",
      "fiber": "Fibra en polvo"
    },
    "detail": {
      "specsTitle": "Specs (visible card wording)",
      "sellingTitle": "Selling points",
      "inquireOem": "Inquire about OEM / private label",
      "wholesale": "Wholesale",
      "allExamples": "All examples",
      "complianceStrong": "Compliance:",
      "compliance": "Dietary supplement structure/function language only. Not intended to diagnose, treat, cure, or prevent any disease. No IBS, detox, or leaky-gut claims. No RTD soda products in early programs.",
      "ctaTitle": "Want a private-label version of this format?",
      "ctaSub": "Share target pack count, markets, and estimated volume — we confirm MOQ, sampling, and documentation during RFQ.",
      "contactCta": "Contact / inquiry form",
      "oemPrograms": "OEM programs",
      "home": "Home",
      "products": "Products",
      "sourceNote": "Representative OEM capability example sourced from public 1688 indexed cards — not a retail SKU for cart checkout. Specs reflect visible card wording only."
    }
  },
  "ar": {
    "title": "أمثلة قدرات OEM — إنزيمات وبروبيوتيك وألياف | GutSource",
    "description": "أمثلة OEM تمثيلية لمساحيق إنزيمات وكابسولات بروبيوتيك وألياف — استفسار B2B فقط.",
    "tagline": "أمثلة القدرات",
    "heroTitleBefore": "أمثلة منتجات لـ ",
    "heroTitleAccent": "OEM والجملة",
    "heroSub": "أشكال تمثيلية من بطاقات 1688 العامة — إنزيمات وبروبيوتيك وألياف. ليست SKUs تجزئة.",
    "quoteCta": "طلب عرض OEM",
    "oemCta": "برامج OEM",
    "noteStrong": "ملاحظة:",
    "note": "هذه <strong>أمثلة قدرات OEM</strong> وليست سلة تسوق. هيكل/وظيفة فقط · بلا ادعاءات مرض أو إزالة سموم · بلا مشروب RTD.",
    "viewDetails": "عرض التفاصيل ←",
    "ctaTitle": "جاهز لملخص SKU مشابه؟",
    "ctaSub": "أخبرنا الشكل وعدد العبوة والحجم التقديري.",
    "oemCta2": "OEM / علامة خاصة",
    "wholesaleCta": "الجملة",
    "contactCta": "نموذج الاتصال",
    "categories": {
      "enzyme": "إنزيمات هضمية",
      "probiotic": "بروبيوتيك",
      "fiber": "مسحوق ألياف"
    },
    "detail": {
      "specsTitle": "Specs (visible card wording)",
      "sellingTitle": "Selling points",
      "inquireOem": "Inquire about OEM / private label",
      "wholesale": "Wholesale",
      "allExamples": "All examples",
      "complianceStrong": "Compliance:",
      "compliance": "Dietary supplement structure/function language only. Not intended to diagnose, treat, cure, or prevent any disease. No IBS, detox, or leaky-gut claims. No RTD soda products in early programs.",
      "ctaTitle": "Want a private-label version of this format?",
      "ctaSub": "Share target pack count, markets, and estimated volume — we confirm MOQ, sampling, and documentation during RFQ.",
      "contactCta": "Contact / inquiry form",
      "oemPrograms": "OEM programs",
      "home": "Home",
      "products": "Products",
      "sourceNote": "Representative OEM capability example sourced from public 1688 indexed cards — not a retail SKU for cart checkout. Specs reflect visible card wording only."
    }
  },
  "fr": {
    "title": "Exemples de capacités OEM — Enzymes, probiotiques et fibres | GutSource",
    "description": "Exemples OEM représentatifs de poudres d’enzymes, gélules/packs probiotiques et fibres — demande B2B uniquement.",
    "tagline": "Exemples de capacités",
    "heroTitleBefore": "Exemples produits pour ",
    "heroTitleAccent": "OEM et gros",
    "heroSub": "Formats représentatifs de fiches 1688 publiques — enzymes, probiotiques et fibres. Pas des SKUs retail.",
    "quoteCta": "Demander un devis OEM",
    "oemCta": "Programmes OEM",
    "noteStrong": "Note :",
    "note": "Ce sont des <strong>exemples de capacités OEM</strong>, pas un panier. Structure/fonction uniquement · pas de claims maladie ou détox · pas de soda RTD.",
    "viewDetails": "Voir les détails →",
    "ctaTitle": "Prêt pour un brief SKU similaire ?",
    "ctaSub": "Indiquez format, nombre par pack et volume estimé.",
    "oemCta2": "OEM / Marque blanche",
    "wholesaleCta": "Gros",
    "contactCta": "Formulaire de contact",
    "categories": {
      "enzyme": "Enzymes digestives",
      "probiotic": "Probiotiques",
      "fiber": "Fibres en poudre"
    },
    "detail": {
      "specsTitle": "Specs (visible card wording)",
      "sellingTitle": "Selling points",
      "inquireOem": "Inquire about OEM / private label",
      "wholesale": "Wholesale",
      "allExamples": "All examples",
      "complianceStrong": "Compliance:",
      "compliance": "Dietary supplement structure/function language only. Not intended to diagnose, treat, cure, or prevent any disease. No IBS, detox, or leaky-gut claims. No RTD soda products in early programs.",
      "ctaTitle": "Want a private-label version of this format?",
      "ctaSub": "Share target pack count, markets, and estimated volume — we confirm MOQ, sampling, and documentation during RFQ.",
      "contactCta": "Contact / inquiry form",
      "oemPrograms": "OEM programs",
      "home": "Home",
      "products": "Products",
      "sourceNote": "Representative OEM capability example sourced from public 1688 indexed cards — not a retail SKU for cart checkout. Specs reflect visible card wording only."
    }
  },
  "de": {
    "title": "OEM-Fähigkeitsbeispiele — Enzyme, Probiotika & Ballaststoffe | GutSource",
    "description": "Repräsentative OEM-Beispiele für Enzympulver, Probiotika-Kapseln/Packs und Ballaststoffpulver — nur B2B-Anfrage.",
    "tagline": "Fähigkeitsbeispiele",
    "heroTitleBefore": "Produktbeispiele für ",
    "heroTitleAccent": "OEM & Großhandel",
    "heroSub": "Repräsentative Formate aus öffentlichen 1688-Karten — Enzyme, Probiotika und Ballaststoffe. Keine Retail-SKUs.",
    "quoteCta": "OEM-Angebot anfordern",
    "oemCta": "OEM-Programme",
    "noteStrong": "Hinweis:",
    "note": "Dies sind <strong>OEM-Fähigkeitsbeispiele</strong>, kein Warenkorb. Nur Structure/Function · keine Krankheits- oder Detox-Claims · kein RTD-Soda.",
    "viewDetails": "Details ansehen →",
    "ctaTitle": "Bereit für Briefing eines ähnlichen SKU?",
    "ctaSub": "Nennen Sie Format, Packanzahl und geschätztes Volumen.",
    "oemCta2": "OEM / Private Label",
    "wholesaleCta": "Großhandel",
    "contactCta": "Kontaktformular",
    "categories": {
      "enzyme": "Verdauungsenzyme",
      "probiotic": "Probiotika",
      "fiber": "Ballaststoffpulver"
    },
    "detail": {
      "specsTitle": "Specs (visible card wording)",
      "sellingTitle": "Selling points",
      "inquireOem": "Inquire about OEM / private label",
      "wholesale": "Wholesale",
      "allExamples": "All examples",
      "complianceStrong": "Compliance:",
      "compliance": "Dietary supplement structure/function language only. Not intended to diagnose, treat, cure, or prevent any disease. No IBS, detox, or leaky-gut claims. No RTD soda products in early programs.",
      "ctaTitle": "Want a private-label version of this format?",
      "ctaSub": "Share target pack count, markets, and estimated volume — we confirm MOQ, sampling, and documentation during RFQ.",
      "contactCta": "Contact / inquiry form",
      "oemPrograms": "OEM programs",
      "home": "Home",
      "products": "Products",
      "sourceNote": "Representative OEM capability example sourced from public 1688 indexed cards — not a retail SKU for cart checkout. Specs reflect visible card wording only."
    }
  },
  "ja": {
    "title": "OEM能力事例 — 酵素・プロバイオ・食物繊維｜GutSource",
    "description": "消化酵素粉末、プロバイオカプセル／パック、食物繊維粉末の代表的OEM事例 — B2B問い合わせのみ。",
    "tagline": "能力事例",
    "heroTitleBefore": "製品事例：",
    "heroTitleAccent": "OEMと卸売",
    "heroSub": "公開1688カードに基づく代表剤形 — 酵素・プロバイオ・食物繊維。小売SKUではありません。",
    "quoteCta": "OEM見積を依頼",
    "oemCta": "OEMプログラム",
    "noteStrong": "注記：",
    "note": "これらは<strong>OEM能力事例</strong>であり買い物かごではありません。構造／機能のみ · 疾病・デトックス主張なし · RTDソーダなし。",
    "viewDetails": "詳細を見る →",
    "ctaTitle": "類似SKUのブリーフ準備は？",
    "ctaSub": "剤形・パック数・想定数量をお知らせください。",
    "oemCta2": "OEM／PL",
    "wholesaleCta": "卸売",
    "contactCta": "お問い合わせフォーム",
    "categories": {
      "enzyme": "消化酵素",
      "probiotic": "プロバイオティクス",
      "fiber": "食物繊維粉末"
    },
    "detail": {
      "specsTitle": "Specs (visible card wording)",
      "sellingTitle": "Selling points",
      "inquireOem": "Inquire about OEM / private label",
      "wholesale": "Wholesale",
      "allExamples": "All examples",
      "complianceStrong": "Compliance:",
      "compliance": "Dietary supplement structure/function language only. Not intended to diagnose, treat, cure, or prevent any disease. No IBS, detox, or leaky-gut claims. No RTD soda products in early programs.",
      "ctaTitle": "Want a private-label version of this format?",
      "ctaSub": "Share target pack count, markets, and estimated volume — we confirm MOQ, sampling, and documentation during RFQ.",
      "contactCta": "Contact / inquiry form",
      "oemPrograms": "OEM programs",
      "home": "Home",
      "products": "Products",
      "sourceNote": "Representative OEM capability example sourced from public 1688 indexed cards — not a retail SKU for cart checkout. Specs reflect visible card wording only."
    }
  },
  "ko": {
    "title": "OEM 역량 예시 — 효소, 프로바이오틱, 식이섬유 | GutSource",
    "description": "소화 효소 파우더, 프로바이오틱 캡슐/팩, 식이섬유 파우더의 대표 OEM 예시 — B2B 문의만.",
    "tagline": "역량 예시",
    "heroTitleBefore": "제품 예시: ",
    "heroTitleAccent": "OEM & 도매",
    "heroSub": "공개 1688 카드 기반 대표 제형 — 효소, 프로바이오틱, 식이섬유. 소매 SKU 아님.",
    "quoteCta": "OEM 견적 요청",
    "oemCta": "OEM 프로그램",
    "noteStrong": "참고:",
    "note": "이는 <strong>OEM 역량 예시</strong>이며 장바구니가 아닙니다. 구조/기능만 · 질병·디톡스 클레임 없음 · RTD 소다 없음.",
    "viewDetails": "세부 보기 →",
    "ctaTitle": "유사 SKU 브리프 준비되셨나요?",
    "ctaSub": "제형, 팩 수량, 예상 물량을 알려 주세요.",
    "oemCta2": "OEM / 프라이빗 라벨",
    "wholesaleCta": "도매",
    "contactCta": "문의 양식",
    "categories": {
      "enzyme": "소화 효소",
      "probiotic": "프로바이오틱",
      "fiber": "식이섬유 파우더"
    },
    "detail": {
      "specsTitle": "Specs (visible card wording)",
      "sellingTitle": "Selling points",
      "inquireOem": "Inquire about OEM / private label",
      "wholesale": "Wholesale",
      "allExamples": "All examples",
      "complianceStrong": "Compliance:",
      "compliance": "Dietary supplement structure/function language only. Not intended to diagnose, treat, cure, or prevent any disease. No IBS, detox, or leaky-gut claims. No RTD soda products in early programs.",
      "ctaTitle": "Want a private-label version of this format?",
      "ctaSub": "Share target pack count, markets, and estimated volume — we confirm MOQ, sampling, and documentation during RFQ.",
      "contactCta": "Contact / inquiry form",
      "oemPrograms": "OEM programs",
      "home": "Home",
      "products": "Products",
      "sourceNote": "Representative OEM capability example sourced from public 1688 indexed cards — not a retail SKU for cart checkout. Specs reflect visible card wording only."
    }
  },
  "pt": {
    "title": "Exemplos de capacidade OEM — Enzimas, probióticos e fibra | GutSource",
    "description": "Exemplos OEM representativos de pós de enzimas, cápsulas/packs probióticos e fibra — apenas consulta B2B.",
    "tagline": "Exemplos de capacidade",
    "heroTitleBefore": "Exemplos de produto para ",
    "heroTitleAccent": "OEM e atacado",
    "heroSub": "Formatos representativos de cartões 1688 públicos — enzimas, probióticos e fibra. Não são SKUs varejo.",
    "quoteCta": "Pedir orçamento OEM",
    "oemCta": "Programas OEM",
    "noteStrong": "Nota:",
    "note": "Estes são <strong>exemplos de capacidade OEM</strong>, não um carrinho. Apenas estrutura/função · sem claims de doença ou detox · sem refrigerante RTD.",
    "viewDetails": "Ver detalhes →",
    "ctaTitle": "Pronto para brief de um SKU semelhante?",
    "ctaSub": "Informe formato, contagem do pack e volume estimado.",
    "oemCta2": "OEM / Marca própria",
    "wholesaleCta": "Atacado",
    "contactCta": "Formulário de contato",
    "categories": {
      "enzyme": "Enzimas digestivas",
      "probiotic": "Probióticos",
      "fiber": "Fibra em pó"
    },
    "detail": {
      "specsTitle": "Specs (visible card wording)",
      "sellingTitle": "Selling points",
      "inquireOem": "Inquire about OEM / private label",
      "wholesale": "Wholesale",
      "allExamples": "All examples",
      "complianceStrong": "Compliance:",
      "compliance": "Dietary supplement structure/function language only. Not intended to diagnose, treat, cure, or prevent any disease. No IBS, detox, or leaky-gut claims. No RTD soda products in early programs.",
      "ctaTitle": "Want a private-label version of this format?",
      "ctaSub": "Share target pack count, markets, and estimated volume — we confirm MOQ, sampling, and documentation during RFQ.",
      "contactCta": "Contact / inquiry form",
      "oemPrograms": "OEM programs",
      "home": "Home",
      "products": "Products",
      "sourceNote": "Representative OEM capability example sourced from public 1688 indexed cards — not a retail SKU for cart checkout. Specs reflect visible card wording only."
    }
  },
  "vi": {
    "title": "Ví dụ năng lực OEM — Enzyme, probiotic & chất xơ | GutSource",
    "description": "Ví dụ OEM đại diện bột enzyme, viên/pack probiotic và bột chất xơ — chỉ hỏi B2B.",
    "tagline": "Ví dụ năng lực",
    "heroTitleBefore": "Ví dụ sản phẩm cho ",
    "heroTitleAccent": "OEM & bán sỉ",
    "heroSub": "Dạng đại diện từ thẻ 1688 công khai — enzyme, probiotic và chất xơ. Không phải SKU bán lẻ.",
    "quoteCta": "Yêu cầu báo giá OEM",
    "oemCta": "Chương trình OEM",
    "noteStrong": "Lưu ý:",
    "note": "Đây là <strong>ví dụ năng lực OEM</strong>, không phải giỏ hàng. Chỉ cấu trúc/chức năng · không claim bệnh/thải độc · không soda RTD.",
    "viewDetails": "Xem chi tiết →",
    "ctaTitle": "Sẵn sàng brief SKU tương tự?",
    "ctaSub": "Cho biết dạng, số lượng pack và khối lượng ước tính.",
    "oemCta2": "OEM / Nhãn riêng",
    "wholesaleCta": "Bán sỉ",
    "contactCta": "Form liên hệ",
    "categories": {
      "enzyme": "Enzyme tiêu hóa",
      "probiotic": "Probiotic",
      "fiber": "Bột chất xơ"
    },
    "detail": {
      "specsTitle": "Specs (visible card wording)",
      "sellingTitle": "Selling points",
      "inquireOem": "Inquire about OEM / private label",
      "wholesale": "Wholesale",
      "allExamples": "All examples",
      "complianceStrong": "Compliance:",
      "compliance": "Dietary supplement structure/function language only. Not intended to diagnose, treat, cure, or prevent any disease. No IBS, detox, or leaky-gut claims. No RTD soda products in early programs.",
      "ctaTitle": "Want a private-label version of this format?",
      "ctaSub": "Share target pack count, markets, and estimated volume — we confirm MOQ, sampling, and documentation during RFQ.",
      "contactCta": "Contact / inquiry form",
      "oemPrograms": "OEM programs",
      "home": "Home",
      "products": "Products",
      "sourceNote": "Representative OEM capability example sourced from public 1688 indexed cards — not a retail SKU for cart checkout. Specs reflect visible card wording only."
    }
  },
  "id": {
    "title": "Contoh kapabilitas OEM — Enzim, probiotik & serat | GutSource",
    "description": "Contoh OEM representatif bubuk enzim, kapsul/pack probiotik, dan serat — hanya pertanyaan B2B.",
    "tagline": "Contoh kapabilitas",
    "heroTitleBefore": "Contoh produk untuk ",
    "heroTitleAccent": "OEM & grosir",
    "heroSub": "Format representatif dari kartu 1688 publik — enzim, probiotik, dan serat. Bukan SKU ritel.",
    "quoteCta": "Minta penawaran OEM",
    "oemCta": "Program OEM",
    "noteStrong": "Catatan:",
    "note": "Ini adalah <strong>contoh kapabilitas OEM</strong>, bukan keranjang belanja. Hanya struktur/fungsi · tanpa klaim penyakit/detoks · tanpa soda RTD.",
    "viewDetails": "Lihat detail →",
    "ctaTitle": "Siap brief SKU serupa?",
    "ctaSub": "Beritahu format, jumlah pack, dan volume perkiraan.",
    "oemCta2": "OEM / Private Label",
    "wholesaleCta": "Grosir",
    "contactCta": "Formulir kontak",
    "categories": {
      "enzyme": "Enzim pencernaan",
      "probiotic": "Probiotik",
      "fiber": "Bubuk serat"
    },
    "detail": {
      "specsTitle": "Specs (visible card wording)",
      "sellingTitle": "Selling points",
      "inquireOem": "Inquire about OEM / private label",
      "wholesale": "Wholesale",
      "allExamples": "All examples",
      "complianceStrong": "Compliance:",
      "compliance": "Dietary supplement structure/function language only. Not intended to diagnose, treat, cure, or prevent any disease. No IBS, detox, or leaky-gut claims. No RTD soda products in early programs.",
      "ctaTitle": "Want a private-label version of this format?",
      "ctaSub": "Share target pack count, markets, and estimated volume — we confirm MOQ, sampling, and documentation during RFQ.",
      "contactCta": "Contact / inquiry form",
      "oemPrograms": "OEM programs",
      "home": "Home",
      "products": "Products",
      "sourceNote": "Representative OEM capability example sourced from public 1688 indexed cards — not a retail SKU for cart checkout. Specs reflect visible card wording only."
    }
  },
  "th": {
    "title": "ตัวอย่างความสามารถ OEM — เอนไซม์ โปรไบโอติก และไฟเบอร์ | GutSource",
    "description": "ตัวอย่าง OEM ของผงเอนไซม์ แคปซูล/แพ็กโปรไบโอติก และผงไฟเบอร์ — สอบถาม B2B เท่านั้น",
    "tagline": "ตัวอย่างความสามารถ",
    "heroTitleBefore": "ตัวอย่างผลิตภัณฑ์สำหรับ ",
    "heroTitleAccent": "OEM และขายส่ง",
    "heroSub": "รูปแบบตัวแทนจากบัตร 1688 สาธารณะ — เอนไซม์ โปรไบโอติก และไฟเบอร์ ไม่ใช่ SKU ค้าปลีก",
    "quoteCta": "ขอใบเสนอราคา OEM",
    "oemCta": "โปรแกรม OEM",
    "noteStrong": "หมายเหตุ:",
    "note": "เหล่านี้เป็น<strong>ตัวอย่างความสามารถ OEM</strong> ไม่ใช่ตะกร้าสินค้า เฉพาะโครงสร้าง/หน้าที่ · ไม่เคลมโรค/ดีท็อกซ์ · ไม่มีโซดา RTD",
    "viewDetails": "ดูรายละเอียด →",
    "ctaTitle": "พร้อม brief SKU ที่คล้ายกัน?",
    "ctaSub": "บอกเราเรื่องรูปแบบ จำนวนแพ็ก และปริมาณโดยประมาณ",
    "oemCta2": "OEM / ไพรเวทเลเบล",
    "wholesaleCta": "ขายส่ง",
    "contactCta": "แบบฟอร์มติดต่อ",
    "categories": {
      "enzyme": "เอนไซม์ย่อยอาหาร",
      "probiotic": "โปรไบโอติก",
      "fiber": "ผงไฟเบอร์"
    },
    "detail": {
      "specsTitle": "Specs (visible card wording)",
      "sellingTitle": "Selling points",
      "inquireOem": "Inquire about OEM / private label",
      "wholesale": "Wholesale",
      "allExamples": "All examples",
      "complianceStrong": "Compliance:",
      "compliance": "Dietary supplement structure/function language only. Not intended to diagnose, treat, cure, or prevent any disease. No IBS, detox, or leaky-gut claims. No RTD soda products in early programs.",
      "ctaTitle": "Want a private-label version of this format?",
      "ctaSub": "Share target pack count, markets, and estimated volume — we confirm MOQ, sampling, and documentation during RFQ.",
      "contactCta": "Contact / inquiry form",
      "oemPrograms": "OEM programs",
      "home": "Home",
      "products": "Products",
      "sourceNote": "Representative OEM capability example sourced from public 1688 indexed cards — not a retail SKU for cart checkout. Specs reflect visible card wording only."
    }
  },
  "hi": {
    "title": "OEM क्षमता उदाहरण — एंजाइम, प्रोबायोटिक और फाइबर | GutSource",
    "description": "एंजाइम पाउडर, प्रोबायोटिक कैप्सूल/पैक और फाइबर पाउडर के प्रतिनिधि OEM उदाहरण — केवल B2B पूछताछ।",
    "tagline": "क्षमता उदाहरण",
    "heroTitleBefore": "उत्पाद उदाहरण: ",
    "heroTitleAccent": "OEM और होलसेल",
    "heroSub": "सार्वजनिक 1688 कार्ड से प्रतिनिधि प्रारूप — एंजाइम, प्रोबायोटिक और फाइबर। रिटेल SKU नहीं।",
    "quoteCta": "OEM कोट अनुरोध",
    "oemCta": "OEM कार्यक्रम",
    "noteStrong": "नोट:",
    "note": "ये <strong>OEM क्षमता उदाहरण</strong> हैं, शॉपिंग कार्ट नहीं। केवल संरचना/कार्य · कोई रोग/डिटॉक्स दावा नहीं · कोई RTD सोडा नहीं।",
    "viewDetails": "विवरण देखें →",
    "ctaTitle": "समान SKU के brief के लिए तैयार?",
    "ctaSub": "प्रारूप, पैक संख्या और अनुमानित मात्रा बताएं।",
    "oemCta2": "OEM / प्राइवेट लेबल",
    "wholesaleCta": "होलसेल",
    "contactCta": "संपर्क फ़ॉर्म",
    "categories": {
      "enzyme": "डाइजेस्टिव एंजाइम",
      "probiotic": "प्रोबायोटिक्स",
      "fiber": "फाइबर पाउडर"
    },
    "detail": {
      "specsTitle": "Specs (visible card wording)",
      "sellingTitle": "Selling points",
      "inquireOem": "Inquire about OEM / private label",
      "wholesale": "Wholesale",
      "allExamples": "All examples",
      "complianceStrong": "Compliance:",
      "compliance": "Dietary supplement structure/function language only. Not intended to diagnose, treat, cure, or prevent any disease. No IBS, detox, or leaky-gut claims. No RTD soda products in early programs.",
      "ctaTitle": "Want a private-label version of this format?",
      "ctaSub": "Share target pack count, markets, and estimated volume — we confirm MOQ, sampling, and documentation during RFQ.",
      "contactCta": "Contact / inquiry form",
      "oemPrograms": "OEM programs",
      "home": "Home",
      "products": "Products",
      "sourceNote": "Representative OEM capability example sourced from public 1688 indexed cards — not a retail SKU for cart checkout. Specs reflect visible card wording only."
    }
  },
  "bn": {
    "title": "OEM সক্ষমতার উদাহরণ — এনজাইম, প্রোবায়োটিক ও ফাইবার | GutSource",
    "description": "এনজাইম পাউডার, প্রোবায়োটিক ক্যাপসুল/প্যাক ও ফাইবার পাউডারের প্রতিনিধিত্বমূলক OEM উদাহরণ — শুধু B2B জিজ্ঞাসা।",
    "tagline": "সক্ষমতার উদাহরণ",
    "heroTitleBefore": "পণ্য উদাহরণ: ",
    "heroTitleAccent": "OEM ও হোলসেল",
    "heroSub": "পাবলিক 1688 কার্ড থেকে প্রতিনিধিত্বমূলক ফরম্যাট — এনজাইম, প্রোবায়োটিক ও ফাইবার। রিটেইল SKU নয়।",
    "quoteCta": "OEM কোট অনুরোধ",
    "oemCta": "OEM প্রোগ্রাম",
    "noteStrong": "নোট:",
    "note": "এগুলো <strong>OEM সক্ষমতার উদাহরণ</strong>, শপিং কার্ট নয়। শুধু গঠন/কার্য · কোনো রোগ/ডিটক্স দাবি নয় · কোনো RTD সোডা নয়।",
    "viewDetails": "বিস্তারিত দেখুন →",
    "ctaTitle": "অনুরূপ SKU brief-এর জন্য প্রস্তুত?",
    "ctaSub": "ফরম্যাট, প্যাক সংখ্যা ও আনুমানিক পরিমাণ জানান।",
    "oemCta2": "OEM / প্রাইভেট লেবেল",
    "wholesaleCta": "হোলসেল",
    "contactCta": "যোগাযোগ ফর্ম",
    "categories": {
      "enzyme": "ডাইজেস্টিভ এনজাইম",
      "probiotic": "প্রোবায়োটিক",
      "fiber": "ফাইবার পাউডার"
    },
    "detail": {
      "specsTitle": "Specs (visible card wording)",
      "sellingTitle": "Selling points",
      "inquireOem": "Inquire about OEM / private label",
      "wholesale": "Wholesale",
      "allExamples": "All examples",
      "complianceStrong": "Compliance:",
      "compliance": "Dietary supplement structure/function language only. Not intended to diagnose, treat, cure, or prevent any disease. No IBS, detox, or leaky-gut claims. No RTD soda products in early programs.",
      "ctaTitle": "Want a private-label version of this format?",
      "ctaSub": "Share target pack count, markets, and estimated volume — we confirm MOQ, sampling, and documentation during RFQ.",
      "contactCta": "Contact / inquiry form",
      "oemPrograms": "OEM programs",
      "home": "Home",
      "products": "Products",
      "sourceNote": "Representative OEM capability example sourced from public 1688 indexed cards — not a retail SKU for cart checkout. Specs reflect visible card wording only."
    }
  },
  "ru": {
    "title": "Примеры возможностей OEM — ферменты, пробиотики и клетчатка | GutSource",
    "description": "Репрезентативные OEM-примеры порошков ферментов, капсул/паков пробиотиков и клетчатки — только B2B-запрос.",
    "tagline": "Примеры возможностей",
    "heroTitleBefore": "Примеры продуктов для ",
    "heroTitleAccent": "OEM и опта",
    "heroSub": "Репрезентативные форматы с публичных карточек 1688 — ферменты, пробиотики и клетчатка. Не retail SKU.",
    "quoteCta": "Запросить OEM-цену",
    "oemCta": "OEM-программы",
    "noteStrong": "Примечание:",
    "note": "Это <strong>примеры возможностей OEM</strong>, не корзина. Только структура/функция · без claims о болезнях/детоксе · без RTD-соды.",
    "viewDetails": "Смотреть детали →",
    "ctaTitle": "Готовы к брифу похожего SKU?",
    "ctaSub": "Укажите формат, количество в паке и объём.",
    "oemCta2": "OEM / Private Label",
    "wholesaleCta": "Опт",
    "contactCta": "Форма контакта",
    "categories": {
      "enzyme": "Пищеварительные ферменты",
      "probiotic": "Пробиотики",
      "fiber": "Порошок клетчатки"
    },
    "detail": {
      "specsTitle": "Specs (visible card wording)",
      "sellingTitle": "Selling points",
      "inquireOem": "Inquire about OEM / private label",
      "wholesale": "Wholesale",
      "allExamples": "All examples",
      "complianceStrong": "Compliance:",
      "compliance": "Dietary supplement structure/function language only. Not intended to diagnose, treat, cure, or prevent any disease. No IBS, detox, or leaky-gut claims. No RTD soda products in early programs.",
      "ctaTitle": "Want a private-label version of this format?",
      "ctaSub": "Share target pack count, markets, and estimated volume — we confirm MOQ, sampling, and documentation during RFQ.",
      "contactCta": "Contact / inquiry form",
      "oemPrograms": "OEM programs",
      "home": "Home",
      "products": "Products",
      "sourceNote": "Representative OEM capability example sourced from public 1688 indexed cards — not a retail SKU for cart checkout. Specs reflect visible card wording only."
    }
  },
  "ur": {
    "title": "OEM صلاحیت کی مثالیں — اینزائم، پروبائیوٹک اور فائبر | GutSource",
    "description": "اینزائم پاؤڈر، پروبائیوٹک کیپسول/پیک اور فائبر پاؤڈر کی نمائندہ OEM مثالیں — صرف B2B استفسار۔",
    "tagline": "صلاحیت کی مثالیں",
    "heroTitleBefore": "مصنوعات کی مثالیں: ",
    "heroTitleAccent": "OEM اور ہول سیل",
    "heroSub": "عوامی 1688 کارڈز سے نمائندہ فارمیٹس — اینزائم، پروبائیوٹک اور فائبر۔ ریٹیل SKU نہیں۔",
    "quoteCta": "OEM کوٹ درخواست",
    "oemCta": "OEM پروگرامز",
    "noteStrong": "نوٹ:",
    "note": "یہ <strong>OEM صلاحیت کی مثالیں</strong> ہیں، شاپنگ کارٹ نہیں۔ صرف ساخت/فعل · کوئی بیماری/ڈیٹاکس دعویٰ نہیں · کوئی RTD سوڈا نہیں۔",
    "viewDetails": "تفصیل دیکھیں →",
    "ctaTitle": "مشابہ SKU brief کے لیے تیار؟",
    "ctaSub": "فارمیٹ، پیک تعداد اور تخمینی مقدار بتائیں۔",
    "oemCta2": "OEM / پرائیویٹ لیبل",
    "wholesaleCta": "ہول سیل",
    "contactCta": "رابطہ فارم",
    "categories": {
      "enzyme": "ڈائجسٹو اینزائمز",
      "probiotic": "پروبائیوٹکس",
      "fiber": "فائبر پاؤڈر"
    },
    "detail": {
      "specsTitle": "Specs (visible card wording)",
      "sellingTitle": "Selling points",
      "inquireOem": "Inquire about OEM / private label",
      "wholesale": "Wholesale",
      "allExamples": "All examples",
      "complianceStrong": "Compliance:",
      "compliance": "Dietary supplement structure/function language only. Not intended to diagnose, treat, cure, or prevent any disease. No IBS, detox, or leaky-gut claims. No RTD soda products in early programs.",
      "ctaTitle": "Want a private-label version of this format?",
      "ctaSub": "Share target pack count, markets, and estimated volume — we confirm MOQ, sampling, and documentation during RFQ.",
      "contactCta": "Contact / inquiry form",
      "oemPrograms": "OEM programs",
      "home": "Home",
      "products": "Products",
      "sourceNote": "Representative OEM capability example sourced from public 1688 indexed cards — not a retail SKU for cart checkout. Specs reflect visible card wording only."
    }
  }
};

export function getProductsCopy(locale: Locale = 'en'): ProductsCopy {
  return PRODUCTS[locale] || PRODUCTS.en;
}
