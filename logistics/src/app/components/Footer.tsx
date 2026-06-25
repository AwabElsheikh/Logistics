import { Link } from "react-router";
import { Logo } from "./Logo";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useLang } from "./LanguageContext";

export function Footer() {
  const { t, lang, dir } = useLang();

  return (
    <footer className="bg-[#0B1F3A] text-white" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ fontFamily: lang === "ar" ? "Cairo, sans-serif" : "Poppins, sans-serif" }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Logo className="brightness-200" />
            </div>
            <p className="text-sm text-gray-300">
              {t("شريكك الموثوق في حلول النقل والشحن البري", "Your trusted partner in land transport and logistics solutions")}
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{t("روابط سريعة", "Quick Links")}</h3>
            <div className="flex flex-col gap-2">
              {[
                { path: "/", ar: "الرئيسية", en: "Home" },
                { path: "/about", ar: "من نحن", en: "About" },
                { path: "/services", ar: "الخدمات", en: "Services" },
                { path: "/contact", ar: "اتصل بنا", en: "Contact" },
              ].map((item) => (
                <Link key={item.path} to={item.path} className="text-sm text-gray-300 hover:text-[#FF7A00] transition-colors">
                  {lang === "ar" ? item.ar : item.en}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{t("معلومات التواصل", "Contact Info")}</h3>
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#FF7A00] shrink-0" />
                <div className="flex flex-col gap-1" dir="ltr">
                  <a href="tel:+966533839038" className="hover:text-[#FF7A00] transition-colors">0533839038</a>
                  <a href="tel:+966552941868" className="hover:text-[#FF7A00] transition-colors">0552941868</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#FF7A00] shrink-0" />
                <a href="https://mail.google.com/mail/?view=cm&to=info@ainalbuhair.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF7A00] transition-colors break-all">
                  info@ainalbuhair.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#FF7A00] shrink-0" />
                <span>{t("الخبر، المنطقة الشرقية", "Al Khobar, Eastern Province")}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{t("تابعنا", "Follow Us")}</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-[#FF7A00] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-[#FF7A00] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-[#FF7A00] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-[#FF7A00] transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 {t("عين البحير للخدمات اللوجستية. جميع الحقوق محفوظة.", "Ain Al Buhair Logistics. All rights reserved.")}</p>
        </div>
      </div>
    </footer>
  );
}
