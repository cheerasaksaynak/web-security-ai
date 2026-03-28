import WorkshopBox from '@/components/WorkshopBox'
import Link from 'next/link'

export default function WorkshopPage() {
  return (
    <div>
      {/* ─── 5.9 Workshop ────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-4">
        <WorkshopBox
          number={5}
          title="Workshop: เพิ่ม Feature ด้วย AI Agent"
          timeEstimate="30 นาที"
          steps={[
            {
              step: 1,
              title: 'เปิด Copilot Chat',
              description: 'กด Ctrl+Shift+I เพื่อเปิด GitHub Copilot Chat panel ใน VS Code',
              code: 'Ctrl+Shift+I',
            },
            {
              step: 2,
              title: 'บอก context ด้วย SPEC.md',
              description: 'อ้างอิงไฟล์ SPEC.md ใน Copilot Chat เพื่อให้ AI เข้าใจโปรเจค',
              code: '#file:SPEC.md ช่วยดู tech stack และ convention ของโปรเจคนี้ก่อน',
            },
            {
              step: 3,
              title: 'Prompt ให้สร้าง feature ใหม่',
              description: 'ใช้หลักการ Context + Specific + Constraints เพื่อ prompt feature ที่ต้องการ',
              code: 'สร้างหน้า /app/contact/page.tsx สำหรับ contact form\nมี field: name, email, message\nใช้ Tailwind CSS ตาม style เดิมในโปรเจค\nเพิ่ม client-side validation ด้วย Zod',
            },
            {
              step: 4,
              title: 'Review code ที่ได้',
              description: 'ตรวจสอบ code ที่ Copilot generate ก่อน accept ทุกครั้ง',
              code: '/fix ตรวจสอบ code นี้สำหรับ security issues\nโดยเฉพาะ XSS และ input validation',
            },
            {
              step: 5,
              title: 'Test และ Refine',
              description: 'ทดสอบ feature และใช้ Copilot ช่วย fix bugs ที่พบ',
              code: '/tests สร้าง unit test สำหรับ contact form validation\nรวม edge cases: empty fields, invalid email, XSS payload',
            },
          ]}
          copilotPrompt="Review this Next.js contact form for security vulnerabilities including XSS, missing input validation, and CSRF. For each issue found, explain the risk and provide a secure code fix."
        />
      </section>

      {/* ─── AI ช่วยได้ แต่ไม่แทน Security Mindset ───────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">AI ช่วยได้ แต่ไม่แทนที่ Security Mindset</h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-6">
            <h3 className="font-bold text-emerald-800 dark:text-emerald-300 text-xl mb-4">
              <i className="fas fa-check-circle text-emerald-500 mr-2"></i>
              AI ช่วยได้ดี
            </h3>
            <ul className="space-y-3">
              {[
                'Generate boilerplate code อย่างรวดเร็ว',
                'เสนอ pattern ที่ถูกต้องเมื่อ prompt ดี',
                'ตรวจจับ obvious security issues ใน chat',
                'สร้าง test cases และ documentation',
                'อธิบาย code ที่ซับซ้อน',
                'เร่งความเร็วในการเขียน code 3–5x',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-emerald-700 dark:text-emerald-300 text-sm">
                  <i className="fas fa-check text-emerald-500 flex-shrink-0 text-xs"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-2xl p-6">
            <h3 className="font-bold text-red-800 dark:text-red-300 text-xl mb-4">
              <i className="fas fa-triangle-exclamation text-red-500 mr-2"></i>
              ต้อง Review เอง
            </h3>
            <ul className="space-y-3">
              {[
                'Architecture security decisions',
                'Business logic validation',
                'Subtle SQL injection patterns',
                'Authentication flow correctness',
                'Authorization logic ที่ซับซ้อน',
                'ข้อมูล sensitive ที่ไม่ควร log',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-red-700 dark:text-red-300 text-sm">
                  <i className="fas fa-xmark text-red-500 flex-shrink-0 text-xs"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/05-ai/copilot-commands" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> คำสั่ง Copilot
          </Link>
          <Link href="/section/06-deploy" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            06 Deploy <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
