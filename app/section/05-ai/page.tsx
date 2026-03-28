import SectionHero from '@/components/SectionHero'
import CodeBlock from '@/components/CodeBlock'
import WorkshopBox from '@/components/WorkshopBox'
import Link from 'next/link'

const copilotFeatures = [
  {
    icon: 'fas fa-wand-magic-sparkles',
    title: 'Code Completion',
    desc: 'เขียนโค้ดให้อัตโนมัติจาก context รอบข้าง แค่พิมพ์ comment หรือ function signature Copilot เติมให้',
    example: '// Create a function that validates email format\n// → Copilot เขียน regex validation ให้ทั้งหมด',
  },
  {
    icon: 'fas fa-comments',
    title: 'Copilot Chat',
    desc: 'ถามคำถาม อธิบาย code สร้าง code จาก description ได้ในแบบ conversational',
    example: '"Explain this SQL injection vulnerability and show me the fix"',
  },
  {
    icon: 'fas fa-lightbulb',
    title: 'Inline Suggestions',
    desc: 'แนะนำ code แบบ real-time ขณะพิมพ์ Tab เพื่อ accept, Esc เพื่อ dismiss',
    example: 'เริ่มพิมพ์ฟังก์ชัน → Copilot แนะนำให้ทั้งหมด',
  },
  {
    icon: 'fas fa-file-code',
    title: 'Generate Tests',
    desc: 'สร้าง unit tests จาก function โดยอัตโนมัติ รวมถึง edge cases',
    example: '"Generate unit tests for this authentication function including edge cases"',
  },
  {
    icon: 'fas fa-magnifying-glass-chart',
    title: 'Code Review',
    desc: 'ตรวจหาช่องโหว่ security, bugs, และ code quality issues',
    example: '"Review this code for security vulnerabilities"',
  },
  {
    icon: 'fas fa-language',
    title: 'Explain Code',
    desc: 'อธิบาย code ที่ซับซ้อนให้เข้าใจง่าย เหมาะสำหรับ onboarding',
    example: '"Explain this regex pattern step by step"',
  },
]

const promptingStrategies = [
  {
    number: '01',
    title: 'Be Specific',
    color: 'border-sky-500',
    headerColor: 'bg-sky-50',
    desc: 'ระบุ language, framework, library ที่ต้องการให้ชัดเจน',
    bad: '"Create a login function"',
    good: '"Create a Next.js API route using Prisma and bcrypt for user login with email and password"',
    tips: ['ระบุ framework และ version', 'บอก library ที่ต้องการใช้', 'ระบุ return type หรือ output format'],
  },
  {
    number: '02',
    title: 'Give Context',
    color: 'border-violet-500',
    headerColor: 'bg-violet-50',
    desc: 'อธิบาย project structure, data model, business rules ให้ Copilot เข้าใจ context',
    bad: '"Create a user registration endpoint"',
    good: '"Given a User model with { id, email, name, password, role } fields, create a POST /api/register endpoint"',
    tips: ['แนบ interface หรือ schema ให้', 'อธิบาย business rules', 'บอก error handling ที่ต้องการ'],
  },
  {
    number: '03',
    title: 'Ask for Security',
    color: 'border-red-500',
    headerColor: 'bg-red-50',
    desc: 'ระบุให้ Copilot คำนึงถึง security ใน output ที่ generate',
    bad: '"Create a database query function"',
    good: '"Create a parameterized SQL query function with input validation and SQL injection prevention"',
    tips: ['ขอ input validation', 'ขอ parameterized queries', 'ขอ rate limiting และ error handling'],
  },
  {
    number: '04',
    title: 'Iterate & Refine',
    color: 'border-emerald-500',
    headerColor: 'bg-emerald-50',
    desc: 'ถามต่อเพื่อปรับปรุง code เพิ่ม feature หรือแก้ไข security issues',
    bad: '(accept code โดยไม่ review)',
    good: '"Add rate limiting to this endpoint. Max 5 login attempts per IP per 15 minutes"',
    tips: ['Review ทุกครั้งก่อน accept', 'ขอเพิ่ม error handling', 'ขอ type safety และ null checks'],
  },
]

const securityPrompts = [
  {
    category: 'Input Validation',
    icon: 'fas fa-filter',
    color: 'bg-sky-500',
    prompt: 'Add Zod schema validation to this Next.js API route. Define the schema for the request body and return a 400 error with validation details if invalid.',
  },
  {
    category: 'Auth Middleware',
    icon: 'fas fa-user-lock',
    color: 'bg-violet-500',
    prompt: 'Create a Next.js middleware.ts that verifies JWT tokens from Authorization header or cookie. Redirect to /login if invalid or expired. Protect all routes under /dashboard.',
  },
  {
    category: 'Security Headers',
    icon: 'fas fa-shield-halved',
    color: 'bg-sky-600',
    prompt: 'Add security headers to next.config.js using the headers() function: Content-Security-Policy, X-Frame-Options (DENY), X-Content-Type-Options (nosniff), Referrer-Policy, Permissions-Policy.',
  },
  {
    category: 'Rate Limiting',
    icon: 'fas fa-gauge',
    color: 'bg-orange-500',
    prompt: 'Implement in-memory rate limiting for the login API route using Map. Maximum 5 attempts per IP per 15 minutes. Return 429 Too Many Requests with Retry-After header when exceeded.',
  },
  {
    category: 'Password Hashing',
    icon: 'fas fa-key',
    color: 'bg-emerald-500',
    prompt: 'Create secure password utilities using bcrypt with salt rounds 12. Functions: hashPassword(plain), verifyPassword(plain, hash). Add TypeScript types.',
  },
  {
    category: 'SQL Injection Prevention',
    icon: 'fas fa-database',
    color: 'bg-red-500',
    prompt: 'Refactor this database function to use Prisma ORM instead of raw SQL strings. Ensure all queries use parameterized inputs and add proper TypeScript types.',
  },
]

export default function AIPage() {
  return (
    <div>
      <SectionHero
        number="05"
        title="AI-Powered Development"
        subtitle="ใช้ GitHub Copilot อย่างมีประสิทธิภาพ พร้อม Security-focused prompting strategies"
        icon="fas fa-robot"
        imageUrl="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1400&auto=format&fit=crop&q=80"
      />

      {/* Copilot Overview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 mb-4">GitHub Copilot คืออะไร?</h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
          <div className="max-w-2xl mx-auto">
            <p className="text-slate-500 text-lg">
              AI Pair Programmer ที่ทำงานร่วมกับคุณใน VS Code — ช่วยเขียน review และ explain code
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {copilotFeatures.map((feature) => (
            <div key={feature.title} className="bg-white border border-slate-200 rounded-2xl p-6 card-hover">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-4 border border-sky-100">
                <i className={`${feature.icon} text-sky-500 text-xl`}></i>
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">{feature.desc}</p>
              <code className="block text-xs bg-slate-100 text-slate-600 px-3 py-2 rounded-lg font-mono">{feature.example}</code>
            </div>
          ))}
        </div>

        {/* Important caveat */}
        <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4">
          <i className="fas fa-triangle-exclamation text-amber-500 text-2xl flex-shrink-0 mt-1"></i>
          <div>
            <h3 className="font-bold text-amber-800 text-lg mb-2">สำคัญ: AI อาจ generate code ที่มีช่องโหว่!</h3>
            <p className="text-amber-700 text-sm leading-relaxed">
              GitHub Copilot เป็น assistant ที่ทรงพลัง แต่ไม่ได้รับประกัน security เสมอไป
              code ที่ generate อาจมี SQL injection, XSS, หรือ auth bypass ได้
              <strong> ต้อง review ทุกครั้งก่อน accept</strong> โดยเฉพาะ code ที่เกี่ยวกับ authentication, database, และ input handling
            </p>
          </div>
        </div>
      </section>

      {/* Prompting Strategies */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Prompting Strategies</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-500">เทคนิคการเขียน prompt ให้ได้ผลลัพธ์ที่ดีและปลอดภัย</p>
          </div>

          <div className="space-y-8">
            {promptingStrategies.map((strategy) => (
              <div key={strategy.number} className={`bg-white border-l-4 ${strategy.color} rounded-2xl overflow-hidden shadow-sm`}>
                <div className={`${strategy.headerColor} px-8 py-4 border-b border-slate-100`}>
                  <div className="flex items-center gap-4">
                    <span className={`text-4xl font-black ${strategy.color.replace('border', 'text')}`}>{strategy.number}</span>
                    <div>
                      <h3 className="font-black text-slate-900 text-xl">{strategy.title}</h3>
                      <p className="text-slate-600 text-sm">{strategy.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">Vague prompt (หลีกเลี่ยง)</p>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                      <code className="text-red-800 text-sm font-mono">{strategy.bad}</code>
                    </div>
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2 mt-4">Specific prompt (แนะนำ)</p>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                      <code className="text-emerald-800 text-sm font-mono">{strategy.good}</code>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-sky-600 uppercase tracking-widest mb-3">Tips</p>
                    <ul className="space-y-2">
                      {strategy.tips.map((tip) => (
                        <li key={tip} className="flex items-center gap-2 text-sm text-slate-600">
                          <i className="fas fa-chevron-right text-sky-400 text-xs"></i>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Prompts */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-white mb-4">Security-Focused Copilot Prompts</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-400">Prompt templates ที่ใช้งานได้จริงสำหรับ secure coding</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {securityPrompts.map((item) => (
              <div key={item.category} className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-700">
                  <div className={`w-8 h-8 ${item.color} rounded-lg flex items-center justify-center`}>
                    <i className={`${item.icon} text-white text-sm`}></i>
                  </div>
                  <span className="font-bold text-white">{item.category}</span>
                </div>
                <div className="p-5">
                  <p className="text-slate-300 text-sm leading-relaxed font-mono italic">&quot;{item.prompt}&quot;</p>
                </div>
              </div>
            ))}
          </div>

          {/* Workflow */}
          <div className="mt-12 bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="font-bold text-white text-xl mb-6 text-center">AI-Assisted Secure Development Workflow</h3>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { icon: 'fas fa-pen', label: 'Describe', desc: 'อธิบาย feature ที่ต้องการ' },
                { icon: 'fas fa-robot', label: 'Generate', desc: 'Copilot สร้าง code' },
                { icon: 'fas fa-magnifying-glass', label: 'Review', desc: 'ตรวจสอบ security' },
                { icon: 'fas fa-bug', label: 'Fix Issues', desc: 'แก้ไขช่องโหว่' },
                { icon: 'fas fa-check', label: 'Test', desc: 'ทดสอบและ verify' },
              ].map((step, i) => (
                <div key={step.label} className="text-center relative">
                  {i < 4 && (
                    <div className="hidden md:block absolute top-5 left-1/2 w-full h-px bg-sky-500/30" />
                  )}
                  <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-3 relative">
                    <i className={`${step.icon} text-white text-sm`}></i>
                  </div>
                  <p className="font-bold text-white text-sm">{step.label}</p>
                  <p className="text-slate-400 text-xs mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Copilot vs Security */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 mb-4">AI ช่วยได้ แต่ไม่แทนที่ Security Mindset</h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <h3 className="font-bold text-emerald-800 text-xl mb-4">
              <i className="fas fa-check-circle text-emerald-500 mr-2"></i>
              Copilot ช่วยได้
            </h3>
            <ul className="space-y-3">
              {[
                'Generate boilerplate code อย่างรวดเร็ว',
                'เสนอ pattern ที่ถูกต้องเมื่อ prompt ดี',
                'ตรวจจับ obvious security issues ใน chat',
                'สร้าง test cases และ documentation',
                'อธิบาย code ที่ซับซ้อน',
                'เร่งความเร็วในการเขียน code 3-5x',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-emerald-700 text-sm">
                  <i className="fas fa-check text-emerald-500 flex-shrink-0 text-xs"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <h3 className="font-bold text-red-800 text-xl mb-4">
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
                <li key={item} className="flex items-center gap-3 text-red-700 text-sm">
                  <i className="fas fa-xmark text-red-500 flex-shrink-0 text-xs"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Workshop */}
      <section className="max-w-6xl mx-auto px-6 py-4">
        <WorkshopBox
          number={3}
          title="Secure Feature with Copilot"
          timeEstimate="20 นาที"
          steps={[
            {
              step: 1,
              title: 'สร้าง Contact Form',
              description: 'สร้างหน้า app/contact/page.tsx ด้วย Copilot',
              code: 'Create a contact form with name, email, message fields.\nUse Tailwind CSS. Add client-side validation with Zod.',
            },
            {
              step: 2,
              title: 'สร้าง API Route',
              code: 'Create a Next.js API route for contact form at /api/contact.\nAdd input sanitization, validation, and rate limiting.',
            },
            {
              step: 3,
              title: 'เพิ่ม Security Headers',
              code: 'Add Content-Security-Policy, X-Frame-Options,\nand HSTS headers to next.config.js',
            },
            {
              step: 4,
              title: 'Security Review',
              description: 'ใช้ Copilot Chat review code ทั้งหมด',
              code: 'Review this Next.js app for OWASP Top 10 vulnerabilities.\nSuggest specific improvements.',
            },
          ]}
          copilotPrompt="Review this Next.js application for security vulnerabilities including SQL injection, XSS, CSRF, broken access control, and insecure deserialization. For each issue found, explain the risk and provide a secure code fix."
        />
      </section>

      {/* Navigation */}
      <div className="border-t border-slate-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Link href="/section/04-nextjs" className="text-slate-500 hover:text-sky-500 flex items-center gap-2 text-sm font-medium transition-colors">
            <i className="fas fa-arrow-left text-xs"></i> 04 — Next.js
          </Link>
          <Link href="/section/06-deploy" className="text-sky-500 hover:text-sky-600 flex items-center gap-2 text-sm font-medium transition-colors">
            06 — Deploy <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
