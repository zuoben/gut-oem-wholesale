import type { Locale } from './locales';
import type { Product, ProductCategory } from '~/data/products';
import { getProductsCopy } from './copy-pages';

export type LocalizedProductFields = {
  name: string;
  specs: string[];
  sellingPoints: string[];
  format: string;
};

const PRODUCT_I18N: Record<string, Partial<Record<Locale, LocalizedProductFields>>> = {
  "enzyme-bromelain-multi-spec": {
    "en": {
      "name": "Bromelain powder — multi-spec, OEM/ODM",
      "specs": [
        "Multiple specifications",
        "Stock supply shown"
      ],
      "sellingPoints": [
        "Bromelain powder ingredient for light dietary-supplement formulations",
        "Multiple specifications shown on indexed cards",
        "OEM/ODM one-stop service direction",
        "Stock supply and sample support wording shown"
      ],
      "format": "powder"
    },
    "zh-tw": {
      "name": "菠蘿蛋白酶粉（多種規格，OEM/ODM）",
      "specs": [
        "多種規格",
        "現貨供應說明"
      ],
      "sellingPoints": [
        "適用輕量膳食補充劑配方的菠蘿蛋白酶粉原料",
        "索引卡顯示多種規格",
        "OEM/ODM 一站式服務方向",
        "現貨與樣品支援用語"
      ],
      "format": "粉劑"
    },
    "es": {
      "name": "Polvo de bromelina — multi-especificación, OEM/ODM",
      "specs": [
        "Múltiples especificaciones",
        "Suministro en stock mostrado"
      ],
      "sellingPoints": [
        "Ingrediente de bromelina en polvo para formulaciones de suplementos ligeros",
        "Múltiples especificaciones en fichas indexadas",
        "Servicio OEM/ODM integral",
        "Suministro en stock y soporte de muestras"
      ],
      "format": "polvo"
    },
    "ja": {
      "name": "ブロメライン粉末 — マルチスペック、OEM/ODM",
      "specs": [
        "複数仕様",
        "在庫供給の記載"
      ],
      "sellingPoints": [
        "軽量ダイエタリーサプリ向けブロメライン粉末原料",
        "インデックスカードに複数仕様",
        "OEM/ODMワンストップ方向",
        "在庫供給とサンプル支援の記載"
      ],
      "format": "粉末"
    },
    "de": {
      "name": "Bromelain-Pulver — Multi-Spec, OEM/ODM",
      "specs": [
        "Mehrere Spezifikationen",
        "Lagerbestand angezeigt"
      ],
      "sellingPoints": [
        "Bromelain-Pulverrohstoff für leichte Nahrungsergänzungsformeln",
        "Mehrere Specs auf indexierten Karten",
        "OEM/ODM-One-Stop-Richtung",
        "Lager und Muster-Support angezeigt"
      ],
      "format": "Pulver"
    },
    "ar": {
      "name": "مسحوق بروميلين — مواصفات متعددة، OEM/ODM",
      "specs": [
        "مواصفات متعددة",
        "توريد مخزون ظاهر"
      ],
      "sellingPoints": [
        "مكون مسحوق بروميلين لتركيبات مكملات خفيفة",
        "مواصفات متعددة على البطاقات المفهرسة",
        "اتجاه خدمة OEM/ODM شاملة",
        "توريد مخزون ودعم عينات"
      ],
      "format": "مسحوق"
    },
    "fr": {
      "name": "Poudre de bromélaïne — multi-spec, OEM/ODM",
      "specs": [
        "Spécifications multiples",
        "Stock indiqué"
      ],
      "sellingPoints": [
        "Ingrédient bromélaïne en poudre pour formules de compléments légers",
        "Spécifications multiples sur fiches indexées",
        "Direction service OEM/ODM one-stop",
        "Stock et support échantillons indiqués"
      ],
      "format": "poudre"
    },
    "ko": {
      "name": "브로멜라인 파우더 — 멀티 스펙, OEM/ODM",
      "specs": [
        "다중 사양",
        "재고 공급 표시"
      ],
      "sellingPoints": [
        "가벼운 건강기능식품 포뮬러용 브로멜라인 파우더 원료",
        "인덱싱 카드에 다중 사양",
        "OEM/ODM 원스톱 서비스 방향",
        "재고 공급 및 샘플 지원 문구"
      ],
      "format": "파우더"
    },
    "pt": {
      "name": "Pó de bromelina — multi-spec, OEM/ODM",
      "specs": [
        "Múltiplas especificações",
        "Estoque indicado"
      ],
      "sellingPoints": [
        "Ingrediente de bromelina em pó para fórmulas de suplementos leves",
        "Múltiplas especificações em cartões indexados",
        "Direção de serviço OEM/ODM one-stop",
        "Estoque e suporte de amostras"
      ],
      "format": "pó"
    },
    "vi": {
      "name": "Bột bromelain — đa quy cách, OEM/ODM",
      "specs": [
        "Nhiều quy cách",
        "Có hàng tồn kho"
      ],
      "sellingPoints": [
        "Nguyên liệu bột bromelain cho công thức TPCN nhẹ",
        "Nhiều quy cách trên thẻ lập chỉ mục",
        "Hướng dịch vụ OEM/ODM một cửa",
        "Hỗ trợ tồn kho và mẫu"
      ],
      "format": "bột"
    },
    "id": {
      "name": "Bubuk bromelain — multi-spec, OEM/ODM",
      "specs": [
        "Berbagai spesifikasi",
        "Stok tersedia ditunjukkan"
      ],
      "sellingPoints": [
        "Bahan bubuk bromelain untuk formula suplement ringan",
        "Berbagai spesifikasi pada kartu terindeks",
        "Arah layanan OEM/ODM one-stop",
        "Dukungan stok dan sampel"
      ],
      "format": "bubuk"
    },
    "th": {
      "name": "ผงโบรมีเลน — หลายสเปก OEM/ODM",
      "specs": [
        "หลายสเปก",
        "แสดงสต็อกพร้อมส่ง"
      ],
      "sellingPoints": [
        "วัตถุดิบผงโบรมีเลนสำหรับสูตรผลิตภัณฑ์เสริมอาหารน้ำหนักเบา",
        "หลายสเปกบนการ์ดที่จัดทำดัชนี",
        "ทิศทางบริการ OEM/ODM ครบวงจร",
        "รองรับสต็อกและตัวอย่าง"
      ],
      "format": "ผง"
    },
    "hi": {
      "name": "ब्रोमेलैन पाउडर — मल्टी-स्पेक, OEM/ODM",
      "specs": [
        "कई स्पेसिफिकेशन",
        "स्टॉक सप्लाई दिखाया"
      ],
      "sellingPoints": [
        "हल्के आहार पूरक फॉर्मूलेशन के लिए ब्रोमेलैन पाउडर",
        "इंडेक्स्ड कार्ड पर कई स्पेसिफिकेशन",
        "OEM/ODM वन-स्टॉप सेवा दिशा",
        "स्टॉक और सैंपल सपोर्ट"
      ],
      "format": "पाउडर"
    },
    "bn": {
      "name": "ব্রোমেলেন পাউডার — মাল্টি-স্পেক, OEM/ODM",
      "specs": [
        "একাধিক স্পেসিফিকেশন",
        "স্টক সাপ্লাই দেখানো"
      ],
      "sellingPoints": [
        "হালকা খাদ্য সম্পূরক ফর্মুলেশনের জন্য ব্রোমেলেন পাউডার",
        "ইনডেক্সড কার্ডে একাধিক স্পেসিফিকেশন",
        "OEM/ODM ওয়ান-স্টপ সার্ভিস দিক",
        "স্টক ও নমুনা সহায়তা"
      ],
      "format": "পাউডার"
    },
    "ru": {
      "name": "Порошок бромелайна — мульти-спек, OEM/ODM",
      "specs": [
        "Несколько спецификаций",
        "Показан складской запас"
      ],
      "sellingPoints": [
        "Порошок бромелайна для лёгких формул БАД",
        "Несколько спецификаций на индексированных карточках",
        "Направление OEM/ODM one-stop",
        "Склад и поддержка образцов"
      ],
      "format": "порошок"
    },
    "ur": {
      "name": "برومیلیئن پاؤڈر — ملٹی اسپیگ، OEM/ODM",
      "specs": [
        "متعدد تفصیلات",
        "اسٹاک سپلائی دکھائی گئی"
      ],
      "sellingPoints": [
        "ہلکے غذائی سپلیمنٹ فارمولوں کے لیے برومیلیئن پاؤڈر",
        "انڈیکسڈ کارڈز پر متعدد تفصیلات",
        "OEM/ODM ون اسٹاپ سروس سمت",
        "اسٹاک اور سیمپل سپورٹ"
      ],
      "format": "پاؤڈر"
    }
  },
  "enzyme-bromelain-oem-odm": {
    "en": {
      "name": "Bromelain powder — one-stop OEM/ODM processing",
      "specs": [
        "Bromelain enzyme powder",
        "Ready-stock / fast-dispatch wording"
      ],
      "sellingPoints": [
        "Dry enzyme powder format for private-label programs",
        "OEM/ODM one-stop processing direction",
        "Ready-stock and fast-dispatch wording shown",
        "Volume-order pricing support shown on cards"
      ],
      "format": "powder"
    },
    "zh-tw": {
      "name": "菠蘿蛋白酶粉 OEM/ODM 一站式加工",
      "specs": [
        "菠蘿蛋白酶粉",
        "現貨／快發用語"
      ],
      "sellingPoints": [
        "適用貼牌方案的乾酶粉劑型",
        "OEM/ODM 一站式加工方向",
        "現貨與快發用語",
        "卡片顯示量單定價支援"
      ],
      "format": "粉劑"
    },
    "es": {
      "name": "Polvo de bromelina — procesamiento OEM/ODM integral",
      "specs": [
        "Polvo enzimático de bromelina",
        "Lenguaje de stock listo / envío rápido"
      ],
      "sellingPoints": [
        "Formato de polvo enzimático seco para programas marca privada",
        "Dirección de procesamiento OEM/ODM integral",
        "Stock listo y envío rápido",
        "Soporte de precios por volumen en fichas"
      ],
      "format": "polvo"
    },
    "ja": {
      "name": "ブロメライン粉末 — ワンストップOEM/ODM加工",
      "specs": [
        "ブロメライン酵素粉末",
        "即納／速発の記載"
      ],
      "sellingPoints": [
        "PL向け乾燥酵素粉末剤形",
        "OEM/ODMワンストップ加工方向",
        "即納・速発の記載",
        "カードに量産価格支援の記載"
      ],
      "format": "粉末"
    },
    "de": {
      "name": "Bromelain-Pulver — One-Stop OEM/ODM-Verarbeitung",
      "specs": [
        "Bromelain-Enzympulver",
        "Sofortlager / Schnellversand-Wortlaut"
      ],
      "sellingPoints": [
        "Trockenes Enzympulver-Format für Private-Label-Programme",
        "OEM/ODM-One-Stop-Verarbeitungsrichtung",
        "Sofortlager und Schnellversand angezeigt",
        "Volumenpreis-Support auf Karten"
      ],
      "format": "Pulver"
    },
    "ar": {
      "name": "مسحوق بروميلين — معالجة OEM/ODM شاملة",
      "specs": [
        "مسحوق إنزيم بروميلين",
        "صياغة مخزون جاهز / إرسال سريع"
      ],
      "sellingPoints": [
        "شكل مسحوق إنزيم جاف لبرامج العلامة الخاصة",
        "اتجاه معالجة OEM/ODM شاملة",
        "مخزون جاهز وإرسال سريع",
        "دعم تسعير الكميات على البطاقات"
      ],
      "format": "مسحوق"
    },
    "fr": {
      "name": "Poudre de bromélaïne — traitement OEM/ODM one-stop",
      "specs": [
        "Poudre enzymatique de bromélaïne",
        "Libellé stock prêt / expédition rapide"
      ],
      "sellingPoints": [
        "Format poudre enzymatique sèche pour programmes marque blanche",
        "Direction traitement OEM/ODM one-stop",
        "Stock prêt et expédition rapide",
        "Support tarifs volume sur fiches"
      ],
      "format": "poudre"
    },
    "ko": {
      "name": "브로멜라인 파우더 — 원스톱 OEM/ODM 가공",
      "specs": [
        "브로멜라인 효소 파우더",
        "즉시재고 / 빠른출고 문구"
      ],
      "sellingPoints": [
        "프라이빗 라벨용 건식 효소 파우더 제형",
        "OEM/ODM 원스톱 가공 방향",
        "즉시재고 및 빠른출고 문구",
        "카드에 대량 주문 가격 지원"
      ],
      "format": "파우더"
    },
    "pt": {
      "name": "Pó de bromelina — processamento OEM/ODM one-stop",
      "specs": [
        "Pó enzimático de bromelina",
        "Texto de estoque pronto / despacho rápido"
      ],
      "sellingPoints": [
        "Formato de pó enzimático seco para programas marca própria",
        "Direção de processamento OEM/ODM one-stop",
        "Estoque pronto e despacho rápido",
        "Suporte de preço por volume nos cartões"
      ],
      "format": "pó"
    },
    "vi": {
      "name": "Bột bromelain — gia công OEM/ODM một cửa",
      "specs": [
        "Bột enzyme bromelain",
        "Chữ sẵn kho / giao nhanh"
      ],
      "sellingPoints": [
        "Dạng bột enzyme khô cho chương trình nhãn riêng",
        "Hướng gia công OEM/ODM một cửa",
        "Sẵn kho và giao nhanh",
        "Hỗ trợ giá theo khối lượng trên thẻ"
      ],
      "format": "bột"
    },
    "id": {
      "name": "Bubuk bromelain — pemrosesan OEM/ODM one-stop",
      "specs": [
        "Bubuk enzim bromelain",
        "Wording stok siap / kirim cepat"
      ],
      "sellingPoints": [
        "Format bubuk enzim kering untuk program private label",
        "Arah pemrosesan OEM/ODM one-stop",
        "Stok siap dan kirim cepat",
        "Dukungan harga volume pada kartu"
      ],
      "format": "bubuk"
    },
    "th": {
      "name": "ผงโบรมีเลน — แปรรูป OEM/ODM ครบวงจร",
      "specs": [
        "ผงเอนไซม์โบรมีเลน",
        "ข้อความสต็อกพร้อม / ส่งเร็ว"
      ],
      "sellingPoints": [
        "รูปแบบผงเอนไซม์แห้งสำหรับโปรแกรมไพรเวทเลเบล",
        "ทิศทางการแปรรูป OEM/ODM ครบวงจร",
        "สต็อกพร้อมและส่งเร็ว",
        "รองรับราคาตามปริมาณบนการ์ด"
      ],
      "format": "ผง"
    },
    "hi": {
      "name": "ब्रोमेलैन पाउडर — वन-स्टॉप OEM/ODM प्रोसेसिंग",
      "specs": [
        "ब्रोमेलैन एंजाइम पाउडर",
        "रेडी-स्टॉक / फास्ट-डिस्पैच शब्द"
      ],
      "sellingPoints": [
        "प्राइवेट लेबल कार्यक्रमों के लिए ड्राई एंजाइम पाउडर",
        "OEM/ODM वन-स्टॉप प्रोसेसिंग दिशा",
        "रेडी-स्टॉक और फास्ट-डिस्पैच",
        "कार्ड पर वॉल्यूम ऑर्डर मूल्य समर्थन"
      ],
      "format": "पाउडर"
    },
    "bn": {
      "name": "ব্রোমেলেন পাউডার — ওয়ান-স্টপ OEM/ODM প্রসেসিং",
      "specs": [
        "ব্রোমেলেন এনজাইম পাউডার",
        "রেডি-স্টক / ফাস্ট-ডিসপ্যাচ ওয়ার্ডিং"
      ],
      "sellingPoints": [
        "প্রাইভেট লেবেল প্রোগ্রামের জন্য শুষ্ক এনজাইম পাউডার",
        "OEM/ODM ওয়ান-স্টপ প্রসেসিং দিক",
        "রেডি-স্টক ও ফাস্ট-ডিসপ্যাচ",
        "কার্ডে ভলিউম অর্ডার মূল্য সহায়তা"
      ],
      "format": "পাউডার"
    },
    "ru": {
      "name": "Порошок бромелайна — one-stop OEM/ODM обработка",
      "specs": [
        "Порошок фермента бромелайна",
        "Формулировки готового склада / быстрой отгрузки"
      ],
      "sellingPoints": [
        "Сухой ферментный порошок для private label",
        "Направление one-stop OEM/ODM обработки",
        "Готовый склад и быстрая отгрузка",
        "Поддержка цен на объём на карточках"
      ],
      "format": "порошок"
    },
    "ur": {
      "name": "برومیلیئن پاؤڈر — ون اسٹاپ OEM/ODM پروسیسنگ",
      "specs": [
        "برومیلیئن اینزائم پاؤڈر",
        "ریڈی اسٹاک / فاسٹ ڈسپیچ ورڈنگ"
      ],
      "sellingPoints": [
        "پرائیویٹ لیبل پروگرامز کے لیے خشک اینزائم پاؤڈر",
        "OEM/ODM ون اسٹاپ پروسیسنگ سمت",
        "ریڈی اسٹاک اور فاسٹ ڈسپیچ",
        "کارڈز پر والیوم آرڈر قیمت سپورٹ"
      ],
      "format": "پاؤڈر"
    }
  },
  "probiotic-magenvital-oem-30": {
    "en": {
      "name": "German probiotic capsules — 30-count OEM private label",
      "specs": [
        "30 capsules per box (example)"
      ],
      "sellingPoints": [
        "Capsule format with 30-count pack shown",
        "OEM / private-label packaging direction",
        "Packaging, formula, and specification customization shown",
        "Packaging design support shown"
      ],
      "format": "capsule"
    },
    "zh-tw": {
      "name": "德國益生菌膠囊 OEM 貼牌（30 粒）",
      "specs": [
        "每盒 30 粒（示例）"
      ],
      "sellingPoints": [
        "顯示 30 粒膠囊包裝",
        "OEM／貼牌包裝方向",
        "顯示包裝、配方與規格客製",
        "顯示包裝設計支援"
      ],
      "format": "膠囊"
    },
    "es": {
      "name": "Cápsulas probióticas alemanas — OEM marca privada 30 unidades",
      "specs": [
        "30 cápsulas por caja (ejemplo)"
      ],
      "sellingPoints": [
        "Formato cápsula con pack de 30",
        "Dirección de empaque OEM / marca privada",
        "Personalización de empaque, fórmula y especificación",
        "Soporte de diseño de empaque"
      ],
      "format": "cápsula"
    },
    "ja": {
      "name": "ドイツ産プロバイオカプセル — 30粒 OEMプライベートラベル",
      "specs": [
        "1箱30粒（例）"
      ],
      "sellingPoints": [
        "30粒パックのカプセル剤形",
        "OEM／PL包装方向",
        "包装・処方・仕様のカスタム表示",
        "包装デザイン支援の表示"
      ],
      "format": "カプセル"
    },
    "de": {
      "name": "Deutsche Probiotika-Kapseln — 30er OEM Private Label",
      "specs": [
        "30 Kapseln pro Box (Beispiel)"
      ],
      "sellingPoints": [
        "Kapselformat mit 30er-Pack",
        "OEM-/Private-Label-Verpackungsrichtung",
        "Anpassung von Verpackung, Formel und Spec",
        "Verpackungsdesign-Support"
      ],
      "format": "Kapsel"
    },
    "ar": {
      "name": "كبسولات بروبيوتيك ألمانية — OEM علامة خاصة 30 حبة",
      "specs": [
        "30 كبسولة لكل علبة (مثال)"
      ],
      "sellingPoints": [
        "شكل كبسولة مع عبوة 30",
        "اتجاه تغليف OEM / علامة خاصة",
        "تخصيص التغليف والصيغة والمواصفات",
        "دعم تصميم التغليف"
      ],
      "format": "كبسولة"
    },
    "fr": {
      "name": "Gélules probiotiques allemandes — OEM marque blanche 30 unités",
      "specs": [
        "30 gélules par boîte (exemple)"
      ],
      "sellingPoints": [
        "Format gélule avec pack de 30",
        "Direction packaging OEM / marque blanche",
        "Personnalisation packaging, formule et spécification",
        "Support design packaging"
      ],
      "format": "gélule"
    },
    "ko": {
      "name": "독일 프로바이오틱 캡슐 — 30정 OEM 프라이빗 라벨",
      "specs": [
        "상자당 30캡슐(예시)"
      ],
      "sellingPoints": [
        "30정 팩 캡슐 제형",
        "OEM / 프라이빗 라벨 패키징 방향",
        "패키징·포뮬러·사양 커스터마이징",
        "패키징 디자인 지원"
      ],
      "format": "캡슐"
    },
    "pt": {
      "name": "Cápsulas probióticas alemãs — OEM marca própria 30 unidades",
      "specs": [
        "30 cápsulas por caixa (exemplo)"
      ],
      "sellingPoints": [
        "Formato cápsula com pack de 30",
        "Direção de embalagem OEM / marca própria",
        "Personalização de embalagem, fórmula e especificação",
        "Suporte de design de embalagem"
      ],
      "format": "cápsula"
    },
    "vi": {
      "name": "Viên probiotic Đức — OEM nhãn riêng 30 viên",
      "specs": [
        "30 viên mỗi hộp (ví dụ)"
      ],
      "sellingPoints": [
        "Dạng viên với pack 30",
        "Hướng đóng gói OEM / nhãn riêng",
        "Tùy chỉnh bao bì, công thức và quy cách",
        "Hỗ trợ thiết kế bao bì"
      ],
      "format": "viên nang"
    },
    "id": {
      "name": "Kapsul probiotik Jerman — OEM private label 30 butir",
      "specs": [
        "30 kapsul per kotak (contoh)"
      ],
      "sellingPoints": [
        "Format kapsul dengan pack 30",
        "Arah kemasan OEM / private label",
        "Kustomisasi kemasan, formula, dan spesifikasi",
        "Dukungan desain kemasan"
      ],
      "format": "kapsul"
    },
    "th": {
      "name": "แคปซูลโปรไบโอติกเยอรมัน — OEM ไพรเวทเลเบล 30 เม็ด",
      "specs": [
        "30 แคปซูลต่อกล่อง (ตัวอย่าง)"
      ],
      "sellingPoints": [
        "รูปแบบแคปซูลแพ็ก 30",
        "ทิศทางบรรจุภัณฑ์ OEM / ไพรเวทเลเบล",
        "ปรับแต่งบรรจุภัณฑ์ สูตร และสเปก",
        "รองรับออกแบบบรรจุภัณฑ์"
      ],
      "format": "แคปซูล"
    },
    "hi": {
      "name": "जर्मन प्रोबायोटिक कैप्सूल — 30-काउंट OEM प्राइवेट लेबल",
      "specs": [
        "प्रति बॉक्स 30 कैप्सूल (उदाहरण)"
      ],
      "sellingPoints": [
        "30-काउंट पैक कैप्सूल प्रारूप",
        "OEM / प्राइवेट लेबल पैकेजिंग दिशा",
        "पैकेजिंग, फॉर्मूला और स्पेक कस्टमाइज़ेशन",
        "पैकेजिंग डिज़ाइन सपोर्ट"
      ],
      "format": "कैप्सूल"
    },
    "bn": {
      "name": "জার্মান প্রোবায়োটিক ক্যাপসুল — ৩০-কাউন্ট OEM প্রাইভেট লেবেল",
      "specs": [
        "প্রতি বক্সে ৩০ ক্যাপসুল (উদাহরণ)"
      ],
      "sellingPoints": [
        "৩০-কাউন্ট প্যাক ক্যাপসুল ফরম্যাট",
        "OEM / প্রাইভেট লেবেল প্যাকেজিং দিক",
        "প্যাকেজিং, ফর্মুলা ও স্পেক কাস্টমাইজেশন",
        "প্যাকেজিং ডিজাইন সহায়তা"
      ],
      "format": "ক্যাপসুল"
    },
    "ru": {
      "name": "Немецкие пробиотические капсулы — OEM private label 30 шт.",
      "specs": [
        "30 капсул в коробке (пример)"
      ],
      "sellingPoints": [
        "Формат капсул с упаковкой 30 шт.",
        "Направление упаковки OEM / private label",
        "Кастомизация упаковки, формулы и спецификации",
        "Поддержка дизайна упаковки"
      ],
      "format": "капсула"
    },
    "ur": {
      "name": "جرمن پروبائیوٹک کیپسول — 30 کاؤنٹ OEM پرائیویٹ لیبل",
      "specs": [
        "فی باکس 30 کیپسول (مثال)"
      ],
      "sellingPoints": [
        "30 کاؤنٹ پیک کیپسول فارمیٹ",
        "OEM / پرائیویٹ لیبل پیکیجنگ سمت",
        "پیکیجنگ، فارمولا اور اسپیگ کسٹمائزیشن",
        "پیکیجنگ ڈیزائن سپورٹ"
      ],
      "format": "کیپسول"
    }
  },
  "probiotic-japan-56-pack": {
    "en": {
      "name": "Japanese probiotic sachet — 56-count pack",
      "specs": [
        "56-count pack (example)",
        "Authorization support shown"
      ],
      "sellingPoints": [
        "Lightweight single-pack format for dietary-supplement programs",
        "56-count pack shown on indexed cards",
        "Authorization support wording shown",
        "One-piece dropshipping support shown (logistics option — not a disease claim)"
      ],
      "format": "powder"
    },
    "zh-tw": {
      "name": "日本益生菌（56 粒／袋）",
      "specs": [
        "56 粒包裝（示例）",
        "授權支援說明"
      ],
      "sellingPoints": [
        "適用膳食補充劑方案的輕量單包劑型",
        "索引卡顯示 56 粒包裝",
        "授權支援用語",
        "顯示一件代發支援（物流選項 — 非疾病宣稱）"
      ],
      "format": "粉劑"
    },
    "es": {
      "name": "Sobre probiótico japonés — pack de 56",
      "specs": [
        "Pack de 56 (ejemplo)",
        "Soporte de autorización mostrado"
      ],
      "sellingPoints": [
        "Formato de pack individual ligero para programas de suplementos",
        "Pack de 56 en fichas indexadas",
        "Lenguaje de soporte de autorización",
        "Soporte dropshipping unitario (opción logística — no claim de enfermedad)"
      ],
      "format": "polvo"
    },
    "ja": {
      "name": "日本産プロバイオサシェ — 56個パック",
      "specs": [
        "56個パック（例）",
        "認可サポートの記載"
      ],
      "sellingPoints": [
        "ダイエタリーサプリ向け軽量シングルパック",
        "インデックスカードに56個パック",
        "認可サポートの記載",
        "一件代発サポート（物流オプション — 疾病主張ではない）"
      ],
      "format": "粉末"
    },
    "de": {
      "name": "Japanisches Probiotika-Sachet — 56er-Pack",
      "specs": [
        "56er-Pack (Beispiel)",
        "Autorisierungs-Support angezeigt"
      ],
      "sellingPoints": [
        "Leichtes Einzelpack-Format für Nahrungsergänzungsprogramme",
        "56er-Pack auf indexierten Karten",
        "Autorisierungs-Wortlaut",
        "Einzelfracht-Dropshipping-Support (Logistikoption — kein Krankheitsclaim)"
      ],
      "format": "Pulver"
    },
    "ar": {
      "name": "كيس بروبيوتيك ياباني — عبوة 56",
      "specs": [
        "عبوة 56 (مثال)",
        "دعم تفويض ظاهر"
      ],
      "sellingPoints": [
        "شكل عبوة فردية خفيفة لبرامج المكملات",
        "عبوة 56 على البطاقات المفهرسة",
        "صياغة دعم التفويض",
        "دعم إسقاط الشحنة بالقطعة (خيار لوجستي — ليس ادعاء مرض)"
      ],
      "format": "مسحوق"
    },
    "fr": {
      "name": "Sachet probiotique japonais — pack de 56",
      "specs": [
        "Pack de 56 (exemple)",
        "Support d’autorisation indiqué"
      ],
      "sellingPoints": [
        "Format pack unitaire léger pour programmes de compléments",
        "Pack de 56 sur fiches indexées",
        "Libellé support d’autorisation",
        "Support dropshipping unitaire (option logistique — pas un claim maladie)"
      ],
      "format": "poudre"
    },
    "ko": {
      "name": "일본 프로바이오틱 사셰 — 56개 팩",
      "specs": [
        "56개 팩(예시)",
        "인가 지원 표시"
      ],
      "sellingPoints": [
        "건강기능식품 프로그램용 경량 단일 팩",
        "인덱싱 카드에 56개 팩",
        "인가 지원 문구",
        "단건 드롭시핑 지원(물류 옵션 — 질병 클레임 아님)"
      ],
      "format": "파우더"
    },
    "pt": {
      "name": "Sachê probiótico japonês — pack de 56",
      "specs": [
        "Pack de 56 (exemplo)",
        "Suporte de autorização indicado"
      ],
      "sellingPoints": [
        "Formato de pack unitário leve para programas de suplementos",
        "Pack de 56 em cartões indexados",
        "Texto de suporte de autorização",
        "Suporte dropshipping unitário (opção logística — não é claim de doença)"
      ],
      "format": "pó"
    },
    "vi": {
      "name": "Gói probiotic Nhật — pack 56",
      "specs": [
        "Pack 56 (ví dụ)",
        "Hỗ trợ ủy quyền được nêu"
      ],
      "sellingPoints": [
        "Dạng pack đơn nhẹ cho chương trình TPCN",
        "Pack 56 trên thẻ lập chỉ mục",
        "Chữ hỗ trợ ủy quyền",
        "Hỗ trợ dropshipping từng kiện (tuỳ chọn logistics — không phải claim bệnh)"
      ],
      "format": "bột"
    },
    "id": {
      "name": "Sachet probiotik Jepang — pack 56",
      "specs": [
        "Pack 56 (contoh)",
        "Dukungan otorisasi ditunjukkan"
      ],
      "sellingPoints": [
        "Format pack tunggal ringan untuk program suplement",
        "Pack 56 pada kartu terindeks",
        "Wording dukungan otorisasi",
        "Dukungan dropshipping satuan (opsi logistik — bukan klaim penyakit)"
      ],
      "format": "bubuk"
    },
    "th": {
      "name": "ซองโปรไบโอติกญี่ปุ่น — แพ็ก 56",
      "specs": [
        "แพ็ก 56 (ตัวอย่าง)",
        "แสดงการสนับสนุนการอนุญาต"
      ],
      "sellingPoints": [
        "รูปแบบแพ็กเดี่ยวน้ำหนักเบาสำหรับโปรแกรมผลิตภัณฑ์เสริมอาหาร",
        "แพ็ก 56 บนการ์ดที่จัดทำดัชนี",
        "ข้อความสนับสนุนการอนุญาต",
        "รองรับดรอปชิปทีละชิ้น (ตัวเลือกลอจิสติกส์ — ไม่ใช่เคลมโรค)"
      ],
      "format": "ผง"
    },
    "hi": {
      "name": "जापानी प्रोबायोटिक सैशे — 56-काउंट पैक",
      "specs": [
        "56-काउंट पैक (उदाहरण)",
        "अथॉराइज़ेशन सपोर्ट दिखाया"
      ],
      "sellingPoints": [
        "आहार पूरक कार्यक्रमों के लिए हल्का सिंगल-पैक",
        "इंडेक्स्ड कार्ड पर 56-काउंट पैक",
        "अथॉराइज़ेशन सपोर्ट शब्द",
        "वन-पीस ड्रॉपशिपिंग सपोर्ट (लॉजिस्टिक्स विकल्प — रोग दावा नहीं)"
      ],
      "format": "पाउडर"
    },
    "bn": {
      "name": "জাপানি প্রোবায়োটিক স্যাশে — ৫৬-কাউন্ট প্যাক",
      "specs": [
        "৫৬-কাউন্ট প্যাক (উদাহরণ)",
        "অথরাইজেশন সাপোর্ট দেখানো"
      ],
      "sellingPoints": [
        "খাদ্য সম্পূরক প্রোগ্রামের জন্য হালকা সিঙ্গেল-প্যাক",
        "ইনডেক্সড কার্ডে ৫৬-কাউন্ট প্যাক",
        "অথরাইজেশন সাপোর্ট ওয়ার্ডিং",
        "ওয়ান-পিস ড্রপশিপিং সাপোর্ট (লজিস্টিকস অপশন — রোগ দাবি নয়)"
      ],
      "format": "পাউডার"
    },
    "ru": {
      "name": "Японский пробиотический саше — упаковка 56 шт.",
      "specs": [
        "Упаковка 56 шт. (пример)",
        "Показана поддержка авторизации"
      ],
      "sellingPoints": [
        "Лёгкий одиночный пак для программ БАД",
        "Упаковка 56 на индексированных карточках",
        "Формулировки поддержки авторизации",
        "Поддержка штучного дропшиппинга (логистическая опция — не claim о болезни)"
      ],
      "format": "порошок"
    },
    "ur": {
      "name": "جاپانی پروبائیوٹک سیشے — 56 کاؤنٹ پیک",
      "specs": [
        "56 کاؤنٹ پیک (مثال)",
        "اتھارائزیشن سپورٹ دکھائی گئی"
      ],
      "sellingPoints": [
        "غذائی سپلیمنٹ پروگرامز کے لیے ہلکا سنگل پیک",
        "انڈیکسڈ کارڈز پر 56 کاؤنٹ پیک",
        "اتھارائزیشن سپورٹ ورڈنگ",
        "ون پیس ڈراپ شپنگ سپورٹ (لاجسٹکس آپشن — بیماری کا دعویٰ نہیں)"
      ],
      "format": "پاؤڈر"
    }
  },
  "fiber-composite-oem-box": {
    "en": {
      "name": "Composite fiber powder — OEM package concept",
      "specs": [
        "Composite dietary-fiber powder",
        "OEM package example"
      ],
      "sellingPoints": [
        "Composite dietary-fiber powder format",
        "OEM package concept shown",
        "Retail-ready box direction for private label",
        "Light, dry-format product suitable for brand packaging"
      ],
      "format": "powder"
    },
    "zh-tw": {
      "name": "複合纖維粉 OEM 包裝概念",
      "specs": [
        "複合膳食纖維粉",
        "OEM 包裝示例"
      ],
      "sellingPoints": [
        "複合膳食纖維粉劑型",
        "顯示 OEM 包裝概念",
        "貼牌零售就緒盒裝方向",
        "適合品牌包裝的輕量乾粉產品"
      ],
      "format": "粉劑"
    },
    "es": {
      "name": "Polvo de fibra compuesta — concepto de empaque OEM",
      "specs": [
        "Polvo de fibra dietética compuesta",
        "Ejemplo de empaque OEM"
      ],
      "sellingPoints": [
        "Formato de polvo de fibra dietética compuesta",
        "Concepto de empaque OEM mostrado",
        "Dirección de caja lista para retail marca privada",
        "Producto ligero en seco apto para empaque de marca"
      ],
      "format": "polvo"
    },
    "ja": {
      "name": "複合食物繊維粉末 — OEMパッケージ概念",
      "specs": [
        "複合食物繊維粉末",
        "OEMパッケージ例"
      ],
      "sellingPoints": [
        "複合食物繊維粉末剤形",
        "OEMパッケージ概念の表示",
        "PL向けリテール対応ボックス方向",
        "ブランド包装に適した軽量乾燥製品"
      ],
      "format": "粉末"
    },
    "de": {
      "name": "Verbund-Ballaststoffpulver — OEM-Verpackungskonzept",
      "specs": [
        "Verbund-Ballaststoffpulver",
        "OEM-Verpackungsbeispiel"
      ],
      "sellingPoints": [
        "Verbund-Ballaststoffpulver-Format",
        "OEM-Verpackungskonzept angezeigt",
        "Retail-fertige Box-Richtung für Private Label",
        "Leichtes Trockenprodukt geeignet für Markenverpackung"
      ],
      "format": "Pulver"
    },
    "ar": {
      "name": "مسحوق ألياف مركّب — مفهوم عبوة OEM",
      "specs": [
        "مسحوق ألياف غذائية مركّب",
        "مثال عبوة OEM"
      ],
      "sellingPoints": [
        "شكل مسحوق ألياف غذائية مركّب",
        "مفهوم عبوة OEM ظاهر",
        "اتجاه علبة جاهزة للتجزئة للعلامة الخاصة",
        "منتج خفيف جاف مناسب لتغليف العلامة"
      ],
      "format": "مسحوق"
    },
    "fr": {
      "name": "Poudre de fibres composites — concept d’emballage OEM",
      "specs": [
        "Poudre de fibres alimentaires composites",
        "Exemple d’emballage OEM"
      ],
      "sellingPoints": [
        "Format poudre de fibres alimentaires composites",
        "Concept d’emballage OEM indiqué",
        "Direction boîte retail-ready pour marque blanche",
        "Produit sec léger adapté au packaging de marque"
      ],
      "format": "poudre"
    },
    "ko": {
      "name": "복합 식이섬유 파우더 — OEM 패키지 컨셉",
      "specs": [
        "복합 식이섬유 파우더",
        "OEM 패키지 예시"
      ],
      "sellingPoints": [
        "복합 식이섬유 파우더 제형",
        "OEM 패키지 컨셉 표시",
        "프라이빗 라벨용 리테일 레디 박스 방향",
        "브랜드 패키징에 적합한 가벼운 건식 제품"
      ],
      "format": "파우더"
    },
    "pt": {
      "name": "Pó de fibra composta — conceito de embalagem OEM",
      "specs": [
        "Pó de fibra alimentar composta",
        "Exemplo de embalagem OEM"
      ],
      "sellingPoints": [
        "Formato de pó de fibra alimentar composta",
        "Conceito de embalagem OEM mostrado",
        "Direção de caixa pronta para varejo marca própria",
        "Produto seco leve adequado para embalagem de marca"
      ],
      "format": "pó"
    },
    "vi": {
      "name": "Bột chất xơ hỗn hợp — khái niệm bao bì OEM",
      "specs": [
        "Bột chất xơ dinh dưỡng hỗn hợp",
        "Ví dụ bao bì OEM"
      ],
      "sellingPoints": [
        "Dạng bột chất xơ dinh dưỡng hỗn hợp",
        "Khái niệm bao bì OEM được nêu",
        "Hướng hộp sẵn bán lẻ cho nhãn riêng",
        "Sản phẩm khô nhẹ phù hợp bao bì thương hiệu"
      ],
      "format": "bột"
    },
    "id": {
      "name": "Bubuk serat komposit — konsep kemasan OEM",
      "specs": [
        "Bubuk serat pangan komposit",
        "Contoh kemasan OEM"
      ],
      "sellingPoints": [
        "Format bubuk serat pangan komposit",
        "Konsep kemasan OEM ditunjukkan",
        "Arah kotak siap ritel untuk private label",
        "Produk kering ringan cocok untuk kemasan merek"
      ],
      "format": "bubuk"
    },
    "th": {
      "name": "ผงไฟเบอร์คอมโพสิต — แนวคิดบรรจุภัณฑ์ OEM",
      "specs": [
        "ผงไฟเบอร์อาหารคอมโพสิต",
        "ตัวอย่างบรรจุภัณฑ์ OEM"
      ],
      "sellingPoints": [
        "รูปแบบผงไฟเบอร์อาหารคอมโพสิต",
        "แสดงแนวคิดบรรจุภัณฑ์ OEM",
        "ทิศทางกล่องพร้อมขายปลีกสำหรับไพรเวทเลเบล",
        "ผลิตภัณฑ์แห้งน้ำหนักเบาเหมาะกับบรรจุภัณฑ์แบรนด์"
      ],
      "format": "ผง"
    },
    "hi": {
      "name": "कंपोजिट फाइबर पाउडर — OEM पैकेज कॉन्सेप्ट",
      "specs": [
        "कंपोजिट डाइटरी-फाइबर पाउडर",
        "OEM पैकेज उदाहरण"
      ],
      "sellingPoints": [
        "कंपोजिट डाइटरी-फाइबर पाउडर प्रारूप",
        "OEM पैकेज कॉन्सेप्ट दिखाया",
        "प्राइवेट लेबल के लिए रिटेल-रेडी बॉक्स दिशा",
        "ब्रांड पैकेजिंग के लिए उपयुक्त हल्का ड्राई उत्पाद"
      ],
      "format": "पाउडर"
    },
    "bn": {
      "name": "কম্পোজিট ফাইবার পাউডার — OEM প্যাকেজ কনসেপ্ট",
      "specs": [
        "কম্পোজিট ডায়েটারি-ফাইবার পাউডার",
        "OEM প্যাকেজ উদাহরণ"
      ],
      "sellingPoints": [
        "কম্পোজিট ডায়েটারি-ফাইবার পাউডার ফরম্যাট",
        "OEM প্যাকেজ কনসেপ্ট দেখানো",
        "প্রাইভেট লেবেলের জন্য রিটেইল-রেডি বক্স দিক",
        "ব্র্যান্ড প্যাকেজিংয়ের উপযোগী হালকা শুষ্ক পণ্য"
      ],
      "format": "পাউডার"
    },
    "ru": {
      "name": "Композитный порошок клетчатки — концепт упаковки OEM",
      "specs": [
        "Композитный порошок пищевой клетчатки",
        "Пример упаковки OEM"
      ],
      "sellingPoints": [
        "Формат композитного порошка клетчатки",
        "Показан концепт упаковки OEM",
        "Направление retail-ready коробки для private label",
        "Лёгкий сухой продукт для брендовой упаковки"
      ],
      "format": "порошок"
    },
    "ur": {
      "name": "کمپوزٹ فائبر پاؤڈر — OEM پیکج تصور",
      "specs": [
        "کمپوزٹ غذائی فائبر پاؤڈر",
        "OEM پیکج مثال"
      ],
      "sellingPoints": [
        "کمپوزٹ غذائی فائبر پاؤڈر فارمیٹ",
        "OEM پیکج تصور دکھایا گیا",
        "پرائیویٹ لیبل کے لیے ریٹیل ریڈی باکس سمت",
        "برانڈ پیکیجنگ کے لیے موزوں ہلکی خشک مصنوعات"
      ],
      "format": "پاؤڈر"
    }
  },
  "fiber-inulin-soluble-oem": {
    "en": {
      "name": "Inulin soluble dietary-fiber powder drink OEM",
      "specs": [
        "Inulin soluble dietary-fiber solid drink (powder)",
        "Cross-border e-commerce positioning shown",
        "On-demand customization"
      ],
      "sellingPoints": [
        "Inulin soluble dietary-fiber powder format",
        "Cross-border e-commerce positioning shown",
        "On-demand customization for formula and pack",
        "Flavor, formula, and packaging customization shown",
        "Free design / sample wording shown on cards"
      ],
      "format": "powder"
    },
    "zh-tw": {
      "name": "菊粉可溶性膳食纖維固體飲料 OEM",
      "specs": [
        "菊粉可溶性膳食纖維固體飲料（粉）",
        "跨境電商定位說明",
        "按需客製"
      ],
      "sellingPoints": [
        "菊粉可溶性膳食纖維粉劑型",
        "跨境電商定位說明",
        "配方與包裝按需客製",
        "顯示風味、配方與包裝客製",
        "卡片顯示免費設計／樣品用語"
      ],
      "format": "粉劑"
    },
    "es": {
      "name": "Bebida en polvo de fibra soluble de inulina OEM",
      "specs": [
        "Bebida sólida de fibra soluble de inulina (polvo)",
        "Posicionamiento e-commerce cross-border",
        "Personalización bajo demanda"
      ],
      "sellingPoints": [
        "Formato polvo de fibra soluble de inulina",
        "Posicionamiento e-commerce cross-border",
        "Personalización bajo demanda de fórmula y pack",
        "Personalización de sabor, fórmula y empaque",
        "Diseño / muestra gratis en fichas"
      ],
      "format": "polvo"
    },
    "ja": {
      "name": "イヌリン水溶性食物繊維粉末飲料 OEM",
      "specs": [
        "イヌリン水溶性食物繊維固体飲料（粉末）",
        "越境ECポジショニング",
        "オンデマンドカスタム"
      ],
      "sellingPoints": [
        "イヌリン水溶性食物繊維粉末剤形",
        "越境ECポジショニング",
        "処方・パックのオンデマンドカスタム",
        "フレーバー・処方・包装のカスタム",
        "カードに無料デザイン／サンプル記載"
      ],
      "format": "粉末"
    },
    "de": {
      "name": "Inulin lösliches Ballaststoff-Pulvergetränk OEM",
      "specs": [
        "Inulin lösliches Ballaststoff-Feststoffgetränk (Pulver)",
        "Cross-Border-E-Commerce-Positionierung",
        "On-Demand-Customization"
      ],
      "sellingPoints": [
        "Inulin lösliches Ballaststoffpulver-Format",
        "Cross-Border-E-Commerce-Positionierung",
        "On-Demand-Customization für Formel und Pack",
        "Geschmack-, Formel- und Verpackungsanpassung",
        "Gratis-Design / Muster auf Karten"
      ],
      "format": "Pulver"
    },
    "ar": {
      "name": "مشروب مسحوق ألياف إينولين قابلة للذوبان OEM",
      "specs": [
        "مشروب صلب من ألياف إينولين قابلة للذوبان (مسحوق)",
        "تموضع تجارة إلكترونية عابرة للحدود",
        "تخصيص حسب الطلب"
      ],
      "sellingPoints": [
        "شكل مسحوق ألياف إينولين قابلة للذوبان",
        "تموضع تجارة إلكترونية عابرة للحدود",
        "تخصيص حسب الطلب للصيغة والعبوة",
        "تخصيص النكهة والصيغة والتغليف",
        "تصميم / عينة مجانية على البطاقات"
      ],
      "format": "مسحوق"
    },
    "fr": {
      "name": "Boisson en poudre fibres solubles d’inuline OEM",
      "specs": [
        "Boisson solide fibres solubles d’inuline (poudre)",
        "Positionnement e-commerce cross-border",
        "Personnalisation à la demande"
      ],
      "sellingPoints": [
        "Format poudre fibres solubles d’inuline",
        "Positionnement e-commerce cross-border",
        "Personnalisation à la demande formule et pack",
        "Personnalisation goût, formule et packaging",
        "Design / échantillon gratuits sur fiches"
      ],
      "format": "poudre"
    },
    "ko": {
      "name": "이눌린 수용성 식이섬유 파우더 드링크 OEM",
      "specs": [
        "이눌린 수용성 식이섬유 고형 음료(파우더)",
        "크로스보더 이커머스 포지셔닝",
        "온디맨드 커스터마이징"
      ],
      "sellingPoints": [
        "이눌린 수용성 식이섬유 파우더 제형",
        "크로스보더 이커머스 포지셔닝",
        "포뮬러·팩 온디맨드 커스터마이징",
        "맛·포뮬러·패키징 커스터마이징",
        "카드에 무료 디자인/샘플 문구"
      ],
      "format": "파우더"
    },
    "pt": {
      "name": "Bebida em pó de fibra solúvel de inulina OEM",
      "specs": [
        "Bebida sólida de fibra solúvel de inulina (pó)",
        "Posicionamento e-commerce cross-border",
        "Personalização sob demanda"
      ],
      "sellingPoints": [
        "Formato pó de fibra solúvel de inulina",
        "Posicionamento e-commerce cross-border",
        "Personalização sob demanda de fórmula e pack",
        "Personalização de sabor, fórmula e embalagem",
        "Design / amostra grátis nos cartões"
      ],
      "format": "pó"
    },
    "vi": {
      "name": "Thức uống bột chất xơ hòa tan inulin OEM",
      "specs": [
        "Thức uống rắn chất xơ hòa tan inulin (bột)",
        "Định vị thương mại điện tử xuyên biên giới",
        "Tùy chỉnh theo yêu cầu"
      ],
      "sellingPoints": [
        "Dạng bột chất xơ hòa tan inulin",
        "Định vị TMĐT xuyên biên giới",
        "Tùy chỉnh công thức và pack theo yêu cầu",
        "Tùy chỉnh hương vị, công thức và bao bì",
        "Chữ thiết kế / mẫu miễn phí trên thẻ"
      ],
      "format": "bột"
    },
    "id": {
      "name": "Minuman bubuk serat larut inulin OEM",
      "specs": [
        "Minuman padat serat larut inulin (bubuk)",
        "Positioning e-commerce lintas batas",
        "Kustomisasi on-demand"
      ],
      "sellingPoints": [
        "Format bubuk serat larut inulin",
        "Positioning e-commerce lintas batas",
        "Kustomisasi on-demand formula dan pack",
        "Kustomisasi rasa, formula, dan kemasan",
        "Desain / sampel gratis pada kartu"
      ],
      "format": "bubuk"
    },
    "th": {
      "name": "เครื่องดื่มผงไฟเบอร์ละลายน้ำอินนูลิน OEM",
      "specs": [
        "เครื่องดื่มแข็งไฟเบอร์ละลายน้ำอินนูลิน (ผง)",
        "การวางตำแหน่งอีคอมเมิร์ซข้ามพรมแดน",
        "ปรับแต่งตามความต้องการ"
      ],
      "sellingPoints": [
        "รูปแบบผงไฟเบอร์ละลายน้ำอินนูลิน",
        "การวางตำแหน่งอีคอมเมิร์ซข้ามพรมแดน",
        "ปรับแต่งสูตรและแพ็กตามสั่ง",
        "ปรับแต่งรสชาติ สูตร และบรรจุภัณฑ์",
        "ข้อความออกแบบ / ตัวอย่างฟรีบนการ์ด"
      ],
      "format": "ผง"
    },
    "hi": {
      "name": "इनुलीन सॉल्यूबल डाइटरी-फाइबर पाउडर ड्रिंक OEM",
      "specs": [
        "इनुलीन सॉल्यूबल डाइटरी-फाइबर सॉलिड ड्रिंक (पाउडर)",
        "क्रॉस-बॉर्डर ई-कॉमर्स पोजिशनिंग",
        "ऑन-डिमांड कस्टमाइज़ेशन"
      ],
      "sellingPoints": [
        "इनुलीन सॉल्यूबल डाइटरी-फाइबर पाउडर प्रारूप",
        "क्रॉस-बॉर्डर ई-कॉमर्स पोजिशनिंग",
        "फॉर्मूला और पैक ऑन-डिमांड कस्टमाइज़ेशन",
        "फ्लेवर, फॉर्मूला और पैकेजिंग कस्टमाइज़ेशन",
        "कार्ड पर मुफ्त डिज़ाइन / सैंपल शब्द"
      ],
      "format": "पाउडर"
    },
    "bn": {
      "name": "ইনুলাইন দ্রবণীয় ডায়েটারি-ফাইবার পাউডার ড্রিঙ্ক OEM",
      "specs": [
        "ইনুলাইন দ্রবণীয় ডায়েটারি-ফাইবার সলিড ড্রিঙ্ক (পাউডার)",
        "ক্রস-বর্ডার ই-কমার্স পজিশনিং",
        "অন-ডিমান্ড কাস্টমাইজেশন"
      ],
      "sellingPoints": [
        "ইনুলাইন দ্রবণীয় ডায়েটারি-ফাইবার পাউডার ফরম্যাট",
        "ক্রস-বর্ডার ই-কমার্স পজিশনিং",
        "ফর্মুলা ও প্যাক অন-ডিমান্ড কাস্টমাইজেশন",
        "ফ্লেভার, ফর্মুলা ও প্যাকেজিং কাস্টমাইজেশন",
        "কার্ডে ফ্রি ডিজাইন / নমুনা ওয়ার্ডিং"
      ],
      "format": "পাউডার"
    },
    "ru": {
      "name": "Порошковый напиток растворимой клетчатки инулин OEM",
      "specs": [
        "Твёрдый напиток растворимой клетчатки инулин (порошок)",
        "Позиционирование кросс-бордер e-commerce",
        "Кастомизация по запросу"
      ],
      "sellingPoints": [
        "Формат порошка растворимой клетчатки инулин",
        "Позиционирование кросс-бордер e-commerce",
        "Кастомизация формулы и пака по запросу",
        "Кастомизация вкуса, формулы и упаковки",
        "Бесплатный дизайн / образец на карточках"
      ],
      "format": "порошок"
    },
    "ur": {
      "name": "انولین حل پذیر غذائی فائبر پاؤڈر ڈرنک OEM",
      "specs": [
        "انولین حل پذیر غذائی فائبر سالڈ ڈرنک (پاؤڈر)",
        "کراس بورڈر ای کامرس پوزیشننگ",
        "آن ڈیمانڈ کسٹمائزیشن"
      ],
      "sellingPoints": [
        "انولین حل پذیر غذائی فائبر پاؤڈر فارمیٹ",
        "کراس بورڈر ای کامرس پوزیشننگ",
        "فارمولا اور پیک آن ڈیمانڈ کسٹمائزیشن",
        "فلیور، فارمولا اور پیکیجنگ کسٹمائزیشن",
        "کارڈز پر مفت ڈیزائن / سیمپل ورڈنگ"
      ],
      "format": "پاؤڈر"
    }
  }
};

export function getLocalizedProduct(locale: Locale, product: Product): LocalizedProductFields {
  const entry = PRODUCT_I18N[product.slug]?.[locale] || PRODUCT_I18N[product.slug]?.en;
  if (entry) return entry;
  return {
    name: product.name,
    specs: product.specs,
    sellingPoints: product.sellingPoints,
    format: product.format,
  };
}

export function getCategoryLabel(locale: Locale, category: ProductCategory): string {
  return getProductsCopy(locale).categories[category];
}

export function getProductCopy(locale: Locale, slug: string, fallback: { tagline: string; alt: string }) {
  const loc = PRODUCT_I18N[slug]?.[locale] || PRODUCT_I18N[slug]?.en;
  if (!loc) return fallback;
  return { tagline: loc.name, alt: loc.name };
}
