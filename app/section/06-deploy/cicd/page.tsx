import SectionHero from '@/components/SectionHero'
import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

const deploySteps = [
  {
    step: 1,
    icon: 'fas fa-code-branch',
    title: 'สร้าง GitHub Repository',
    desc: 'สร้าง public repo บน github.com/new — ชื่อ repo จะกลายเป็น basePath',
  },
  {
    step: 2,
    icon: 'fas fa-upload',
    title: 'Push Code ขึ้น GitHub',
    desc: 'git init, add, commit, push ขึ้น main branch',
  },
  {
    step: 3,
    icon: 'fas fa-gear',
    title: 'Configure next.config.js',
    desc: 'ตั้งค่า output: export, basePath, images: unoptimized',
  },
  {
    step: 4,
    icon: 'fas fa-file-code',
    title: 'สร้าง GitHub Actions Workflow',
    desc: 'สร้าง .github/workflows/deploy.yml — auto build & deploy',
  },
  {
    step: 5,
    icon: 'fas fa-toggle-on',
    title: 'เปิดใช้ GitHub Pages',
    desc: 'Settings → Pages → Source: GitHub Actions',
  },
  {
    step: 6,
    icon: 'fas fa-globe',
    title: 'Live!',
    desc: 'Push ครั้งถัดไป → auto deploy → เว็บ live ใน 1-2 นาที',
  },
]

const nextConfigCode = `/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — สร้าง HTML/CSS/JS ล้วนๆ
  output: 'export',

  // basePath = ชื่อ GitHub repository
  // เช่น https://username.github.io/my-app
  basePath: '/my-app',

  // GitHub Pages ไม่รองรับ Next.js Image optimization
  images: {
    unoptimized: true,
  },

  // ทุก path จะมี trailing slash
  // /about → /about/index.html
  trailingSlash: true,
};

module.exports = nextConfig;`

const workflowCode = `name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:  # สามารถ trigger manual ได้

# Permissions สำหรับ deploy to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# ป้องกัน concurrent deployments
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'  # Cache node_modules

      - name: Install dependencies
        run: npm ci  # ci = clean install (reproducible)

      - name: Build
        run: npm run build
        # สร้าง static files ใน /out directory

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out  # โฟลเดอร์ที่ next build สร้าง

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build  # รอให้ build เสร็จก่อน
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`

export default function CicdPage() {
  return (
    <div>
      {/* 6.2 CI/CD Pipeline */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-4">CI/CD Pipeline</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-500">จาก code → production ในไม่กี่นาที โดยอัตโนมัติ</p>
          </div>

          {/* Flow diagram */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {[
              { icon: 'fas fa-code', label: 'Code' },
              { icon: 'fas fa-arrow-right', label: '', isArrow: true },
              { icon: 'fab fa-github', label: 'git push' },
              { icon: 'fas fa-arrow-right', label: '', isArrow: true },
              { icon: 'fas fa-play-circle', label: 'GitHub Actions' },
              { icon: 'fas fa-arrow-right', label: '', isArrow: true },
              { icon: 'fas fa-hammer', label: 'npm build' },
              { icon: 'fas fa-arrow-right', label: '', isArrow: true },
              { icon: 'fas fa-cloud-arrow-up', label: 'Deploy' },
              { icon: 'fas fa-arrow-right', label: '', isArrow: true },
              { icon: 'fas fa-globe', label: 'Live!', isLast: true },
            ].map((item, i) =>
              item.isArrow ? (
                <i key={i} className="fas fa-arrow-right text-sky-400 text-sm hidden sm:block"></i>
              ) : (
                <div
                  key={i}
                  className={`flex flex-col items-center gap-1 px-4 py-3 rounded-xl ${
                    item.isLast
                      ? 'bg-sky-500 text-white'
                      : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <i className={`${item.icon} text-lg ${item.isLast ? 'text-white' : 'text-sky-500'}`}></i>
                  <span className="text-xs font-medium">{item.label}</span>
                </div>
              )
            )}
          </div>

          {/* Step by step */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deploySteps.map((step) => (
              <div key={step.step} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 flex gap-4">
                <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <i className={`${step.icon} text-white text-sm`}></i>
                </div>
                <div>
                  <span className="text-xs text-sky-500 font-bold">Step {step.step}</span>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{step.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Config + Workflow */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Next.js Static Export Config</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-600">ตั้งค่า next.config.js สำหรับ GitHub Pages</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <CodeBlock variant="neutral" language="next.config.js" code={nextConfigCode} />
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 text-xl">สิ่งที่ต้องรู้</h3>
              {[
                {
                  icon: 'fas fa-folder',
                  title: "output: 'export'",
                  desc: 'สร้าง static files ใน /out — HTML, CSS, JS ล้วนๆ ไม่ต้อง Node.js server',
                },
                {
                  icon: 'fas fa-link',
                  title: 'basePath',
                  desc: 'ชื่อ repository ของคุณ เช่น /web-security-ai สำหรับ github.io/web-security-ai',
                },
                {
                  icon: 'fas fa-image',
                  title: 'images.unoptimized',
                  desc: 'ต้องตั้ง true เพราะ GitHub Pages ไม่มี Next.js Image optimization server',
                },
                {
                  icon: 'fas fa-slash',
                  title: 'trailingSlash',
                  desc: '/about → /about/index.html ทำให้ GitHub Pages routing ทำงานถูกต้อง',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-4 flex gap-4">
                  <i className={`${item.icon} text-sky-600 mt-1 flex-shrink-0`}></i>
                  <div>
                    <code className="text-sky-600 font-mono text-sm block mb-1">{item.title}</code>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h3 className="font-bold text-slate-900 text-2xl mb-6 text-center">GitHub Actions Workflow</h3>
          <CodeBlock variant="neutral" language=".github/workflows/deploy.yml" code={workflowCode} />

          {/* Limitations */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h4 className="font-bold text-amber-700 text-lg mb-3">
              <i className="fas fa-triangle-exclamation mr-2"></i>
              ข้อจำกัดของ Static Export
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-amber-700 text-sm font-bold mb-2">ไม่รองรับ:</p>
                <ul className="space-y-1 text-amber-700 text-sm">
                  {[
                    'API Routes (ไม่มี Node.js server)',
                    'Server-Side Rendering (SSR)',
                    'Server Actions',
                    'Middleware (auth ต้องทำ client-side)',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <i className="fas fa-xmark text-xs"></i> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-emerald-700 text-sm font-bold mb-2">รองรับ:</p>
                <ul className="space-y-1 text-emerald-700 text-sm">
                  {[
                    'Static Site Generation (SSG)',
                    'Client-side data fetching',
                    'Dynamic routes (generateStaticParams)',
                    'ทุกหน้าที่ทำงานด้วย JS ล้วนๆ',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <i className="fas fa-check text-xs"></i> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Git commands */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Git Commands ที่ใช้บ่อย</h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <CodeBlock
            variant="neutral"
            language="Initial Setup"
            code={`# สร้าง repo ใหม่และ push code แรก
git init
git add .
git commit -m "feat: initial commit"

# เชื่อมกับ GitHub repository
git remote add origin https://github.com/USER/REPO.git
git branch -M main
git push -u origin main

# ตรวจสอบ remote
git remote -v`}
          />
          <CodeBlock
            variant="neutral"
            language="Daily Workflow"
            code={`# ดู status ก่อนเสมอ
git status

# เพิ่มและ commit การเปลี่ยนแปลง
git add .
git commit -m "feat: add contact form with validation"

# Push → trigger GitHub Actions → auto deploy
git push

# ดู log
git log --oneline

# ถ้าต้องการ undo ล่าสุด (ก่อน push)
git reset --soft HEAD~1`}
          />
        </div>

        {/* gitignore */}
        <div className="mt-8">
          <h3 className="font-bold text-slate-900 text-xl mb-4">
            <i className="fas fa-eye-slash text-sky-500 mr-2"></i>
            .gitignore — ไฟล์ที่ไม่ควร commit
          </h3>
          <CodeBlock
            variant="neutral"
            language=".gitignore"
            code={`# Dependencies
node_modules/

# Build output
.next/
out/

# Environment variables — NEVER commit!
.env
.env.local
.env.*.local

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Logs
*.log`}
          />
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/06-deploy/deploy-methods" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> Deploy Methods
          </Link>
          <Link href="/section/06-deploy/security" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            Security <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
