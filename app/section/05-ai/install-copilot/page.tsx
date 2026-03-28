import Link from 'next/link'

export default function InstallCopilotPage() {
  return (
    <div>
      {/* ─── 5.5 ติดตั้ง GitHub Copilot ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">ติดตั้ง GitHub Copilot</h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-500 dark:text-slate-400">5 ขั้นตอน เริ่มใช้งานได้ภายใน 5 นาที</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: 'สมัคร GitHub Account + GitHub Education',
                desc: 'ถ้ายังไม่มี account สมัครที่ github.com จากนั้นสมัคร GitHub Education ที่ education.github.com โดยใช้ email มหาวิทยาลัย (ฟรีสำหรับนักศึกษา)',
                icon: 'fas fa-user-plus',
                iconBg: 'bg-slate-800',
              },
              {
                step: 2,
                title: 'เปิด VS Code Extensions',
                desc: 'กด Ctrl+Shift+X (Windows/Linux) หรือ Cmd+Shift+X (Mac) เพื่อเปิด Extensions panel',
                icon: 'fas fa-puzzle-piece',
                iconBg: 'bg-sky-500',
              },
              {
                step: 3,
                title: 'ค้นหาและติดตั้ง Extensions',
                desc: 'ค้นหา "GitHub Copilot" และติดตั้ง 2 extensions: GitHub Copilot (inline suggestions) และ GitHub Copilot Chat (chat panel)',
                icon: 'fas fa-download',
                iconBg: 'bg-violet-500',
              },
              {
                step: 4,
                title: 'Sign in กับ GitHub',
                desc: 'VS Code จะแจ้งให้ sign in กับ GitHub account คลิก "Sign in" แล้วทำตาม flow ในเบราว์เซอร์ อนุมัติ permission ที่ขอ',
                icon: 'fas fa-sign-in-alt',
                iconBg: 'bg-emerald-500',
              },
              {
                step: 5,
                title: 'ทดสอบการใช้งาน',
                desc: 'สร้างไฟล์ใหม่ พิมพ์ comment เช่น "// function to validate email" แล้วรอดู suggestion สีเทาจาก Copilot กด Tab เพื่อ accept',
                icon: 'fas fa-vial',
                iconBg: 'bg-orange-500',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
                <div className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <i className={`${item.icon} text-white`}></i>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Step {item.step}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/05-ai/pricing" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> ราคาเปรียบเทียบ
          </Link>
          <Link href="/section/05-ai/spec-md" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            SPEC.md <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
