import SectionHero from '@/components/SectionHero'
import CodeBlock from '@/components/CodeBlock'
import WorkshopBox from '@/components/WorkshopBox'
import Link from 'next/link'

const securityItems = [
  {
    icon: 'fas fa-file-shield',
    title: 'ไม่ push .env ขึ้น git',
    desc: 'เพิ่ม .env, .env.local ใน .gitignore เสมอ ก่อน git init ทุกครั้ง',
    severity: 'critical',
  },
  {
    icon: 'fas fa-key',
    title: 'ตั้ง Environment Variables บน hosting platform',
    desc: 'ใช้ GitHub Secrets, Vercel Environment Variables แทนการเขียน key ใน code',
    severity: 'critical',
  },
  {
    icon: 'fas fa-lock',
    title: 'Enable HTTPS เสมอ',
    desc: 'GitHub Pages, Netlify, Vercel มี HTTPS ให้อัตโนมัติ — ห้ามปิด',
    severity: 'high',
  },
  {
    icon: 'fas fa-shield-halved',
    title: 'ตั้ง Security Headers (CSP, HSTS, etc.)',
    desc: 'ตั้งค่า Content-Security-Policy, Strict-Transport-Security ใน next.config.js',
    severity: 'high',
  },
  {
    icon: 'fas fa-magnifying-glass',
    title: 'npm audit ก่อน deploy',
    desc: 'รัน npm audit และ npm audit fix เพื่อแก้ช่องโหว่ใน dependencies',
    severity: 'high',
  },
  {
    icon: 'fas fa-bug-slash',
    title: 'ปิด debug mode ใน production',
    desc: 'ตรวจสอบว่า NODE_ENV=production และไม่มี console.log ที่เปิดเผยข้อมูลสำคัญ',
    severity: 'medium',
  },
  {
    icon: 'fas fa-arrows-left-right',
    title: 'ตั้ง CORS ให้ถูกต้อง (ไม่ใช้ *)',
    desc: 'ระบุ origin ที่อนุญาตอย่างชัดเจน เช่น https://yourdomain.com แทนการใช้ *',
    severity: 'medium',
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Monitor error logs',
    desc: 'ตั้ง error monitoring เช่น Sentry เพื่อรับรู้ปัญหาก่อนผู้ใช้รายงาน',
    severity: 'medium',
  },
]

const severityConfig: Record<string, { badge: string; border: string; iconBg: string }> = {
  critical: {
    badge: 'bg-red-100 text-red-700',
    border: 'border-red-200',
    iconBg: 'bg-red-50 text-red-500',
  },
  high: {
    badge: 'bg-orange-100 text-orange-700',
    border: 'border-orange-200',
    iconBg: 'bg-orange-50 text-orange-500',
  },
  medium: {
    badge: 'bg-amber-100 text-amber-700',
    border: 'border-amber-200',
    iconBg: 'bg-amber-50 text-amber-500',
  },
}

export default function SecurityPage() {
  return (
    <div>
      {/* 6.3 ความปลอดภัยในการ Deploy */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-4">สิ่งที่ต้องคำนึงด้านความปลอดภัยในการ Deploy</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-500 max-w-xl mx-auto">
              ก่อน deploy ทุกครั้ง ต้องผ่านรายการเหล่านี้ — มีข้อไหนพลาดอาจเปิดช่องให้ถูกโจมตีได้
            </p>
          </div>

          {/* Severity legend */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {[
              { label: 'Critical — ต้องทำทันที', badge: 'bg-red-100 text-red-700' },
              { label: 'High — สำคัญมาก', badge: 'bg-orange-100 text-orange-700' },
              { label: 'Medium — ควรทำ', badge: 'bg-amber-100 text-amber-700' },
            ].map((s) => (
              <span key={s.label} className={`text-xs font-semibold px-3 py-1 rounded-full ${s.badge}`}>
                {s.label}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {securityItems.map((item) => {
              const cfg = severityConfig[item.severity]
              return (
                <div
                  key={item.title}
                  className={`bg-white border rounded-2xl p-5 flex gap-4 ${cfg.border}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${cfg.iconBg}`}>
                    <i className={`${item.icon} text-sm`}></i>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${cfg.badge}`}>
                        {item.severity.charAt(0).toUpperCase() + item.severity.slice(1)}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Pre-deploy checklist code */}
          <CodeBlock
            variant="neutral"
            language="Pre-deploy Security Checklist"
            code={`# 1. ตรวจสอบ dependencies
npm audit
npm audit fix  # แก้อัตโนมัติถ้าทำได้

# 2. ตรวจสอบว่าไม่มี secret ใน git history
git log --oneline -10
git diff HEAD~1 HEAD -- .env  # ควรไม่มีผลลัพธ์

# 3. ตรวจสอบ .gitignore ครอบคลุม .env
cat .gitignore | grep env

# 4. Build ทดสอบ locally
npm run build
# ตรวจสอบว่า /out มีไฟล์ครบ

# 5. ทดสอบ static build
npx serve out
# เปิด localhost:3000 ทดสอบทุก page

# 6. ตรวจสอบ Security Headers หลัง deploy
curl -I https://your-site.github.io/repo/
# ควรเห็น: strict-transport-security, x-frame-options`}
          />
        </div>
      </section>

      {/* Workshop 6 */}
      <section className="max-w-6xl mx-auto px-6 py-4">
        <WorkshopBox
          number={6}
          title="Deploy to GitHub Pages"
          timeEstimate="20 นาที"
          steps={[
            {
              step: 1,
              title: 'สร้าง GitHub Repository',
              description: 'ไปที่ github.com/new — ตั้งชื่อ repo, เลือก Public',
            },
            {
              step: 2,
              title: 'Push code',
              code: 'git remote add origin https://github.com/USER/REPO.git\ngit push -u origin main',
            },
            {
              step: 3,
              title: 'ตั้งค่า GitHub Pages',
              description: 'Settings → Pages → Source: GitHub Actions → Save',
            },
            {
              step: 4,
              title: 'สร้าง Workflow ด้วย Copilot',
              description: 'สร้าง .github/workflows/deploy.yml ด้วย prompt ด้านล่าง',
            },
            {
              step: 5,
              title: 'Push และรอ Deploy',
              code: 'git add .\ngit commit -m "ci: add GitHub Pages deploy workflow"\ngit push',
            },
            {
              step: 6,
              title: 'ตรวจสอบและทดสอบ',
              description: 'Actions tab → ดู workflow run → เปิด URL ที่ deploy',
            },
          ]}
          copilotPrompt="Create a GitHub Actions workflow file that: 1) Triggers on push to main branch and workflow_dispatch 2) Sets permissions for GitHub Pages deployment 3) Installs Node.js 20 with npm cache 4) Runs npm ci and npm run build 5) Uploads the out directory as GitHub Pages artifact 6) Deploys to GitHub Pages using actions/deploy-pages"
        />
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/06-deploy/cicd" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> CI/CD Pipeline
          </Link>
          <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            หน้าหลัก <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
