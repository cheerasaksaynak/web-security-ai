import SectionHero from '@/components/SectionHero'
import Link from 'next/link'

const subsections = [
  { href: '/section/05-ai/what-is-ai-agent', title: 'AI Agent คืออะไร', desc: 'ความแตกต่างระหว่าง AI Tool, AI Assistant และ AI Agent', icon: 'fas fa-brain' },
  { href: '/section/05-ai/ai-coding-agents', title: 'AI Coding Agents', desc: 'Copilot, Cursor, Claude Code, Windsurf เปรียบเทียบ', icon: 'fas fa-robot' },
  { href: '/section/05-ai/ai-tools', title: 'AI Coding Tools', desc: 'ChatGPT, Claude, Gemini — เครื่องมือ AI สำหรับนักพัฒนา', icon: 'fas fa-wand-magic-sparkles' },
  { href: '/section/05-ai/pricing', title: 'ราคาเปรียบเทียบ', desc: 'แผนราคาและตัวเลือกฟรีของแต่ละ AI tool', icon: 'fas fa-tags' },
  { href: '/section/05-ai/install-copilot', title: 'ติดตั้ง GitHub Copilot', desc: 'ขั้นตอนการสมัครและติดตั้งใน VS Code', icon: 'fas fa-download' },
  { href: '/section/05-ai/spec-md', title: 'SPEC.md', desc: 'การเขียนไฟล์ spec เพื่อให้ AI เข้าใจโปรเจกต์', icon: 'fas fa-file-lines' },
  { href: '/section/05-ai/prompting', title: 'การเขียน Prompt', desc: 'เทคนิคการเขียน prompt ให้ได้ผลลัพธ์ที่ดี', icon: 'fas fa-message' },
  { href: '/section/05-ai/copilot-commands', title: 'คำสั่ง Copilot', desc: 'Slash commands และ shortcuts ที่ใช้บ่อย', icon: 'fas fa-terminal' },
  { href: '/section/05-ai/workshop', title: 'Workshop', desc: 'ฝึกใช้ AI agent สร้างโปรเจกต์จริง', icon: 'fas fa-hammer' },
]

export default function AIPage() {
  return (
    <div>
      <SectionHero
        number="05"
        title="AI Coding Agent"
        subtitle="เพิ่มประสิทธิภาพการพัฒนาด้วย AI — GitHub Copilot และ AI Agents"
        icon="fas fa-robot"
      />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sky-500 text-xs font-bold uppercase tracking-widest mb-2">เนื้อหา</p>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">หัวข้อย่อย</h2>
          </div>
          <span className="text-slate-400 text-sm font-mono hidden sm:block">9 topics</span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {subsections.map((sub, i) => (
            <Link key={sub.href} href={sub.href} className="group">
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 card-hover h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-300 dark:text-slate-600">{String(i + 1).padStart(2, '0')}</span>
                  <div className="w-9 h-9 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                    <i className={`${sub.icon} text-emerald-500 text-sm`}></i>
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">{sub.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{sub.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/04-security" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> 04 Security
          </Link>
          <Link href="/section/05-ai/what-is-ai-agent" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            เริ่มเรียน <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
