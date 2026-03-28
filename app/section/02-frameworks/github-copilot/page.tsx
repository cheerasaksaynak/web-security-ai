import Link from 'next/link'

export default function GitHubCopilotPage() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 mt-2 mb-4">แนะนำการใช้งาน GitHub Copilot</h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-500">AI Pair Programmer จาก GitHub — เขียนโค้ดได้เร็วขึ้นด้วยพลัง AI</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: 'fas fa-comment-dots',
              title: 'Inline Suggestions',
              desc: 'Copilot แนะนำโค้ดต่อเนื่องขณะพิมพ์ กด Tab เพื่อ accept คำแนะนำ หรือ Esc เพื่อข้ามไป',
              shortcut: 'Tab to accept',
              color: 'border-t-sky-500',
              iconColor: 'text-sky-500',
            },
            {
              icon: 'fas fa-comments',
              title: 'Copilot Chat',
              desc: 'เปิด Chat panel แล้วถามเป็นภาษาธรรมชาติได้เลย เช่น "อธิบายโค้ดนี้", "แก้ bug นี้ให้หน่อย"',
              shortcut: 'Ctrl + I',
              color: 'border-t-violet-500',
              iconColor: 'text-violet-500',
            },
            {
              icon: 'fas fa-at',
              title: 'Context References',
              desc: 'ใช้ @workspace, @file, @terminal เพื่อให้ Copilot เข้าใจ context ของโปรเจกต์ได้ดีขึ้น',
              shortcut: '@workspace',
              color: 'border-t-emerald-500',
              iconColor: 'text-emerald-500',
            },
          ].map((f) => (
            <div key={f.title} className={`bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-t-4 ${f.color} rounded-2xl p-6`}>
              <i className={`${f.icon} ${f.iconColor} text-2xl mb-3 block`}></i>
              <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm mb-4 leading-relaxed">{f.desc}</p>
              <kbd className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-mono text-xs px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600">
                {f.shortcut}
              </kbd>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
              <i className="fas fa-robot text-sky-600"></i>
              Slash Commands ที่ใช้บ่อย
            </h3>
            <div className="space-y-3">
              {[
                { cmd: '/explain', desc: 'อธิบายโค้ดที่เลือกอยู่ว่าทำงานอย่างไร' },
                { cmd: '/fix', desc: 'ตรวจหา bug และแนะนำวิธีแก้ไข' },
                { cmd: '/tests', desc: 'สร้าง unit test สำหรับโค้ดที่เลือก' },
                { cmd: '/doc', desc: 'สร้าง documentation comments ให้อัตโนมัติ' },
                { cmd: '/optimize', desc: 'แนะนำวิธีปรับปรุงประสิทธิภาพโค้ด' },
              ].map((c) => (
                <div key={c.cmd} className="flex gap-3 items-start">
                  <code className="text-sky-600 font-mono text-sm bg-slate-100 text-sky-600 px-2 py-0.5 rounded border border-slate-200 shrink-0">
                    {c.cmd}
                  </code>
                  <span className="text-slate-600 text-sm">{c.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
            <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
              <i className="fas fa-lightbulb text-amber-500"></i>
              เคล็ดลับเขียน Prompt ที่ดี
            </h3>
            <div className="space-y-3">
              {[
                {
                  tip: 'ระบุภาษาและ framework',
                  example: '"สร้าง React component แบบ TypeScript สำหรับ..."',
                },
                {
                  tip: 'บอก input/output ที่ต้องการ',
                  example: '"รับ array ของ User objects แล้ว return ..."',
                },
                {
                  tip: 'ขอตัวอย่าง use case',
                  example: '"พร้อม example การใช้งาน"',
                },
                {
                  tip: 'ขอ error handling ด้วย',
                  example: '"รวม error handling และ loading state"',
                },
                {
                  tip: 'ขอคำนึงถึง security',
                  example: '"ให้ validate input และป้องกัน XSS ด้วย"',
                },
              ].map((t) => (
                <div key={t.tip} className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl">
                  <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm mb-1">{t.tip}</p>
                  <p className="text-amber-600 dark:text-amber-300 text-xs italic">{t.example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/02-frameworks/vscode" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> VS Code
          </Link>
          <Link href="/section/02-frameworks/workshop" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            Workshop <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
