import Link from 'next/link'

const ideStats = [
  { rank: 1, name: 'VS Code', pct: 73.7, icon: 'fas fa-code', bar: 'bg-sky-500' },
  { rank: 2, name: 'IntelliJ IDEA', pct: 26.8, icon: 'fas fa-brain', bar: 'bg-orange-500' },
  { rank: 3, name: 'Visual Studio', pct: 26.2, icon: 'fas fa-laptop-code', bar: 'bg-violet-500' },
  { rank: 4, name: 'Vim/Neovim', pct: 23.4, icon: 'fas fa-terminal', bar: 'bg-emerald-500' },
  { rank: 5, name: 'WebStorm', pct: 14.1, icon: 'fas fa-globe', bar: 'bg-yellow-500' },
  { rank: 6, name: 'Sublime Text', pct: 7.2, icon: 'fas fa-feather', bar: 'bg-amber-500' },
  { rank: 7, name: 'Eclipse', pct: 6.3, icon: 'fas fa-circle', bar: 'bg-indigo-500' },
  { rank: 8, name: 'Emacs', pct: 4.5, icon: 'fas fa-keyboard', bar: 'bg-pink-500' },
  { rank: 9, name: 'Atom', pct: 3.1, icon: 'fas fa-atom', bar: 'bg-slate-400' },
  { rank: 10, name: 'Notepad++', pct: 8.6, icon: 'fas fa-file-code', bar: 'bg-green-500' },
]

export default function IDEsPage() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 mt-2 mb-4">
            สถิติ IDE สำหรับพัฒนาเว็บยอดนิยม 10 อันดับ ปี 2026
          </h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-500">Integrated Development Environment — เครื่องมือเขียนโค้ดหลักของนักพัฒนา</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="space-y-3">
            {ideStats.slice(0, 5).map((ide) => (
              <div key={ide.name} className="flex items-center gap-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4">
                <span className="text-slate-400 font-bold text-sm w-5 shrink-0">{ide.rank}</span>
                <i className={`${ide.icon} text-slate-500 text-lg w-5 shrink-0`}></i>
                <span className="font-semibold text-slate-800 w-36 shrink-0 text-sm">{ide.name}</span>
                <div className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                  <div className={`${ide.bar} h-full rounded-full`} style={{ width: `${(ide.pct / 80) * 100}%` }} />
                </div>
                <span className="font-bold text-slate-700 text-sm w-12 text-right shrink-0">{ide.pct}%</span>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {ideStats.slice(5).map((ide) => (
              <div key={ide.name} className="flex items-center gap-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4">
                <span className="text-slate-400 font-bold text-sm w-5 shrink-0">{ide.rank}</span>
                <i className={`${ide.icon} text-slate-500 text-lg w-5 shrink-0`}></i>
                <span className="font-semibold text-slate-800 w-36 shrink-0 text-sm">{ide.name}</span>
                <div className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                  <div className={`${ide.bar} h-full rounded-full`} style={{ width: `${(ide.pct / 80) * 100}%` }} />
                </div>
                <span className="font-bold text-slate-700 text-sm w-12 text-right shrink-0">{ide.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-sky-50 dark:bg-sky-950/30 border-2 border-sky-200 dark:border-sky-800 rounded-2xl p-8 text-center">
          <i className="fas fa-crown text-sky-500 text-4xl mb-4 block"></i>
          <h3 className="text-2xl font-black text-sky-800 dark:text-sky-200 mb-2">VS Code ครองอันดับ 1 ด้วย 73.7%</h3>
          <p className="text-sky-700 dark:text-sky-300 max-w-2xl mx-auto leading-relaxed">
            VS Code เป็น IDE ฟรีจาก Microsoft ที่ได้รับความนิยมสูงสุดในโลก เพราะเบา เร็ว
            รองรับ extension มากมาย และมี GitHub Copilot ช่วย coding ด้วย AI ทำให้นักพัฒนาทุกระดับเลือกใช้
          </p>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/02-frameworks/web-frameworks" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> Web Frameworks
          </Link>
          <Link href="/section/02-frameworks/react" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            React.js <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
