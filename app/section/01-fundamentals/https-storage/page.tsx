import Link from 'next/link'

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

export default function HttpsStoragePage() {
  return (
    <div>
      {/* HTTPS & Storage */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-4">HTTPS & Browser Storage</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-600">ความปลอดภัยพื้นฐานที่ต้องเข้าใจ</p>
          </div>

          {/* HTTPS */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <i className="fas fa-lock text-emerald-500 text-2xl"></i>
                <h3 className="font-bold text-slate-900 text-xl">HTTPS = HTTP + TLS</h3>
              </div>
              <ul className="space-y-3">
                {[
                  { icon: 'fas fa-lock', text: 'เข้ารหัสข้อมูลระหว่างทาง (Encryption)' },
                  { icon: 'fas fa-eye-slash', text: 'ป้องกันการดักฟัง Man-in-the-Middle (MITM)' },
                  { icon: 'fas fa-certificate', text: 'ยืนยันตัวตนของ server ด้วย Certificate' },
                  { icon: 'fas fa-check-circle', text: 'จำเป็นสำหรับทุกเว็บไซต์ในปัจจุบัน' },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3 text-slate-700 text-sm">
                    <i className={`${item.icon} text-emerald-500 text-xs w-4`}></i>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <i className="fas fa-network-wired text-sky-600 text-2xl"></i>
                <h3 className="font-bold text-slate-900 text-xl">HTTP Headers ที่สำคัญ</h3>
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
                      <code className="text-sky-600 font-mono text-xs">{h.header}:</code>
                      <span className="text-slate-600 text-xs">{h.desc}</span>
                    </div>
                    <code className="text-slate-500 font-mono text-xs ml-4">{h.example}</code>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Browser Storage */}
          <h3 className="font-bold text-slate-900 text-xl mb-6 text-center">Browser Storage — ใช้อะไร เก็บอะไร?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {storageTypes.map((s) => (
              <div key={s.type} className="bg-white border border-slate-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <i className={`${s.icon} text-sky-600 text-xl`}></i>
                  <h4 className="font-bold text-slate-900">{s.type}</h4>
                </div>
                <p className="text-slate-600 text-sm mb-3">{s.desc}</p>
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
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/01-fundamentals/frontend-vs-backend" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> Frontend vs Backend
          </Link>
          <Link href="/section/01-fundamentals/rendering" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            SSR / SPA / SSG <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
