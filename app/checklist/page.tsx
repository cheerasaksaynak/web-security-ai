import Link from 'next/link'

const checklistItems = [
  {
    category: 'Input & Output',
    color: 'border-sky-500',
    items: [
      {
        icon: 'fas fa-filter',
        title: 'Input Validation ทุก endpoint',
        desc: 'Validate type, format, length ของทุก input ก่อน process ใช้ Zod หรือ Joi',
        risk: 'SQLi, XSS, Buffer Overflow',
        how: 'const schema = z.object({ email: z.string().email(), name: z.string().min(1).max(100) })',
      },
      {
        icon: 'fas fa-code',
        title: 'Output Encoding (XSS Prevention)',
        desc: 'Escape HTML entities ทุกครั้งที่แสดงข้อมูลจาก user ใน HTML',
        risk: 'XSS — Reflected, Stored, DOM-based',
        how: 'React escape ให้อัตโนมัติ, ใช้ DOMPurify สำหรับ HTML content',
      },
      {
        icon: 'fas fa-database',
        title: 'Parameterized Queries / ORM',
        desc: 'ห้าม string concatenation ใน SQL เด็ดขาด ใช้ prepared statements หรือ ORM',
        risk: 'SQL Injection',
        how: 'db.execute("SELECT * FROM users WHERE id = ?", [userId])',
      },
    ],
  },
  {
    category: 'Authentication & Session',
    color: 'border-violet-500',
    items: [
      {
        icon: 'fas fa-key',
        title: 'Password Hashing (bcrypt/Argon2id)',
        desc: 'ห้าม plain text หรือ MD5/SHA-1 ต้อง hash ด้วย bcrypt salt rounds ≥ 12',
        risk: 'Data Breach — Password Exposure',
        how: 'await bcrypt.hash(password, 12)',
      },
      {
        icon: 'fas fa-shield',
        title: 'CSRF Protection',
        desc: 'ตั้ง SameSite=Lax/Strict หรือใช้ CSRF token สำหรับ state-changing requests',
        risk: 'CSRF — Cross-Site Request Forgery',
        how: 'Set-Cookie: session=xxx; SameSite=Lax; Secure; HttpOnly',
      },
      {
        icon: 'fas fa-user-lock',
        title: 'Rate Limiting on Auth',
        desc: 'จำกัด login attempts ต่อ IP ป้องกัน brute force attack',
        risk: 'Brute Force, Credential Stuffing',
        how: 'Max 5 attempts / IP / 15 min → return 429',
      },
    ],
  },
  {
    category: 'Headers & Transport',
    color: 'border-emerald-500',
    items: [
      {
        icon: 'fas fa-lock',
        title: 'HTTPS everywhere',
        desc: 'ทุกหน้าต้องใช้ HTTPS ไม่มี mixed content รวมถึง API calls',
        risk: 'MITM — Man-in-the-Middle',
        how: 'GitHub Pages มีให้อัตโนมัติ, ตั้ง HSTS header',
      },
      {
        icon: 'fas fa-shield-halved',
        title: 'Security Headers',
        desc: 'ตั้ง CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy',
        risk: 'XSS, Clickjacking, MIME Sniffing',
        how: 'headers() ใน next.config.js หรือ middleware',
      },
    ],
  },
  {
    category: 'Code & Dependencies',
    color: 'border-orange-500',
    items: [
      {
        icon: 'fas fa-eye-slash',
        title: 'Secrets ไม่อยู่ใน Repository',
        desc: 'ตั้งค่า .gitignore ก่อน commit แรก ใช้ env variables และ GitHub Secrets',
        risk: 'Credential Exposure, Data Breach',
        how: '.gitignore: .env, .env.local, *.key, *.pem',
      },
      {
        icon: 'fas fa-box-open',
        title: 'Dependencies Update (npm audit)',
        desc: 'ตรวจสอบและอัพเดท dependencies ที่มีช่องโหว่ด้วย npm audit เป็นประจำ',
        risk: 'A06 — Vulnerable Components',
        how: 'npm audit && npm audit fix',
      },
    ],
  },
  {
    category: 'Error Handling & Logging',
    color: 'border-red-500',
    items: [
      {
        icon: 'fas fa-bug',
        title: 'Error Handling ไม่ Leak ข้อมูล',
        desc: 'ห้าม return stack trace หรือ internal error details ให้ user',
        risk: 'Information Disclosure',
        how: 'return { error: "Something went wrong" } // ไม่ใช่ error.message',
      },
      {
        icon: 'fas fa-file-lines',
        title: 'Logging & Monitoring',
        desc: 'บันทึก security events เช่น failed logins, permission errors, suspicious requests',
        risk: 'A09 — Security Logging Failures',
        how: 'Log: IP, userId, action, timestamp — ไม่ log password!',
      },
    ],
  },
]

export default function ChecklistPage() {
  const totalItems = checklistItems.reduce((acc, cat) => acc + cat.items.length, 0)

  return (
    <div>
      {/* Header */}
      <section className="section-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-sky-500/20 rounded-2xl flex items-center justify-center border border-sky-500/30">
              <i className="fas fa-list-check text-sky-400 text-2xl"></i>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Security Checklist</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            สิ่งที่ต้องตรวจสอบก่อน deploy ทุกครั้ง — {totalItems} รายการ ครอบคลุม OWASP Top 10
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
      </section>

      {/* Summary */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {checklistItems.map((cat) => (
            <div key={cat.category} className={`bg-white border-l-4 ${cat.color} rounded-xl p-4 shadow-sm`}>
              <p className="font-bold text-slate-900 text-sm">{cat.category}</p>
              <p className="text-sky-500 text-2xl font-black">{cat.items.length}</p>
              <p className="text-slate-400 text-xs">items</p>
            </div>
          ))}
        </div>

        {/* Checklist */}
        <div className="space-y-10">
          {checklistItems.map((category) => (
            <div key={category.category}>
              <h2 className={`text-xl font-black text-slate-900 mb-4 flex items-center gap-3`}>
                <span className={`w-1.5 h-6 rounded-full ${category.color.replace('border', 'bg')}`} />
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.title} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                    <div className="flex items-start gap-4 p-6">
                      {/* Checkbox visual */}
                      <div className="w-6 h-6 border-2 border-sky-400 rounded flex items-center justify-center mt-0.5 flex-shrink-0">
                        <i className="fas fa-check text-sky-400 text-xs"></i>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <i className={`${item.icon} text-sky-500`}></i>
                          <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                        </div>
                        <p className="text-slate-600 text-sm mb-4 leading-relaxed">{item.desc}</p>

                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="p-3 bg-red-50 rounded-xl border border-red-100">
                            <span className="text-xs font-bold text-red-600 block mb-1">
                              <i className="fas fa-triangle-exclamation mr-1"></i>Risk
                            </span>
                            <span className="text-slate-700 text-sm">{item.risk}</span>
                          </div>
                          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                            <span className="text-xs font-bold text-emerald-600 block mb-1">
                              <i className="fas fa-code mr-1"></i>How to
                            </span>
                            <code className="text-slate-700 text-xs font-mono">{item.how}</code>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Reference */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-4">Quick Reference Commands</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Security Audit',
                icon: 'fas fa-magnifying-glass',
                commands: [
                  'npm audit',
                  'npm audit fix',
                  'npm audit --audit-level=high',
                ],
              },
              {
                title: 'Environment Check',
                icon: 'fas fa-key',
                commands: [
                  'cat .gitignore | grep .env',
                  'git log --all -- .env',
                  'git diff --cached -- .env',
                ],
              },
              {
                title: 'Build & Test',
                icon: 'fas fa-hammer',
                commands: [
                  'npm run build',
                  'npm run lint',
                  'npx serve out',
                ],
              },
            ].map((section) => (
              <div key={section.title} className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <i className={`${section.icon} text-sky-400`}></i>
                  <h3 className="font-bold text-white">{section.title}</h3>
                </div>
                <div className="space-y-2">
                  {section.commands.map((cmd) => (
                    <div key={cmd} className="bg-slate-900 rounded-lg px-4 py-2">
                      <code className="text-sky-300 text-sm font-mono">{cmd}</code>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl p-12 text-white">
          <i className="fas fa-shield-halved text-5xl mb-6 block opacity-80"></i>
          <h2 className="text-2xl font-black mb-4">
            "Security เป็น process ไม่ใช่ product"
          </h2>
          <p className="text-sky-100 text-lg mb-8">
            ตรวจสอบ checklist นี้ทุกครั้งก่อน deploy<br />
            และ review security เป็นประจำแม้หลัง launch แล้ว
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/" className="bg-white text-sky-600 font-bold px-6 py-3 rounded-xl hover:bg-sky-50 transition-colors flex items-center gap-2">
              <i className="fas fa-home text-sm"></i> หน้าหลัก
            </Link>
            <Link href="/section/03-security" className="border border-white text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2">
              <i className="fas fa-shield-halved text-sm"></i> Web Security
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
