import { Link } from "react-router";
import { Truck, Package, Clock, Shield, DollarSign, Headphones, MapPin, Phone, MessageCircle, Warehouse } from "lucide-react";
import { motion } from "motion/react";
import { useLang } from "./LanguageContext";

export function Home() {
  const { t, lang, dir } = useLang();

  const services = [
    {
      icon: Truck,
      label: t("النقل البري", "Land Transport"),
      sub: t("موثوق وآمن لجميع أنواع البضائع عبر مناطق المملكة", "Safe & reliable freight across Saudi Arabia"),
    },
    {
      icon: Package,
      label: t("نقل البضائع", "Freight & Cargo"),
      sub: t("حلول شحن متكاملة بأعلى معايير الأمان", "Complete cargo solutions with highest safety standards"),
    },
    {
      icon: Warehouse,
      label: t("التوزيع", "Distribution"),
      sub: t("خدمات توزيع منظمة تضمن وصول بضائعكم في الوقت المحدد", "Organised distribution ensuring on-time delivery"),
    },
    {
      icon: Clock,
      label: t("خدمة سريعة", "Express Service"),
      sub: t("نلتزم بالمواعيد ونحرص على دقة التسليم في كل شحنة", "Committed to punctual and precise delivery every time"),
    },
  ];

  const reasons = [
    { icon: Clock,      label: t("التزام بالمواعيد", "On-Time Commitment"),  desc: t("نحرص على تسليم شحناتك في الوقت المحدد دون تأخير", "We ensure your shipments arrive on time, every time") },
    { icon: Shield,     label: t("أمان وحماية",       "Safety & Security"),   desc: t("نوفر أعلى معايير الأمان لضمان سلامة بضائعكم", "Highest safety standards to protect your goods") },
    { icon: DollarSign, label: t("أسعار شفافة",       "Transparent Pricing"), desc: t("عروض أسعار واضحة بدون رسوم مخفية", "Clear quotes with no hidden fees") },
    { icon: Headphones, label: t("تواصل مستمر",       "Always Reachable"),    desc: t("فريقنا متاح للرد على استفساراتكم في أي وقت", "Our team is available to answer your queries anytime") },
  ];

  return (
    <div dir={dir} style={{ fontFamily: lang === "ar" ? "Cairo, sans-serif" : "Poppins, sans-serif" }}>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0B1F3A] to-[#1a3a5c] text-white py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <div className="inline-block bg-[#FF7A00]/20 border border-[#FF7A00]/40 text-[#FF7A00] px-4 py-1.5 rounded-full text-sm mb-6">
              {t("المنطقة الشرقية · الخبر · المملكة العربية السعودية", "Eastern Province · Al Khobar · Saudi Arabia")}
            </div>
            <h1 className="text-4xl md:text-6xl mb-6 leading-snug">
              {t("حلول لوجستية موثوقة", "Reliable Logistics Solutions")}<br />
              <span className="text-[#FF7A00]">{t("تلبي جميع احتياجاتك", "That Meet All Your Needs")}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-2xl mx-auto">
              {t("شريكك الجديد في النقل والشحن البري — نبدأ معك من أول خطوة", "Your new partner in land transport — we start with you from day one")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote" className="bg-[#FF7A00] text-white px-8 py-4 rounded-lg hover:bg-[#e66d00] transition-all hover:scale-105 shadow-lg text-lg">
                {t("احصل على عرض سعر", "Get a Quote")}
              </Link>
              <a href="https://wa.me/966533839038" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg hover:bg-[#20BD5B] transition-all hover:scale-105 shadow-lg text-lg">
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#0B1F3A] mb-4">{t("خدماتنا", "Our Services")}</h2>
            <p className="text-gray-600 text-lg">{t("حلول لوجستية شاملة لجميع احتياجاتك", "Comprehensive logistics solutions for all your needs")}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="bg-[#FF7A00] w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <s.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl text-[#0B1F3A] mb-2">{s.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#0B1F3A] mb-4">{t("لماذا تختارنا؟", "Why Choose Us?")}</h2>
            <p className="text-gray-600 text-lg">{t("نقدم خدمة احترافية منذ اليوم الأول", "Professional service from day one")}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="bg-[#0B1F3A] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <r.icon size={28} className="text-[#FF7A00]" />
                </div>
                <h3 className="text-lg text-[#0B1F3A] mb-2">{r.label}</h3>
                <p className="text-gray-600 text-sm">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location strip */}
      <section className="py-14 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-[#0B1F3A] p-4 rounded-xl">
                <MapPin size={28} className="text-[#FF7A00]" />
              </div>
              <div>
                <p className="text-[#0B1F3A] font-bold text-lg">{t("المنطقة الشرقية، الخبر", "Eastern Province, Al Khobar")}</p>
                <p className="text-gray-500 text-sm">{t("المملكة العربية السعودية", "Saudi Arabia")}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+966533839038" className="flex items-center gap-2 bg-[#0B1F3A] text-white px-6 py-3 rounded-lg hover:bg-[#1a3a5c] transition-colors">
                <Phone size={18} /><span dir="ltr">0533839038</span>
              </a>
              <a href="tel:+966552941868" className="flex items-center gap-2 bg-[#0B1F3A] text-white px-6 py-3 rounded-lg hover:bg-[#1a3a5c] transition-colors">
                <Phone size={18} /><span dir="ltr">0552941868</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#FF7A00] to-[#e66d00] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl mb-4">{t("هل أنت مستعد للبدء؟", "Ready to get started?")}</h2>
            <p className="text-xl mb-8 opacity-90">{t("احصل على عرض سعر مجاني — نرد بسرعة", "Get a free quote — we respond quickly")}</p>
            <Link to="/quote" className="inline-block bg-white text-[#FF7A00] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg font-semibold">
              {t("احصل على عرض سعر الآن", "Get a Quote Now")}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
