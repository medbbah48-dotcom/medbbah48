// ===== إعدادات النادي والبيانات =====

const CLUB_CONFIG = {
  name: "نادي شباب المستقبل",
  city: "السدود",
  country: "موريتانيا",
  phone: "+222 43 XX XX XX",
  email: "info@nadishabab.mr",
  whatsapp: "+222 43 XX XX XX",
  membershipFee: 20, // بالأوقية الجديدة
};

// طرق الدفع (أضف أرقامك الحقيقية)
const PAYMENT_METHODS = {
  bankily: {
    number: "XX XXX XXXX",
    name: "بنكيلي",
    icon: "📱",
    description: "تحويل فوري عبر تطبيق بنكيلي",
  },
  chinguitel: {
    number: "XX XXX XXXX",
    name: "شنقويتل",
    icon: "📞",
    description: "خدمة الدفع عبر الهاتف",
  },
  bank: {
    number: "XXXXXXXX",
    name: "تحويل بنكي",
    icon: "🏦",
    description: "تحويل مباشر للحساب البنكي",
  },
};

// الأذكار
const AZKAR = {
  sabah: [
    {
      text: "الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور",
      count: 1,
      source: "صحيح البخاري",
    },
    {
      text: "اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك النشور",
      count: 1,
      source: "الترمذي",
    },
    {
      text: "سبحان الله وبحمده سبحان الله العظيم",
      count: 100,
      source: "الترمذي",
    },
    {
      text: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير",
      count: 10,
      source: "النسائي",
    },
  ],
  masaa: [
    {
      text: "الحمد لله الذي أمسينا وإليه المصير",
      count: 1,
      source: "صحيح البخاري",
    },
    {
      text: "اللهم بك أمسينا وبك أصبحنا وبك نحيا وبك نموت وإليك المصير",
      count: 1,
      source: "الترمذي",
    },
    {
      text: "أعوذ بالله من الشيطان الرجيم",
      count: 3,
      source: "صحيح البخاري",
    },
  ],
  nawm: [
    {
      text: "اللهم باسمك أموت وأحيا",
      count: 1,
      source: "صحيح البخاري",
    },
    {
      text: "سبحان الله، الحمد لله، لا إله إلا الله، الله أكبر",
      count: 10,
      source: "صحيح مسلم",
    },
  ],
  salah: [
    {
      text: "التحيات لله والصلوات والطيبات، السلام عليك أيها النبي ورحمة الله وبركاته",
      count: 1,
      source: "متفق عليه",
    },
  ],
};

// مواقيت الصلاة (يتم تحديثها بناءً على الموقع)
const PRAYER_TIMES = {
  fajr: "05:30",
  sunrise: "07:00",
  dhuhr: "12:30",
  asr: "16:00",
  maghrib: "18:30",
  isha: "20:00",
};

// الأخبار الافتراضية
const NEWS = [
  {
    id: 1,
    title: "إطلاق تطبيق النادي الرسمي",
    description: "نرحب بكم في التطبيق الجديد الذي يجمع كل خدمات النادي في مكان واحد",
    date: new Date(),
    icon: "📱",
  },
  {
    id: 2,
    title: "دورة قرآنية جديدة",
    description: "تسجيل مفتوح للدورة القرآنية الصيفية - اكتساب الحفظ والتجويد",
    date: new Date(Date.now() - 86400000),
    icon: "📖",
  },
];

// الدورات المتاحة
const COURSES = [
  {
    id: 1,
    name: "تحفيظ القرآن الكريم",
    description: "دورة متخصصة في حفظ كتاب الله بأحكام التجويد",
    icon: "📖",
    status: "مفتوح",
    instructor: "الشيخ أحمد",
  },
  {
    id: 2,
    name: "فقه العبادات",
    description: "شرح مبسط لأحكام العبادات من الكتاب والسنة",
    icon: "🕌",
    status: "مفتوح",
    instructor: "الشيخ محمد",
  },
  {
    id: 3,
    name: "الحديث الشريف",
    description: "دراسة الأحاديث الصحيحة مع الشرح والفوائد",
    icon: "📚",
    status: "قريباً",
    instructor: "الشيخ عبدالله",
  },
];

// بيانات المشرفين
const ADMINS = {
  admin1: {
    username: "admin",
    password: "admin2024", // غيّر هذا لاحقاً!
    name: "مدير النادي",
    role: "مشرف رئيسي",
  },
};

// قائمة الأعضاء (ستتراكم)
let MEMBERS = JSON.parse(localStorage.getItem("members")) || [];

// سجل التبرعات
let DONATIONS = JSON.parse(localStorage.getItem("donations")) || [];

// سجل الأخبار الديناميكية
let DYNAMIC_NEWS = JSON.parse(localStorage.getItem("news")) || NEWS;

// تصدير للاستخدام
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    CLUB_CONFIG,
    PAYMENT_METHODS,
    AZKAR,
    PRAYER_TIMES,
    NEWS,
    COURSES,
    ADMINS,
  };
}
