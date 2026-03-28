import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

const specMdExample = `# Project Specification

## Overview
เว็บ workshop สำหรับสอน Web Security ด้วย Next.js

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- react-syntax-highlighter

## Conventions
- ภาษาไทยสำหรับ content, อังกฤษสำหรับ code
- Component อยู่ใน /components
- Pages อยู่ใน /app/section/

## Security Requirements
- ไม่ใช้ dangerouslySetInnerHTML
- Validate input ทุก API route
- ไม่เก็บ secrets ใน code`

export default function SpecMdPage() {
  return (
    <div>
      {/* ─── 5.6 การเขียนไฟล์ SPEC.md ───────────────────────────────────────── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-4">การเขียนไฟล์ SPEC.md</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              SPEC.md คือ &quot;คู่มือ&quot; ที่บอก AI ว่าโปรเจคนี้ทำอะไร ใช้ technology อะไร และมี convention อะไร
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* ทำไมสำคัญ */}
            <div>
              <h3 className="font-bold text-slate-900 text-xl mb-6">ทำไม SPEC.md ถึงสำคัญมาก?</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: 'fas fa-bullseye',
                    color: 'bg-sky-500',
                    title: 'AI suggest code ที่ถูก context',
                    desc: 'Copilot จะรู้ว่าโปรเจคใช้ Next.js App Router ไม่ใช่ Pages Router ทำให้ code ที่ generate ถูกต้องมากขึ้น',
                  },
                  {
                    icon: 'fas fa-ruler-combined',
                    color: 'bg-violet-500',
                    title: 'ลด back-and-forth ในการ prompt',
                    desc: 'ไม่ต้องอธิบาย tech stack ซ้ำทุกครั้ง AI อ่าน SPEC.md แล้วรู้ context ของโปรเจคเลย',
                  },
                  {
                    icon: 'fas fa-shield-halved',
                    color: 'bg-emerald-500',
                    title: 'บังคับ security convention',
                    desc: 'ระบุ security requirement ไว้ใน SPEC.md AI จะ generate code ที่คำนึงถึง security requirement นั้นโดยอัตโนมัติ',
                  },
                  {
                    icon: 'fas fa-users',
                    color: 'bg-orange-500',
                    title: 'ทำงานเป็น team ได้ง่ายขึ้น',
                    desc: 'ทุกคนในทีมใช้ SPEC.md เดียวกัน ทำให้ AI generate code ที่มี style สม่ำเสมอ',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className={`w-9 h-9 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <i className={`${item.icon} text-white text-sm`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ตัวอย่าง SPEC.md */}
            <div>
              <h3 className="font-bold text-slate-900 text-xl mb-6">ตัวอย่าง SPEC.md</h3>
              <CodeBlock
                code={specMdExample}
                label="SPEC.md"
                variant="neutral"
                language="markdown"
              />
              <div className="mt-4 p-4 bg-white border border-slate-200 rounded-xl">
                <p className="text-slate-700 text-sm leading-relaxed">
                  <i className="fas fa-info-circle text-sky-600 mr-2"></i>
                  วาง SPEC.md ไว้ที่ root ของโปรเจค จากนั้นใน Copilot Chat พิมพ์{' '}
                  <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded">#file:SPEC.md</code>{' '}
                  เพื่อให้ AI อ่าน context ก่อนตอบคำถาม
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/05-ai/install-copilot" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> ติดตั้ง Copilot
          </Link>
          <Link href="/section/05-ai/prompting" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            การเขียน Prompt <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
