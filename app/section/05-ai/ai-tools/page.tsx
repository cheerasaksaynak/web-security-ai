import Link from 'next/link'

// ─── 5.3 AI Coding Tools ────────────────────────────────────────────────────
const aiTools = [
  {
    name: 'ChatGPT',
    maker: 'OpenAI',
    icon: 'fas fa-comment-dots',
    iconBg: 'bg-emerald-500',
    use: 'อธิบาย concept, เขียน boilerplate, debug ทั่วไป',
    url: 'chat.openai.com',
  },
  {
    name: 'Claude',
    maker: 'Anthropic',
    icon: 'fas fa-brain',
    iconBg: 'bg-amber-500',
    use: 'วิเคราะห์ code ยาว, architecture advice, อธิบาย security',
    url: 'claude.ai',
  },
  {
    name: 'v0.dev',
    maker: 'Vercel',
    icon: 'fas fa-paintbrush',
    iconBg: 'bg-slate-800',
    use: 'สร้าง UI component จาก text description ได้ทันที',
    url: 'v0.dev',
  },
  {
    name: 'Copilot Chat',
    maker: 'GitHub',
    icon: 'fas fa-comments',
    iconBg: 'bg-sky-600',
    use: 'Chat กับ AI ภายใน VS Code โดยตรง ถาม codebase ได้',
    url: 'ใน VS Code',
  },
  {
    name: 'Tabnine',
    maker: 'Tabnine',
    icon: 'fas fa-microchip',
    iconBg: 'bg-indigo-500',
    use: 'AI code completion ที่รันบน local — ไม่ส่งข้อมูลออกไป',
    url: 'tabnine.com',
  },
]

export default function AIToolsPage() {
  return (
    <div>
      {/* ─── 5.3 AI Coding Tools ──────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">AI Coding Tools ยอดนิยม</h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-500 dark:text-slate-400">เครื่องมือ AI อื่นๆ ที่ใช้คู่กับ AI Coding Agent เพื่อเพิ่มประสิทธิภาพ</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {aiTools.map((tool) => (
            <div key={tool.name} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 flex gap-4 hover:border-sky-200 hover:shadow-sm transition-all">
              <div className={`w-11 h-11 ${tool.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <i className={`${tool.icon} text-white`}></i>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-slate-900 dark:text-white">{tool.name}</h3>
                  <span className="text-xs text-slate-400">by {tool.maker}</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-2">{tool.use}</p>
                <code className="text-xs text-sky-600 bg-sky-50 dark:bg-sky-900/30 px-2 py-0.5 rounded font-mono">{tool.url}</code>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 flex gap-4">
          <i className="fas fa-triangle-exclamation text-amber-500 text-2xl flex-shrink-0 mt-1"></i>
          <div>
            <h3 className="font-bold text-amber-800 dark:text-amber-300 text-lg mb-2">สำคัญ: AI อาจ generate code ที่มีช่องโหว่!</h3>
            <p className="text-amber-700 dark:text-amber-400 text-sm leading-relaxed">
              เครื่องมือ AI ทุกตัวเป็น assistant ที่ทรงพลัง แต่ไม่รับประกัน security เสมอไป
              code ที่ generate อาจมี SQL injection, XSS, หรือ auth bypass ได้
              <strong className="ml-1">ต้อง review ทุกครั้งก่อน accept</strong> โดยเฉพาะ code ที่เกี่ยวกับ authentication, database, และ input handling
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/05-ai/ai-coding-agents" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> AI Coding Agents
          </Link>
          <Link href="/section/05-ai/pricing" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            ราคาเปรียบเทียบ <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
