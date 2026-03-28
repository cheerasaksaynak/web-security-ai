import Link from 'next/link'

export default function VersionControlTypesPage() {
  return (
    <div>
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-4">ประเภทของ Version Control</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-500">เข้าใจความแตกต่างระหว่างระบบแบบ Centralized และ Distributed</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Centralized */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
              <div className="p-5 border-b border-slate-100 dark:border-slate-700 flex items-center gap-3 bg-slate-50 dark:bg-slate-900/50">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center border border-orange-200">
                  <i className="fas fa-server text-orange-500"></i>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Centralized VCS</h3>
                  <span className="text-xs text-slate-500">SVN, TFS</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <p className="text-slate-600 text-sm leading-relaxed">
                  มี <strong>server เดียว</strong> เป็นศูนย์กลาง นักพัฒนาทุกคน checkout โค้ดจาก server นั้น
                </p>
                {[
                  { icon: 'fas fa-xmark', color: 'text-red-400', text: 'ต้องเชื่อมต่อ internet ตลอด' },
                  { icon: 'fas fa-xmark', color: 'text-red-400', text: 'Server ล่ม = งานหยุดทั้งทีม' },
                  { icon: 'fas fa-xmark', color: 'text-red-400', text: 'Branching ช้าและซับซ้อน' },
                  { icon: 'fas fa-check', color: 'text-emerald-400', text: 'ง่ายกว่าสำหรับผู้เริ่มต้น' },
                  { icon: 'fas fa-check', color: 'text-emerald-400', text: 'ดูแล access control ได้ง่าย' },
                ].map((p) => (
                  <p key={p.text} className="text-sm text-slate-500 flex items-center gap-2">
                    <i className={`${p.icon} ${p.color} text-xs flex-shrink-0`}></i>
                    {p.text}
                  </p>
                ))}
              </div>
            </div>

            {/* Distributed */}
            <div className="bg-white dark:bg-slate-800 border border-sky-200 dark:border-sky-700 rounded-2xl overflow-hidden shadow-sm">
              <div className="p-5 border-b border-sky-100 dark:border-sky-800 flex items-center justify-between bg-sky-50 dark:bg-sky-900/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center border border-sky-200">
                    <i className="fas fa-network-wired text-sky-500"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Distributed VCS</h3>
                    <span className="text-xs text-slate-500">Git, Mercurial</span>
                  </div>
                </div>
                <span className="text-xs font-bold bg-sky-500 text-white px-3 py-1 rounded-full">ยอดนิยม</span>
              </div>
              <div className="p-6 space-y-3">
                <p className="text-slate-600 text-sm leading-relaxed">
                  <strong>ทุกคนมี full copy</strong> ของ repository — ทำงานได้แม้ไม่มี internet
                </p>
                {[
                  { icon: 'fas fa-check', color: 'text-emerald-400', text: 'ทำงาน offline ได้เต็มประสิทธิภาพ' },
                  { icon: 'fas fa-check', color: 'text-emerald-400', text: 'Branching รวดเร็วมาก' },
                  { icon: 'fas fa-check', color: 'text-emerald-400', text: 'ไม่มี single point of failure' },
                  { icon: 'fas fa-check', color: 'text-emerald-400', text: 'Merge และ conflict resolution ดีกว่า' },
                  { icon: 'fas fa-check', color: 'text-emerald-400', text: 'Community ใหญ่ — GitHub/GitLab ใช้ Git' },
                ].map((p) => (
                  <p key={p.text} className="text-sm text-slate-500 flex items-center gap-2">
                    <i className={`${p.icon} ${p.color} text-xs flex-shrink-0`}></i>
                    {p.text}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* ทำไม Git ยอดนิยม */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center">
                <i className="fab fa-git-alt text-orange-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900">ทำไม Git ถึงได้รับความนิยมมากที่สุด?</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: 'fas fa-wifi-slash', title: 'ทำงาน Offline ได้', desc: 'commit, branch, merge ได้โดยไม่ต้องเชื่อมต่อ internet' },
                { icon: 'fas fa-bolt', title: 'Branching รวดเร็ว', desc: 'สร้างและสลับ branch ใน milliseconds ทดลอง feature ได้ตลอดเวลา' },
                { icon: 'fas fa-earth-asia', title: 'Community ใหญ่มาก', desc: 'documentation, tutorial และ community support มากที่สุดในโลก' },
                { icon: 'fas fa-code-branch', title: 'GitHub & GitLab ใช้ Git', desc: 'แพลตฟอร์มชั้นนำทุกที่รองรับ Git เป็นมาตรฐาน' },
                { icon: 'fas fa-open-iconic', title: 'Free & Open Source', desc: 'ไม่มีค่าใช้จ่าย ใช้ได้ในทุกโปรเจกต์ ทุกองค์กร' },
                { icon: 'fas fa-shield-halved', title: 'Integrity ของข้อมูล', desc: 'ทุก commit มี SHA hash — ตรวจสอบความสมบูรณ์ได้เสมอ' },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 p-4 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-100 dark:border-slate-600">
                  <div className="w-8 h-8 bg-sky-100 dark:bg-sky-900/40 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-sky-500 text-sm`}></i>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="border-t border-slate-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Link href="/section/03-version-control/why-version-control" className="text-slate-500 hover:text-sky-500 flex items-center gap-2 text-sm font-medium transition-colors">
            <i className="fas fa-arrow-left text-xs"></i> ทำไมต้องใช้ Version Control?
          </Link>
          <Link href="/section/03-version-control/git-commands" className="text-sky-500 hover:text-sky-600 flex items-center gap-2 text-sm font-medium transition-colors">
            Git Commands <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
