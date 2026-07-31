import { GLOBAL_CONTAINER, SECTION_HEADLINE, SECTION_LABEL, STANDARD_SECTION_PY } from "@/src/contants/layout";


export default function AboutMeSection() {


    return (
        <section id="about-me" className={`relative w-full bg-background ${STANDARD_SECTION_PY}`}>
            <div className={GLOBAL_CONTAINER}>
                
                <div className="mb-16 flex flex-col items-start">
                    <span className={SECTION_LABEL}>
                        Sobre mi
                    </span>
                    <h2 className={SECTION_HEADLINE}>
                        Sobre mi
                    </h2>
                </div>

                
            </div>
        </section>
    )
}