import { FOOTER_CONTENT } from "@/src/contants";
import { GLOBAL_CONTAINER } from "@/src/contants/layout";

export default function Footer() {
  const { year, copy_right, full_name } = FOOTER_CONTENT;

  return (
    <footer className="w-full bg-background mt-10 py-8 border border-white/5 relative z-10">
      
      <div className={GLOBAL_CONTAINER}>

        {/* Copyright: flex-col en mobile (apila filas), flex-row en escritorio (línea única) */}
        <div className="flex flex-col md:flex-row items-center justify-center text-center gap-1 md:gap-1">
          <p className="text-tertiary text-xs">
            © {year}
          </p>
          <p className="text-tertiary text-xs">
            {copy_right}
          </p>
          <p className="text-primary text-xs font-medium tracking-wide">
            {full_name}
          </p>
        </div>
        
      </div>
    </footer>
  );
}