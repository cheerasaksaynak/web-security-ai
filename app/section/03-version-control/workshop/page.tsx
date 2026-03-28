import CodeBlock from '@/components/CodeBlock'
import WorkshopBox from '@/components/WorkshopBox'
import Link from 'next/link'

const workshopCode = `git init
git add .
git commit -m "feat: initial project setup"
git branch -M main
git remote add origin https://github.com/username/my-workshop.git
git push -u origin main`

export default function VersionControlWorkshopPage() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <WorkshopBox
          number={3}
          title="Workshop: สร้างโปรเจคบน GitHub"
          timeEstimate="20 นาที"
          steps={[
            {
              step: 1,
              title: 'สร้าง GitHub account และ repository',
              description: 'ไปที่ github.com → สมัครบัญชี (ถ้ายังไม่มี) → กด "New repository" → ตั้งชื่อ my-workshop → เลือก Public → กด Create',
            },
            {
              step: 2,
              title: 'ตั้งค่า Git บนเครื่อง',
              code: 'git config --global user.name "Your Name"\ngit config --global user.email "email@example.com"',
            },
            {
              step: 3,
              title: 'Init repository และ commit ครั้งแรก',
              code: 'git init\ngit add .\ngit commit -m "feat: initial project setup"',
            },
            {
              step: 4,
              title: 'เชื่อมต่อกับ GitHub และ push',
              code: 'git branch -M main\ngit remote add origin https://github.com/username/my-workshop.git\ngit push -u origin main',
            },
            {
              step: 5,
              title: 'ทดลอง workflow: แก้ไข → stage → commit → push',
              description: 'แก้ไขไฟล์ใดก็ได้ → git add . → git commit -m "update: ..." → git push → ดูใน GitHub ว่า code อัพเดทแล้ว',
            },
          ]}
          copilotPrompt="Explain the git workflow for a beginner. Show me how to: init repo, stage changes, commit with a good message, and push to GitHub. Include common mistakes to avoid."
        />

        <div className="mb-12">
          <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-3 flex items-center gap-2">
            <i className="fas fa-terminal text-sky-500"></i>
            คำสั่งเต็มสำหรับ Workshop
          </h3>
          <CodeBlock variant="neutral" language="bash" code={workshopCode} />
        </div>
      </section>

      {/* Navigation */}
      <div className="border-t border-slate-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Link href="/section/03-version-control/github-gitlab" className="text-slate-500 hover:text-sky-500 flex items-center gap-2 text-sm font-medium transition-colors">
            <i className="fas fa-arrow-left text-xs"></i> GitHub vs GitLab
          </Link>
          <Link href="/section/04-security" className="text-sky-500 hover:text-sky-600 flex items-center gap-2 text-sm font-medium transition-colors">
            04 — Security <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
