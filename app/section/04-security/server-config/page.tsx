import SectionHero from '@/components/SectionHero'
import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

export default function ServerConfigPage() {
  return (
    <div>
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Web Server Configuration</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-500">การตั้งค่า server ที่ถูกต้องตั้งแต่แรก ลดพื้นที่โจมตีได้มาก</p>
          </div>

          {/* Config cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Left column */}
            <div className="space-y-4">
              {[
                {
                  icon: 'fas fa-folder-open',
                  iconBg: 'bg-red-100 dark:bg-red-950/40',
                  iconColor: 'text-red-600',
                  title: 'ปิด Directory Listing',
                  desc: 'ถ้าเปิดทิ้งไว้ ผู้โจมตีสามารถ browse ไฟล์ทั้งหมดใน server ได้ เห็น source code, config, backup files',
                  tag: 'อันตราย',
                  tagColor: 'bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-300',
                },
                {
                  icon: 'fas fa-eye-slash',
                  iconBg: 'bg-slate-100 dark:bg-slate-700',
                  iconColor: 'text-slate-600 dark:text-slate-300',
                  title: 'ซ่อน Server Version (X-Powered-By)',
                  desc: 'header X-Powered-By: Express หรือ X-Powered-By: PHP/8.1 บอกผู้โจมตีว่าใช้ stack อะไร ทำให้โจมตีง่ายขึ้น',
                  tag: 'ข้อมูลรั่ว',
                  tagColor: 'bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300',
                },
                {
                  icon: 'fas fa-gauge-high',
                  iconBg: 'bg-orange-100 dark:bg-orange-950/40',
                  iconColor: 'text-orange-600',
                  title: 'Rate Limiting',
                  desc: 'จำกัดจำนวน request ต่อ IP ต่อหน่วยเวลา ป้องกัน brute force, DDoS, และ API abuse',
                  tag: 'สำคัญมาก',
                  tagColor: 'bg-orange-100 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300',
                },
                {
                  icon: 'fas fa-globe',
                  iconBg: 'bg-violet-100 dark:bg-violet-950/40',
                  iconColor: 'text-violet-600',
                  title: 'CORS Configuration',
                  desc: 'ไม่ตั้ง Access-Control-Allow-Origin: * สำหรับ production API ที่มี authentication — ระบุ origin จริงๆ ที่อนุญาต',
                  tag: 'CORS',
                  tagColor: 'bg-violet-100 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 ${item.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <i className={`${item.icon} ${item.iconColor} text-sm`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.tagColor}`}>{item.tag}</span>
                      </div>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column — code */}
            <div className="space-y-4">
              <CodeBlock
                variant="neutral"
                language="next.config.js — CORS"
                code={`// next.config.js — CORS สำหรับ API routes
const allowedOrigins = [
  'https://myapp.com',
  'https://www.myapp.com',
  // ไม่ใส่ * สำหรับ production!
];

async headers() {
  return [
    {
      source: '/api/(.*)',
      headers: [
        {
          key: 'Access-Control-Allow-Origin',
          // ✅ ระบุ origin จริงๆ ไม่ใช่ *
          value: 'https://myapp.com',
        },
        {
          key: 'Access-Control-Allow-Methods',
          value: 'GET, POST, PUT, DELETE, OPTIONS',
        },
        {
          key: 'Access-Control-Allow-Headers',
          value: 'Content-Type, Authorization',
        },
      ],
    },
  ];
}`}
              />

              <CodeBlock
                variant="neutral"
                language="middleware.ts — Rate Limiting"
                code={`// middleware.ts — Rate limiting อย่างง่าย
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// ใช้ upstash/ratelimit สำหรับ production
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  // อนุญาต 10 request ต่อ 10 วินาที ต่อ IP
  limiter: Ratelimit.slidingWindow(10, '10 s'),
});

export async function middleware(req: NextRequest) {
  const ip = req.ip ?? '127.0.0.1';
  const { success, limit, remaining } = await ratelimit.limit(ip);

  if (!success) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'X-RateLimit-Limit': limit.toString(),
        'X-RateLimit-Remaining': remaining.toString(),
        'Retry-After': '10',
      },
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*', // ใช้กับ API routes ทั้งหมด
};`}
              />
            </div>
          </div>

          {/* X-Powered-By tip */}
          <div className="grid md:grid-cols-2 gap-6">
            <CodeBlock
              variant="vulnerable"
              label="VULNERABLE — Default Server Info"
              code={`// Express.js — default เปิด X-Powered-By ทิ้งไว้
// Response header: X-Powered-By: Express
// Response header: X-Powered-By: PHP/8.1.23

// CORS เปิดกว้างเกินไป
app.use(cors({ origin: '*' })); // ❌ * สำหรับ production

// ไม่มี rate limiting
// ผู้โจมตี brute force ได้ไม่จำกัด`}
            />

            <CodeBlock
              variant="secure"
              label="SECURE — Hardened Configuration"
              code={`// Express.js — ปิด X-Powered-By
app.disable('x-powered-by');
// หรือใช้ helmet ครอบคลุมทุก header
import helmet from 'helmet';
app.use(helmet());

// CORS ระบุ origin ที่อนุญาตจริงๆ
app.use(cors({
  origin: ['https://myapp.com'],        // ✅
  credentials: true,
}));

// Rate limiting ด้วย express-rate-limit
import rateLimit from 'express-rate-limit';
app.use('/api/', rateLimit({
  windowMs: 15 * 60 * 1000, // 15 นาที
  max: 100,                  // 100 requests ต่อ IP
}));`}
            />
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/04-security/security-headers" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> Security Headers
          </Link>
          <Link href="/section/04-security/owasp" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            OWASP Top 10 <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
