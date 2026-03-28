interface InfoCardProps {
  icon: string
  title: string
  description: string
  items?: string[]
  variant?: 'default' | 'dark' | 'blue'
}

export default function InfoCard({ icon, title, description, items, variant = 'default' }: InfoCardProps) {
  const variantClasses = {
    default: 'bg-white border border-slate-200 hover:border-sky-300',
    dark: 'bg-slate-800 border border-slate-700 hover:border-sky-500/50',
    blue: 'bg-sky-50 border border-sky-200 hover:border-sky-400',
  }

  const titleColor = {
    default: 'text-slate-900',
    dark: 'text-white',
    blue: 'text-sky-900',
  }

  const descColor = {
    default: 'text-slate-600',
    dark: 'text-slate-400',
    blue: 'text-sky-800',
  }

  return (
    <div className={`rounded-2xl p-6 card-hover transition-all ${variantClasses[variant]}`}>
      <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-4 border border-sky-500/20">
        <i className={`${icon} text-sky-500 text-xl`}></i>
      </div>
      <h3 className={`font-bold text-lg mb-2 ${titleColor[variant]}`}>{title}</h3>
      <p className={`text-sm leading-relaxed ${descColor[variant]}`}>{description}</p>
      {items && items.length > 0 && (
        <ul className="mt-4 space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
              <i className="fas fa-chevron-right text-sky-500 text-xs mt-1 flex-shrink-0"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
