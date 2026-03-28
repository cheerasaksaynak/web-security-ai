import Link from 'next/link'

const webFrameworks = [
  { rank: 1, name: 'React.js', pct: 40.8, color: 'bg-sky-400', type: 'Frontend' },
  { rank: 2, name: 'Next.js', pct: 17.9, color: 'bg-slate-800', type: 'Fullstack' },
  { rank: 3, name: 'Vue.js', pct: 16.4, color: 'bg-emerald-500', type: 'Frontend' },
  { rank: 4, name: 'Angular', pct: 17.1, color: 'bg-red-500', type: 'Frontend' },
  { rank: 5, name: 'Express.js', pct: 19.3, color: 'bg-slate-600', type: 'Backend' },
  { rank: 6, name: 'Tailwind CSS', pct: 62.8, color: 'bg-teal-500', type: 'CSS' },
  { rank: 7, name: 'ASP.NET Core', pct: 16.8, color: 'bg-violet-600', type: 'Backend' },
  { rank: 8, name: 'Django', pct: 11.7, color: 'bg-green-700', type: 'Backend' },
  { rank: 9, name: 'Laravel', pct: 10.2, color: 'bg-red-600', type: 'Backend' },
  { rank: 10, name: 'Spring Boot', pct: 8.4, color: 'bg-lime-600', type: 'Backend' },
]

const typeColors: Record<string, string> = {
  Frontend: 'bg-sky-100 text-sky-700',
  Fullstack: 'bg-slate-100 text-slate-700',
  Backend: 'bg-emerald-100 text-emerald-700',
  CSS: 'bg-teal-100 text-teal-700',
}

export default function WebFrameworksPage() {
  return (
    <div>
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mt-2 mb-4">
              สถิติ Web Framework ยอดนิยม 10 อันดับ ปี 2026
            </h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-500">ครอบคลุมทั้ง Frontend, Backend และ CSS Framework</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {webFrameworks.map((fw) => (
              <div
                key={fw.name}
                className="flex items-center gap-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4"
              >
                <div
                  className={`w-8 h-8 ${fw.color} rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0`}
                >
                  {fw.rank}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-slate-900">{fw.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${typeColors[fw.type]}`}>
                      {fw.type}
                    </span>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                    <div
                      className={`${fw.color} h-full rounded-full`}
                      style={{ width: `${(fw.pct / 65) * 100}%` }}
                    />
                  </div>
                </div>
                <span className="font-bold text-slate-700 text-sm w-14 text-right shrink-0">
                  {fw.pct}%
                </span>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
            <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
              <i className="fas fa-lightbulb text-amber-500"></i>
              สังเกตอะไรได้บ้าง?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
              {[
                {
                  text: 'Tailwind CSS มีการใช้งานสูงสุดถึง 62.8% เพราะเปลี่ยนวิธีเขียน CSS ให้เร็วและง่ายขึ้นมาก',
                },
                {
                  text: 'React.js ยังคงเป็น Frontend framework อันดับ 1 ที่บริษัทขนาดใหญ่เลือกใช้',
                },
                {
                  text: 'Next.js เติบโตอย่างรวดเร็ว เพราะรวม Frontend + Backend ไว้ในที่เดียว',
                },
                {
                  text: 'Express.js ยังเป็น Node.js backend ที่นิยม เรียนรู้ง่าย เหมาะกับ API development',
                },
              ].map((item) => (
                <div key={item.text} className="flex gap-3">
                  <i className="fas fa-check-circle text-emerald-500 mt-0.5 shrink-0"></i>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/02-frameworks/programming-languages" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> ภาษาโปรแกรมมิ่ง
          </Link>
          <Link href="/section/02-frameworks/ides" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            IDEs <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
