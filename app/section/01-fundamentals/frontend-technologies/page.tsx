import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

export default function FrontendTechnologiesPage() {
  return (
    <div>
      {/* Frontend Technologies */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Frontend Technologies</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* HTML */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-orange-200 dark:border-orange-800 border-t-4 border-t-orange-500">
              <h3 className="font-black text-orange-500 text-2xl mb-4">HTML</h3>
              <p className="text-slate-600 text-sm mb-4">โครงสร้างของหน้าเว็บ ทุก element บนหน้าคือ HTML tag</p>
              <ul className="space-y-2 text-sm text-slate-600 mb-4">
                <li className="flex items-center gap-2"><i className="fas fa-check text-orange-400 text-xs"></i> Semantic markup (header, nav, main, article)</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-orange-400 text-xs"></i> Accessibility (alt, aria-label)</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-orange-400 text-xs"></i> SEO-friendly structure</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-orange-400 text-xs"></i> Form validation attributes</li>
              </ul>
              <CodeBlock
                variant="neutral"
                language="HTML"
                code={`<form method="POST" action="/login">
  <input type="email" name="email"
    required maxlength="100" />
  <input type="password" name="pass"
    required minlength="8" />
  <button type="submit">Login</button>
</form>`}
              />
            </div>

            {/* CSS */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-blue-200 dark:border-blue-800 border-t-4 border-t-blue-500">
              <h3 className="font-black text-blue-500 text-2xl mb-4">CSS</h3>
              <p className="text-slate-600 text-sm mb-4">ตกแต่งหน้าเว็บ ควบคุม layout, สี, typography และ animation</p>
              <ul className="space-y-2 text-sm text-slate-600 mb-4">
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-400 text-xs"></i> Flexbox & Grid Layout</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-400 text-xs"></i> Responsive Design (media queries)</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-400 text-xs"></i> CSS Variables (Custom Properties)</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-400 text-xs"></i> Tailwind CSS — utility-first</li>
              </ul>
              <CodeBlock
                variant="neutral"
                language="CSS"
                code={`:root {
  --primary: #0ea5e9;
  --danger: #ef4444;
}

.container {
  display: flex;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}`}
              />
            </div>

            {/* JavaScript */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-yellow-200 dark:border-yellow-800 border-t-4 border-t-yellow-500">
              <h3 className="font-black text-yellow-500 text-2xl mb-4">JavaScript</h3>
              <p className="text-slate-600 text-sm mb-4">เพิ่ม interactivity, เรียก API, จัดการ DOM และ state</p>
              <ul className="space-y-2 text-sm text-slate-600 mb-4">
                <li className="flex items-center gap-2"><i className="fas fa-check text-yellow-400 text-xs"></i> DOM Manipulation</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-yellow-400 text-xs"></i> Fetch API / Async Await</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-yellow-400 text-xs"></i> ES6+ Features (arrow fn, destructuring)</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-yellow-400 text-xs"></i> Modules (import/export)</li>
              </ul>
              <CodeBlock
                variant="neutral"
                language="JS"
                code={`async function fetchUsers() {
  const res = await fetch('/api/users');
  if (!res.ok) throw new Error('Failed');
  const data = await res.json();
  return data;
}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/01-fundamentals/how-web-works" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> How the Web Works
          </Link>
          <Link href="/section/01-fundamentals/protocols" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            Protocols <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
