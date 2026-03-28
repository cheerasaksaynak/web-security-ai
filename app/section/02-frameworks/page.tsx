import SectionHero from '@/components/SectionHero'
import Link from 'next/link'

const subsections = [
  { href: '/section/02-frameworks/programming-languages', title: 'ภาษาโปรแกรมมิ่ง', desc: 'สถิติภาษายอดนิยม 10 อันดับ ปี 2026', icon: 'fas fa-code' },
  { href: '/section/02-frameworks/web-frameworks', title: 'Web Frameworks', desc: 'React, Next.js, Vue เปรียบเทียบสถิติการใช้งาน', icon: 'fas fa-layer-group' },
  { href: '/section/02-frameworks/ides', title: 'IDEs & Editors', desc: 'VS Code, IntelliJ, Vim — เครื่องมือที่นักพัฒนาใช้', icon: 'fas fa-laptop-code' },
  { href: '/section/02-frameworks/react', title: 'React.js', desc: 'JavaScript library สำหรับสร้าง UI จาก Meta', icon: 'fas fa-atom' },
  { href: '/section/02-frameworks/nextjs', title: 'Next.js', desc: 'The React Framework for Production', icon: 'fas fa-n' },
  { href: '/section/02-frameworks/tailwind', title: 'Tailwind CSS', desc: 'Utility-First CSS Framework', icon: 'fas fa-palette' },
  { href: '/section/02-frameworks/material-ui', title: 'Material UI', desc: 'Component library สำหรับ React', icon: 'fas fa-shapes' },
  { href: '/section/02-frameworks/vscode', title: 'VS Code', desc: 'Shortcuts และ Extensions ที่ต้องรู้', icon: 'fas fa-code' },
  { href: '/section/02-frameworks/github-copilot', title: 'GitHub Copilot', desc: 'AI Pair Programmer จาก GitHub', icon: 'fas fa-robot' },
  { href: '/section/02-frameworks/workshop', title: 'Workshop', desc: 'สร้างเว็บด้วย Next.js — ลงมือทำจริง', icon: 'fas fa-hammer' },
]

export default function FrameworksPage() {
  return (
    <div>
      <SectionHero
        number="02"
        title="Web Development Framework"
        subtitle="เครื่องมือและ Framework ที่นักพัฒนาเว็บใช้จริงในปี 2026 — React, Next.js, Tailwind และการทำงานกับ AI"
        icon="fas fa-code"
        imageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&auto=format&fit=crop&q=80"
      />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sky-500 text-xs font-bold uppercase tracking-widest mb-2">เนื้อหา</p>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">หัวข้อย่อย</h2>
          </div>
          <span className="text-slate-400 text-sm font-mono hidden sm:block">10 topics</span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {subsections.map((sub, i) => (
            <Link key={sub.href} href={sub.href} className="group">
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 card-hover h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-300 dark:text-slate-600">{String(i + 1).padStart(2, '0')}</span>
                  <div className="w-9 h-9 bg-violet-500/10 rounded-xl flex items-center justify-center">
                    <i className={`${sub.icon} text-violet-500 text-sm`}></i>
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
          <Link href="/section/01-fundamentals" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> 01 Fundamentals
          </Link>
          <Link href="/section/02-frameworks/programming-languages" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            เริ่มเรียน <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
