import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

export default function ApiPage() {
  return (
    <div>
      {/* API คืออะไร */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 mb-4">API คืออะไร?</h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-500">Application Programming Interface — ช่องทางให้ระบบต่างๆ คุยกัน</p>
        </div>

        {/* API Concept */}
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 mb-10">
          <p className="text-slate-700 text-center mb-8 text-lg">
            API คือ <strong>"ประตู"</strong> ที่ frontend ใช้เพื่อขอข้อมูลหรือสั่งงาน backend
            โดยไม่ต้องรู้ว่า backend ทำงานอย่างไรภายใน
          </p>

          {/* API Flow Diagram */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            <div className="bg-sky-100 dark:bg-sky-900/30 border-2 border-sky-300 dark:border-sky-700 rounded-xl px-6 py-4 text-center">
              <i className="fas fa-display text-sky-500 text-2xl mb-2 block"></i>
              <p className="font-bold text-sky-800 dark:text-sky-200 text-sm">Client</p>
              <p className="text-sky-600 dark:text-sky-300 text-xs">Browser / App</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-full px-3 py-1 text-xs text-emerald-700 dark:text-emerald-300 font-mono">
                <i className="fas fa-arrow-right text-emerald-400 text-xs"></i> GET /api/products
              </div>
              <div className="h-6 md:h-px md:w-6 w-px bg-slate-300" />
              <div className="flex items-center gap-1 bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-full px-3 py-1 text-xs text-sky-700 dark:text-sky-300 font-mono">
                <i className="fas fa-arrow-left text-sky-400 text-xs"></i> 200 OK + JSON
              </div>
            </div>

            <div className="bg-violet-100 dark:bg-violet-900/30 border-2 border-violet-300 dark:border-violet-700 rounded-xl px-6 py-4 text-center">
              <i className="fas fa-plug text-violet-500 text-2xl mb-2 block"></i>
              <p className="font-bold text-violet-800 dark:text-violet-200 text-sm">REST API</p>
              <p className="text-violet-600 dark:text-violet-300 text-xs">Endpoint /api/*</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-full px-3 py-1 text-xs text-amber-700 dark:text-amber-300 font-mono">
                <i className="fas fa-arrow-right text-amber-400 text-xs"></i> Query
              </div>
              <div className="h-6 md:h-px md:w-6 w-px bg-slate-300" />
              <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-full px-3 py-1 text-xs text-amber-700 dark:text-amber-300 font-mono">
                <i className="fas fa-arrow-left text-amber-400 text-xs"></i> Rows
              </div>
            </div>

            <div className="bg-emerald-100 dark:bg-emerald-900/30 border-2 border-emerald-300 dark:border-emerald-700 rounded-xl px-6 py-4 text-center">
              <i className="fas fa-database text-emerald-600 text-2xl mb-2 block"></i>
              <p className="font-bold text-emerald-800 dark:text-emerald-200 text-sm">Database</p>
              <p className="text-emerald-600 dark:text-emerald-300 text-xs">MySQL / PostgreSQL</p>
            </div>
          </div>
        </div>

        {/* Endpoint concept */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="font-bold text-slate-900 text-xl mb-4">Endpoint คืออะไร?</h3>
            <p className="text-slate-600 text-sm mb-4">
              Endpoint คือ URL ที่ API เปิดรับ request แต่ละ endpoint ทำหน้าที่เฉพาะ
              เช่น <code className="bg-slate-100 px-1 rounded font-mono text-xs">/api/users</code> สำหรับจัดการ user
            </p>
            <div className="space-y-2">
              {[
                { method: 'GET', endpoint: '/api/products', desc: 'ดึงสินค้าทั้งหมด', color: 'bg-emerald-500' },
                { method: 'GET', endpoint: '/api/products/42', desc: 'ดึงสินค้า id=42', color: 'bg-emerald-500' },
                { method: 'POST', endpoint: '/api/products', desc: 'เพิ่มสินค้าใหม่', color: 'bg-sky-500' },
                { method: 'PUT', endpoint: '/api/products/42', desc: 'แก้ไขสินค้า id=42', color: 'bg-violet-500' },
                { method: 'DELETE', endpoint: '/api/products/42', desc: 'ลบสินค้า id=42', color: 'bg-red-500' },
              ].map((e) => (
                <div key={e.method + e.endpoint} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm">
                  <span className={`${e.color} text-white font-bold font-mono text-xs px-2 py-1 rounded min-w-14 text-center`}>{e.method}</span>
                  <code className="font-mono text-slate-700 text-xs flex-1">{e.endpoint}</code>
                  <span className="text-slate-400 text-xs">{e.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 text-xl mb-4">Code Example — Fetch API</h3>
            <CodeBlock
              variant="neutral"
              language="JS"
              code={`// ดึงข้อมูลสินค้าจาก API
async function getProducts() {
  const res = await fetch('/api/products');

  if (!res.ok) {
    throw new Error(\`HTTP error: \${res.status}\`);
  }

  const data = await res.json();
  console.log(data); // [{id:1, name:'...'}, ...]
  return data;
}

// สร้างสินค้าใหม่
async function createProduct(product) {
  const res = await fetch('/api/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });

  const created = await res.json();
  return created; // {id: 42, name: '...'}
}`}
            />
          </div>
        </div>

        {/* JSON format */}
        <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200">
          <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
            <i className="fas fa-code text-sky-600"></i> JSON — รูปแบบข้อมูลที่ API ใช้
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-600 text-xs mb-2 font-mono uppercase tracking-wide">Response จาก GET /api/users/1</p>
              <CodeBlock
                variant="neutral"
                language="JSON"
                code={`{
  "id": 1,
  "name": "สมชาย",
  "email": "somchai@example.com",
  "role": "admin",
  "createdAt": "2025-01-15T10:30:00Z"
}`}
              />
            </div>
            <div>
              <p className="text-slate-600 text-xs mb-2 font-mono uppercase tracking-wide">Response จาก GET /api/products</p>
              <CodeBlock
                variant="neutral"
                language="JSON"
                code={`{
  "data": [
    { "id": 1, "name": "Laptop", "price": 45000 },
    { "id": 2, "name": "Mouse",  "price": 800 }
  ],
  "total": 2,
  "page": 1
}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/01-fundamentals/http-methods" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> HTTP Methods
          </Link>
          <Link href="/section/01-fundamentals/frontend-vs-backend" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            Frontend vs Backend <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
