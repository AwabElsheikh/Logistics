import { motion } from "motion/react";
import { FileText, Send } from "lucide-react";
import { useState } from "react";
import { useLang } from "./LanguageContext";

export function Quote() {
  const { t, lang, dir } = useLang();

  const [formData, setFormData] = useState({
    name: "", company: "", phone: "", email: "",
    cargoType: "", weight: "", from: "", to: "", date: "", notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = lang === "ar"
      ? `طلب عرض سعر جديد\n\nالاسم: ${formData.name}\nالشركة: ${formData.company}\nالهاتف: ${formData.phone}\nالبريد: ${formData.email}\n\nنوع البضاعة: ${formData.cargoType}\nالوزن: ${formData.weight}\nمن: ${formData.from}\nإلى: ${formData.to}\nالتاريخ: ${formData.date}\n\nملاحظات:\n${formData.notes}`
      : `New Quote Request\n\nName: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nCargo Type: ${formData.cargoType}\nWeight: ${formData.weight}\nFrom: ${formData.from}\nTo: ${formData.to}\nDate: ${formData.date}\n\nNotes:\n${formData.notes}`;
    window.open(`https://wa.me/966533839038?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const cargoOptions = lang === "ar"
    ? [
        { v: "عامة",      l: "بضائع عامة" },
        { v: "غذائية",    l: "مواد غذائية" },
        { v: "إلكترونية", l: "أجهزة إلكترونية" },
        { v: "بناء",      l: "مواد بناء" },
        { v: "أثاث",      l: "أثاث" },
        { v: "طبية",      l: "مستلزمات طبية" },
        { v: "أخرى",      l: "أخرى" },
      ]
    : [
        { v: "General",      l: "General Goods" },
        { v: "Food",         l: "Food Products" },
        { v: "Electronics",  l: "Electronics" },
        { v: "Construction", l: "Construction Materials" },
        { v: "Furniture",    l: "Furniture" },
        { v: "Medical",      l: "Medical Supplies" },
        { v: "Other",        l: "Other" },
      ];

  const perks = [
    { emoji: "⚡", title: t("استجابة سريعة", "Fast Response"), desc: t("نرد على جميع الطلبات في أقرب وقت", "We respond to all requests as quickly as possible") },
    { emoji: "💰", title: t("أسعار شفافة", "Transparent Pricing"), desc: t("عروض أسعار واضحة بدون رسوم مخفية", "Clear quotes with no hidden fees") },
    { emoji: "🛡️", title: t("ضمان الجودة", "Quality Assurance"), desc: t("خدمات موثوقة مع الالتزام الكامل", "Reliable service with full commitment") },
  ];

  return (
    <div dir={dir} style={{ fontFamily: lang === "ar" ? "Cairo, sans-serif" : "Poppins, sans-serif" }}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B1F3A] to-[#1a3a5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <h1 className="text-4xl md:text-5xl mb-4">{t("احصل على عرض سعر", "Get a Quote")}</h1>
            <p className="text-xl text-gray-200">{t("املأ النموذج وسنتواصل معك في أقرب وقت", "Fill in the form and we will get back to you shortly")}</p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 rounded-xl shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#FF7A00] w-12 h-12 rounded-lg flex items-center justify-center">
                <FileText size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl text-[#0B1F3A]">{t("نموذج طلب عرض السعر", "Quote Request Form")}</h2>
                <p className="text-gray-500 text-sm">{t("جميع الحقول مطلوبة", "All fields are required")}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#0B1F3A] mb-1.5 text-sm font-medium">{t("الاسم الكامل *", "Full Name *")}</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required
                    placeholder={t("أدخل اسمك الكامل", "Enter your full name")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-[#0B1F3A] mb-1.5 text-sm font-medium">{t("اسم الشركة *", "Company Name *")}</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} required
                    placeholder={t("اسم الشركة أو المؤسسة", "Company or organisation name")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-[#0B1F3A] mb-1.5 text-sm font-medium">{t("رقم الهاتف *", "Phone Number *")}</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                    placeholder="05xxxxxxxx" dir="ltr"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-[#0B1F3A] mb-1.5 text-sm font-medium">{t("البريد الإلكتروني *", "Email Address *")}</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required
                    placeholder="example@email.com" dir="ltr"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-[#0B1F3A] mb-1.5 text-sm font-medium">{t("نوع البضاعة *", "Cargo Type *")}</label>
                  <select name="cargoType" value={formData.cargoType} onChange={handleChange} required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none bg-white">
                    <option value="">{t("اختر نوع البضاعة", "Select cargo type")}</option>
                    {cargoOptions.map((o) => <option key={o.v} value={o.v}>{o.l}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[#0B1F3A] mb-1.5 text-sm font-medium">{t("الوزن التقريبي *", "Approx. Weight *")}</label>
                  <input type="text" name="weight" value={formData.weight} onChange={handleChange} required
                    placeholder={t("مثال: 500 كجم", "e.g. 500 kg")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-[#0B1F3A] mb-1.5 text-sm font-medium">{t("من (المدينة) *", "From (City) *")}</label>
                  <input type="text" name="from" value={formData.from} onChange={handleChange} required
                    placeholder={t("مدينة الانطلاق", "Departure city")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-[#0B1F3A] mb-1.5 text-sm font-medium">{t("إلى (المدينة) *", "To (City) *")}</label>
                  <input type="text" name="to" value={formData.to} onChange={handleChange} required
                    placeholder={t("مدينة الوصول", "Destination city")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[#0B1F3A] mb-1.5 text-sm font-medium">{t("التاريخ المطلوب *", "Required Date *")}</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none" dir="ltr" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[#0B1F3A] mb-1.5 text-sm font-medium">{t("ملاحظات إضافية", "Additional Notes")}</label>
                  <textarea name="notes" value={formData.notes} onChange={handleChange} rows={4}
                    placeholder={t("أي تفاصيل إضافية...", "Any additional details...")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none resize-none" />
                </div>
              </div>

              <button type="submit"
                className="w-full bg-[#FF7A00] text-white py-4 rounded-lg hover:bg-[#e66d00] transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2 font-semibold text-lg">
                <Send size={20} />
                {t("إرسال طلب عرض السعر", "Submit Quote Request")}
              </button>
              <p className="text-sm text-gray-500 text-center">
                {t("بعد الإرسال، سيتم توجيهك إلى واتساب للتواصل المباشر مع فريقنا", "After submitting, you will be redirected to WhatsApp to communicate directly with our team")}
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <h2 className="text-3xl text-[#0B1F3A] mb-10">{t("لماذا تختار عين البحير؟", "Why Choose Ain Al Buhair?")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {perks.map((p, i) => (
                <div key={i} className="p-6 bg-white rounded-xl shadow-md">
                  <div className="text-4xl mb-3">{p.emoji}</div>
                  <h3 className="text-xl text-[#0B1F3A] mb-2 font-semibold">{p.title}</h3>
                  <p className="text-gray-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
