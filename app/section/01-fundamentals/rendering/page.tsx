import Link from 'next/link'

export default function RenderingPage() {
  return (
    <div>
      {/* SSR vs SPA vs SSG */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 mb-4">SSR vs SSG vs SPA</h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-500">3 วิธีการ render เว็บ — แต่ละแบบมีข้อดีและ trade-off ต่างกัน</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* SSR */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border-2 border-violet-200 dark:border-violet-800 overflow-hidden">
            <div className="bg-violet-600 px-6 py-5">
              <div className="flex items-center gap-3 mb-1">
                <i className="fas fa-server text-white text-xl"></i>
                <h3 className="font-black text-white text-xl">SSR</h3>
              </div>
              <p className="text-violet-200 text-sm">Server-Side Rendering</p>
              <span className="mt-2 inline-block bg-violet-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">Next.js, Nuxt</span>
            </div>
            <div className="p-6">
              <p className="text-slate-600 text-sm mb-4">
                Render HTML บน server ทุกครั้งที่มี request หน้าเว็บ generate ใหม่เสมอตาม data ล่าสุด
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-emerald-700">
                  <i className="fas fa-check-circle text-emerald-500 text-xs"></i> SEO ดีมาก (HTML ครบตั้งแต่ต้น)
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald-700">
                  <i className="fas fa-check-circle text-emerald-500 text-xs"></i> ข้อมูล real-time เสมอ
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald-700">
                  <i className="fas fa-check-circle text-emerald-500 text-xs"></i> เหมาะกับ auth, dynamic data
                </div>
                <div className="flex items-center gap-2 text-sm text-red-600">
                  <i className="fas fa-times-circle text-red-400 text-xs"></i> ช้ากว่า SSG (ต้อง render ทุก request)
                </div>
                <div className="flex items-center gap-2 text-sm text-red-600">
                  <i className="fas fa-times-circle text-red-400 text-xs"></i> server load สูง
                </div>
              </div>
              <div className="bg-violet-50 dark:bg-violet-950/30 rounded-xl p-3 text-xs text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800">
                <strong>เหมาะกับ:</strong> Dashboard, E-commerce, เว็บที่ต้องการ auth
              </div>
            </div>
          </div>

          {/* SSG */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border-2 border-emerald-200 dark:border-emerald-800 overflow-hidden">
            <div className="bg-emerald-600 px-6 py-5">
              <div className="flex items-center gap-3 mb-1">
                <i className="fas fa-bolt text-white text-xl"></i>
                <h3 className="font-black text-white text-xl">SSG</h3>
              </div>
              <p className="text-emerald-200 text-sm">Static Site Generation</p>
              <span className="mt-2 inline-block bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">Next.js, Astro, Hugo</span>
            </div>
            <div className="p-6">
              <p className="text-slate-600 text-sm mb-4">
                Render HTML ตอน build time ไฟล์ HTML สร้างครั้งเดียว ส่งตรงจาก CDN เร็วสุด
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-emerald-700">
                  <i className="fas fa-check-circle text-emerald-500 text-xs"></i> เร็วมาก (CDN serving)
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald-700">
                  <i className="fas fa-check-circle text-emerald-500 text-xs"></i> SEO ดีมาก
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald-700">
                  <i className="fas fa-check-circle text-emerald-500 text-xs"></i> server cost ต่ำ
                </div>
                <div className="flex items-center gap-2 text-sm text-red-600">
                  <i className="fas fa-times-circle text-red-400 text-xs"></i> ข้อมูลไม่ real-time (ต้อง rebuild)
                </div>
                <div className="flex items-center gap-2 text-sm text-red-600">
                  <i className="fas fa-times-circle text-red-400 text-xs"></i> ไม่เหมาะกับ dynamic data มาก
                </div>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-xl p-3 text-xs text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                <strong>เหมาะกับ:</strong> Blog, Documentation, Landing page, Portfolio
              </div>
            </div>
          </div>

          {/* SPA */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border-2 border-sky-200 dark:border-sky-800 overflow-hidden">
            <div className="bg-sky-600 px-6 py-5">
              <div className="flex items-center gap-3 mb-1">
                <i className="fas fa-rotate text-white text-xl"></i>
                <h3 className="font-black text-white text-xl">SPA</h3>
              </div>
              <p className="text-sky-200 text-sm">Single Page Application</p>
              <span className="mt-2 inline-block bg-sky-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">React, Vue, Angular</span>
            </div>
            <div className="p-6">
              <p className="text-slate-600 text-sm mb-4">
                โหลด HTML เปล่าครั้งเดียว JavaScript render ทุกอย่างบน client ไม่ refresh หน้าเลย
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-emerald-700">
                  <i className="fas fa-check-circle text-emerald-500 text-xs"></i> UX ลื่นมาก (ไม่ reload)
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald-700">
                  <i className="fas fa-check-circle text-emerald-500 text-xs"></i> เร็วหลัง initial load
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald-700">
                  <i className="fas fa-check-circle text-emerald-500 text-xs"></i> Dynamic & interactive มาก
                </div>
                <div className="flex items-center gap-2 text-sm text-red-600">
                  <i className="fas fa-times-circle text-red-400 text-xs"></i> Initial load ช้า (JS bundle ใหญ่)
                </div>
                <div className="flex items-center gap-2 text-sm text-red-600">
                  <i className="fas fa-times-circle text-red-400 text-xs"></i> SEO ต้องระวัง (HTML เปล่าตอนแรก)
                </div>
              </div>
              <div className="bg-sky-50 dark:bg-sky-950/30 rounded-xl p-3 text-xs text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                <strong>เหมาะกับ:</strong> Web App, Admin panel, Gmail-style app
              </div>
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-700 text-white">
                <th className="text-left px-6 py-4 font-bold">เกณฑ์</th>
                <th className="text-center px-6 py-4 font-bold text-violet-300">SSR</th>
                <th className="text-center px-6 py-4 font-bold text-emerald-300">SSG</th>
                <th className="text-center px-6 py-4 font-bold text-sky-300">SPA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { metric: 'SEO', ssr: 'ดีมาก', ssg: 'ดีมาก', spa: 'ต้องระวัง' },
                { metric: 'ความเร็ว (initial)', ssr: 'ปานกลาง', ssg: 'เร็วมาก', spa: 'ช้า' },
                { metric: 'ความเร็ว (หลัง load)', ssr: 'ปานกลาง', ssg: 'เร็วมาก', spa: 'เร็วมาก' },
                { metric: 'Dynamic Data', ssr: 'ดีมาก', ssg: 'จำกัด', spa: 'ดีมาก' },
                { metric: 'Server Cost', ssr: 'สูง', ssg: 'ต่ำมาก', spa: 'ต่ำ' },
                { metric: 'ความซับซ้อน', ssr: 'ปานกลาง', ssg: 'ง่าย', spa: 'ปานกลาง' },
              ].map((row, i) => (
                <tr key={row.metric} className={i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'}>
                  <td className="px-6 py-3 font-semibold text-slate-700">{row.metric}</td>
                  <td className="px-6 py-3 text-center text-slate-600">{row.ssr}</td>
                  <td className="px-6 py-3 text-center text-slate-600">{row.ssg}</td>
                  <td className="px-6 py-3 text-center text-slate-600">{row.spa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Security note for rendering */}
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <i className="fas fa-shield-alt text-amber-500 text-2xl mt-0.5"></i>
            <div>
              <h4 className="font-bold text-amber-800 dark:text-amber-200 text-lg mb-2">Security มุมมองของแต่ละ Rendering</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-amber-700 dark:text-amber-300 mb-1">SSR — เข้าถึง secret ได้</p>
                  <p className="text-amber-600 dark:text-amber-400">code รันบน server ใช้ env variable เก็บ API key หรือ DB password ได้อย่างปลอดภัย</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 dark:text-amber-300 mb-1">SSG — ระวัง build-time secret</p>
                  <p className="text-amber-600 dark:text-amber-400">secret ที่ใช้ตอน build ไม่ถูก embed ลงไฟล์ HTML ถ้าใช้ถูกต้อง ปลอดภัยดี</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 dark:text-amber-300 mb-1">SPA — ห้ามเก็บ secret ใน code</p>
                  <p className="text-amber-600 dark:text-amber-400">JavaScript bundle ถูกส่งให้ browser ทุก secret ที่อยู่ใน code ผู้ใช้อ่านได้หมด</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/01-fundamentals/https-storage" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> HTTPS & Storage
          </Link>
          <Link href="/section/02-frameworks" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            02 Frameworks <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
