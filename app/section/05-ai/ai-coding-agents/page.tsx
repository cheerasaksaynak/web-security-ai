import Link from 'next/link'

// ─── 5.2 AI Coding Agents ───────────────────────────────────────────────────
const aiAgents = [
  {
    name: 'GitHub Copilot',
    maker: 'Microsoft / GitHub',
    icon: 'fas fa-github',
    iconColor: 'text-white',
    iconBg: 'bg-slate-800',
    badge: 'แนะนำสำหรับมือใหม่',
    badgeColor: 'bg-sky-100 text-sky-700',
    desc: 'ฝังอยู่ใน VS Code โดยตรง เหมาะสำหรับการเขียน code และ autocomplete แบบ real-time มี Copilot Chat ในตัว',
    pros: ['ผสานกับ VS Code ได้ดีที่สุด', 'ฟรีสำหรับนักศึกษา (GitHub Education)', 'รองรับภาษาโปรแกรมมิ่งมากกว่า 20 ภาษา'],
    tag: 'ดีสุดสำหรับ Coding',
    tagColor: 'bg-sky-500',
  },
  {
    name: 'Cursor',
    maker: 'Cursor AI',
    icon: 'fas fa-arrow-pointer',
    iconColor: 'text-white',
    iconBg: 'bg-violet-600',
    badge: 'VS Code Fork',
    badgeColor: 'bg-violet-100 text-violet-700',
    desc: 'Fork จาก VS Code ที่ฝัง AI เข้าไปในทุกส่วน รองรับ multi-file editing และ codebase-aware chat ได้ดีมาก',
    pros: ['Refactoring ข้ามหลายไฟล์', 'เข้าใจ codebase ทั้งโปรเจค', 'Ctrl+K inline edit ที่ทรงพลัง'],
    tag: 'ดีสุดสำหรับ Refactoring',
    tagColor: 'bg-violet-500',
  },
  {
    name: 'Claude Code',
    maker: 'Anthropic',
    icon: 'fas fa-terminal',
    iconColor: 'text-white',
    iconBg: 'bg-amber-600',
    badge: 'Terminal-based',
    badgeColor: 'bg-amber-100 text-amber-700',
    desc: 'CLI tool ที่รันใน terminal ทำงานกับ codebase ทั้งโปรเจค เขียน code, รัน command, และ fix bugs แบบ agentic ได้',
    pros: ['จัดการ complex task ได้ดีที่สุด', 'อ่านและแก้หลายไฟล์พร้อมกัน', 'รัน shell command ได้อัตโนมัติ'],
    tag: 'ดีสุดสำหรับ Complex Tasks',
    tagColor: 'bg-amber-500',
  },
  {
    name: 'Windsurf',
    maker: 'Codeium',
    icon: 'fas fa-wind',
    iconColor: 'text-white',
    iconBg: 'bg-teal-600',
    badge: 'ฟรีมากกว่า',
    badgeColor: 'bg-teal-100 text-teal-700',
    desc: 'IDE ที่มี AI ฝังในตัว คล้าย Cursor แต่ใช้งานฟรีได้มากกว่า มี Cascade AI ที่ทำงานแบบ agentic',
    pros: ['Free tier ใจกว้างกว่า Copilot', 'Cascade สำหรับ multi-step tasks', 'ใช้งานได้บน Windows/Mac/Linux'],
    tag: 'ดีสุดสำหรับงบน้อย',
    tagColor: 'bg-teal-500',
  },
  {
    name: 'Amazon CodeWhisperer',
    maker: 'AWS',
    icon: 'fab fa-aws',
    iconColor: 'text-white',
    iconBg: 'bg-orange-500',
    badge: 'ฟรีสำหรับ Individual',
    badgeColor: 'bg-orange-100 text-orange-700',
    desc: 'AI coding assistant จาก AWS ผสานกับ AWS SDK ได้ดีเยี่ยม มี security scanning ในตัว รองรับ VS Code และ JetBrains',
    pros: ['ฟรี 100% สำหรับ individual', 'ดีมากสำหรับโปรเจค AWS', 'มี built-in security scan'],
    tag: 'ดีสำหรับ AWS Projects',
    tagColor: 'bg-orange-500',
  },
]

export default function AICodingAgentsPage() {
  return (
    <div>
      {/* ─── 5.2 AI Coding Agents เปรียบเทียบ ────────────────────────────────── */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">AI Coding Agents ยอดนิยม</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-500 dark:text-slate-400">เปรียบเทียบ AI Coding Agents ที่นิยมใช้ในการพัฒนา software</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiAgents.map((agent) => (
              <div key={agent.name} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6 border-b border-slate-100 dark:border-slate-700">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${agent.iconBg} rounded-xl flex items-center justify-center`}>
                        <i className={`${agent.icon} ${agent.iconColor}`}></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white">{agent.name}</h3>
                        <p className="text-xs text-slate-400">{agent.maker}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${agent.badgeColor}`}>{agent.badge}</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{agent.desc}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-4">
                    {agent.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <i className="fas fa-check-circle text-emerald-500 flex-shrink-0 mt-0.5 text-xs"></i>
                        {pro}
                      </li>
                    ))}
                  </ul>
                  <span className={`inline-block text-xs text-white font-bold px-3 py-1 rounded-full ${agent.tagColor}`}>
                    {agent.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/05-ai/what-is-ai-agent" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> AI Agent คืออะไร
          </Link>
          <Link href="/section/05-ai/ai-tools" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            AI Coding Tools <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
