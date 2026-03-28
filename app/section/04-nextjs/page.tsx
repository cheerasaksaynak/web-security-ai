import SectionHero from '@/components/SectionHero'
import CodeBlock from '@/components/CodeBlock'
import WorkshopBox from '@/components/WorkshopBox'
import Link from 'next/link'

const whyNextjs = [
  {
    icon: 'fas fa-gauge-high',
    title: 'Server-Side Rendering',
    desc: 'Render HTML บน server ก่อนส่งไป browser — SEO ดีขึ้น, โหลดเร็วขึ้น, Content พร้อมทันที',
  },
  {
    icon: 'fas fa-folder-tree',
    title: 'File-based Routing',
    desc: 'สร้างไฟล์ = สร้าง route ไม่ต้องตั้งค่า router แยก app/about/page.tsx → /about',
  },
  {
    icon: 'fas fa-server',
    title: 'API Routes',
    desc: 'Backend อยู่ในโปรเจกต์เดียวกัน ไม่ต้องแยก server app/api/users/route.ts → /api/users',
  },
  {
    icon: 'fas fa-rocket',
    title: 'Static Export',
    desc: 'Export เป็น static HTML/CSS/JS deploy ได้ทุกที่ รวมถึง GitHub Pages ฟรี',
  },
  {
    icon: 'fas fa-puzzle-piece',
    title: 'React Ecosystem',
    desc: 'Component-based, Hooks, Context API — reuse code ได้ง่าย ทำงานเป็นทีมได้ดี',
  },
  {
    icon: 'fas fa-shield-halved',
    title: 'Built-in Security',
    desc: 'Auto XSS protection, Security Headers config, Middleware สำหรับ auth/rate limiting',
  },
]

const fileStructure = `my-secure-app/
├── app/                    ← App Router (Next.js 13+)
│   ├── layout.tsx          ← Root layout (shared navbar, footer)
│   ├── page.tsx            ← หน้าแรก (/)
│   ├── about/
│   │   └── page.tsx        ← หน้า About (/about)
│   ├── dashboard/
│   │   ├── layout.tsx      ← Layout เฉพาะ dashboard
│   │   └── page.tsx        ← /dashboard (protected)
│   └── api/
│       └── users/
│           └── route.ts    ← API endpoint (/api/users)
├── components/             ← Shared components
│   ├── Navbar.tsx
│   └── Button.tsx
├── lib/                    ← Utilities, helpers
│   └── auth.ts
├── middleware.ts           ← Auth middleware
├── public/                 ← Static assets (images, icons)
├── next.config.js          ← Next.js config
├── tailwind.config.ts
└── package.json`

const serverVsClient = [
  {
    type: 'Server Component',
    badge: 'Default',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    icon: 'fas fa-server',
    description: 'Render บน server ส่ง HTML มาให้ browser',
    pros: ['ดึงข้อมูลจาก database ได้ตรงๆ', 'ไม่ต้องส่ง JS ไปให้ client', 'SEO ดี', 'ซ่อน sensitive logic'],
    cons: ['ไม่มี useState, useEffect', 'ไม่มี event handlers', 'ไม่มี browser APIs'],
    example: `// app/users/page.tsx — Server Component (default)
async function UsersPage() {
  // ดึงข้อมูลจาก database ได้เลย
  const users = await db.user.findMany();

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}`,
  },
  {
    type: 'Client Component',
    badge: "'use client'",
    badgeColor: 'bg-sky-100 text-sky-700',
    icon: 'fas fa-display',
    description: "ใช้ 'use client' directive, ทำงานใน browser",
    pros: ['ใช้ useState, useEffect ได้', 'มี event handlers (onClick)', 'ใช้ browser APIs', 'Interactive UI'],
    cons: ['ดึง DB ตรงๆ ไม่ได้', 'JS bundle ใหญ่ขึ้น', 'SEO อาจด้อยกว่า'],
    example: `'use client'; // ← ต้องมี directive นี้!
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Clicked {count} times
    </button>
  );
}`,
  },
]

export default function NextjsPage() {
  return (
    <div>
      <SectionHero
        number="04"
        title="Modern Web Dev with Next.js"
        subtitle="React, Components, Routing, SSR/SSG, API Routes — ทุกอย่างในที่เดียว"
        icon="fas fa-code"
        imageUrl="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=1400&auto=format&fit=crop&q=80"
      />

      {/* Why Next.js */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 mb-4">ทำไมต้อง Next.js?</h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-500">Framework ที่เหมาะสมสำหรับการพัฒนาเว็บสมัยใหม่</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyNextjs.map((item) => (
            <div key={item.title} className="bg-white border border-slate-200 rounded-2xl p-6 card-hover">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-4 border border-sky-100">
                <i className={`${item.icon} text-sky-500 text-xl`}></i>
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Project Structure */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-white mb-4">Project Structure</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-400">โครงสร้างโปรเจกต์ Next.js App Router</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <CodeBlock
                variant="neutral"
                language="File Structure"
                code={fileStructure}
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-white text-xl mb-4">Convention สำคัญ</h3>
              {[
                { file: 'page.tsx', desc: 'หน้าเว็บ — แสดงผลใน URL path', example: 'app/about/page.tsx → /about' },
                { file: 'layout.tsx', desc: 'โครงร่างที่ share กับ children routes', example: 'app/layout.tsx → root layout' },
                { file: 'route.ts', desc: 'API endpoint — export HTTP methods', example: 'app/api/users/route.ts → /api/users' },
                { file: 'loading.tsx', desc: 'Loading UI ขณะ data กำลังโหลด', example: 'แสดงอัตโนมัติขณะ fetch' },
                { file: 'error.tsx', desc: 'Error boundary — จับ error ใน route', example: 'ต้องเป็น Client Component' },
                { file: 'middleware.ts', desc: 'รันก่อนทุก request — ใช้ทำ auth', example: 'middleware.ts ที่ root' },
              ].map((item) => (
                <div key={item.file} className="flex gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700">
                  <code className="text-sky-400 font-mono text-sm font-bold min-w-28 flex-shrink-0">{item.file}</code>
                  <div>
                    <p className="text-white text-sm">{item.desc}</p>
                    <p className="text-slate-500 text-xs font-mono mt-1">{item.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* React Components */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 mb-4">React Components</h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-500">หน่วยพื้นฐานของ UI ใน React — reuse ได้ ทดสอบได้ ดูแลง่าย</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-slate-900 text-xl mb-4">Component พื้นฐาน</h3>
            <CodeBlock
              variant="neutral"
              language="React/TSX"
              code={`// components/Card.tsx
interface CardProps {
  title: string;
  description: string;
  icon?: string;
}

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      {icon && <i className={\`\${icon} text-blue-500\`}></i>}
      <h2 className="font-bold text-xl mt-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Usage in any page:
<Card
  title="SQL Injection"
  description="ช่องโหว่จากการแทรก SQL command"
  icon="fas fa-bug"
/>`}
            />
          </div>

          <div>
            <h3 className="font-bold text-slate-900 text-xl mb-4">Hooks — State & Effects</h3>
            <CodeBlock
              variant="neutral"
              language="React Hooks"
              code={`'use client';
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ทำงานหลัง component mount
    async function load() {
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    }
    load();
  }, []); // [] = รันครั้งเดียวตอน mount

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}`}
            />
          </div>
        </div>

        {/* Server vs Client */}
        <h3 className="font-bold text-slate-900 text-2xl mb-6 text-center">Server vs Client Components</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {serverVsClient.map((item) => (
            <div key={item.type} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <i className={`${item.icon} text-sky-500`}></i>
                  <h4 className="font-bold text-slate-900">{item.type}</h4>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.badgeColor}`}>{item.badge}</span>
              </div>
              <div className="p-5">
                <p className="text-slate-600 text-sm mb-4">{item.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <p className="text-xs font-bold text-emerald-600 mb-2">สามารถทำได้</p>
                    {item.pros.map((p) => (
                      <p key={p} className="text-xs text-slate-500 flex items-center gap-1 mb-1">
                        <i className="fas fa-check text-emerald-400 text-xs"></i> {p}
                      </p>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-red-600 mb-2">ข้อจำกัด</p>
                    {item.cons.map((c) => (
                      <p key={c} className="text-xs text-slate-500 flex items-center gap-1 mb-1">
                        <i className="fas fa-xmark text-red-400 text-xs"></i> {c}
                      </p>
                    ))}
                  </div>
                </div>
                <CodeBlock variant="neutral" language="TSX" code={item.example} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* API Routes */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-4">API Routes</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-500">สร้าง backend endpoint ในโปรเจกต์เดียวกัน</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <CodeBlock
              variant="neutral"
              language="app/api/users/route.ts"
              code={`import { NextRequest, NextResponse } from 'next/server';

// GET /api/users
export async function GET(request: NextRequest) {
  const users = await db.user.findMany({
    select: { id: true, name: true, email: true }
    // ไม่ select password!
  });
  return NextResponse.json(users);
}

// POST /api/users
export async function POST(request: NextRequest) {
  const body = await request.json();

  // Validate input
  if (!body.email || !body.name) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  const user = await db.user.create({ data: body });
  return NextResponse.json(user, { status: 201 });
}`}
            />

            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 text-xl">Security ใน API Routes</h3>
              {[
                {
                  icon: 'fas fa-check-circle',
                  color: 'text-emerald-500',
                  title: 'Validate input ทุก request',
                  desc: 'ใช้ Zod schema validation ก่อน process',
                },
                {
                  icon: 'fas fa-user-lock',
                  color: 'text-sky-500',
                  title: 'ตรวจสอบ Authentication',
                  desc: 'ทุก endpoint ที่ต้อง login ต้อง verify token',
                },
                {
                  icon: 'fas fa-user-shield',
                  color: 'text-violet-500',
                  title: 'Authorization — ตรวจสอบสิทธิ์',
                  desc: 'user นี้มีสิทธิ์ทำ action นี้กับ resource นี้ไหม?',
                },
                {
                  icon: 'fas fa-gauge',
                  color: 'text-orange-500',
                  title: 'Rate Limiting',
                  desc: 'จำกัด request ต่อ IP เพื่อป้องกัน brute force',
                },
                {
                  icon: 'fas fa-eye-slash',
                  color: 'text-red-500',
                  title: 'ไม่ leak sensitive data',
                  desc: 'ไม่ return password hash หรือ internal error details',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 p-4 bg-white rounded-xl border border-slate-200">
                  <i className={`${item.icon} ${item.color} mt-0.5 flex-shrink-0`}></i>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
                    <p className="text-slate-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workshop */}
      <section className="max-w-6xl mx-auto px-6 py-4">
        <WorkshopBox
          number={2}
          title="สร้าง Next.js App แรก"
          timeEstimate="20 นาที"
          steps={[
            {
              step: 1,
              title: 'สร้างโปรเจกต์',
              code: 'npx create-next-app@latest my-secure-app\n# เลือก TypeScript: Yes, Tailwind: Yes, App Router: Yes',
            },
            {
              step: 2,
              title: 'เปิด development server',
              code: 'cd my-secure-app\nnpm run dev\n# เปิด http://localhost:3000',
            },
            {
              step: 3,
              title: 'สร้างหน้า Home ด้วย Copilot',
              description: 'แก้ไข app/page.tsx ใช้ Copilot prompt ด้านล่าง',
            },
            {
              step: 4,
              title: 'สร้างหน้า About',
              code: '# สร้างไฟล์ app/about/page.tsx\n# เปิด localhost:3000/about',
            },
          ]}
          copilotPrompt="Create a responsive hero section for a web security workshop. Include a title, subtitle about secure development with AI, and call-to-action buttons. Use Tailwind CSS with a dark navy and cyan color scheme."
        />
      </section>

      {/* Navigation */}
      <div className="border-t border-slate-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Link href="/section/03-security" className="text-slate-500 hover:text-sky-500 flex items-center gap-2 text-sm font-medium transition-colors">
            <i className="fas fa-arrow-left text-xs"></i> 03 — Security
          </Link>
          <Link href="/section/05-ai" className="text-sky-500 hover:text-sky-600 flex items-center gap-2 text-sm font-medium transition-colors">
            05 — AI Dev <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
