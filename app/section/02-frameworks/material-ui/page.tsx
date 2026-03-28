import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

export default function MaterialUIPage() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 mt-2 mb-4">Material UI (MUI) คืออะไร?</h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-500">Component library สำหรับ React ที่ใช้หลักการออกแบบ Google Material Design</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="space-y-4 mb-6">
              {[
                {
                  icon: 'fas fa-boxes-stacked',
                  title: 'Pre-built Components',
                  desc: 'มี component พร้อมใช้มากกว่า 50 ชิ้น เช่น Button, TextField, Table, Dialog, Drawer — ไม่ต้องสร้างเอง',
                },
                {
                  icon: 'fas fa-palette',
                  title: 'Theming System',
                  desc: 'กำหนด theme ทั้งเว็บด้วย ThemeProvider — สี, typography, spacing — เปลี่ยนทีเดียวใช้ทั่วโปรเจกต์',
                },
                {
                  icon: 'fas fa-universal-access',
                  title: 'Accessibility (a11y)',
                  desc: 'ทุก component รองรับ keyboard navigation, screen reader และ ARIA attributes ตามมาตรฐาน WCAG',
                },
                {
                  icon: 'fas fa-code',
                  title: 'TypeScript Support',
                  desc: 'รองรับ TypeScript ดีมาก มี type definitions ครบถ้วน IDE แสดง autocomplete และ error ได้ถูกต้อง',
                },
              ].map((f) => (
                <div key={f.title} className="flex gap-4 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                  <i className={`${f.icon} text-blue-500 text-lg mt-0.5 w-5 shrink-0`}></i>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm mb-1">{f.title}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 text-lg mb-4">ตัวอย่างการใช้งาน MUI</h3>
            <CodeBlock
              variant="neutral"
              language="tsx"
              code={`import {
  Button, TextField, Card,
  CardContent, Typography
} from '@mui/material'

export default function LoginForm() {
  return (
    <Card sx={{ maxWidth: 400, mx: 'auto', p: 2 }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          เข้าสู่ระบบ
        </Typography>

        <TextField
          label="อีเมล"
          type="email"
          fullWidth
          margin="normal"
          variant="outlined"
        />

        <TextField
          label="รหัสผ่าน"
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          size="large"
        >
          เข้าสู่ระบบ
        </Button>
      </CardContent>
    </Card>
  )
}`}
            />

            <div className="mt-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-5">
              <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
                <i className="fas fa-scale-balanced text-blue-500"></i>
                MUI vs Tailwind — เลือกอะไรดี?
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-blue-800 dark:text-blue-200 mb-2">MUI เหมาะกับ</p>
                  <ul className="space-y-1 text-blue-700 dark:text-blue-300">
                    <li className="flex gap-2"><i className="fas fa-check text-xs mt-1"></i>Dashboard / Admin panel</li>
                    <li className="flex gap-2"><i className="fas fa-check text-xs mt-1"></i>ต้องการ component พร้อมใช้</li>
                    <li className="flex gap-2"><i className="fas fa-check text-xs mt-1"></i>ทีมคุ้นกับ Material Design</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-teal-800 mb-2">Tailwind เหมาะกับ</p>
                  <ul className="space-y-1 text-teal-700">
                    <li className="flex gap-2"><i className="fas fa-check text-xs mt-1"></i>Design เฉพาะตัว / custom</li>
                    <li className="flex gap-2"><i className="fas fa-check text-xs mt-1"></i>ต้องการความยืดหยุ่นสูง</li>
                    <li className="flex gap-2"><i className="fas fa-check text-xs mt-1"></i>Landing page / Marketing site</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/02-frameworks/tailwind" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> Tailwind CSS
          </Link>
          <Link href="/section/02-frameworks/vscode" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            VS Code <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
