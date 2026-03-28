interface WorkshopStep {
  step: number
  title: string
  code?: string
  description?: string
}

interface WorkshopBoxProps {
  number: number
  title: string
  timeEstimate?: string
  steps: WorkshopStep[]
  copilotPrompt?: string
}

export default function WorkshopBox({ number, title, timeEstimate, steps, copilotPrompt }: WorkshopBoxProps) {
  return (
    <div className="workshop-box rounded-2xl p-8 bg-white my-12">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center flex-shrink-0">
          <span className="text-white font-black text-lg">{number}</span>
        </div>
        <div>
          <div className="text-xs font-bold text-sky-500 tracking-widest uppercase mb-1">Workshop {number}</div>
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          {timeEstimate && (
            <span className="text-xs text-slate-500">
              <i className="fas fa-clock mr-1"></i>
              {timeEstimate}
            </span>
          )}
        </div>
      </div>

      <div className="space-y-4">
        {steps.map((s) => (
          <div key={s.step} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
            <span className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
              {s.step}
            </span>
            <div className="flex-1">
              <p className="font-semibold text-slate-800 mb-1">{s.title}</p>
              {s.description && <p className="text-sm text-slate-500">{s.description}</p>}
              {s.code && (
                <code className="block mt-2 text-xs bg-slate-900 text-slate-200 px-4 py-3 rounded-lg font-mono leading-relaxed whitespace-pre-wrap">
                  {s.code}
                </code>
              )}
            </div>
          </div>
        ))}
      </div>

      {copilotPrompt && (
        <div className="mt-6 p-5 bg-slate-900 rounded-xl">
          <div className="flex items-center gap-2 mb-3">
            <i className="fas fa-robot text-sky-400 text-sm"></i>
            <span className="text-sky-400 text-xs font-bold tracking-widest uppercase">GitHub Copilot Prompt</span>
          </div>
          <p className="text-slate-200 text-sm font-mono leading-relaxed italic">
            &quot;{copilotPrompt}&quot;
          </p>
        </div>
      )}
    </div>
  )
}
