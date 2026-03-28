import SectionHero from '@/components/SectionHero'
import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

const httpMethods = [
  { method: 'GET', desc: 'ดึงข้อมูล (read-only)', example: 'GET /api/users', color: 'bg-emerald-500', safe: true },
  { method: 'POST', desc: 'สร้างข้อมูลใหม่', example: 'POST /api/users', color: 'bg-sky-500', safe: false },
  { method: 'PUT', desc: 'แทนที่ข้อมูลทั้งหมด', example: 'PUT /api/users/1', color: 'bg-violet-500', safe: false },
  { method: 'PATCH', desc: 'แก้ไขข้อมูลบางส่วน', example: 'PATCH /api/users/1', color: 'bg-amber-500', safe: false },
  { method: 'DELETE', desc: 'ลบข้อมูล', example: 'DELETE /api/users/1', color: 'bg-red-500', safe: false },
]

const statusCodes = [
  { code: '200', label: 'OK', desc: 'สำเร็จ', color: 'text-emerald-600 bg-emerald-50' },
  { code: '201', label: 'Created', desc: 'สร้างข้อมูลสำเร็จ', color: 'text-emerald-600 bg-emerald-50' },
  { code: '301', label: 'Moved Permanently', desc: 'redirect ถาวร', color: 'text-sky-600 bg-sky-50' },
  { code: '400', label: 'Bad Request', desc: 'request ผิดรูปแบบ', color: 'text-amber-600 bg-amber-50' },
  { code: '401', label: 'Unauthorized', desc: 'ยังไม่ได้ login', color: 'text-orange-600 bg-orange-50' },
  { code: '403', label: 'Forbidden', desc: 'ไม่มีสิทธิ์', color: 'text-orange-600 bg-orange-50' },
  { code: '404', label: 'Not Found', desc: 'ไม่พบข้อมูล', color: 'text-red-600 bg-red-50' },
  { code: '500', label: 'Internal Server Error', desc: 'server มีปัญหา', color: 'text-red-600 bg-red-50' },
]

const storageTypes = [
  {
    type: 'Cookie',
    icon: 'fas fa-cookie-bite',
    desc: 'เก็บข้อมูลขนาดเล็ก (<4KB) ส่งไปกับทุก request อัตโนมัติ',
    security: 'ตั้ง HttpOnly, Secure, SameSite=Lax',
    useCase: 'Session ID, Authentication token',
    risk: 'CSRF ถ้าไม่ตั้ง SameSite',
  },
  {
    type: 'LocalStorage',
    icon: 'fas fa-hard-drive',
    desc: 'เก็บข้อมูลได้มาก (~5MB) ไม่ส่งไปกับ request อัตโนมัติ ถาวร',
    security: 'ห้ามเก็บ sensitive data เพราะ XSS เข้าถึงได้',
    useCase: 'User preferences, Non-sensitive cache',
    risk: 'XSS สามารถอ่านได้ทั้งหมด',
  },
  {
    type: 'SessionStorage',
    icon: 'fas fa-clock',
    desc: 'เหมือน LocalStorage แต่หายเมื่อปิด tab',
    security: 'ห้ามเก็บ sensitive data เช่นกัน',
    useCase: 'Temporary form data, Single-session data',
    risk: 'XSS สามารถอ่านได้ขณะ session ยังอยู่',
  },
]

export default function FundamentalsPage() {
  return (
    <div>
      <SectionHero
        number="02"
        title="Web Development Fundamentals"
        subtitle="พื้นฐานที่ต้องรู้ก่อนพูดถึง Security — HTML, CSS, JS, HTTP, Client-Server"
        icon="fas fa-globe"
        imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&auto=format&fit=crop&q=80"
      />

      {/* How the Web Works */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 mb-4">How the Web Works</h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-500">เว็บทำงานอย่างไร? ทำความเข้าใจ Client-Server Architecture</p>
        </div>

        {/* Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <div className="bg-sky-50 border-2 border-sky-200 rounded-2xl p-8 text-center w-full md:w-64">
            <i className="fas fa-display text-sky-500 text-4xl mb-4 block"></i>
            <h3 className="font-bold text-slate-900 text-lg mb-3">Client (Browser)</h3>
            <div className="space-y-2 text-left">
              {[
                { color: 'text-orange-500', label: 'HTML', desc: 'โครงสร้างหน้าเว็บ' },
                { color: 'text-blue-500', label: 'CSS', desc: 'ความสวยงาม ธีม' },
                { color: 'text-yellow-500', label: 'JavaScript', desc: 'ฟังก์ชันการทำงาน' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm">
                  <span className={`font-bold ${item.color} w-8`}>{item.label}</span>
                  <span className="text-slate-500">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 text-sm">
              <i className="fas fa-arrow-right text-emerald-500 text-xs"></i>
              <span className="text-emerald-700 font-mono font-medium">HTTP Request</span>
            </div>
            <div className="h-8 md:h-px md:w-8 w-px bg-slate-200" />
            <div className="flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-2 text-sm">
              <i className="fas fa-arrow-left text-sky-500 text-xs"></i>
              <span className="text-sky-700 font-mono font-medium">HTTP Response</span>
            </div>
          </div>

          <div className="bg-slate-800 border-2 border-slate-700 rounded-2xl p-8 text-center w-full md:w-64">
            <i className="fas fa-server text-sky-400 text-4xl mb-4 block"></i>
            <h3 className="font-bold text-white text-lg mb-3">Server (Backend)</h3>
            <div className="space-y-2 text-left">
              {[
                { color: 'text-sky-400', label: 'API Routes', desc: 'จัดการ request' },
                { color: 'text-violet-400', label: 'Database', desc: 'เก็บข้อมูล' },
                { color: 'text-emerald-400', label: 'Auth', desc: 'ยืนยันตัวตน' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm">
                  <span className={`font-bold ${item.color} w-16`}>{item.label}</span>
                  <span className="text-slate-400">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Request lifecycle */}
        <div className="bg-slate-50 rounded-2xl p-8">
          <h3 className="font-bold text-slate-900 text-xl mb-6 text-center">Request Lifecycle</h3>
          <div className="grid md:grid-cols-5 gap-4 items-start">
            {[
              { step: 1, icon: 'fas fa-keyboard', label: 'User พิมพ์ URL', desc: 'example.com/users' },
              { step: 2, icon: 'fas fa-search', label: 'DNS Lookup', desc: 'แปลง domain เป็น IP' },
              { step: 3, icon: 'fas fa-lock', label: 'TLS Handshake', desc: 'ถ้า HTTPS เข้ารหัส connection' },
              { step: 4, icon: 'fas fa-paper-plane', label: 'HTTP Request', desc: 'GET /users HTTP/1.1' },
              { step: 5, icon: 'fas fa-file-code', label: 'Response', desc: 'HTML/JSON กลับมา' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <i className={`${item.icon} text-sky-500 mb-2 block`}></i>
                <p className="font-semibold text-slate-800 text-sm">{item.label}</p>
                <p className="text-slate-500 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frontend Technologies */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Frontend Technologies</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* HTML */}
            <div className="bg-white rounded-2xl p-6 border border-orange-200 border-t-4 border-t-orange-500">
              <h3 className="font-black text-orange-500 text-2xl mb-4">HTML</h3>
              <p className="text-slate-600 text-sm mb-4">โครงสร้างของหน้าเว็บ ทุก element บนหน้าคือ HTML tag</p>
              <ul className="space-y-2 text-sm text-slate-600 mb-4">
                <li className="flex items-center gap-2"><i className="fas fa-check text-orange-400 text-xs"></i> Semantic markup (header, nav, main, article)</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-orange-400 text-xs"></i> Accessibility (alt, aria-label)</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-orange-400 text-xs"></i> SEO-friendly structure</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-orange-400 text-xs"></i> Form validation attributes</li>
              </ul>
              <CodeBlock
                variant="neutral"
                language="HTML"
                code={`<form method="POST" action="/login">
  <input type="email" name="email"
    required maxlength="100" />
  <input type="password" name="pass"
    required minlength="8" />
  <button type="submit">Login</button>
</form>`}
              />
            </div>

            {/* CSS */}
            <div className="bg-white rounded-2xl p-6 border border-blue-200 border-t-4 border-t-blue-500">
              <h3 className="font-black text-blue-500 text-2xl mb-4">CSS</h3>
              <p className="text-slate-600 text-sm mb-4">ตกแต่งหน้าเว็บ ควบคุม layout, สี, typography และ animation</p>
              <ul className="space-y-2 text-sm text-slate-600 mb-4">
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-400 text-xs"></i> Flexbox & Grid Layout</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-400 text-xs"></i> Responsive Design (media queries)</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-400 text-xs"></i> CSS Variables (Custom Properties)</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-400 text-xs"></i> Tailwind CSS — utility-first</li>
              </ul>
              <CodeBlock
                variant="neutral"
                language="CSS"
                code={`:root {
  --primary: #0ea5e9;
  --danger: #ef4444;
}

.container {
  display: flex;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}`}
              />
            </div>

            {/* JavaScript */}
            <div className="bg-white rounded-2xl p-6 border border-yellow-200 border-t-4 border-t-yellow-500">
              <h3 className="font-black text-yellow-500 text-2xl mb-4">JavaScript</h3>
              <p className="text-slate-600 text-sm mb-4">เพิ่ม interactivity, เรียก API, จัดการ DOM และ state</p>
              <ul className="space-y-2 text-sm text-slate-600 mb-4">
                <li className="flex items-center gap-2"><i className="fas fa-check text-yellow-400 text-xs"></i> DOM Manipulation</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-yellow-400 text-xs"></i> Fetch API / Async Await</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-yellow-400 text-xs"></i> ES6+ Features (arrow fn, destructuring)</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-yellow-400 text-xs"></i> Modules (import/export)</li>
              </ul>
              <CodeBlock
                variant="neutral"
                language="JS"
                code={`async function fetchUsers() {
  const res = await fetch('/api/users');
  if (!res.ok) throw new Error('Failed');
  const data = await res.json();
  return data;
}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* HTTP Methods */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 mb-4">HTTP Methods & Status Codes</h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-500">การสื่อสารระหว่าง Client และ Server</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Methods */}
          <div>
            <h3 className="font-bold text-slate-900 text-xl mb-6">HTTP Methods</h3>
            <div className="space-y-3">
              {httpMethods.map((m) => (
                <div key={m.method} className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl">
                  <span className={`${m.color} text-white font-bold text-sm px-3 py-1.5 rounded-lg min-w-16 text-center font-mono`}>
                    {m.method}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium text-slate-800 text-sm">{m.desc}</p>
                    <p className="text-xs text-slate-400 font-mono">{m.example}</p>
                  </div>
                  {m.safe && (
                    <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">Safe</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Status Codes */}
          <div>
            <h3 className="font-bold text-slate-900 text-xl mb-6">HTTP Status Codes</h3>
            <div className="space-y-2">
              {statusCodes.map((s) => (
                <div key={s.code} className="flex items-center gap-4 p-3 bg-white border border-slate-200 rounded-xl">
                  <span className={`font-bold font-mono text-sm px-3 py-1 rounded-lg min-w-14 text-center ${s.color}`}>
                    {s.code}
                  </span>
                  <div>
                    <span className="font-medium text-slate-800 text-sm">{s.label}</span>
                    <span className="text-slate-400 text-xs ml-2">— {s.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HTTPS & Storage */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-white mb-4">HTTPS & Browser Storage</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-400">ความปลอดภัยพื้นฐานที่ต้องเข้าใจ</p>
          </div>

          {/* HTTPS */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <i className="fas fa-lock text-emerald-400 text-2xl"></i>
                <h3 className="font-bold text-white text-xl">HTTPS = HTTP + TLS</h3>
              </div>
              <ul className="space-y-3">
                {[
                  { icon: 'fas fa-lock', text: 'เข้ารหัสข้อมูลระหว่างทาง (Encryption)' },
                  { icon: 'fas fa-eye-slash', text: 'ป้องกันการดักฟัง Man-in-the-Middle (MITM)' },
                  { icon: 'fas fa-certificate', text: 'ยืนยันตัวตนของ server ด้วย Certificate' },
                  { icon: 'fas fa-check-circle', text: 'จำเป็นสำหรับทุกเว็บไซต์ในปัจจุบัน' },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3 text-slate-300 text-sm">
                    <i className={`${item.icon} text-emerald-400 text-xs w-4`}></i>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <i className="fas fa-network-wired text-sky-400 text-2xl"></i>
                <h3 className="font-bold text-white text-xl">HTTP Headers ที่สำคัญ</h3>
              </div>
              <div className="space-y-3">
                {[
                  { header: 'Authorization', desc: 'ส่ง token สำหรับ auth', example: 'Bearer eyJhbGci...' },
                  { header: 'Content-Type', desc: 'ประเภทของ body', example: 'application/json' },
                  { header: 'Cookie', desc: 'ส่ง cookie ไปกับ request', example: 'session=abc123' },
                  { header: 'X-CSRF-Token', desc: 'ป้องกัน CSRF attack', example: 'random_token' },
                ].map((h) => (
                  <div key={h.header} className="text-sm">
                    <div className="flex items-center gap-2">
                      <code className="text-sky-400 font-mono text-xs">{h.header}:</code>
                      <span className="text-slate-400 text-xs">{h.desc}</span>
                    </div>
                    <code className="text-slate-500 font-mono text-xs ml-4">{h.example}</code>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Browser Storage */}
          <h3 className="font-bold text-white text-xl mb-6 text-center">Browser Storage — ใช้อะไร เก็บอะไร?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {storageTypes.map((s) => (
              <div key={s.type} className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <i className={`${s.icon} text-sky-400 text-xl`}></i>
                  <h4 className="font-bold text-white">{s.type}</h4>
                </div>
                <p className="text-slate-400 text-sm mb-3">{s.desc}</p>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-emerald-900/30 rounded border border-emerald-800 text-emerald-300">
                    <strong>Use case:</strong> {s.useCase}
                  </div>
                  <div className="p-2 bg-sky-900/30 rounded border border-sky-800 text-sky-300">
                    <strong>Security:</strong> {s.security}
                  </div>
                  <div className="p-2 bg-red-900/30 rounded border border-red-800 text-red-300">
                    <strong>Risk:</strong> {s.risk}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="border-t border-slate-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Link href="/section/01-experience" className="text-slate-500 hover:text-sky-500 flex items-center gap-2 text-sm font-medium transition-colors">
            <i className="fas fa-arrow-left text-xs"></i> 01 — ประสบการณ์
          </Link>
          <Link href="/section/03-security" className="text-sky-500 hover:text-sky-600 flex items-center gap-2 text-sm font-medium transition-colors">
            03 — Security <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
