import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

export default function NextjsPage() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 mt-2 mb-4">Next.js คืออะไร?</h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-500">The React Framework for Production — สร้างโดย Vercel รวม Frontend + Backend ไว้ในที่เดียว</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: 'fas fa-server',
              title: 'Server-Side Rendering (SSR)',
              desc: 'Render HTML บน server ทุก request — ได้ข้อมูลล่าสุดเสมอ SEO-friendly เหมาะกับหน้าที่ข้อมูลเปลี่ยนบ่อย',
              color: 'border-t-sky-500',
              iconColor: 'text-sky-500',
            },
            {
              icon: 'fas fa-file-code',
              title: 'Static Site Generation (SSG)',
              desc: 'Build HTML ล่วงหน้าเป็น static files โหลดเร็วมาก เหมาะกับบล็อก เอกสาร หรือหน้าที่ไม่เปลี่ยนบ่อย',
              color: 'border-t-emerald-500',
              iconColor: 'text-emerald-500',
            },
            {
              icon: 'fas fa-rotate',
              title: 'Incremental Static Regeneration',
              desc: 'สร้าง static page แล้ว regenerate ตาม interval ที่กำหนด ได้ทั้งความเร็ว + ข้อมูล up-to-date',
              color: 'border-t-violet-500',
              iconColor: 'text-violet-500',
            },
            {
              icon: 'fas fa-route',
              title: 'App Router (Next.js 13+)',
              desc: 'ระบบ routing แบบใหม่ใช้โฟลเดอร์เป็น routes รองรับ Server Components, layouts, loading, error states',
              color: 'border-t-orange-500',
              iconColor: 'text-orange-500',
            },
            {
              icon: 'fas fa-plug',
              title: 'API Routes',
              desc: 'เขียน Backend API ใน Next.js ได้เลย ไม่ต้องแยก server ต่างหาก เหมาะกับ Fullstack development',
              color: 'border-t-pink-500',
              iconColor: 'text-pink-500',
            },
            {
              icon: 'fas fa-gauge-high',
              title: 'Built-in Optimization',
              desc: 'Image optimization, font optimization, code splitting, lazy loading ให้อัตโนมัติ ไม่ต้อง config เอง',
              color: 'border-t-amber-500',
              iconColor: 'text-amber-500',
            },
          ].map((f) => (
            <div key={f.title} className={`bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-t-4 ${f.color} rounded-2xl p-6`}>
              <i className={`${f.icon} ${f.iconColor} text-2xl mb-3 block`}></i>
              <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-slate-900 text-lg mb-4">โครงสร้างโปรเจกต์ Next.js (App Router)</h3>
            <CodeBlock
              variant="neutral"
              language="bash"
              code={`my-app/
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # หน้าหลัก (/)
│   ├── about/
│   │   └── page.tsx      # หน้า /about
│   └── api/
│       └── users/
│           └── route.ts  # API: /api/users
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── public/               # Static assets
├── next.config.js
└── package.json`}
            />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg mb-4">ตัวอย่าง API Route ใน Next.js</h3>
            <CodeBlock
              variant="neutral"
              language="typescript"
              code={`// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server'

// GET /api/users
export async function GET(req: NextRequest) {
  const users = await db.user.findMany()
  return NextResponse.json(users)
}

// POST /api/users
export async function POST(req: NextRequest) {
  const body = await req.json()

  if (!body.email || !body.name) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    )
  }

  const user = await db.user.create({ data: body })
  return NextResponse.json(user, { status: 201 })
}`}
            />
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/02-frameworks/react" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> React.js
          </Link>
          <Link href="/section/02-frameworks/tailwind" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            Tailwind CSS <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
