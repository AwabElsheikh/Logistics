import { Link, useLocation } from "react-router";
import { Logo } from "./Logo";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { useLang } from "./LanguageContext";

const NAV_ITEMS = [
  { path: "/", ar: "الرئيسية", en: "Home" },
  { path: "/about", ar: "من نحن", en: "About" },
  { path: "/services", ar: "الخدمات", en: "Services" },
  { path: "/contact", ar: "اتصل بنا", en: "Contact" },
];

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang, t, dir } = useLang();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm" dir={dir}>
      {/* Top contact bar */}
      <div className="bg-[#0B1F3A] text-white text-xs py-1.5 px-4 hidden md:flex justify-end gap-6 items-center" style={{ fontFamily: lang === "ar" ? "Cairo, sans-serif" : "Poppins, sans-serif" }}>
        <a href="tel:+966552941868" className="flex items-center gap-1 hover:text-[#FF7A00] transition-colors">
          <Phone size={12} />
          <span dir="ltr">0552941868</span>
        </a>
        <a href="tel:+966533839038" className="flex items-center gap-1 hover:text-[#FF7A00] transition-colors">
          <Phone size={12} />
          <span dir="ltr">0533839038</span>
        </a>
        <a href="https://mail.google.com/mail/?view=cm&to=info@ainalbuhair.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF7A00] transition-colors">
          info@ainalbuhair.com
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-8" style={{ fontFamily: lang === "ar" ? "Cairo, sans-serif" : "Poppins, sans-serif" }}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors text-sm font-medium ${
                  location.pathname === item.path
                    ? "text-[#FF7A00]"
                    : "text-[#0B1F3A] hover:text-[#FF7A00]"
                }`}
              >
                {lang === "ar" ? item.ar : item.en}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="border border-[#0B1F3A] text-[#0B1F3A] px-3 py-1.5 rounded-md text-xs font-semibold hover:bg-[#0B1F3A] hover:text-white transition-colors"
              style={{ fontFamily: "Poppins, sans-serif", letterSpacing: "0.05em" }}
            >
              {lang === "ar" ? "EN" : "عر"}
            </button>

            <Link
              to="/quote"
              className="bg-[#FF7A00] text-white px-5 py-2.5 rounded-lg hover:bg-[#e66d00] transition-colors text-sm"
              style={{ fontFamily: lang === "ar" ? "Cairo, sans-serif" : "Poppins, sans-serif" }}
            >
              {t("احصل على عرض سعر", "Get a Quote")}
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#0B1F3A]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4" style={{ fontFamily: lang === "ar" ? "Cairo, sans-serif" : "Poppins, sans-serif" }}>
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 transition-colors ${
                    location.pathname === item.path
                      ? "text-[#FF7A00]"
                      : "text-[#0B1F3A] hover:text-[#FF7A00]"
                  }`}
                >
                  {lang === "ar" ? item.ar : item.en}
                </Link>
              ))}
              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={toggleLang}
                  className="border border-[#0B1F3A] text-[#0B1F3A] px-3 py-1.5 rounded-md text-xs font-semibold hover:bg-[#0B1F3A] hover:text-white transition-colors"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {lang === "ar" ? "EN" : "عر"}
                </button>
                <Link
                  to="/quote"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 bg-[#FF7A00] text-white px-6 py-3 rounded-lg hover:bg-[#e66d00] transition-colors text-center text-sm"
                >
                  {t("احصل على عرض سعر", "Get a Quote")}
                </Link>
              </div>
              <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
                <a href="tel:+966533839038" className="flex items-center gap-2 text-sm text-[#0B1F3A]">
                  <Phone size={14} className="text-[#FF7A00]" />
                  <span dir="ltr">0533839038</span>
                </a>
                <a href="tel:+966552941868" className="flex items-center gap-2 text-sm text-[#0B1F3A]">
                  <Phone size={14} className="text-[#FF7A00]" />
                  <span dir="ltr">0552941868</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
