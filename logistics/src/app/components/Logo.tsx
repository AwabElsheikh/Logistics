import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logoImg from "@/imports/ainbuhir_logo.png";

export function Logo({ className = "" }: { className?: string; iconOnly?: boolean }) {
  return (
    <ImageWithFallback
      src={logoImg}
      alt="عين البحير للخدمات اللوجستية"
      className={`h-16 w-auto object-contain ${className}`}
    />
  );
}
