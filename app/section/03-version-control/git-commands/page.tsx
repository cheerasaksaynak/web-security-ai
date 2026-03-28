import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

const setupCommands = `git config --global user.name "Your Name"
git config --global user.email "email@example.com"
git init          # เริ่ม repo ใหม่
git clone <url>   # copy repo มาจาก remote`

const dailyCommands = `git status        # ดูสถานะไฟล์
git add .         # stage ทุกไฟล์
git add <file>    # stage เฉพาะไฟล์
git commit -m "message"  # บันทึก snapshot
git push origin main     # อัพโหลดขึ้น remote
git pull          # ดึงการเปลี่ยนแปลงล่าสุด
git log --oneline # ดู history`

const branchCommands = `git branch feature/login  # สร้าง branch ใหม่
git checkout -b feature/login  # สร้าง + switch
git merge feature/login   # รวม branch
git branch -d feature/login  # ลบ branch`

export default function GitCommandsPage() {
  return (
    <div>
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Git Commands ที่ใช้บ่อย</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-600">คำสั่งหลักที่ต้องรู้ แบ่งเป็น 3 กลุ่มตามการใช้งาน</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* กลุ่ม 1: Setup */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                  <i className="fas fa-gear text-white text-sm"></i>
                </div>
                <h3 className="font-bold text-slate-900 text-lg">กลุ่มที่ 1: Setup</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">ตั้งค่าครั้งแรกก่อนใช้งาน</p>
              <CodeBlock variant="neutral" language="bash" code={setupCommands} />
            </div>

            {/* กลุ่ม 2: Daily Workflow */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <i className="fas fa-rotate text-white text-sm"></i>
                </div>
                <h3 className="font-bold text-slate-900 text-lg">กลุ่มที่ 2: Daily Workflow</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">คำสั่งที่ใช้ทุกวันในการพัฒนา</p>
              <CodeBlock variant="neutral" language="bash" code={dailyCommands} />
            </div>

            {/* กลุ่ม 3: Branching */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-violet-500 rounded-lg flex items-center justify-center">
                  <i className="fas fa-code-branch text-white text-sm"></i>
                </div>
                <h3 className="font-bold text-slate-900 text-lg">กลุ่มที่ 3: Branching</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">จัดการ branch เพื่อแยก feature</p>
              <CodeBlock variant="neutral" language="bash" code={branchCommands} />
            </div>
          </div>

          {/* Git Flow Diagram */}
          <div className="mt-12 p-6 bg-white border border-slate-200 rounded-2xl">
            <h3 className="font-bold text-slate-900 text-lg mb-5 flex items-center gap-2">
              <i className="fas fa-diagram-project text-sky-600"></i>
              Git Workflow ทั่วไป
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              {[
                { label: 'Working Directory', icon: 'fas fa-folder-open', color: 'bg-slate-700 text-slate-200' },
                { label: 'git add', icon: 'fas fa-arrow-right', color: 'text-sky-400 bg-transparent border-0', isArrow: true },
                { label: 'Staging Area', icon: 'fas fa-layer-group', color: 'bg-sky-900 text-sky-200 border border-sky-700' },
                { label: 'git commit', icon: 'fas fa-arrow-right', color: 'text-sky-400 bg-transparent border-0', isArrow: true },
                { label: 'Local Repo', icon: 'fas fa-database', color: 'bg-violet-900 text-violet-200 border border-violet-700' },
                { label: 'git push', icon: 'fas fa-arrow-right', color: 'text-sky-400 bg-transparent border-0', isArrow: true },
                { label: 'Remote (GitHub)', icon: 'fab fa-github', color: 'bg-emerald-900 text-emerald-200 border border-emerald-700' },
              ].map((step, i) =>
                step.isArrow ? (
                  <div key={i} className="flex flex-col items-center gap-1 px-1">
                    <code className="text-sky-400 text-xs font-mono">{step.label}</code>
                    <i className="fas fa-arrow-right text-sky-500 text-sm"></i>
                  </div>
                ) : (
                  <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-600 ${step.color}`}>
                    <i className={`${step.icon} text-sm`}></i>
                    <span className="font-medium">{step.label}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="border-t border-slate-100 py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Link href="/section/03-version-control/types" className="text-slate-500 hover:text-sky-500 flex items-center gap-2 text-sm font-medium transition-colors">
            <i className="fas fa-arrow-left text-xs"></i> ประเภทของ Version Control
          </Link>
          <Link href="/section/03-version-control/github-gitlab" className="text-sky-500 hover:text-sky-600 flex items-center gap-2 text-sm font-medium transition-colors">
            GitHub vs GitLab <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
