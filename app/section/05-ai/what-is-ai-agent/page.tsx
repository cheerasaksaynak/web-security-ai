import Link from 'next/link'

export default function WhatIsAIAgentPage() {
  return (
    <div>
      {/* ─── 5.1 AI Agent คืออะไร ──────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">AI Agent คืออะไร?</h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            ต่างจาก AI ทั่วไปที่แค่ <em>ตอบคำถาม</em> — AI Agent วางแผนและลงมือ<em>ทำงาน</em>หลายขั้นตอนเองได้
          </p>
        </div>

        {/* ChatGPT vs Agent comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center">
                <i className="fas fa-comment text-slate-500"></i>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">แบบเดิม</p>
                <h3 className="font-bold text-slate-800 dark:text-white">Chatbot / AI Assistant</h3>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                'รับคำถาม → ตอบคำถาม → จบ',
                'ทำงานได้แค่ 1 step ต่อครั้ง',
                'ไม่รู้ว่าผลลัพธ์ถูกต้องหรือไม่',
                'ต้องสั่งงานทุก step ด้วยตัวเอง',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-500 text-sm">
                  <i className="fas fa-minus text-slate-300 mt-0.5 flex-shrink-0"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center">
                <i className="fas fa-robot text-white"></i>
              </div>
              <div>
                <p className="text-xs font-bold text-sky-500 uppercase tracking-widest">AI Agent</p>
                <h3 className="font-bold text-slate-900 dark:text-white">Autonomous AI Agent</h3>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                'รับ goal → วางแผน → ลงมือทำหลาย step',
                'สังเกตผลลัพธ์และปรับแผนได้เอง',
                'อ่าน file, รัน command, แก้ bug ได้',
                'ทำงานวนซ้ำจนงานสำเร็จ (loop)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sky-700 dark:text-sky-300 text-sm">
                  <i className="fas fa-check text-sky-500 mt-0.5 flex-shrink-0"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ตัวอย่าง workflow ของ Agent */}
        <div className="mb-14">
          <h3 className="text-center font-bold text-slate-700 dark:text-slate-300 text-sm uppercase tracking-widest mb-6">
            ตัวอย่าง: สั่ง AI Agent ให้ &quot;เพิ่มระบบ login&quot;
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: 'fas fa-folder-open', label: 'อ่าน Codebase', desc: 'Agent สำรวจโครงสร้างโปรเจค' },
              { icon: 'fas fa-lightbulb', label: 'วิเคราะห์ & วางแผน', desc: 'ตัดสินใจว่าต้องสร้างไฟล์อะไร' },
              { icon: 'fas fa-code', label: 'เขียน Code', desc: 'สร้างและแก้ไขหลายไฟล์' },
              { icon: 'fas fa-vial', label: 'รัน Test & Fix', desc: 'ตรวจสอบและแก้ error อัตโนมัติ' },
            ].map((step, i) => (
              <div key={step.label} className="relative">
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 text-center h-full">
                  <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <i className={`${step.icon} text-white text-sm`}></i>
                  </div>
                  <p className="font-bold text-slate-800 dark:text-white text-sm mb-1">{step.label}</p>
                  <p className="text-slate-400 text-xs">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 bg-sky-500 rounded-full items-center justify-center">
                    <i className="fas fa-chevron-right text-white" style={{ fontSize: '8px' }}></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Agentic Loop */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
          <h3 className="font-bold text-slate-900 text-center mb-6 text-lg">Agentic Loop — วงจรที่ AI Agent ทำงาน</h3>
          <div className="flex flex-wrap justify-center gap-4 items-center">
            {[
              { icon: 'fas fa-eye', label: 'Perceive', desc: 'รับข้อมูลจาก environment', color: 'bg-sky-500' },
              { icon: 'fas fa-sitemap', label: 'Plan', desc: 'วางแผนขั้นตอน', color: 'bg-violet-500' },
              { icon: 'fas fa-play', label: 'Act', desc: 'ลงมือทำ action', color: 'bg-emerald-500' },
              { icon: 'fas fa-binoculars', label: 'Observe', desc: 'ดูผลลัพธ์ที่ได้', color: 'bg-orange-500' },
            ].map((node, i) => (
              <div key={node.label} className="flex items-center gap-4">
                <div className="text-center">
                  <div className={`w-12 h-12 ${node.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                    <i className={`${node.icon} text-white`}></i>
                  </div>
                  <p className="font-bold text-slate-900 text-sm">{node.label}</p>
                  <p className="text-slate-600 text-xs">{node.desc}</p>
                </div>
                {i < 3 && <i className="fas fa-arrow-right text-slate-400 text-lg"></i>}
              </div>
            ))}
            <div className="flex items-center gap-3 text-slate-600 text-sm">
              <i className="fas fa-rotate-right text-sky-600 text-xl"></i>
              <span>Repeat จนงานสำเร็จ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/05-ai" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> 05 AI Coding Agent
          </Link>
          <Link href="/section/05-ai/ai-coding-agents" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            AI Coding Agents <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
