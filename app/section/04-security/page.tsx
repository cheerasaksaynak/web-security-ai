import SectionHero from '@/components/SectionHero'
import Link from 'next/link'

const subsections = [
  { href: '/section/04-security/credential-management', title: 'Credential Management', desc: 'ห้ามเก็บ secrets ใน code — API keys, passwords ต้องอยู่นอก repo', icon: 'fas fa-key' },
  { href: '/section/04-security/security-headers', title: 'Security Headers', desc: 'HTTP headers ที่ป้องกันการโจมตีหลายประเภท', icon: 'fas fa-shield-halved' },
  { href: '/section/04-security/server-config', title: 'Server Configuration', desc: 'การตั้งค่า server ที่ถูกต้องตั้งแต่แรก', icon: 'fas fa-server' },
  { href: '/section/04-security/owasp', title: 'OWASP Top 10', desc: 'ช่องโหว่ XSS, SQLi, CSRF และการป้องกัน', icon: 'fas fa-bug' },
]

export default function SecurityPage() {
  return (
    <div>
      <SectionHero
        number="04"
        title="Web Security"
        subtitle="ความปลอดภัยของเว็บแอปพลิเคชัน — ตั้งแต่ Credential Management ไปจนถึง OWASP Top 10 และการป้องกันช่องโหว่ที่พบบ่อย"
        icon="fas fa-shield-halved"
        imageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1400&auto=format&fit=crop&q=80"
      />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sky-500 text-xs font-bold uppercase tracking-widest mb-2">เนื้อหา</p>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">หัวข้อย่อย</h2>
          </div>
          <span className="text-slate-400 text-sm font-mono hidden sm:block">4 topics</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {subsections.map((sub, i) => (
            <Link key={sub.href} href={sub.href} className="group">
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 card-hover h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-300 dark:text-slate-600">{String(i + 1).padStart(2, '0')}</span>
                  <div className="w-9 h-9 bg-red-500/10 rounded-xl flex items-center justify-center">
                    <i className={`${sub.icon} text-red-500 text-sm`}></i>
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
          <Link href="/section/03-version-control" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> 03 Version Control
          </Link>
          <Link href="/section/04-security/credential-management" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            เริ่มเรียน <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
