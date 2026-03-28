import SectionHero from '@/components/SectionHero'
import Link from 'next/link'

const subsections = [
  { href: '/section/03-version-control/why-version-control', title: 'ทำไมต้องใช้ Version Control?', desc: 'ประโยชน์ของ Version Control และตัวอย่างสถานการณ์จริง', icon: 'fas fa-clock-rotate-left' },
  { href: '/section/03-version-control/types', title: 'ประเภทของ Version Control', desc: 'Centralized vs Distributed — Git คืออะไรและทำไมถึงยอดนิยม', icon: 'fas fa-network-wired' },
  { href: '/section/03-version-control/git-commands', title: 'Git Commands ที่ใช้บ่อย', desc: 'Setup, Daily Workflow, Branching — คำสั่งที่ต้องรู้', icon: 'fas fa-terminal' },
  { href: '/section/03-version-control/github-gitlab', title: 'GitHub vs GitLab', desc: 'เปรียบเทียบแพลตฟอร์มและ Security Features', icon: 'fab fa-github' },
  { href: '/section/03-version-control/workshop', title: 'Workshop', desc: 'สร้างโปรเจคแรกบน GitHub แบบ step-by-step', icon: 'fas fa-laptop-code' },
]

export default function VersionControlPage() {
  return (
    <div>
      <SectionHero
        number="03"
        title="Version Control"
        subtitle="ทำไม Git ถึงเป็นเครื่องมือที่นักพัฒนาขาดไม่ได้"
        icon="fas fa-code-branch"
        imageUrl="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1400&auto=format&fit=crop&q=80"
      />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sky-500 text-xs font-bold uppercase tracking-widest mb-2">เนื้อหา</p>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">หัวข้อย่อย</h2>
          </div>
          <span className="text-slate-400 text-sm font-mono hidden sm:block">{subsections.length} topics</span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {subsections.map((sub, i) => (
            <Link key={sub.href} href={sub.href} className="group">
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 card-hover h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-300 dark:text-slate-600">{String(i + 1).padStart(2, '0')}</span>
                  <div className="w-9 h-9 bg-sky-500/10 rounded-xl flex items-center justify-center">
                    <i className={`${sub.icon} text-sky-500 text-sm`}></i>
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
          <Link href="/section/02-frameworks" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> 02 — Frameworks
          </Link>
          <Link href="/section/03-version-control/why-version-control" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            เริ่มเรียน <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
