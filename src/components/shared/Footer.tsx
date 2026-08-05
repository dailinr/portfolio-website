import { FOOTER_CONTENT } from "@/src/contants";
import { GLOBAL_CONTAINER } from "@/src/contants/layout";

export default function Footer() {
  const { year, copy_right, full_name } = FOOTER_CONTENT

  return (
    <footer className="w-full bg-background pt-30 pb-8  border-white/5 relative z-10">
      
      <div className={GLOBAL_CONTAINER}>

        {/* Copyright */}
        <div className="flex items-center justify-center text-center -mx-4 md:mx-0">
          <p className="text-tertiary text-xs">
            {`© ${year} ${copy_right} `}
            <span className="text-primary font-medium tracking-wide ml-1">
              {full_name}
            </span>
          </p>
        </div>
        
      </div>
    </footer>
  );
}
