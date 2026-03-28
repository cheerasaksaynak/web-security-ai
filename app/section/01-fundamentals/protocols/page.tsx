import Link from 'next/link'

const protocols = [
  {
    name: 'HTTP',
    port: '80',
    type: 'TCP',
    purpose: 'ส่งข้อมูลเว็บ',
    encrypted: false,
    encryptedLabel: 'ไม่เข้ารหัส',
    color: 'border-l-orange-400',
    badge: 'bg-orange-100 text-orange-700',
  },
  {
    name: 'HTTPS',
    port: '443',
    type: 'TCP',
    purpose: 'ส่งข้อมูลเว็บแบบเข้ารหัส',
    encrypted: true,
    encryptedLabel: 'TLS',
    color: 'border-l-emerald-400',
    badge: 'bg-emerald-100 text-emerald-700',
  },
  {
    name: 'FTP',
    port: '21',
    type: 'TCP',
    purpose: 'โอนไฟล์',
    encrypted: false,
    encryptedLabel: 'ใช้ SFTP แทน',
    color: 'border-l-amber-400',
    badge: 'bg-amber-100 text-amber-700',
  },
  {
    name: 'SSH',
    port: '22',
    type: 'TCP',
    purpose: 'Remote access / command line ปลอดภัย',
    encrypted: true,
    encryptedLabel: 'เข้ารหัสทั้งหมด',
    color: 'border-l-violet-400',
    badge: 'bg-violet-100 text-violet-700',
  },
  {
    name: 'UDP',
    port: 'varies',
    type: 'UDP',
    purpose: 'Streaming, DNS, เกม (ไม่ต้อง connection)',
    encrypted: false,
    encryptedLabel: 'ไม่เข้ารหัส',
    color: 'border-l-slate-400',
    badge: 'bg-slate-100 text-slate-600',
  },
]

export default function ProtocolsPage() {
  return (
    <div>
      {/* Protocols */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Protocols — HTTP, HTTPS, FTP, SSH, UDP</h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-500">Protocol คือ "กฎ" ที่ client และ server ใช้สื่อสารกัน แต่ละ protocol มีจุดประสงค์และระดับความปลอดภัยต่างกัน</p>
        </div>

        {/* Protocol Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-700 text-white">
                <th className="text-left px-6 py-4 font-bold">Protocol</th>
                <th className="text-left px-6 py-4 font-bold">Port</th>
                <th className="text-left px-6 py-4 font-bold">ประเภท</th>
                <th className="text-left px-6 py-4 font-bold">ใช้ทำอะไร</th>
                <th className="text-left px-6 py-4 font-bold">Encrypted</th>
              </tr>
            </thead>
            <tbody>
              {protocols.map((p, i) => (
                <tr key={p.name} className={`border-l-4 ${p.color} ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} border-b border-slate-100 last:border-b-0`}>
                  <td className="px-6 py-4">
                    <span className={`font-bold font-mono text-sm px-2 py-1 rounded ${p.badge}`}>{p.name}</span>
                  </td>
                  <td className="px-6 py-4 font-mono text-slate-600">{p.port}</td>
                  <td className="px-6 py-4 text-slate-600">{p.type}</td>
                  <td className="px-6 py-4 text-slate-700">{p.purpose}</td>
                  <td className="px-6 py-4">
                    {p.encrypted ? (
                      <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                        <i className="fas fa-lock text-xs"></i> {p.encryptedLabel}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-red-500 font-medium">
                        <i className="fas fa-lock-open text-xs"></i> {p.encryptedLabel}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Protocol highlight cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <i className="fas fa-lock text-emerald-500 text-xl"></i>
              <h3 className="font-bold text-emerald-800">HTTPS คือมาตรฐาน</h3>
            </div>
            <p className="text-emerald-700 text-sm">ทุกเว็บไซต์ในปัจจุบันควรใช้ HTTPS เท่านั้น เพราะ HTTP ส่งข้อมูลแบบ plain text ทำให้ดักฟังได้ง่าย</p>
          </div>
          <div className="bg-violet-50 border border-violet-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <i className="fas fa-terminal text-violet-500 text-xl"></i>
              <h3 className="font-bold text-violet-800">SSH แทน Telnet</h3>
            </div>
            <p className="text-violet-700 text-sm">SSH เข้ารหัสทุก command ที่ส่งไปยัง server ปลอดภัยกว่า Telnet ที่ส่ง plain text มากใช้ port 22</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <i className="fas fa-bolt text-amber-500 text-xl"></i>
              <h3 className="font-bold text-amber-800">UDP เร็วแต่ไม่รับประกัน</h3>
            </div>
            <p className="text-amber-700 text-sm">UDP ไม่มี handshake เหมาะกับ real-time เช่น video call, online game, DNS — packet หายได้บ้างแต่ไม่เป็นไร</p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/01-fundamentals/frontend-technologies" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> Frontend Technologies
          </Link>
          <Link href="/section/01-fundamentals/http-methods" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            HTTP Methods <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
