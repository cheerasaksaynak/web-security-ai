import SectionHero from '@/components/SectionHero'
import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

export default function CredentialManagementPage() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Credential Management</h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-500">ห้ามเก็บ secrets ใน code เด็ดขาด — API keys, passwords, DB credentials ต้องอยู่นอก repository</p>
        </div>

        {/* Why it matters */}
        <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-2xl p-6 mb-10">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <i className="fas fa-triangle-exclamation text-white text-sm"></i>
            </div>
            <div>
              <h3 className="font-bold text-red-800 mb-1">ทำไมถึงอันตราย?</h3>
              <p className="text-red-700 text-sm leading-relaxed">
                เมื่อ push code ขึ้น GitHub แม้ repo จะ private ก็ตาม — หาก credentials รั่วออกไป
                ผู้โจมตีสามารถเข้าถึงฐานข้อมูล, API ของบริการภายนอก, cloud resources ได้ทันที
                และแม้จะลบ commit ออกไปแล้ว ประวัติยังคงอยู่ใน git history
              </p>
            </div>
          </div>
        </div>

        {/* Key practices */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { icon: 'fas fa-file-code', color: 'bg-sky-500', title: '.env Files', desc: 'เก็บ secrets ใน .env.local และไม่ commit ขึ้น Git' },
            { icon: 'fas fa-eye-slash', color: 'bg-slate-700', title: '.gitignore', desc: 'เพิ่ม .env* ใน .gitignore ทุก project เสมอ' },
            { icon: 'fas fa-lock', color: 'bg-violet-500', title: 'GitHub Secrets', desc: 'เก็บ secrets สำหรับ CI/CD ใน GitHub Actions Secrets' },
            { icon: 'fas fa-rotate', color: 'bg-emerald-500', title: 'Secrets Rotation', desc: 'เปลี่ยน credentials เป็นระยะ โดยเฉพาะหลัง incident' },
          ].map((item) => (
            <div key={item.title} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm">
              <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center mb-3`}>
                <i className={`${item.icon} text-white text-sm`}></i>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Code examples */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <CodeBlock
            variant="vulnerable"
            label="VULNERABLE — Hardcoded Credentials"
            code={`// app/lib/db.ts — อย่าทำแบบนี้!
const db = new Client({
  host: 'db.example.com',
  user: 'admin',
  password: 'P@ssw0rd1234',   // ❌ hardcoded
  database: 'production_db',
});

// app/lib/api.ts — อย่าทำแบบนี้!
const STRIPE_SECRET = 'sk_live_AbCdEf123456'; // ❌
const OPENAI_KEY   = 'sk-proj-xxxxxxxxxxxx';  // ❌

// เมื่อ push ขึ้น GitHub ทุกคนในโลกเห็นได้!`}
          />

          <CodeBlock
            variant="secure"
            label="SECURE — Environment Variables"
            code={`// .env.local (อยู่ใน .gitignore — ไม่ถูก commit)
DATABASE_URL=postgresql://admin:P@ssw0rd1234@db.example.com/prod
STRIPE_SECRET_KEY=sk_live_AbCdEf123456
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxx
NEXTAUTH_SECRET=random-32-char-secret-here

// app/lib/db.ts — อ่านจาก environment
import { Pool } from 'pg';
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // ✅
});

// app/lib/api.ts
const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY!, // ✅
  { apiVersion: '2024-06-20' }
);`}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <CodeBlock
            variant="neutral"
            language=".gitignore"
            code={`# .gitignore — บรรทัดบังคับทุก project
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
.env*.local

# ห้าม commit ไฟล์เหล่านี้!
*.pem
*.key
secrets.json
credentials.json`}
          />

          <CodeBlock
            variant="neutral"
            language="GitHub Actions"
            code={`# .github/workflows/deploy.yml
# Secrets ตั้งใน: Settings → Secrets → Actions
jobs:
  deploy:
    steps:
      - name: Deploy
        env:
          DATABASE_URL: \${{ secrets.DATABASE_URL }}
          STRIPE_SECRET: \${{ secrets.STRIPE_SECRET_KEY }}
        run: npm run deploy

# Vercel / Netlify: ตั้ง Environment Variables
# ใน dashboard → ไม่ต้องเขียนใน code เลย`}
          />
        </div>

        {/* Rotation tip */}
        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <i className="fas fa-rotate text-amber-500 mt-0.5"></i>
            <div>
              <p className="font-semibold text-amber-900 text-sm mb-1">Secrets Rotation — แนวปฏิบัติ</p>
              <ul className="text-amber-800 text-xs space-y-1 list-disc list-inside">
                <li>เปลี่ยน API keys และ passwords ทุก 90 วัน (หรือตาม policy)</li>
                <li>หาก secrets รั่วออกไป ให้ revoke และเปลี่ยน <strong>ทันที</strong></li>
                <li>ใช้ tools เช่น AWS Secrets Manager, HashiCorp Vault สำหรับ production ขนาดใหญ่</li>
                <li>ตรวจสอบ repo ด้วย <code className="font-mono bg-amber-100 px-1 rounded">git-secrets</code> หรือ GitHub Secret Scanning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/04-security" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> 04 Security
          </Link>
          <Link href="/section/04-security/security-headers" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            Security Headers <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
