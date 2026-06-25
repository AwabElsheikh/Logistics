import { motion } from "motion/react";
import { Target, Eye, Award, Users, MapPin } from "lucide-react";
import { useLang } from "./LanguageContext";

export function About() {
  const { t, lang, dir } = useLang();

  const values = [
    { icon: Award, label: t("الجودة", "Quality"),          desc: t("نلتزم بأعلى معايير الجودة في كل شحنة وكل خدمة نقدمها", "We commit to the highest quality standards in every shipment and service") },
    { icon: Users, label: t("الاحترافية", "Professionalism"), desc: t("نتعامل مع كل عميل باحترافية عالية وخدمة متميزة", "We treat every client with professionalism and exceptional service") },
    { icon: Target, label: t("الدقة", "Precision"),         desc: t("نحرص على تنفيذ كل شحنة بدقة في المواعيد المتفق عليها", "We ensure every shipment is executed precisely on agreed timelines") },
    { icon: Eye, label: t("الشفافية", "Transparency"),      desc: t("تواصل واضح وشفاف مع عملائنا في كل مراحل الشحن", "Clear and transparent communication through every stage of shipping") },
  ];

  return (
    <div dir={dir} style={{ fontFamily: lang === "ar" ? "Cairo, sans-serif" : "Poppins, sans-serif" }}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B1F3A] to-[#1a3a5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <h1 className="text-4xl md:text-5xl mb-4">{t("من نحن", "About Us")}</h1>
            <p className="text-xl text-gray-200">{t("تعرف على عين البحير للخدمات اللوجستية", "Learn about Ain Al Buhair Logistics")}</p>
          </motion.div>
        </div>
      </section>

      {/* About text */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl text-[#0B1F3A] mb-6">{t("نبذة عن الشركة", "About the Company")}</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {t(
                  "عين البحير للخدمات اللوجستية شركة سعودية ناشئة متخصصة في مجال النقل والشحن البري، مقرها المنطقة الشرقية في مدينة الخبر.",
                  "Ain Al Buhair Logistics is a new Saudi company specialising in land transport and freight, headquartered in Al Khobar, Eastern Province."
                )}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {t(
                  "نبدأ رحلتنا بعزم واضح: تقديم خدمة لوجستية احترافية تقوم على الالتزام بالمواعيد، الشفافية في التسعير، والتواصل المستمر مع العميل في كل مراحل الشحن.",
                  "We begin our journey with a clear purpose: to deliver professional logistics services built on punctuality, transparent pricing, and continuous client communication throughout every stage of shipping."
                )}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t(
                  "نؤمن بأن الثقة تُبنى من أول طلب، لذا نحرص على تقديم تجربة متميزة لكل عميل — بغض النظر عن حجم الشحنة.",
                  "We believe trust is built from the very first order, so we strive to deliver an outstanding experience for every client — regardless of shipment size."
                )}
              </p>
              <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 w-fit">
                <MapPin size={20} className="text-[#FF7A00]" />
                <div>
                  <p className="text-[#0B1F3A] font-semibold text-sm">{t("الخبر، المنطقة الشرقية", "Al Khobar, Eastern Province")}</p>
                  <p className="text-gray-500 text-xs">{t("المملكة العربية السعودية", "Saudi Arabia")}</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#FF7A00] to-[#e66d00] p-8 rounded-2xl text-white shadow-xl">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Target size={32} />
                  <h3 className="text-2xl">{t("رؤيتنا", "Our Vision")}</h3>
                </div>
                <p className="text-lg leading-relaxed">
                  {t(
                    "أن نكون الشريك اللوجستي الأول للشركات والأفراد في المنطقة الشرقية، ونوسع خدماتنا تدريجياً لتغطية كافة مناطق المملكة.",
                    "To become the first-choice logistics partner for businesses and individuals in the Eastern Province, then progressively expand our coverage across Saudi Arabia."
                  )}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Eye size={32} />
                  <h3 className="text-2xl">{t("مهمتنا", "Our Mission")}</h3>
                </div>
                <p className="text-lg leading-relaxed">
                  {t(
                    "تقديم خدمات نقل بري موثوقة وشفافة تُبنى على الاحترافية والالتزام، وخلق تجربة لوجستية تجعل العميل يطمئن لشحنته من لحظة الاستلام حتى التسليم.",
                    "To provide reliable and transparent land transport services built on professionalism and commitment, creating a logistics experience where clients feel confident about their shipment from pick-up to delivery."
                  )}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#0B1F3A] mb-4">{t("قيمنا", "Our Values")}</h2>
            <p className="text-gray-600 text-lg">{t("المبادئ التي نلتزم بها في كل عمل نقوم به", "The principles we live by in everything we do")}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="bg-[#0B1F3A] w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <v.icon size={32} className="text-[#FF7A00]" />
                </div>
                <h3 className="text-xl text-[#0B1F3A] mb-3">{v.label}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 bg-[#0B1F3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <h2 className="text-3xl md:text-4xl mb-4">{t("نطاق خدماتنا", "Our Service Area")}</h2>
            <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
              {t("نتمركز في المنطقة الشرقية ونستعد لتغطية مناطق المملكة تباعاً", "Based in the Eastern Province and expanding our coverage across Saudi Arabia")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl text-[#FF7A00] mb-3">📍</div>
                <p className="text-xl font-semibold mb-1">{t("الخبر", "Al Khobar")}</p>
                <p className="text-gray-400 text-sm">{t("المقر الرئيسي", "Headquarters")}</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl text-[#FF7A00] mb-3">🚛</div>
                <p className="text-xl font-semibold mb-1">{t("المنطقة الشرقية", "Eastern Province")}</p>
                <p className="text-gray-400 text-sm">{t("الدمام · الظهران · الأحساء", "Dammam · Dhahran · Al-Ahsa")}</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 border border-[#FF7A00]/30">
                <div className="text-3xl text-[#FF7A00] mb-3">🗺️</div>
                <p className="text-xl font-semibold mb-1">{t("المملكة العربية السعودية", "Saudi Arabia")}</p>
                <p className="text-gray-400 text-sm">{t("التوسع قريباً", "Expanding soon")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
