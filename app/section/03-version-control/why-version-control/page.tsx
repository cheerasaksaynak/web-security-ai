import Link from 'next/link'

const whyVersionControl = [
  {
    icon: 'fas fa-clock-rotate-left',
    title: 'ย้อนเวลากลับได้',
    desc: 'บันทึก snapshot ทุกครั้งที่ commit — สามารถกลับไปยังเวอร์ชันก่อนหน้าได้ทุกเมื่อ ไม่ต้องกลัวว่าจะ "เสียหายถาวร"',
  },
  {
    icon: 'fas fa-users',
    title: 'ทำงานร่วมกันได้',
    desc: 'หลายคนแก้ไข code พร้อมกันในไฟล์เดียวกันได้โดยไม่ทับกัน ด้วยระบบ branching และ merging',
  },
  {
    icon: 'fas fa-timeline',
    title: 'ติดตาม History',
    desc: 'รู้ว่าใครเปลี่ยนอะไร เมื่อไหร่ และทำไม — ทุก commit มี author, timestamp และ message บันทึกไว้',
  },
  {
    icon: 'fas fa-flask',
    title: 'ทดลองได้อย่างปลอดภัย',
    desc: 'สร้าง branch ใหม่เพื่อทดลอง feature — ถ้าพังก็ลบ branch ทิ้ง code หลักไม่ได้รับผลกระทบ',
  },
]

const scenarios = [
  {
    icon: 'fas fa-trash-can',
    color: 'text-red-500',
    bg: 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800',
    situation: 'ลบ code ผิด',
    solution: 'git checkout หรือ git revert กู้คืนได้ทันที',
  },
  {
    icon: 'fas fa-code-merge',
    color: 'text-sky-500',
    bg: 'bg-sky-50 dark:bg-sky-950/30 border-sky-200 dark:border-sky-800',
    situation: 'merge งานกับเพื่อน',
    solution: 'git merge รวม branch ได้อัตโนมัติ มี conflict resolver ช่วย',
  },
  {
    icon: 'fas fa-magnifying-glass',
    color: 'text-violet-500',
    bg: 'bg-violet-50 dark:bg-violet-950/30 border-violet-200 dark:border-violet-800',
    situation: 'หาว่าใครเขียน bug นี้',
    solution: 'git blame บอกได้ทุก line ว่าใคร commit เมื่อไหร่',
  },
]

export default function WhyVersionControlPage() {
  return (
    <div>
      <section className="bg-white dark:bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-4">ทำไมต้องใช้ Version Control?</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-500">เครื่องมือที่ทุกทีมพัฒนาซอฟต์แวร์ขาดไม่ได้ ไม่ว่าจะเล็กหรือใหญ่</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {whyVersionControl.map((item) => (
              <div key={item.title} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 card-hover">
                <div className="w-12 h-12 bg-sky-50 dark:bg-sky-900/40 rounded-xl flex items-center justify-center mb-4 border border-sky-100 dark:border-sky-800">
                  <i className={`${item.icon} text-sky-500 text-xl`}></i>
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">ตัวอย่างสถานการณ์จริง</h3>
            <div className="grid md:grid-cols-3 gap-5">
              {scenarios.map((s) => (
                <div key={s.situation} className={`rounded-2xl border p-5 ${s.bg}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <i className={`${s.icon} ${s.color} text-xl`}></i>
                    <p className="font-bold text-slate-800">{s.situation}</p>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    <i className="fas fa-arrow-right text-xs mr-1 opacity-60"></i>
                    {s.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="border-t border-slate-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Link href="/section/03-version-control" className="text-slate-500 hover:text-sky-500 flex items-center gap-2 text-sm font-medium transition-colors">
            <i className="fas fa-arrow-left text-xs"></i> 03 — Version Control
          </Link>
          <Link href="/section/03-version-control/types" className="text-sky-500 hover:text-sky-600 flex items-center gap-2 text-sm font-medium transition-colors">
            ประเภทของ Version Control <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
