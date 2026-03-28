import Link from 'next/link'

// ─── 5.7 Prompting Strategies ───────────────────────────────────────────────
const promptingStrategies = [
  {
    number: '01',
    title: 'Context — บอก AI ว่าคุณกำลังทำอะไร',
    color: 'border-sky-500',
    accentText: 'text-sky-600',
    headerColor: 'bg-sky-50',
    desc: 'อธิบาย project structure, tech stack, และ business rules ให้ AI เข้าใจก่อน',
    bad: '"Create a login function"',
    good: '"In our Next.js 14 App Router project using Prisma and bcrypt, create a POST /api/auth/login route that accepts email and password"',
    tips: ['แนบ interface หรือ schema ให้ดู', 'บอก framework และ version ที่ใช้', 'อธิบาย business rule ที่เกี่ยวข้อง'],
  },
  {
    number: '02',
    title: 'Specific — ระบุให้ชัดเจน',
    color: 'border-violet-500',
    accentText: 'text-violet-600',
    headerColor: 'bg-violet-50',
    desc: 'ระบุ language, library, return type และ output format ที่ต้องการ',
    bad: '"Create a user registration endpoint"',
    good: '"Create a Next.js API route at /api/register that accepts { name, email, password }, validates with Zod, hashes password with bcrypt (rounds 12), saves to Prisma, returns 201 with user id"',
    tips: ['ระบุ input และ output format', 'บอก error cases ที่ต้องจัดการ', 'ระบุ HTTP status code ที่ต้องการ'],
  },
  {
    number: '03',
    title: 'Constraints — กำหนดข้อจำกัด',
    color: 'border-red-500',
    accentText: 'text-red-600',
    headerColor: 'bg-red-50',
    desc: 'บอกสิ่งที่ไม่อยากได้ และ security requirement ที่ต้องมี',
    bad: '"Create a database query function"',
    good: '"Use Prisma ORM only — no raw SQL. Add Zod validation. Return 400 for invalid input. Add rate limiting: max 5 requests per IP per 15 minutes. Use TypeScript strict mode."',
    tips: ['ระบุ security requirement ให้ชัด', 'บอกสิ่งที่ไม่ต้องการ (no raw SQL)', 'ขอ TypeScript types เสมอ'],
  },
  {
    number: '04',
    title: 'Examples — ให้ตัวอย่าง',
    color: 'border-emerald-500',
    accentText: 'text-emerald-600',
    headerColor: 'bg-emerald-50',
    desc: 'ให้ตัวอย่าง input/output หรือ code pattern ที่ต้องการ ช่วยให้ AI เข้าใจได้ดีขึ้น',
    bad: '"Add rate limiting to this endpoint"',
    good: '"Add rate limiting like this pattern: Map<ip, {count, resetAt}>. Max 5 attempts per 15 min. Return: { error: \'Too many requests\', retryAfter: 900 }"',
    tips: ['ให้ code snippet ที่ต้องการ pattern คล้ายๆ', 'แสดง expected output format', 'แนบ existing code ให้ดูเป็น reference'],
  },
]

// ─── 5.7 Security Prompts ───────────────────────────────────────────────────
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

export default function PromptingPage() {
  return (
    <div>
      {/* ─── 5.7 การเขียน Prompt ที่ดี ───────────────────────────────────────── */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">การเขียน Prompt ที่ดี</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-500 dark:text-slate-400">4 หลักการ เขียน prompt ให้ได้ผลลัพธ์ที่ถูกต้องและปลอดภัย</p>
          </div>

          <div className="space-y-8">
            {promptingStrategies.map((strategy) => (
              <div key={strategy.number} className={`bg-white dark:bg-slate-800 border-l-4 ${strategy.color} rounded-2xl overflow-hidden shadow-sm`}>
                <div className={`${strategy.headerColor} dark:bg-slate-700/50 px-8 py-4 border-b border-slate-100 dark:border-slate-700`}>
                  <div className="flex items-center gap-4">
                    <span className={`text-4xl font-black ${strategy.accentText}`}>{strategy.number}</span>
                    <div>
                      <h3 className="font-black text-slate-900 dark:text-white text-xl">{strategy.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{strategy.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">Vague prompt (หลีกเลี่ยง)</p>
                    <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-4">
                      <code className="text-red-800 dark:text-red-300 text-sm font-mono">{strategy.bad}</code>
                    </div>
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2 mt-4">Specific prompt (แนะนำ)</p>
                    <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4">
                      <code className="text-emerald-800 dark:text-emerald-300 text-sm font-mono">{strategy.good}</code>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-sky-600 uppercase tracking-widest mb-3">Tips</p>
                    <ul className="space-y-2">
                      {strategy.tips.map((tip) => (
                        <li key={tip} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
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

          {/* Security Prompt Templates */}
          <div className="mt-16">
            <h3 className="text-center font-bold text-slate-800 dark:text-white text-xl mb-8">Security-Focused Prompt Templates</h3>
            <div className="grid md:grid-cols-2 gap-5">
              {securityPrompts.map((item) => (
                <div key={item.category} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                    <div className={`w-8 h-8 ${item.color} rounded-lg flex items-center justify-center`}>
                      <i className={`${item.icon} text-white text-sm`}></i>
                    </div>
                    <span className="font-bold text-slate-800 dark:text-white">{item.category}</span>
                  </div>
                  <div className="p-5">
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-mono italic">&quot;{item.prompt}&quot;</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/05-ai/spec-md" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> SPEC.md
          </Link>
          <Link href="/section/05-ai/copilot-commands" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            คำสั่ง Copilot <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
