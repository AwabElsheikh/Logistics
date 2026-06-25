import { motion } from "motion/react";
import { Truck, Package, Warehouse, Clock, MapPin, Shield, TrendingUp, Users } from "lucide-react";
import { useLang } from "./LanguageContext";

export function Services() {
  const { t, lang, dir } = useLang();

  const services = [
    {
      icon: Truck,
      title: t("النقل البري", "Land Transport"),
      desc: t(
        "نوفر خدمات نقل بري شاملة لجميع أنواع البضائع عبر أسطول حديث من الشاحنات والمركبات المتخصصة.",
        "We provide comprehensive land transport for all cargo types using a modern fleet of trucks and specialised vehicles."
      ),
      features: [
        t("نقل البضائع الثقيلة والخفيفة", "Heavy and light cargo transport"),
        t("مركبات مجهزة بأحدث التقنيات", "Vehicles equipped with the latest technology"),
        t("تتبع مباشر للشحنات", "Real-time shipment tracking"),
        t("سائقون محترفون ومدربون", "Professional and trained drivers"),
      ],
    },
    {
      icon: Package,
      title: t("نقل البضائع والشحن", "Freight & Cargo Handling"),
      desc: t(
        "حلول شحن متكاملة للبضائع المحلية والإقليمية مع ضمان السلامة والسرعة في التسليم.",
        "Complete freight solutions for local and regional cargo with guaranteed safety and timely delivery."
      ),
      features: [
        t("شحن البضائع المحلية والإقليمية", "Local and regional freight"),
        t("تغليف وتعبئة احترافية", "Professional packing and packaging"),
        t("تأمين شامل على البضائع", "Comprehensive cargo insurance"),
        t("معالجة جميع أنواع البضائع", "All cargo types handled"),
      ],
    },
    {
      icon: Warehouse,
      title: t("التخزين والمستودعات", "Warehousing"),
      desc: t(
        "مستودعات حديثة ومؤمنة بالكامل لتخزين بضائعكم مع نظام إدارة مخزون متطور.",
        "Modern, fully secured warehouses for your goods with an advanced inventory management system."
      ),
      features: [
        t("مستودعات مكيفة ومراقبة", "Climate-controlled, monitored facilities"),
        t("أنظمة أمان متقدمة", "Advanced security systems"),
        t("إدارة مخزون إلكترونية", "Digital inventory management"),
        t("مساحات تخزين مرنة", "Flexible storage spaces"),
      ],
    },
    {
      icon: Clock,
      title: t("خدمات التوصيل السريع", "Express Delivery"),
      desc: t(
        "توصيل سريع وموثوق للطرود والشحنات الصغيرة في الوقت المحدد.",
        "Fast and reliable delivery of parcels and small shipments on schedule."
      ),
      features: [
        t("توصيل في نفس اليوم", "Same-day delivery"),
        t("تتبع فوري للطرود", "Instant parcel tracking"),
        t("خدمة الاستلام من الباب", "Door-to-door pick-up"),
        t("توصيل في المواعيد المحددة", "Scheduled delivery windows"),
      ],
    },
    {
      icon: MapPin,
      title: t("النقل المتخصص", "Specialised Transport"),
      desc: t(
        "نقل متخصص للبضائع التي تتطلب معاملة خاصة مثل المواد الحساسة والبضائع القيمة.",
        "Specialised transport for goods requiring special handling, such as sensitive materials and high-value cargo."
      ),
      features: [
        t("نقل البضائع الحساسة", "Sensitive goods transport"),
        t("مركبات متخصصة", "Specialised vehicles"),
        t("معالجة خاصة للبضائع", "Special cargo handling"),
        t("الالتزام بمعايير السلامة", "Strict safety standards"),
      ],
    },
    {
      icon: Shield,
      title: t("التأمين والحماية", "Insurance & Protection"),
      desc: t(
        "تأمين شامل على جميع الشحنات لضمان راحة بالكم وحماية استثماراتكم.",
        "Full insurance coverage on all shipments to give you peace of mind and protect your investment."
      ),
      features: [
        t("تأمين شامل على البضائع", "Full cargo insurance"),
        t("تعويض في حالة التلف", "Compensation in case of damage"),
        t("حماية من جميع المخاطر", "Protection against all risks"),
        t("إجراءات أمنية صارمة", "Strict security procedures"),
      ],
    },
    {
      icon: TrendingUp,
      title: t("الحلول اللوجستية المتكاملة", "Complete Logistics Solutions"),
      desc: t(
        "حلول لوجستية متكاملة مصممة لتلبية احتياجات عملك وتحسين سلسلة التوريد.",
        "Integrated logistics solutions designed to meet your business needs and optimise your supply chain."
      ),
      features: [
        t("استشارات لوجستية", "Logistics consultancy"),
        t("تحسين سلسلة التوريد", "Supply chain optimisation"),
        t("حلول مخصصة للأعمال", "Tailored business solutions"),
        t("تقارير وتحليلات", "Reports and analytics"),
      ],
    },
    {
      icon: Users,
      title: t("خدمة العملاء المتميزة", "Premium Customer Service"),
      desc: t(
        "فريق دعم متخصص متاح للإجابة على استفساراتكم وتلبية احتياجاتكم.",
        "A dedicated support team available to answer your enquiries and meet your needs."
      ),
      features: [
        t("دعم على مدار الساعة", "Round-the-clock support"),
        t("ممثلو خدمة عملاء محترفون", "Professional customer service representatives"),
        t("استجابة سريعة للطلبات", "Fast response to requests"),
        t("متابعة مستمرة للشحنات", "Continuous shipment follow-up"),
      ],
    },
  ];

  return (
    <div dir={dir} style={{ fontFamily: lang === "ar" ? "Cairo, sans-serif" : "Poppins, sans-serif" }}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B1F3A] to-[#1a3a5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <h1 className="text-4xl md:text-5xl mb-4">{t("خدماتنا", "Our Services")}</h1>
            <p className="text-xl text-gray-200">{t("حلول لوجستية شاملة لجميع احتياجاتك", "Comprehensive logistics solutions for all your needs")}</p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-gradient-to-br from-[#0B1F3A] to-[#1a3a5c] p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#FF7A00] w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                      <s.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl text-white">{s.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">{s.desc}</p>
                  <div className="space-y-3">
                    {s.features.map((f, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div className="bg-[#FF7A00] w-2 h-2 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-600">{f}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#FF7A00] to-[#e66d00] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl mb-4">{t("هل تحتاج إلى خدمة مخصصة؟", "Need a custom service?")}</h2>
            <p className="text-xl mb-8">{t("تواصل معنا لمناقشة احتياجاتك الخاصة", "Contact us to discuss your specific needs")}</p>
            <a href="/contact" className="inline-block bg-white text-[#FF7A00] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg font-semibold">
              {t("اتصل بنا الآن", "Contact Us Now")}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
