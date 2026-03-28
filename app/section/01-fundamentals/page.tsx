import SectionHero from '@/components/SectionHero'
import Link from 'next/link'

const subsections = [
  { href: '/section/01-fundamentals/how-web-works', title: 'How the Web Works', desc: 'Client-Server model, DNS, request lifecycle', icon: 'fas fa-network-wired' },
  { href: '/section/01-fundamentals/frontend-technologies', title: 'Frontend Technologies', desc: 'HTML, CSS, JavaScript — พื้นฐานทุกเว็บใช้', icon: 'fas fa-code' },
  { href: '/section/01-fundamentals/protocols', title: 'Protocols', desc: 'HTTP, HTTPS, FTP, SSH, UDP — port & encryption', icon: 'fas fa-plug' },
  { href: '/section/01-fundamentals/http-methods', title: 'HTTP Methods', desc: 'GET, POST, PUT, DELETE และ status codes', icon: 'fas fa-exchange-alt' },
  { href: '/section/01-fundamentals/api', title: 'API คืออะไร', desc: 'REST API, endpoints, JSON format', icon: 'fas fa-sitemap' },
  { href: '/section/01-fundamentals/frontend-vs-backend', title: 'Frontend vs Backend', desc: 'บทบาทและการแบ่งงาน + security implications', icon: 'fas fa-server' },
  { href: '/section/01-fundamentals/https-storage', title: 'HTTPS & Browser Storage', desc: 'TLS, Cookie, LocalStorage, SessionStorage', icon: 'fas fa-lock' },
  { href: '/section/01-fundamentals/rendering', title: 'SSR / SPA / SSG', desc: 'การ render เว็บ 3 รูปแบบ เปรียบเทียบจุดเด่น', icon: 'fas fa-layer-group' },
]

export default function FundamentalsPage() {
  return (
    <div>
      <SectionHero
        number="01"
        title="Web Development Fundamentals"
        subtitle="พื้นฐานที่ต้องรู้ก่อนพูดถึง Security — HTML, CSS, JS, HTTP, Client-Server"
        icon="fas fa-globe"
        imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&auto=format&fit=crop&q=80"
      />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sky-500 text-xs font-bold uppercase tracking-widest mb-2">เนื้อหา</p>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">หัวข้อย่อย</h2>
          </div>
          <span className="text-slate-400 text-sm font-mono hidden sm:block">8 topics</span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {subsections.map((sub, i) => (
            <Link key={sub.href} href={sub.href} className="group">
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 card-hover h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-300 dark:text-slate-600">{String(i + 1).padStart(2, '0')}</span>
                  <div className="w-9 h-9 bg-blue-500/10 rounded-xl flex items-center justify-center">
                    <i className={`${sub.icon} text-blue-500 text-sm`}></i>
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
          <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> หน้าหลัก
          </Link>
          <Link href="/section/01-fundamentals/how-web-works" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            เริ่มเรียน <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
