import Link from 'next/link'

const agenda = [
  {
    number: '01',
    title: 'Web Fundamentals',
    subtitle: 'HTML, CSS, JS, Protocols, API, Frontend/Backend, SSR, SPA',
    icon: 'fas fa-globe',
    type: 'บรรยาย',
    time: '30 นาที',
    href: '/section/01-fundamentals',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    number: '02',
    title: 'Web Development Framework',
    subtitle: 'React, Next.js, Tailwind, MUI, VS Code, GitHub Copilot',
    icon: 'fas fa-layer-group',
    type: 'บรรยาย + Workshop',
    time: '45 นาที',
    href: '/section/02-frameworks',
    color: 'from-violet-500 to-purple-600',
  },
  {
    number: '03',
    title: 'Version Control',
    subtitle: 'Git, GitHub vs GitLab, คำสั่งที่ใช้บ่อย, Workshop',
    icon: 'fas fa-code-branch',
    type: 'บรรยาย + Workshop',
    time: '30 นาที',
    href: '/section/03-version-control',
    color: 'from-amber-500 to-orange-500',
  },
  {
    number: '04',
    title: 'Web Security',
    subtitle: 'Credential Mgmt, Security Headers, OWASP Top 10, XSS, SQLi',
    icon: 'fas fa-shield-halved',
    type: 'บรรยาย + Workshop',
    time: '60 นาที',
    href: '/section/04-security',
    color: 'from-red-500 to-rose-600',
  },
  {
    number: '05',
    title: 'AI Coding Agent',
    subtitle: 'AI Agent, GitHub Copilot, SPEC.md, Prompting, Workshop',
    icon: 'fas fa-robot',
    type: 'บรรยาย + Workshop',
    time: '45 นาที',
    href: '/section/05-ai',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    number: '06',
    title: 'Web Deployment',
    subtitle: 'Deploy methods, CI/CD, GitHub Pages, Security in Production',
    icon: 'fas fa-rocket',
    type: 'Workshop',
    time: '45 นาที',
    href: '/section/06-deploy',
    color: 'from-sky-500 to-cyan-500',
  },
]

type ScheduleRow =
  | { kind: 'block'; label: string; timeRange: string; icon: string }
  | { kind: 'session'; time: string; session: string; type: string; accent: string }
  | { kind: 'break'; time: string; session: string; isLunch?: boolean }

const schedule: ScheduleRow[] = [
  { kind: 'block', label: 'ช่วงเช้า', timeRange: '09:00 – 12:00', icon: 'fas fa-sun' },
  { kind: 'session', time: '09:00–09:30', session: 'Section 01 — Web Fundamentals', type: 'บรรยาย', accent: 'bg-blue-500' },
  { kind: 'session', time: '09:30–10:15', session: 'Section 02 — Web Framework + Workshop 1', type: 'บรรยาย+ปฏิบัติ', accent: 'bg-violet-500' },
  { kind: 'break', time: '10:15–10:30', session: 'พักเบรก' },
  { kind: 'session', time: '10:30–11:00', session: 'Section 03 — Version Control + Workshop 2', type: 'บรรยาย+ปฏิบัติ', accent: 'bg-amber-500' },
  { kind: 'session', time: '11:00–12:00', session: 'Section 04 — Web Security + Workshop 3', type: 'บรรยาย+ปฏิบัติ', accent: 'bg-red-500' },
  { kind: 'break', time: '12:00–13:00', session: 'พักกลางวัน', isLunch: true },
  { kind: 'block', label: 'ช่วงบ่าย', timeRange: '13:00 – 16:00', icon: 'fas fa-cloud-sun' },
  { kind: 'session', time: '13:00–13:45', session: 'Section 05 — AI Coding Agent + Workshop 4', type: 'บรรยาย+ปฏิบัติ', accent: 'bg-emerald-500' },
  { kind: 'session', time: '13:45–14:30', session: 'Section 06 — Web Deployment + Workshop 5', type: 'ปฏิบัติ', accent: 'bg-sky-500' },
  { kind: 'break', time: '14:30–14:45', session: 'พักเบรก' },
  { kind: 'session', time: '14:45–15:45', session: 'Workshop อิสระ + Q&A', type: 'ปฏิบัติ', accent: 'bg-teal-500' },
  { kind: 'session', time: '15:45–16:00', session: 'สรุปและปิดการอบรม', type: 'สรุป', accent: 'bg-slate-500' },
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

        <div className="relative max-w-6xl mx-auto px-6 py-14 md:py-20">
          <div className="max-w-3xl">
            <div>

              <h1 className="text-4xl md:text-5xl font-black text-white leading-[2] mb-3">การพัฒนาระบบสารสนเทศ</h1>
              <h1 className="text-4xl md:text-5xl font-black text-sky-400 leading-[2] mb-3">อย่างมั่นคงปลอดภัย</h1>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-[2] mb-3">ด้วย AI</h1>
              <p className="text-slate-400 text-lg mb-5 leading-relaxed">
                Secure Information Systems Development with AI-Powered Tools
              </p>
              <div className="flex flex-wrap gap-3 mb-5">
                {['GitHub Copilot', 'Next.js', 'OWASP Top 10', 'Git', 'CI/CD'].map((tag) => (
                  <span key={tag} className="bg-slate-100 border border-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sky-500 text-xs font-bold uppercase tracking-widest mb-2">เนื้อหาวันนี้</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">Agenda</h2>
          </div>
          <span className="text-slate-400 text-sm font-mono hidden sm:block">6 sessions · 6h</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {agenda.map((item) => (
            <Link key={item.href} href={item.href} className="group">
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden card-hover h-full">
                <div className={`h-0.5 bg-gradient-to-r ${item.color}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-slate-300 dark:text-slate-600 tracking-widest">
                      {item.number}
                    </span>
                    <div className={`w-9 h-9 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-sm`}>
                      <i className={`${item.icon} text-white text-sm`}></i>
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5">{item.subtitle}</p>
                  <div className="flex items-center justify-between text-xs pt-4 border-t border-slate-100 dark:border-slate-700/50">
                    <span className="font-medium text-slate-500 dark:text-slate-400">{item.type}</span>
                    <span className="font-mono text-slate-400">{item.time}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sky-500 text-xs font-bold uppercase tracking-widest mb-2">กำหนดการ</p>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">ตารางเวลา</h2>
            </div>
            <span className="text-slate-400 text-sm font-mono hidden sm:block">09:00 – 16:00</span>
          </div>
          <div className="space-y-1.5">
            {schedule.map((row, i) => {
              if (row.kind === 'block') {
                return (
                  <div key={i} className="flex items-center gap-2.5 pt-7 pb-2 first:pt-0">
                    <i className={`${row.icon} text-slate-400 dark:text-slate-500 text-xs`}></i>
                    <span className="font-bold text-slate-600 dark:text-slate-300 text-sm">{row.label}</span>
                    <span className="text-slate-400 text-xs font-mono">{row.timeRange}</span>
                    <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700/60 ml-1" />
                  </div>
                )
              }
              if (row.kind === 'break') {
                return (
                  <div key={i} className={`flex items-center gap-4 px-4 py-2.5 rounded-lg ${
                    row.isLunch
                      ? 'bg-amber-50 dark:bg-amber-900/15 border border-amber-100 dark:border-amber-900/40'
                      : ''
                  }`}>
                    <span className="font-mono text-xs text-slate-300 dark:text-slate-600 w-24 flex-shrink-0">{row.time}</span>
                    <i className={`${row.isLunch ? 'fas fa-utensils text-amber-400' : 'fas fa-coffee text-slate-300 dark:text-slate-600'} text-xs flex-shrink-0`}></i>
                    <span className={`text-sm ${row.isLunch ? 'text-amber-600 dark:text-amber-400 font-medium' : 'text-slate-400 dark:text-slate-600'}`}>
                      {row.session}
                    </span>
                  </div>
                )
              }
              return (
                <div key={i} className="flex items-center gap-4 bg-white dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/60 rounded-xl px-4 py-3.5 hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                  <div className={`w-0.5 h-7 rounded-full ${row.accent} flex-shrink-0`} />
                  <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 w-24 flex-shrink-0">{row.time}</span>
                  <span className="flex-1 text-slate-800 dark:text-slate-200 font-medium text-sm">{row.session}</span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-700/60 text-slate-500 dark:text-slate-400 hidden sm:inline-block flex-shrink-0">
                    {row.type}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
