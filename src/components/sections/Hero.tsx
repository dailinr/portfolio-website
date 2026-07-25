'use client'

export default function Hero() {
  return (
    <section className="min-h-screen  pt-24 pb-12 px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col">
          {/* Small Label */}
          <div className="text-secondary text-sm lg:text-2xl font-bold mb-1">
            Dailin Romero
          </div>

          {/* Main Title */}
          <div className="space-y-4 mb-4">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Desarrolladora Web{' '}
              <span className="text-primary">Full-Stack</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-tertiary text-base md:text-md leading-relaxed max-w-lg mb-4">
            Construyendo soluciones completas desde la interfaz de usuario hasta la lógica del servidor y gestión de datos. Buscando nuevas oportunidades laborales.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-3 py-1.5 border-2 text-[13px] border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-background transition-colors duration-300">
              Ponte en contacto
            </button>
            <button className="px-3 py-1.5 text-[13px] text-foreground font-medium flex items-center gap-2 hover:text-primary transition-colors duration-300">
              Mi trabajo
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="flex items-center justify-center lg:justify-end ">
          <div className="relative w-full max-w-sm aspect-square flex flex-col justify-center">
            {/* Outer Glow Effect */}
            {/* <div cl assName="absolute inset-0 bg-gradient-to-br from-primary via-primary to-transparent opacity-10 rounded-2xl blur-2xl" /> */}

            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden border border-primary border-opacity-30 shadow-2xl w-full">
              {/* Placeholder Image - will be replaced by user */}
              <div className="w-full h-[300px] flex items-center justify-center">
                <div className="text-center">
                  
                  <p className="text-tertiary text-sm">
                    Reemplazar con tu foto
                  </p>
                </div>
              </div>

              {/* Image Overlay - optional accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
