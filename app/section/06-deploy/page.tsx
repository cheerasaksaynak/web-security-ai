import SectionHero from '@/components/SectionHero'
import Link from 'next/link'

const subsections = [
  { href: '/section/06-deploy/deploy-methods', title: 'วิธีการ Deploy', desc: 'Static, Server, Serverless — แต่ละ method มีจุดเด่นต่างกัน', icon: 'fas fa-upload' },
  { href: '/section/06-deploy/cicd', title: 'CI/CD Pipeline', desc: 'จาก code → production ในไม่กี่นาทีโดยอัตโนมัติ', icon: 'fas fa-arrows-spin' },
  { href: '/section/06-deploy/security', title: 'Security in Deploy', desc: 'สิ่งที่ต้องคำนึงด้านความปลอดภัยในการ deploy', icon: 'fas fa-lock' },
]

export default function DeployPage() {
  return (
    <div>
      <SectionHero
        number="06"
        title="Web Deployment"
        subtitle="Deploy เว็บสู่โลก — Static Hosting, CI/CD, GitHub Pages"
        icon="fas fa-rocket"
      />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sky-500 text-xs font-bold uppercase tracking-widest mb-2">เนื้อหา</p>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">หัวข้อย่อย</h2>
          </div>
          <span className="text-slate-400 text-sm font-mono hidden sm:block">3 topics</span>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
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
          <Link href="/section/05-ai" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> 05 AI Coding Agent
          </Link>
          <Link href="/section/06-deploy/deploy-methods" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            เริ่มเรียน <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
