interface SectionHeroProps {
  number: string
  title: string
  subtitle: string
  imageUrl?: string
  icon?: string
}

export default function SectionHero({ number, title, subtitle, imageUrl, icon }: SectionHeroProps) {
  return (
    <section className="relative section-navy text-white overflow-hidden">
      {imageUrl && (
        <div className="absolute inset-0">
          <img
            src={imageUrl}
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
        </div>
      )}
      <div className="relative max-w-6xl mx-auto px-6 py-20 flex items-center gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-7xl font-black section-number">{number}</span>
            {icon && (
              <span className="w-14 h-14 bg-sky-500/20 rounded-2xl flex items-center justify-center border border-sky-500/30">
                <i className={`${icon} text-sky-400 text-2xl`}></i>
              </span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{title}</h1>
          <p className="text-slate-400 text-lg max-w-2xl">{subtitle}</p>
        </div>
        <div className="hidden lg:block w-px h-32 bg-sky-500/30" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
    </section>
  )
}
