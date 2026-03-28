import Link from 'next/link'

// ─── 5.4 ราคา ────────────────────────────────────────────────────────────────
const pricingRows = [
  {
    tool: 'GitHub Copilot',
    price: '$10 / เดือน',
    free: true,
    freeNote: 'ฟรีสำหรับนักศึกษา (GitHub Education)',
    note: 'แนะนำ — ดีที่สุดสำหรับ VS Code',
    highlight: true,
  },
  {
    tool: 'Cursor',
    price: '$20 / เดือน',
    free: true,
    freeNote: '2 สัปดาห์ trial',
    note: 'VS Code fork — refactoring ดีมาก',
    highlight: false,
  },
  {
    tool: 'Claude Code',
    price: '$20 / เดือน (Claude Pro)',
    free: false,
    freeNote: '—',
    note: 'Terminal CLI — complex tasks',
    highlight: false,
  },
  {
    tool: 'Windsurf',
    price: '$15 / เดือน',
    free: true,
    freeNote: 'ใช้ได้ฟรีบางส่วน',
    note: 'ทางเลือกที่ประหยัดกว่า',
    highlight: false,
  },
  {
    tool: 'ChatGPT Plus',
    price: '$20 / เดือน',
    free: true,
    freeNote: 'GPT-3.5 ฟรี',
    note: 'เหมาะสำหรับถาม-ตอบทั่วไป',
    highlight: false,
  },
]

export default function PricingPage() {
  return (
    <div>
      {/* ─── 5.4 ราคาเปรียบเทียบ ─────────────────────────────────────────────── */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">เปรียบเทียบราคา</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-500 dark:text-slate-400">เลือก plan ที่เหมาะกับงบประมาณ — มีตัวเลือกฟรีสำหรับนักศึกษา</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-700 text-white">
                    <th className="text-left px-6 py-4 font-bold">Tool</th>
                    <th className="text-left px-6 py-4 font-bold">ราคา</th>
                    <th className="text-center px-6 py-4 font-bold">Free Tier</th>
                    <th className="text-left px-6 py-4 font-bold">หมายเหตุ</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((row, i) => (
                    <tr
                      key={row.tool}
                      className={`border-b border-slate-100 dark:border-slate-700 ${row.highlight ? 'bg-sky-50 dark:bg-sky-950/30' : i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50/50 dark:bg-slate-800/50'}`}
                    >
                      <td className="px-6 py-4 font-semibold text-slate-800 dark:text-white">
                        {row.tool}
                        {row.highlight && (
                          <span className="ml-2 text-xs bg-sky-500 text-white px-2 py-0.5 rounded-full font-bold">แนะนำ</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300 font-mono">{row.price}</td>
                      <td className="px-6 py-4 text-center">
                        {row.free ? (
                          <div>
                            <span className="text-emerald-600 font-bold text-base">✅</span>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{row.freeNote}</p>
                          </div>
                        ) : (
                          <span className="text-red-400 font-bold text-base">❌</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* GitHub Education tip */}
          <div className="mt-6 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-5 flex gap-4">
            <i className="fas fa-graduation-cap text-emerald-500 text-2xl flex-shrink-0 mt-1"></i>
            <div>
              <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-1">นักศึกษาสมัคร GitHub Education ได้ฟรี!</h3>
              <p className="text-emerald-700 dark:text-emerald-400 text-sm">
                GitHub Copilot ฟรีสำหรับนักศึกษา — สมัครผ่าน{' '}
                <code className="bg-emerald-100 dark:bg-emerald-900/50 px-1 rounded font-mono">education.github.com</code>{' '}
                ใช้ email มหาวิทยาลัย ได้ Copilot + GitHub Pro ฟรีตลอดช่วงที่ยังเป็นนักศึกษา
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/05-ai/ai-tools" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> AI Coding Tools
          </Link>
          <Link href="/section/05-ai/install-copilot" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            ติดตั้ง Copilot <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
