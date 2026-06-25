import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useLang } from "./LanguageContext";

export function Contact() {
  const { t, lang, dir } = useLang();

  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = lang === "ar"
      ? `مرحباً، أنا ${formData.name}\n\nالهاتف: ${formData.phone}\nالبريد: ${formData.email}\n\nالرسالة:\n${formData.message}`
      : `Hello, I am ${formData.name}\n\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.open(`https://wa.me/966533839038?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactItems = [
    { icon: Phone, label: t("الهاتف", "Phone"), value: "0533839038 | 0552941868", link: "tel:+966533839038" },
    { icon: Mail,  label: t("البريد الإلكتروني", "Email"), value: "info@ainalbuhair.com", link: "https://mail.google.com/mail/?view=cm&to=info@ainalbuhair.com" },
    { icon: MapPin, label: t("الموقع", "Location"), value: t("الخبر، المنطقة الشرقية، المملكة العربية السعودية", "Al Khobar, Eastern Province, Saudi Arabia"), link: "#" },
    { icon: Clock,  label: t("ساعات العمل", "Working Hours"), value: t("متاحون للتواصل — على مدار الساعة", "Available for contact — around the clock"), link: "#" },
  ];

  return (
    <div dir={dir} style={{ fontFamily: lang === "ar" ? "Cairo, sans-serif" : "Poppins, sans-serif" }}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B1F3A] to-[#1a3a5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <h1 className="text-4xl md:text-5xl mb-4">{t("اتصل بنا", "Contact Us")}</h1>
            <p className="text-xl text-gray-200">{t("نحن هنا للإجابة على جميع استفساراتكم", "We are here to answer all your enquiries")}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl text-[#0B1F3A] mb-6">{t("تواصل معنا", "Reach Out")}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {t(
                  "يسعدنا تلقي استفساراتكم وطلباتكم. فريقنا جاهز لخدمتكم — املأ النموذج وسنتواصل معك في أقرب وقت ممكن.",
                  "We are happy to receive your enquiries and requests. Our team is ready to serve you — fill in the form and we will get back to you as soon as possible."
                )}
              </p>
              <div className="space-y-4">
                {contactItems.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="bg-[#FF7A00] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-base text-[#0B1F3A] font-semibold mb-0.5">{item.label}</h3>
                      {item.link !== "#" ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#FF7A00] transition-colors text-sm" dir="ltr">{item.value}</a>
                      ) : (
                        <p className="text-gray-600 text-sm">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl text-[#0B1F3A] mb-6">{t("أرسل لنا رسالة", "Send Us a Message")}</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[#0B1F3A] mb-1.5 text-sm font-medium">{t("الاسم الكامل", "Full Name")}</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required
                      placeholder={t("أدخل اسمك الكامل", "Enter your full name")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-[#0B1F3A] mb-1.5 text-sm font-medium">{t("رقم الهاتف", "Phone Number")}</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                      placeholder="05xxxxxxxx"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none transition-all" dir="ltr" />
                  </div>
                  <div>
                    <label className="block text-[#0B1F3A] mb-1.5 text-sm font-medium">{t("البريد الإلكتروني", "Email Address")}</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required
                      placeholder="example@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none transition-all" dir="ltr" />
                  </div>
                  <div>
                    <label className="block text-[#0B1F3A] mb-1.5 text-sm font-medium">{t("الرسالة", "Message")}</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                      placeholder={t("اكتب رسالتك هنا...", "Write your message here...")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none transition-all resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full bg-[#FF7A00] text-white py-4 rounded-lg hover:bg-[#e66d00] transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2 font-semibold">
                    <Send size={20} />
                    {t("إرسال الرسالة", "Send Message")}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <h2 className="text-3xl text-[#0B1F3A] mb-4">{t("موقعنا", "Our Location")}</h2>
            <p className="text-gray-600 mb-8">{t("الخبر، المنطقة الشرقية، المملكة العربية السعودية", "Al Khobar, Eastern Province, Saudi Arabia")}</p>
            <div className="bg-gray-200 rounded-xl overflow-hidden h-80 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-[#FF7A00] mx-auto mb-4" />
                <p className="text-xl text-[#0B1F3A] font-semibold">{t("الخبر، المنطقة الشرقية", "Al Khobar, Eastern Province")}</p>
                <p className="text-gray-600 mt-2 text-sm">{t("المملكة العربية السعودية", "Saudi Arabia")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
