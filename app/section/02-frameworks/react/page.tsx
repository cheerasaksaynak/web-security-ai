import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

export default function ReactPage() {
  return (
    <div>
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mt-2 mb-4">React.js คืออะไร?</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-600">JavaScript library สำหรับสร้าง User Interface — พัฒนาโดย Meta (Facebook)</p>
          </div>

          <div className="flex flex-col gap-10 mb-10">
            <div>
              <div className="space-y-4">
                {[
                  {
                    icon: 'fas fa-puzzle-piece',
                    title: 'Component-Based Architecture',
                    desc: 'แบ่ง UI เป็นชิ้นเล็กๆ เช่น Button, Card, Navbar แต่ละชิ้นเป็น component ที่นำกลับมาใช้ซ้ำได้ทั่วโปรเจกต์',
                  },
                  {
                    icon: 'fas fa-database',
                    title: 'State & Props',
                    desc: 'State คือข้อมูลภายใน component ที่เปลี่ยนได้, Props คือข้อมูลที่รับจาก parent component — ไหลข้อมูลทางเดียว',
                  },
                  {
                    icon: 'fas fa-bolt',
                    title: 'Virtual DOM',
                    desc: 'React ใช้ Virtual DOM เปรียบเทียบการเปลี่ยนแปลงก่อน update DOM จริง ทำให้ rendering เร็วขึ้นมาก',
                  },
                  {
                    icon: 'fas fa-anchor',
                    title: 'Hooks API',
                    desc: 'useState, useEffect, useContext, useMemo — ฟังก์ชันพิเศษสำหรับจัดการ state, lifecycle และ side effects',
                  },
                  {
                    icon: 'fas fa-box-open',
                    title: 'Rich Ecosystem',
                    desc: 'มี library รองรับมากมาย เช่น React Router, React Query, Zustand, Redux Toolkit สำหรับทุก use case',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl">
                    <i className={`${item.icon} text-sky-600 text-lg mt-0.5 w-5 shrink-0`}></i>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm mb-1">{item.title}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-3">ตัวอย่าง React Component</h3>
                <CodeBlock
                  variant="neutral"
                  language="tsx"
                  code={`// components/UserCard.tsx
import { useState } from 'react'

interface UserCardProps {
  name: string
  role: string
  email: string
}

export default function UserCard({ name, role, email }: UserCardProps) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200">
      <h2 className="font-bold text-lg">{name}</h2>
      <p className="text-slate-500 text-sm">{role}</p>
      <a href={\`mailto:\${email}\`} className="text-sky-500 text-sm">
        {email}
      </a>
      <button
        onClick={() => setLiked(!liked)}
        className="mt-3 px-4 py-1.5 rounded-lg bg-slate-100 text-sm"
      >
        {liked ? 'Liked ❤️' : 'Like 🤍'}
      </button>
    </div>
  )
}`}
                />
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-3">useEffect — ดึงข้อมูลจาก API</h3>
                <CodeBlock
                  variant="neutral"
                  language="tsx"
                  code={`'use client'
import { useState, useEffect } from 'react'

export default function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/users')
      .then(r => r.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, []) // [] = รันครั้งเดียวตอน mount

  if (loading) return <p>กำลังโหลด...</p>
  return (
    <ul className="space-y-2">
      {users.map(u => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  )
}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/02-frameworks/ides" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> IDEs
          </Link>
          <Link href="/section/02-frameworks/nextjs" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            Next.js <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
