import Link from 'next/link'

export default function HowWebWorksPage() {
  return (
    <div>
      {/* How the Web Works */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 mb-4">How the Web Works</h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-500">เว็บทำงานอย่างไร? ทำความเข้าใจ Client-Server Architecture</p>
        </div>

        {/* Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <div className="bg-sky-50 dark:bg-sky-950/30 border-2 border-sky-200 dark:border-sky-800 rounded-2xl p-8 text-center flex-1">
            <i className="fas fa-display text-sky-500 text-4xl mb-4 block"></i>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-3">Client (Browser)</h3>
            <div className="space-y-2 text-left">
              {[
                { color: 'text-orange-500', label: 'HTML', desc: 'โครงสร้างหน้าเว็บ' },
                { color: 'text-blue-500', label: 'CSS', desc: 'ความสวยงาม ธีม' },
                { color: 'text-yellow-500', label: 'JavaScript', desc: 'ฟังก์ชันการทำงาน' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm">
                  <span className={`font-bold shrink-0 ${item.color}`}>{item.label}</span>
                  <span className="text-slate-500">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-full px-4 py-2 text-sm">
              <i className="fas fa-arrow-right text-emerald-500 text-xs"></i>
              <span className="text-emerald-700 dark:text-emerald-300 font-mono font-medium">HTTP Request</span>
            </div>
            <div className="h-8 md:h-px md:w-8 w-px bg-slate-200" />
            <div className="flex items-center gap-2 bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-full px-4 py-2 text-sm">
              <i className="fas fa-arrow-left text-sky-500 text-xs"></i>
              <span className="text-sky-700 dark:text-sky-300 font-mono font-medium">HTTP Response</span>
            </div>
          </div>

          <div className="bg-slate-700 border-2 border-slate-600 rounded-2xl p-8 text-center flex-1">
            <i className="fas fa-server text-sky-400 text-4xl mb-4 block"></i>
            <h3 className="font-bold text-white text-lg mb-3">Server (Backend)</h3>
            <div className="space-y-2 text-left">
              {[
                { color: 'text-sky-400', label: 'API Routes', desc: 'จัดการ request' },
                { color: 'text-violet-400', label: 'Database', desc: 'เก็บข้อมูล' },
                { color: 'text-emerald-400', label: 'Auth', desc: 'ยืนยันตัวตน' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm">
                  <span className={`font-bold shrink-0 ${item.color}`}>{item.label}</span>
                  <span className="text-slate-400">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Request lifecycle */}
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8">
          <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-6 text-center">Request Lifecycle</h3>
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

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/01-fundamentals" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> 01 Fundamentals
          </Link>
          <Link href="/section/01-fundamentals/frontend-technologies" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            Frontend Technologies <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
