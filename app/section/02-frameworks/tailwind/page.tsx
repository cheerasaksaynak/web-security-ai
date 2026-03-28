import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

export default function TailwindPage() {
  return (
    <div>
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mt-2 mb-4">Tailwind CSS คืออะไร?</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-500">Utility-First CSS Framework — เขียนสไตล์ผ่าน class names โดยตรงใน HTML/JSX</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                <i className="fas fa-times-circle text-red-400"></i>
                CSS แบบเดิม (Traditional)
              </h3>
              <CodeBlock
                variant="vulnerable"
                language="css"
                code={`/* styles.css — ต้องเขียนเยอะ ชื่อ class อาจซ้ำ */
.card {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.card-btn {
  background: #0ea5e9;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}`}
              />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                <i className="fas fa-check-circle text-emerald-500"></i>
                Tailwind CSS (Utility-First)
              </h3>
              <CodeBlock
                variant="secure"
                language="tsx"
                code={`{/* ไม่ต้องเขียน CSS แยก ใส่ class ตรงๆ */}
<div className="bg-white rounded-2xl p-6
                border border-slate-200 shadow-sm">
  <h2 className="text-xl font-bold
                 text-slate-900 mb-2">
    Card Title
  </h2>
  <p className="text-sm text-slate-500 mb-4">
    Card description text goes here.
  </p>
  <button className="px-4 py-2
    bg-sky-500 text-white rounded-lg text-sm
    hover:bg-sky-600 transition-colors
    font-medium">
    คลิกที่นี่
  </button>
</div>`}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: 'fas fa-bolt', color: 'text-teal-500', title: 'เขียนเร็วขึ้น', desc: 'ไม่ต้องสลับไฟล์ CSS เขียน style ได้เลยใน JSX ไม่ต้องคิดชื่อ class' },
              { icon: 'fas fa-mobile-alt', color: 'text-teal-500', title: 'Responsive ง่าย', desc: 'sm: md: lg: xl: prefix ทำ responsive design ได้ทันทีโดยไม่ต้อง media query' },
              { icon: 'fas fa-moon', color: 'text-teal-500', title: 'Dark Mode', desc: 'dark: prefix สำหรับ dark mode ไม่ต้องเพิ่ม CSS เพิ่ม ทำงานได้ทันที' },
              { icon: 'fas fa-feather', color: 'text-teal-500', title: 'Bundle เล็ก', desc: 'Purge CSS อัตโนมัติ ส่ง CSS เฉพาะ class ที่ใช้จริงเท่านั้น ไม่มีของเกิน' },
            ].map((f) => (
              <div key={f.title} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 text-center">
                <i className={`${f.icon} ${f.color} text-2xl mb-3 block`}></i>
                <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/02-frameworks/nextjs" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> Next.js
          </Link>
          <Link href="/section/02-frameworks/material-ui" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            Material UI <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
