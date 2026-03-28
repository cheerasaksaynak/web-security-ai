import SectionHero from '@/components/SectionHero'
import Link from 'next/link'

const deploymentMethods = [
  {
    icon: 'fas fa-server',
    name: 'Shared Hosting',
    examples: 'Hostinger, SiteGround',
    color: 'bg-violet-50 border-violet-200',
    iconColor: 'text-violet-500',
    badgeColor: 'bg-violet-100 text-violet-700',
    pros: ['ราคาถูกที่สุด', 'ตั้งค่าง่าย มี cPanel', 'Support ตลอด 24/7'],
    cons: ['รองรับ PHP-based เป็นหลัก', 'ควบคุม server ได้น้อย', 'ทรัพยากรแชร์กับผู้อื่น'],
    best: 'เหมาะสำหรับ: Simple websites, WordPress, landing pages',
  },
  {
    icon: 'fas fa-display',
    name: 'VPS',
    examples: 'DigitalOcean, Linode',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-500',
    badgeColor: 'bg-blue-100 text-blue-700',
    pros: ['ควบคุม server ได้เต็มที่', 'ติดตั้งซอฟต์แวร์ได้อิสระ', 'ราคาเหมาะสม'],
    cons: ['ต้องดูแล server เองทั้งหมด', 'ต้องมีความรู้ Linux', 'ต้อง update security เอง'],
    best: 'เหมาะสำหรับ: Backend APIs, Node.js apps, databases',
  },
  {
    icon: 'fas fa-cloud',
    name: 'Cloud Platform',
    examples: 'AWS, GCP, Azure',
    color: 'bg-sky-50 border-sky-200',
    iconColor: 'text-sky-500',
    badgeColor: 'bg-sky-100 text-sky-700',
    pros: ['Scale ได้ไม่จำกัด', 'บริการครบครัน (DB, CDN, AI)', 'High availability'],
    cons: ['ราคาตาม usage (บิลช็อคได้)', 'ซับซ้อน — learning curve สูง', 'ต้องวางแผนค่าใช้จ่าย'],
    best: 'เหมาะสำหรับ: Enterprise apps, high-traffic services',
  },
  {
    icon: 'fas fa-bolt',
    name: 'Static Hosting',
    examples: 'GitHub Pages, Netlify, Vercel',
    color: 'bg-emerald-50 border-emerald-200',
    iconColor: 'text-emerald-500',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    pros: ['ฟรีหรือราคาถูกมาก', 'เร็วมาก — CDN ทั่วโลก', 'Deploy ง่าย — push แล้วเสร็จ'],
    cons: ['รองรับเฉพาะ static files', 'ไม่มี server-side runtime', 'API ต้องใช้บริการภายนอก'],
    best: 'เหมาะสำหรับ: Next.js/React static, portfolios, docs',
  },
  {
    icon: 'fas fa-box',
    name: 'Container (Docker + K8s)',
    examples: 'Docker, Kubernetes, EKS',
    color: 'bg-orange-50 border-orange-200',
    iconColor: 'text-orange-500',
    badgeColor: 'bg-orange-100 text-orange-700',
    pros: ['Portable — ทำงานเหมือนกันทุกที่', 'Production-grade scaling', 'Isolation สมบูรณ์แบบ'],
    cons: ['Learning curve สูงมาก', 'ต้องการ DevOps knowledge', 'Over-engineering สำหรับโปรเจกต์เล็ก'],
    best: 'เหมาะสำหรับ: Microservices, large-scale production',
  },
]

export default function DeployMethodsPage() {
  return (
    <div>
      {/* 6.1 วิธีการ Deploy เว็บแบบต่างๆ */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900 mb-4">วิธีการ Deploy เว็บแบบต่างๆ</h2>
          <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-500 max-w-xl mx-auto">แต่ละ method มีจุดเด่นต่างกัน — เลือกให้เหมาะกับโปรเจกต์และงบประมาณ</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {deploymentMethods.map((method) => (
            <div
              key={method.name}
              className={`border rounded-2xl p-6 flex flex-col gap-4 ${method.color}`}
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-white shadow-sm`}>
                  <i className={`${method.icon} text-lg ${method.iconColor}`}></i>
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-base">{method.name}</h3>
                  <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mt-1 ${method.badgeColor}`}>
                    {method.examples}
                  </span>
                </div>
              </div>

              {/* Pros / Cons */}
              <div className="space-y-1">
                {method.pros.map((pro) => (
                  <div key={pro} className="flex items-start gap-2 text-sm text-slate-700">
                    <i className="fas fa-check text-emerald-500 text-xs mt-1 flex-shrink-0"></i>
                    <span>{pro}</span>
                  </div>
                ))}
                {method.cons.map((con) => (
                  <div key={con} className="flex items-start gap-2 text-sm text-slate-500">
                    <i className="fas fa-xmark text-red-400 text-xs mt-1 flex-shrink-0"></i>
                    <span>{con}</span>
                  </div>
                ))}
              </div>

              {/* Best for */}
              <p className="text-xs text-slate-500 border-t border-slate-200 pt-3 mt-auto">{method.best}</p>
            </div>
          ))}
        </div>

        {/* Quick comparison note */}
        <div className="mt-10 bg-sky-50 border border-sky-200 rounded-2xl p-6 flex gap-4 items-start">
          <i className="fas fa-lightbulb text-sky-500 text-xl mt-0.5 flex-shrink-0"></i>
          <div>
            <p className="font-bold text-slate-900 mb-1">Workshop นี้ใช้ Static Hosting (GitHub Pages)</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              เพราะ Next.js รองรับ static export ได้ดี, ฟรี 100%, deploy อัตโนมัติผ่าน GitHub Actions
              และ HTTPS มาให้พร้อม — เหมาะที่สุดสำหรับการเรียนรู้และโปรเจกต์ขนาดเล็ก-กลาง
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/06-deploy" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> 06 Deploy
          </Link>
          <Link href="/section/06-deploy/cicd" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            CI/CD Pipeline <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
