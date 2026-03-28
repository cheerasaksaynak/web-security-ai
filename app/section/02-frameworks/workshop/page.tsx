import WorkshopBox from '@/components/WorkshopBox'
import Link from 'next/link'

export default function WorkshopPage() {
  return (
    <div>
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mt-2 mb-4">
              Workshop: สร้างเว็บด้วย Next.js
            </h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-500">ลงมือทำจริง — ตั้งแต่ zero ไปสู่เว็บ Next.js ที่ทำงานได้จริง</p>
          </div>

          <WorkshopBox
            number={2}
            title="Workshop: สร้างเว็บด้วย Next.js"
            timeEstimate="30 นาที"
            steps={[
              {
                step: 1,
                title: 'สร้าง Next.js project ด้วย TypeScript + Tailwind',
                description: 'รันคำสั่งนี้ใน Terminal แล้วตอบ Yes ทุกข้อ',
                code: `npx create-next-app@latest my-workshop --typescript --tailwind --app --eslint`,
              },
              {
                step: 2,
                title: 'เปิดโปรเจกต์ด้วย VS Code',
                description: 'เข้าโฟลเดอร์แล้วเปิด VS Code ด้วยคำสั่งเดียว',
                code: `cd my-workshop\ncode .`,
              },
              {
                step: 3,
                title: 'รัน Development Server',
                description: 'เปิด Terminal ใน VS Code ด้วย Ctrl + ` แล้วรัน',
                code: `npm run dev\n# เปิด http://localhost:3000 ใน browser`,
              },
              {
                step: 4,
                title: 'สร้าง component ใหม่ใน components/',
                description: 'สร้างไฟล์ components/UserCard.tsx แล้วเขียน component',
                code: `// components/UserCard.tsx\ninterface UserCardProps {\n  name: string\n  role: string\n}\n\nexport default function UserCard({ name, role }: UserCardProps) {\n  return (\n    <div className="bg-white rounded-xl p-4 border border-slate-200">\n      <h2 className="font-bold text-slate-900">{name}</h2>\n      <p className="text-slate-500 text-sm">{role}</p>\n    </div>\n  )\n}`,
              },
              {
                step: 5,
                title: 'เพิ่มหน้า About ใน app/about/page.tsx',
                description: 'สร้างโฟลเดอร์ app/about/ แล้วสร้างไฟล์ page.tsx ข้างใน',
                code: `// app/about/page.tsx\nimport UserCard from '@/components/UserCard'\n\nexport default function AboutPage() {\n  return (\n    <main className="max-w-2xl mx-auto px-4 py-20">\n      <h1 className="text-3xl font-black text-slate-900 mb-8">\n        เกี่ยวกับเรา\n      </h1>\n      <UserCard name="นักพัฒนา A" role="Frontend Developer" />\n    </main>\n  )\n}`,
              },
              {
                step: 6,
                title: 'ทดสอบและสำรวจผลลัพธ์',
                description: 'เปิด browser ไปที่ URL ต่างๆ เพื่อดูหน้าที่สร้าง',
                code: `http://localhost:3000        # หน้าหลัก\nhttp://localhost:3000/about  # หน้า About ที่สร้างใหม่`,
              },
            ]}
            copilotPrompt="สร้าง React component ชื่อ ProductCard สำหรับ Next.js + TypeScript + Tailwind CSS รับ props เป็น name (string), price (number), imageUrl (string) มี button 'เพิ่มในตะกร้า' และแสดงราคาในรูปแบบเงินบาทไทย พร้อม hover effect"
          />
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/02-frameworks/github-copilot" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> GitHub Copilot
          </Link>
          <Link href="/section/03-version-control" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            03 Version Control <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
