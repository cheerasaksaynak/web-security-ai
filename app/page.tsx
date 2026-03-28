import Link from 'next/link'

const agenda = [
  {
    number: '01',
    title: 'ประสบการณ์ Web Developer',
    subtitle: 'เส้นทางอาชีพ บทเรียน และความท้าทายด้าน Security',
    icon: 'fas fa-user-tie',
    type: 'บรรยาย',
    time: '45 นาที',
    href: '/section/01-experience',
    color: 'from-sky-500 to-blue-600',
  },
  {
    number: '02',
    title: 'Web Development Fundamentals',
    subtitle: 'HTML, CSS, JS, HTTP, Client-Server Architecture',
    icon: 'fas fa-globe',
    type: 'บรรยาย',
    time: '30 นาที',
    href: '/section/02-fundamentals',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    number: '03',
    title: 'Web Security Essentials',
    subtitle: 'OWASP Top 10, XSS, SQL Injection, CSRF และการป้องกัน',
    icon: 'fas fa-shield-halved',
    type: 'บรรยาย + Workshop',
    time: '60 นาที',
    href: '/section/03-security',
    color: 'from-red-500 to-orange-500',
  },
  {
    number: '04',
    title: 'Modern Web Dev with Next.js',
    subtitle: 'React, Components, Routing, SSR/SSG, API Routes',
    icon: 'fas fa-code',
    type: 'บรรยาย + Workshop',
    time: '45 นาที',
    href: '/section/04-nextjs',
    color: 'from-violet-500 to-purple-600',
  },
  {
    number: '05',
    title: 'AI-Powered Development',
    subtitle: 'GitHub Copilot, Prompting Strategies, Secure Coding with AI',
    icon: 'fas fa-robot',
    type: 'Workshop',
    time: '30 นาที',
    href: '/section/05-ai',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    number: '06',
    title: 'Build & Deploy',
    subtitle: 'Static Export, GitHub Actions CI/CD, GitHub Pages',
    icon: 'fas fa-rocket',
    type: 'Workshop',
    time: '30 นาที',
    href: '/section/06-deploy',
    color: 'from-sky-500 to-cyan-500',
  },
]

const schedule = [
  { time: '09:00–09:45', session: 'Section 01 — ประสบการณ์ Web Developer', type: 'บรรยาย' },
  { time: '09:45–10:15', session: 'Section 02 — Web Development Fundamentals', type: 'บรรยาย' },
  { time: '10:15–10:30', session: 'พัก', type: 'break' },
  { time: '10:30–11:30', session: 'Section 03 — Web Security Essentials + Workshop 1', type: 'บรรยาย+ปฏิบัติ' },
  { time: '11:30–12:15', session: 'Section 04 — Next.js + Workshop 2', type: 'บรรยาย+ปฏิบัติ' },
  { time: '12:15–13:00', session: 'พักกลางวัน', type: 'break' },
  { time: '13:00–13:30', session: 'Section 05 — AI-Powered Dev + Workshop 3', type: 'ปฏิบัติ' },
  { time: '13:30–14:00', session: 'Section 06 — Build & Deploy + Workshop 4', type: 'ปฏิบัติ' },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative section-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&auto=format&fit=crop&q=80"
            alt="Code background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/98 to-sky-900/20" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 rounded-full px-4 py-2 text-sky-400 text-sm font-medium mb-6">
                <i className="fas fa-calendar-check text-xs"></i>
                Workshop 5 ชั่วโมง
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                การพัฒนาระบบสารสนเทศ
                <span className="block text-sky-400">อย่างมั่นคงปลอดภัย</span>
                <span className="block">ด้วย AI</span>
              </h1>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Secure Information Systems Development with AI-Powered Tools
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['GitHub Copilot', 'Next.js', 'OWASP Top 10', 'CI/CD'].map((tag) => (
                  <span key={tag} className="bg-slate-800 border border-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/section/01-experience"
                  className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
                >
                  <i className="fas fa-play text-sm"></i>
                  เริ่มเรียน
                </Link>
                <Link
                  href="/checklist"
                  className="inline-flex items-center justify-center gap-2 border border-sky-500/50 text-sky-400 hover:bg-sky-500/10 font-semibold px-8 py-3 rounded-xl transition-colors"
                >
                  <i className="fas fa-list-check text-sm"></i>
                  Security Checklist
                </Link>
              </div>
            </div>

            {/* Speaker card */}
            <div className="hidden md:block">
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-sky-500/20 rounded-2xl flex items-center justify-center border border-sky-500/30">
                    <i className="fas fa-user-tie text-sky-400 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">นายจีรศักดิ์ สายนาค</h3>
                    <p className="text-sky-400 text-sm">นักวิชาการคอมพิวเตอร์</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  สำนักนวัตกรรมดิจิทัลและระบบอัจฉริยะ<br />
                  มหาวิทยาลัยสงขลานครินทร์
                </p>
                <div className="space-y-3">
                  {[
                    { icon: 'fas fa-shield-halved', label: 'Web Security Expert' },
                    { icon: 'fas fa-code', label: 'Full-Stack Developer' },
                    { icon: 'fas fa-robot', label: 'AI-Assisted Development' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 text-slate-300 text-sm">
                      <i className={`${item.icon} text-sky-400 w-4`}></i>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-slate-800">
            {[
              { icon: 'fas fa-clock', value: '5 ชม.', label: 'Workshop' },
              { icon: 'fas fa-wrench', value: '4', label: 'Workshops' },
              { icon: 'fas fa-book-open', value: '6', label: 'Sections' },
              { icon: 'fas fa-shield-halved', value: '10+', label: 'Security Topics' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <i className={`${stat.icon} text-sky-400 text-xl mb-2 block`}></i>
                <div className="text-white text-2xl font-bold">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Agenda
          </h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-500 text-lg">เนื้อหาทั้งหมดในวันนี้</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agenda.map((item) => (
            <Link key={item.href} href={item.href} className="group">
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden card-hover h-full">
                <div className={`h-1.5 bg-gradient-to-r ${item.color}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl font-black text-slate-100 group-hover:text-sky-100 transition-colors">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center border border-sky-100">
                      <i className={`${item.icon} text-sky-500 text-sm`}></i>
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.subtitle}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-sky-50 text-sky-700 border border-sky-200 px-2 py-1 rounded-full font-medium">
                      {item.type}
                    </span>
                    <span className="text-slate-400">
                      <i className="fas fa-clock mr-1"></i>
                      {item.time}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">ตารางเวลา Workshop</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-500">กำหนดการโดยประมาณสำหรับ 5 ชั่วโมง</p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            {schedule.map((row, i) => (
              <div
                key={i}
                className={`flex items-center gap-6 px-6 py-4 border-b border-slate-100 last:border-0 ${
                  row.type === 'break' ? 'bg-slate-50' : 'hover:bg-sky-50/50'
                } transition-colors`}
              >
                <span className="text-sky-600 font-mono font-bold text-sm w-28 flex-shrink-0">{row.time}</span>
                <span className={`flex-1 ${row.type === 'break' ? 'text-slate-400 text-sm' : 'text-slate-800 font-medium'}`}>
                  {row.session}
                </span>
                {row.type !== 'break' && (
                  <span className="text-xs bg-sky-100 text-sky-700 border border-sky-200 px-3 py-1 rounded-full hidden sm:block">
                    {row.type}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl p-12 text-white">
          <i className="fas fa-shield-halved text-4xl mb-6 block opacity-80"></i>
          <h2 className="text-3xl font-black mb-4">
            "Security ไม่ใช่สิ่งที่เพิ่มทีหลัง<br />มันต้อง built-in ตั้งแต่ต้น"
          </h2>
          <p className="text-sky-100 mb-8">บทเรียนสำคัญที่สุดจากประสบการณ์ทำงาน</p>
          <Link
            href="/section/01-experience"
            className="inline-flex items-center gap-2 bg-white text-sky-600 font-bold px-8 py-3 rounded-xl hover:bg-sky-50 transition-colors"
          >
            <i className="fas fa-arrow-right text-sm"></i>
            เริ่มต้นการเรียนรู้
          </Link>
        </div>
      </section>
    </div>
  )
}
