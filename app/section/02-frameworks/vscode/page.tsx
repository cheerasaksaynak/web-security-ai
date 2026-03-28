import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

const vscodeShortcuts = [
  { keys: 'Ctrl + P', desc: 'เปิดไฟล์รวดเร็ว (Quick Open)', icon: 'fas fa-folder-open' },
  { keys: 'Ctrl + Shift + P', desc: 'Command Palette — ทุกคำสั่งอยู่ที่นี่', icon: 'fas fa-terminal' },
  { keys: 'Ctrl + `', desc: 'เปิด Integrated Terminal', icon: 'fas fa-square-terminal' },
  { keys: 'Alt + Click', desc: 'Multi-cursor editing พร้อมกันหลายจุด', icon: 'fas fa-i-cursor' },
  { keys: 'Ctrl + D', desc: 'Select next occurrence ของคำที่เลือก', icon: 'fas fa-highlighter' },
  { keys: 'F2', desc: 'Rename Symbol ทั่วทั้งโปรเจกต์', icon: 'fas fa-pen' },
  { keys: 'Ctrl + /', desc: 'Toggle Comment บรรทัดที่เลือก', icon: 'fas fa-comment-slash' },
  { keys: 'Ctrl + Shift + F', desc: 'Search across all files', icon: 'fas fa-magnifying-glass' },
]

const vscodeExtensions = [
  { name: 'GitHub Copilot', desc: 'AI coding assistant จาก GitHub', icon: 'fas fa-robot' },
  { name: 'ESLint', desc: 'ตรวจสอบคุณภาพโค้ด JavaScript/TypeScript', icon: 'fas fa-circle-check' },
  { name: 'Prettier', desc: 'Auto-format โค้ดให้สวยงามสม่ำเสมอ', icon: 'fas fa-wand-magic-sparkles' },
  { name: 'Auto Rename Tag', desc: 'Rename HTML/JSX tag คู่พร้อมกัน', icon: 'fas fa-tags' },
  { name: 'GitLens', desc: 'เพิ่มความสามารถ Git ใน VS Code', icon: 'fas fa-code-branch' },
  { name: 'Thunder Client', desc: 'API testing แบบ Postman ในตัว', icon: 'fas fa-bolt' },
  { name: 'Tailwind CSS IntelliSense', desc: 'Autocomplete สำหรับ Tailwind classes', icon: 'fas fa-palette' },
]

export default function VSCodePage() {
  return (
    <div>
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mt-2 mb-4">แนะนำการใช้งาน VS Code เบื้องต้น</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-600">Shortcuts และ Extensions ที่จะช่วยให้ coding เร็วขึ้นหลายเท่า</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Shortcuts */}
            <div>
              <h3 className="font-bold text-slate-900 text-xl mb-6 flex items-center gap-2">
                <i className="fas fa-keyboard text-sky-600"></i>
                Keyboard Shortcuts ที่ต้องรู้
              </h3>
              <div className="space-y-2">
                {vscodeShortcuts.map((s) => (
                  <div
                    key={s.keys}
                    className="flex items-center gap-4 p-3 bg-white border border-slate-200 rounded-xl"
                  >
                    <i className={`${s.icon} text-sky-600 text-sm w-4 shrink-0`}></i>
                    <kbd className="bg-slate-100 text-sky-700 font-mono text-xs px-3 py-1 rounded-lg border border-slate-200 shrink-0 min-w-36 text-center">
                      {s.keys}
                    </kbd>
                    <span className="text-slate-700 text-sm">{s.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Extensions */}
            <div>
              <h3 className="font-bold text-slate-900 text-xl mb-6 flex items-center gap-2">
                <i className="fas fa-puzzle-piece text-emerald-600"></i>
                Extensions แนะนำ
              </h3>
              <div className="space-y-3 mb-6">
                {vscodeExtensions.map((ext) => (
                  <div
                    key={ext.name}
                    className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl"
                  >
                    <i className={`${ext.icon} text-sky-600 text-xl w-5 shrink-0`}></i>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{ext.name}</p>
                      <p className="text-slate-600 text-sm">{ext.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <p className="text-slate-600 text-sm mb-3 font-medium">ติดตั้ง extensions ทั้งหมดด้วย CLI</p>
                <CodeBlock
                  variant="neutral"
                  language="bash"
                  code={`code --install-extension GitHub.copilot
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension formulahendry.auto-rename-tag
code --install-extension eamodio.gitlens
code --install-extension rangav.vscode-thunder-client
code --install-extension bradlc.vscode-tailwindcss`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/02-frameworks/material-ui" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> Material UI
          </Link>
          <Link href="/section/02-frameworks/github-copilot" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            GitHub Copilot <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
