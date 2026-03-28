import Link from 'next/link'

const programmingLanguages = [
  { rank: 1, name: 'JavaScript', pct: 62.3, color: 'bg-yellow-400', textColor: 'text-yellow-700', badge: 'bg-yellow-50 border-yellow-200' },
  { rank: 2, name: 'Python', pct: 51.0, color: 'bg-blue-500', textColor: 'text-blue-700', badge: 'bg-blue-50 border-blue-200' },
  { rank: 3, name: 'TypeScript', pct: 43.1, color: 'bg-sky-500', textColor: 'text-sky-700', badge: 'bg-sky-50 border-sky-200' },
  { rank: 4, name: 'Java', pct: 30.3, color: 'bg-orange-500', textColor: 'text-orange-700', badge: 'bg-orange-50 border-orange-200' },
  { rank: 5, name: 'C#', pct: 27.1, color: 'bg-violet-500', textColor: 'text-violet-700', badge: 'bg-violet-50 border-violet-200' },
  { rank: 6, name: 'C/C++', pct: 23.5, color: 'bg-slate-500', textColor: 'text-slate-700', badge: 'bg-slate-50 border-slate-200' },
  { rank: 7, name: 'PHP', pct: 18.2, color: 'bg-indigo-500', textColor: 'text-indigo-700', badge: 'bg-indigo-50 border-indigo-200' },
  { rank: 8, name: 'Go', pct: 14.3, color: 'bg-cyan-500', textColor: 'text-cyan-700', badge: 'bg-cyan-50 border-cyan-200' },
  { rank: 9, name: 'Rust', pct: 13.1, color: 'bg-amber-600', textColor: 'text-amber-700', badge: 'bg-amber-50 border-amber-200' },
  { rank: 10, name: 'Kotlin', pct: 9.4, color: 'bg-purple-500', textColor: 'text-purple-700', badge: 'bg-purple-50 border-purple-200' },
]

export default function ProgrammingLanguagesPage() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 mt-2 mb-4">
            สถิติภาษาโปรแกรมมิ่งยอดนิยม 10 อันดับ ปี 2026
          </h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-500">ข้อมูลจาก Stack Overflow Developer Survey และ GitHub Octoverse</p>
        </div>

        <div className="space-y-3">
          {programmingLanguages.map((lang) => (
            <div
              key={lang.name}
              className="flex items-center gap-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4"
            >
              <span className="text-slate-400 font-bold text-sm w-6 text-center shrink-0">
                {lang.rank}
              </span>
              <div
                className={`text-xs font-bold px-3 py-1 rounded-lg border ${lang.badge} ${lang.textColor} w-28 text-center shrink-0`}
              >
                {lang.name}
              </div>
              <div className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                <div
                  className={`${lang.color} h-full rounded-full`}
                  style={{ width: `${(lang.pct / 70) * 100}%` }}
                />
              </div>
              <span className="text-slate-700 font-bold text-sm w-14 text-right shrink-0">
                {lang.pct}%
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <i className="fas fa-trophy text-yellow-500 text-xl"></i>
              <h3 className="font-bold text-yellow-800 dark:text-yellow-200">JavaScript ครองอันดับ 1</h3>
            </div>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm leading-relaxed">
              ยังคงเป็นภาษาที่ใช้มากที่สุดติดต่อกันกว่า 10 ปี ใช้ได้ทั้ง Frontend และ Backend (Node.js) ทำให้นักพัฒนา Fullstack เลือกเรียน JS เป็นภาษาแรก
            </p>
          </div>
          <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <i className="fas fa-rocket text-sky-500 text-xl"></i>
              <h3 className="font-bold text-sky-800 dark:text-sky-200">TypeScript เติบโตเร็ว</h3>
            </div>
            <p className="text-sky-700 dark:text-sky-300 text-sm leading-relaxed">
              TypeScript มาแรงอย่างต่อเนื่อง เพิ่ม type safety ให้ JavaScript ทำให้โค้ดมีคุณภาพสูงขึ้น ลด bug และ IDE ช่วย autocomplete ได้แม่นขึ้น
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <i className="fas fa-brain text-blue-500 text-xl"></i>
              <h3 className="font-bold text-blue-800 dark:text-blue-200">Python พุ่งเพราะ AI</h3>
            </div>
            <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">
              Python ขึ้นเป็นอันดับ 2 เพราะกระแส AI/ML ทำให้นักพัฒนาหลายล้านคนหันมาเรียน Python สำหรับงาน Data Science และ Machine Learning
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/02-frameworks" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> 02 Frameworks
          </Link>
          <Link href="/section/02-frameworks/web-frameworks" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            Web Frameworks <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
