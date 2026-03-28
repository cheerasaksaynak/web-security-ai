import SectionHero from '@/components/SectionHero'
import InfoCard from '@/components/InfoCard'
import Link from 'next/link'

const timeline = [
  {
    phase: 'เริ่มต้น',
    title: 'เรียนรู้ HTML/CSS/JS',
    description: 'สร้างเว็บไซต์แรก เรียนรู้ผ่าน trial & error ไม่มีใครสอน ต้องหาเองจาก Google และ Stack Overflow ทุกอย่าง',
    detail: 'ช่วงนี้คือการสร้างทุกอย่างเองด้วยมือ ไม่มี Framework ไม่มี Library ใหญ่ มีแค่ HTML ธรรมดา, CSS แบบ inline, และ JavaScript พื้นฐาน บางครั้งเปิด FTP อัพโหลดไฟล์ตรงขึ้น server',
    icon: 'fas fa-seedling',
    color: 'bg-emerald-500',
  },
  {
    phase: 'เติบโต',
    title: 'Backend & Database',
    description: 'PHP, Node.js, MySQL, MongoDB — เริ่มสร้างระบบที่มีฐานข้อมูล login system, CRUD operations',
    detail: 'เริ่มทำงานกับข้อมูลจริง มี user registration, login, ดึงข้อมูลจาก database แสดงบนหน้าเว็บ นี่คือจุดที่ช่องโหว่เริ่มเยอะขึ้น เพราะรับ input จากผู้ใช้และนำไปใช้กับ database โดยตรง',
    icon: 'fas fa-server',
    color: 'bg-sky-500',
  },
  {
    phase: 'มืออาชีพ',
    title: 'Framework & Architecture',
    description: 'React, Next.js, REST API, CI/CD — เริ่มทำงานเป็นทีม มีกระบวนการ review code และ deployment ที่เป็นระบบ',
    detail: 'ทำงานกับทีม ต้องเข้าใจ architecture มากขึ้น มี code review, automated testing, CI/CD pipeline เริ่มเรียนรู้ security best practices อย่างจริงจัง',
    icon: 'fas fa-layer-group',
    color: 'bg-violet-500',
  },
  {
    phase: 'ปัจจุบัน',
    title: 'AI-Assisted Development',
    description: 'GitHub Copilot, ChatGPT, Secure by Design — ใช้ AI ช่วยเขียนโค้ด แต่ยังต้อง review security เอง',
    detail: 'AI เปลี่ยนวิธีการเขียนโค้ดอย่างมาก เขียนได้เร็วขึ้น 3-5 เท่า แต่ต้องระวัง: AI อาจ generate โค้ดที่มีช่องโหว่ได้ จึงต้อง review security ทุกครั้ง',
    icon: 'fas fa-robot',
    color: 'bg-sky-400',
  },
]

const incidents = [
  {
    icon: 'fas fa-bug',
    title: 'SQL Injection ที่เจอครั้งแรก',
    severity: 'Critical',
    severityColor: 'bg-red-100 text-red-700',
    description: 'เว็บไซต์ขนาดเล็กที่สร้างด้วย PHP + MySQL โดน hack ผ่านช่อง login form ที่ไม่ได้ sanitize input',
    rootCause: 'ใช้ string concatenation ตรงๆ ใน SQL query เช่น "SELECT * FROM users WHERE username=\'" + username + "\'"',
    impact: 'ผู้โจมตีสามารถ bypass login ได้โดยไม่ต้องมี password และดึงข้อมูลทุก user ออกมาได้',
    lesson: 'ต้องใช้ Prepared Statements หรือ Parameterized Queries เสมอ ห้าม string concatenation ใน SQL',
    code: `// WRONG - vulnerable to SQL Injection
$query = "SELECT * FROM users WHERE username='" . $_POST['username'] . "'";

// ผู้โจมตีส่ง: admin' OR '1'='1
// Query กลายเป็น: SELECT * FROM users WHERE username='admin' OR '1'='1'
// ผล: login ได้โดยไม่ต้องรู้ password!

// CORRECT - use prepared statements
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
$stmt->execute([$_POST['username']]);`,
  },
  {
    icon: 'fas fa-triangle-exclamation',
    title: 'XSS จาก Comment System',
    severity: 'High',
    severityColor: 'bg-orange-100 text-orange-700',
    description: 'ระบบ comment ที่ allow ผู้ใช้โพสต์ข้อความ โดยไม่ได้ sanitize HTML ทำให้โจมตีด้วย XSS ได้',
    rootCause: 'แสดงผล comment โดยตรงด้วย innerHTML หรือ echo ใน PHP โดยไม่ escape HTML entities',
    impact: 'ผู้โจมตีฝัง <script> ใน comment ที่ถูกเก็บใน database และแสดงให้ผู้ใช้คนอื่นทุกคนโดยอัตโนมัติ (Stored XSS)',
    lesson: 'Escape output เสมอ ใช้ DOMPurify สำหรับ HTML ที่ต้องยอมรับ React/Next.js ป้องกัน XSS ให้อัตโนมัติ',
    code: `// WRONG - dangerous!
element.innerHTML = userComment; // ถ้า comment มี <script> จะรัน!
echo $comment; // PHP - render HTML โดยตรง

// CORRECT - escape HTML
element.textContent = userComment; // ไม่ render HTML
echo htmlspecialchars($comment, ENT_QUOTES, 'UTF-8'); // PHP

// React/Next.js ปลอดภัยโดยอัตโนมัติ
return <p>{userComment}</p>; // React escape ให้อัตโนมัติ`,
  },
  {
    icon: 'fas fa-lock',
    title: 'Password เก็บเป็น Plain Text',
    severity: 'Critical',
    severityColor: 'bg-red-100 text-red-700',
    description: 'ฐานข้อมูลหลุดออกไป (data breach) และ password ของ user ทุกคนถูกเปิดเผยเพราะเก็บเป็น plain text',
    rootCause: 'ไม่ได้ hash password ก่อนเก็บใน database คิดว่า "database ปลอดภัยอยู่แล้ว"',
    impact: 'User ทุกคนกว่า 5,000 บัญชีถูกเปิดเผย password รวมถึง email และข้อมูลส่วนตัวอื่นๆ',
    lesson: 'ต้อง hash password ด้วย bcrypt หรือ Argon2id เสมอ ห้ามใช้ MD5, SHA-1, หรือ plain text เด็ดขาด',
    code: `// NEVER store plain text passwords!
// password: "mypassword123" → เก็บ: "mypassword123" ← WRONG

// NEVER use MD5 or SHA-1
// md5("mypassword123") → "9c87baa223f464954940f859bcf2e233" ← WRONG (crackable!)

// CORRECT - use bcrypt with salt rounds >= 12
const bcrypt = require('bcrypt');

// Hashing
const hash = await bcrypt.hash(password, 12);
// "mypassword123" → "$2b$12$..." (60 chars, unique salt)

// Verification
const isValid = await bcrypt.compare(inputPassword, storedHash);`,
  },
  {
    icon: 'fas fa-key',
    title: 'API Key หลุดใน GitHub',
    severity: 'High',
    severityColor: 'bg-orange-100 text-orange-700',
    description: 'ลืม .gitignore ทำให้ไฟล์ .env ที่มี API key และ database credentials ถูก commit และ push ขึ้น GitHub แบบ public',
    rootCause: 'ไม่ได้ตั้งค่า .gitignore ให้ถูกต้อง และ hardcode credentials ใน code base',
    impact: 'API key ถูกสแกนโดย bot ภายในไม่กี่นาทีหลัง push API ถูกใช้จนหมด quota และมีการเรียกเก็บเงินเพิ่ม',
    lesson: 'ตั้งค่า .gitignore ก่อน commit แรก ใช้ environment variables เสมอ ตรวจสอบด้วย git-secrets หรือ gitleaks',
    code: `# .gitignore - ต้องมีก่อน commit แรกเสมอ!
.env
.env.local
.env.*.local
*.key
*.pem

# .env - เก็บ locally เท่านั้น ห้าม commit!
DATABASE_URL=postgresql://user:pass@localhost/mydb
API_SECRET_KEY=sk-prod-xxxxxxxxxxxx
JWT_SECRET=your-super-secret-jwt-key

# ใน code ใช้ environment variable
const apiKey = process.env.API_SECRET_KEY; // ถูก
const apiKey = "sk-prod-xxxxxxxxxxxx";     // ผิดมาก!`,
  },
]

export default function ExperiencePage() {
  return (
    <div>
      <SectionHero
        number="01"
        title="ประสบการณ์ Web Developer"
        subtitle="เส้นทางอาชีพ บทเรียน และความท้าทายด้าน Security จากประสบการณ์จริง"
        icon="fas fa-user-tie"
        imageUrl="https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=1400&auto=format&fit=crop&q=80"
      />

      {/* Timeline */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 mb-4">เส้นทาง Web Developer</h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-500">จากผู้เริ่มต้นสู่การใช้ AI ช่วยพัฒนา</p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div key={i} className={`relative grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                {/* Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-sky-500 border-4 border-white shadow z-10 top-8" />

                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 card-hover">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center`}>
                        <i className={`${item.icon} text-white text-sm`}></i>
                      </div>
                      <div>
                        <span className="text-xs text-sky-500 font-bold tracking-widest uppercase">{item.phase}</span>
                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm mb-3">{item.description}</p>
                    <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-sky-200 pl-3">{item.detail}</p>
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'md:order-1' : ''} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Incidents */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-4">บทเรียนด้าน Security จากประสบการณ์จริง</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-500">ข้อผิดพลาดที่เคยเกิดขึ้นจริง พร้อม root cause และวิธีแก้ไข</p>
          </div>

          <div className="space-y-8">
            {incidents.map((incident, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center border border-red-100">
                        <i className={`${incident.icon} text-red-500 text-xl`}></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg">{incident.title}</h3>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${incident.severityColor}`}>
                          {incident.severity}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                      <div className="text-xs font-bold text-red-600 mb-2 flex items-center gap-1">
                        <i className="fas fa-circle-exclamation"></i> สิ่งที่เกิดขึ้น
                      </div>
                      <p className="text-slate-700 text-sm leading-relaxed">{incident.description}</p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                      <div className="text-xs font-bold text-orange-600 mb-2 flex items-center gap-1">
                        <i className="fas fa-magnifying-glass"></i> Root Cause
                      </div>
                      <p className="text-slate-700 text-sm leading-relaxed">{incident.rootCause}</p>
                    </div>
                    <div className="p-4 bg-sky-50 rounded-xl border border-sky-100">
                      <div className="text-xs font-bold text-sky-600 mb-2 flex items-center gap-1">
                        <i className="fas fa-lightbulb"></i> บทเรียน
                      </div>
                      <p className="text-slate-700 text-sm leading-relaxed">{incident.lesson}</p>
                    </div>
                  </div>

                  <div className="bg-slate-900 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <i className="fas fa-code text-sky-400 text-xs"></i>
                      <span className="text-sky-400 text-xs font-bold tracking-widest uppercase">Code Example</span>
                    </div>
                    <pre className="text-slate-200 text-xs leading-relaxed font-mono overflow-x-auto whitespace-pre-wrap">
                      {incident.code}
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="relative">
          <i className="fas fa-quote-left text-6xl text-sky-100 mb-6 block"></i>
          <blockquote className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight italic">
            "Security ไม่ใช่สิ่งที่เพิ่มทีหลัง<br />
            <span className="text-sky-500">มันต้อง built-in ตั้งแต่ต้น"</span>
          </blockquote>
          <p className="text-slate-500 text-lg">— บทเรียนสำคัญที่สุดจากประสบการณ์ทำงาน</p>
        </div>
      </section>

      {/* Navigation */}
      <div className="border-t border-slate-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-slate-500 hover:text-sky-500 flex items-center gap-2 text-sm font-medium transition-colors">
            <i className="fas fa-arrow-left text-xs"></i> หน้าหลัก
          </Link>
          <Link href="/section/02-fundamentals" className="text-sky-500 hover:text-sky-600 flex items-center gap-2 text-sm font-medium transition-colors">
            02 — Fundamentals <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
