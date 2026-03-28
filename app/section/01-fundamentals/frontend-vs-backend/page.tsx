import Link from 'next/link'

export default function FrontendVsBackendPage() {
  return (
    <div>
      {/* Backend vs Frontend */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Backend vs Frontend</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-500">ความแตกต่างระหว่างสองฝั่ง — สำคัญมากในเรื่อง Security</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Frontend */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-sky-200 dark:border-sky-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/40 rounded-xl flex items-center justify-center">
                  <i className="fas fa-display text-sky-500 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-xl">Frontend</h3>
                  <p className="text-sky-500 text-sm font-medium">ฝั่ง Client (Browser)</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <i className="fas fa-code text-sky-400 text-sm mt-0.5"></i>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">Technology</p>
                    <p className="text-slate-500 text-sm">HTML, CSS, JavaScript, React, Vue, Next.js</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="fas fa-eye text-sky-400 text-sm mt-0.5"></i>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">ผู้ใช้มองเห็นได้</p>
                    <p className="text-slate-500 text-sm">source code ทุกบรรทัดสามารถดูได้ผ่าน DevTools ไม่มีทางซ่อนได้</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="fas fa-paint-brush text-sky-400 text-sm mt-0.5"></i>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">หน้าที่หลัก</p>
                    <p className="text-slate-500 text-sm">UI/UX, แสดงผล, รับ input จากผู้ใช้, เรียก API</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/30 rounded-xl border border-red-200 dark:border-red-800">
                  <i className="fas fa-exclamation-triangle text-red-500 text-sm mt-0.5"></i>
                  <div>
                    <p className="font-semibold text-red-700 dark:text-red-300 text-sm">ห้ามเก็บ Secret</p>
                    <p className="text-red-600 dark:text-red-400 text-sm">API key, password, token ห้ามอยู่ใน frontend เพราะใครก็อ่านได้</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="bg-slate-700 rounded-2xl p-8 border-2 border-slate-600">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center">
                  <i className="fas fa-server text-sky-400 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-black text-white text-xl">Backend</h3>
                  <p className="text-sky-400 text-sm font-medium">ฝั่ง Server</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <i className="fas fa-code text-sky-400 text-sm mt-0.5"></i>
                  <div>
                    <p className="font-semibold text-white text-sm">Technology</p>
                    <p className="text-slate-400 text-sm">Node.js, Python, Go, Java, PHP, Ruby</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="fas fa-eye-slash text-sky-400 text-sm mt-0.5"></i>
                  <div>
                    <p className="font-semibold text-white text-sm">ผู้ใช้มองไม่เห็น</p>
                    <p className="text-slate-400 text-sm">code รันบน server เท่านั้น ผู้ใช้ไม่สามารถอ่าน source code ได้</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="fas fa-cogs text-sky-400 text-sm mt-0.5"></i>
                  <div>
                    <p className="font-semibold text-white text-sm">หน้าที่หลัก</p>
                    <p className="text-slate-400 text-sm">Business logic, Database, Authentication, Authorization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-emerald-900/40 rounded-xl border border-emerald-800">
                  <i className="fas fa-shield-alt text-emerald-400 text-sm mt-0.5"></i>
                  <div>
                    <p className="font-semibold text-emerald-300 text-sm">เก็บ Secret ได้</p>
                    <p className="text-emerald-400 text-sm">API key, DB password, JWT secret เก็บใน environment variables บน server</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security implication */}
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <i className="fas fa-lightbulb text-amber-500 text-2xl mt-0.5"></i>
              <div>
                <h4 className="font-bold text-amber-800 dark:text-amber-200 text-lg mb-2">Security Implication ที่สำคัญ</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-amber-700 dark:text-amber-300 mb-1">Validation ต้องทำทั้งสองฝั่ง</p>
                    <p className="text-amber-600 dark:text-amber-400">Frontend validate เพื่อ UX, Backend validate เพื่อ Security เสมอ เพราะ frontend bypass ได้</p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-700 dark:text-amber-300 mb-1">Business logic บน Backend</p>
                    <p className="text-amber-600 dark:text-amber-400">เช็คสิทธิ์, คำนวณราคา, ตรวจ role ทำบน server เสมอ frontend แค่แสดงผล</p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-700 dark:text-amber-300 mb-1">Secret ห้ามอยู่ใน code</p>
                    <p className="text-amber-600 dark:text-amber-400">เก็บใน .env file หรือ secret manager ไม่ commit ลง git โดยเด็ดขาด</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/01-fundamentals/api" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> API คืออะไร
          </Link>
          <Link href="/section/01-fundamentals/https-storage" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            HTTPS & Storage <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
