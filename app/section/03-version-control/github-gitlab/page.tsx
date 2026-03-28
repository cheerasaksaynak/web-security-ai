import Link from 'next/link'

const comparisonRows = [
  { feature: 'Owner', github: 'Microsoft', gitlab: 'GitLab Inc. (Self-hostable)' },
  { feature: 'ราคา Free', github: 'Public & Private repos', gitlab: 'Public & Private repos' },
  { feature: 'CI/CD', github: 'GitHub Actions', gitlab: 'GitLab CI/CD (built-in ดีกว่า)' },
  { feature: 'AI Assistant', github: 'GitHub Copilot', gitlab: 'GitLab Duo' },
  { feature: 'Self-hosted', github: 'GitHub Enterprise (จ่ายเงิน)', gitlab: 'GitLab CE (ฟรี)' },
  { feature: 'Package Registry', github: 'มี', gitlab: 'มี' },
  { feature: 'ความนิยม', github: 'อันดับ 1 (open source)', gitlab: 'นิยมใน Enterprise' },
  { feature: 'ใช้ที่ไหน', github: 'Open source, startups', gitlab: 'บริษัทใหญ่, รัฐบาล' },
]

const securityFeatures = [
  { icon: 'fas fa-shield-halved', label: 'Branch Protection — ป้องกัน force push และกำหนดให้ต้อง review ก่อน merge' },
  { icon: 'fas fa-code-pull-request', label: 'Code Review — ตรวจ code ก่อน merge เข้า main เสมอ' },
  { icon: 'fas fa-magnifying-glass-chart', label: 'Security Scanning — สแกนหา vulnerability ใน code อัตโนมัติ' },
  { icon: 'fas fa-bell', label: 'Dependency Alerts — แจ้งเตือนเมื่อ library ที่ใช้มีช่องโหว่' },
]

export default function GitHubGitLabPage() {
  return (
    <div>
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-4">GitHub vs GitLab</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-500">บริการ Version Control ชั้นนำ — เหมือนกันตรงไหน และต่างกันตรงไหน</p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm mb-10">
            <div className="grid grid-cols-3 bg-slate-700 text-white">
              <div className="p-4 text-sm font-bold text-slate-400">Feature</div>
              <div className="p-4 border-l border-slate-700 flex items-center gap-2">
                <i className="fab fa-github text-white text-xl"></i>
                <span className="font-bold">GitHub</span>
              </div>
              <div className="p-4 border-l border-slate-700 flex items-center gap-2">
                <i className="fab fa-gitlab text-orange-400 text-xl"></i>
                <span className="font-bold text-orange-300">GitLab</span>
              </div>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 border-t border-slate-100 dark:border-slate-700 ${i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'}`}
              >
                <div className="p-4 text-sm font-semibold text-slate-600">{row.feature}</div>
                <div className="p-4 border-l border-slate-100 text-sm text-slate-700">{row.github}</div>
                <div className="p-4 border-l border-slate-100 text-sm text-slate-700">{row.gitlab}</div>
              </div>
            ))}
          </div>

          {/* Security Features */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8">
            <h3 className="font-bold text-slate-900 text-xl mb-6 flex items-center gap-2">
              <i className="fas fa-shield-check text-emerald-500"></i>
              Security Features ที่ทั้ง GitHub และ GitLab มี
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {securityFeatures.map((f) => (
                <div key={f.label} className="flex gap-3 p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-100 dark:border-emerald-800">
                  <i className={`${f.icon} text-emerald-500 mt-0.5 flex-shrink-0`}></i>
                  <p className="text-sm text-slate-700 leading-relaxed">{f.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="border-t border-slate-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Link href="/section/03-version-control/git-commands" className="text-slate-500 hover:text-sky-500 flex items-center gap-2 text-sm font-medium transition-colors">
            <i className="fas fa-arrow-left text-xs"></i> Git Commands
          </Link>
          <Link href="/section/03-version-control/workshop" className="text-sky-500 hover:text-sky-600 flex items-center gap-2 text-sm font-medium transition-colors">
            Workshop <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
