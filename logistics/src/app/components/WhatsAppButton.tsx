import { MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

const NUMBERS = [
  { label: "0533839038", wa: "966533839038", tel: "+966533839038" },
  { label: "0552941868", wa: "966552941868", tel: "+966552941868" },
];

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const message = encodeURIComponent("مرحباً، أود الاستفسار عن خدماتكم اللوجستية");

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2">
      {open && (
        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden w-52 mb-1">
          <div className="bg-[#25D366] px-4 py-3">
            <p className="text-white text-xs font-semibold" style={{ fontFamily: "Cairo, sans-serif" }}>
              تواصل معنا
            </p>
          </div>
          {NUMBERS.map((n) => (
            <div key={n.wa} className="flex items-stretch border-b border-gray-100 last:border-0">
              <a
                href={`https://wa.me/${n.wa}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center gap-2 px-4 py-3 hover:bg-green-50 transition-colors group"
              >
                <MessageCircle size={16} className="text-[#25D366] shrink-0" />
                <span className="text-sm text-[#0B1F3A] font-medium" dir="ltr">{n.label}</span>
              </a>
              <a
                href={`tel:${n.tel}`}
                className="px-3 flex items-center border-r border-gray-100 hover:bg-blue-50 transition-colors"
              >
                <Phone size={14} className="text-[#0B1F3A]" />
              </a>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BD5B] transition-all hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
}
