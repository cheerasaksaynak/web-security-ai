import Link from 'next/link'

// ─── 5.8 Copilot Shortcuts ──────────────────────────────────────────────────
const shortcuts = [
  { key: 'Tab', action: 'Accept suggestion ทั้งหมด', category: 'inline' },
  { key: 'Esc', action: 'Dismiss suggestion', category: 'inline' },
  { key: 'Alt + ]', action: 'Next suggestion (ถัดไป)', category: 'inline' },
  { key: 'Alt + [', action: 'Previous suggestion (ก่อนหน้า)', category: 'inline' },
  { key: 'Ctrl + →', action: 'Accept คำเดียว (word-by-word)', category: 'inline' },
  { key: 'Ctrl + I', action: 'เปิด Inline Chat (แก้ code ตรงนั้น)', category: 'chat' },
  { key: 'Ctrl + Shift + I', action: 'เปิด Copilot Chat panel', category: 'chat' },
  { key: '/explain', action: 'อธิบาย code ที่ select ไว้', category: 'slash' },
  { key: '/fix', action: 'แก้ bug หรือ error ใน selection', category: 'slash' },
  { key: '/tests', action: 'สร้าง unit tests สำหรับ function', category: 'slash' },
  { key: '/doc', action: 'สร้าง documentation / JSDoc', category: 'slash' },
  { key: '/optimize', action: 'ปรับปรุง performance ของ code', category: 'slash' },
  { key: '@workspace', action: 'ถามเกี่ยวกับ codebase ทั้งหมด', category: 'context' },
  { key: '@vscode', action: 'ถามเกี่ยวกับการตั้งค่า VS Code', category: 'context' },
  { key: '#file', action: 'อ้างอิงไฟล์ที่ต้องการให้ AI ดู', category: 'context' },
]

const shortcutCategories = [
  { key: 'inline', label: 'Inline Suggestions', icon: 'fas fa-magic', color: 'bg-sky-500' },
  { key: 'chat', label: 'Chat Panel', icon: 'fas fa-comments', color: 'bg-violet-500' },
  { key: 'slash', label: 'Slash Commands', icon: 'fas fa-terminal', color: 'bg-emerald-500' },
  { key: 'context', label: 'Context Variables', icon: 'fas fa-at', color: 'bg-orange-500' },
]

export default function CopilotCommandsPage() {
  return (
    <div>
      {/* ─── 5.8 คำสั่ง GitHub Copilot บน VS Code ─────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">คำสั่งที่ใช้บ่อย GitHub Copilot บน VS Code</h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-500 dark:text-slate-400">Keyboard shortcuts และ slash commands ที่จะทำให้คุณใช้ Copilot ได้เร็วขึ้น</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {shortcutCategories.map((cat) => (
            <div key={cat.key} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50">
                <div className={`w-8 h-8 ${cat.color} rounded-lg flex items-center justify-center`}>
                  <i className={`${cat.icon} text-white text-sm`}></i>
                </div>
                <h3 className="font-bold text-slate-800 dark:text-white">{cat.label}</h3>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-700">
                {shortcuts
                  .filter((s) => s.category === cat.key)
                  .map((shortcut) => (
                    <div key={shortcut.key} className="flex items-center justify-between px-6 py-3">
                      <span className="text-slate-500 dark:text-slate-400 text-sm">{shortcut.action}</span>
                      <code className="text-xs font-mono bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 whitespace-nowrap">
                        {shortcut.key}
                      </code>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pro tip */}
        <div className="mt-8 bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-2xl p-6 flex gap-4">
          <i className="fas fa-star text-sky-500 text-2xl flex-shrink-0 mt-1"></i>
          <div>
            <h3 className="font-bold text-sky-800 dark:text-sky-300 mb-1">Pro Tip: ใช้ @workspace ให้เป็น</h3>
            <p className="text-sky-700 dark:text-sky-400 text-sm leading-relaxed">
              พิมพ์ <code className="bg-sky-100 dark:bg-sky-900/50 px-1.5 py-0.5 rounded font-mono">@workspace</code> ใน Copilot Chat เพื่อถามเกี่ยวกับ codebase ทั้งหมด
              เช่น <em>&quot;@workspace ช่วย list ทุก API route ที่ยังไม่มี authentication&quot;</em> หรือ{' '}
              <em>&quot;@workspace สร้าง diagram ของ component ทั้งหมด&quot;</em>
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/05-ai/prompting" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> การเขียน Prompt
          </Link>
          <Link href="/section/05-ai/workshop" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            Workshop <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
