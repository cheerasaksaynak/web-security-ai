interface CodeBlockProps {
  code: string
  label?: string
  variant?: 'vulnerable' | 'secure' | 'neutral'
  language?: string
}

export default function CodeBlock({ code, label, variant = 'neutral', language = 'code' }: CodeBlockProps) {
  const variantClasses = {
    vulnerable: 'bg-red-950 border-l-4 border-red-500',
    secure: 'bg-green-950 border-l-4 border-green-500',
    neutral: 'bg-slate-900 border-l-4 border-sky-500',
  }

  const labelClasses = {
    vulnerable: 'text-red-400 bg-red-950',
    secure: 'text-green-400 bg-green-950',
    neutral: 'text-sky-400 bg-slate-900',
  }

  const labelText = label || {
    vulnerable: 'VULNERABLE',
    secure: 'SECURE',
    neutral: language.toUpperCase(),
  }[variant]

  return (
    <div className={`rounded-xl overflow-hidden ${variantClasses[variant]}`}>
      <div className={`px-4 py-2 flex items-center gap-2 border-b border-white/10 ${labelClasses[variant]}`}>
        {variant === 'vulnerable' && <i className="fas fa-triangle-exclamation text-xs"></i>}
        {variant === 'secure' && <i className="fas fa-check-circle text-xs"></i>}
        {variant === 'neutral' && <i className="fas fa-code text-xs"></i>}
        <span className="text-xs font-bold tracking-widest">{labelText}</span>
      </div>
      <pre className="p-5 text-sm text-slate-200 overflow-x-auto leading-relaxed font-mono">
        <code>{code}</code>
      </pre>
    </div>
  )
}
