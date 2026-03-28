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

export default function HttpMethodsPage() {
  return (
    <div>
      {/* HTTP Methods */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
        <div className="max-w-6xl mx-auto px-6">
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
                  <div key={m.method} className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
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
                  <div key={s.code} className="flex items-center gap-4 p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
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
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/01-fundamentals/protocols" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> Protocols
          </Link>
          <Link href="/section/01-fundamentals/api" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            API คืออะไร <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
