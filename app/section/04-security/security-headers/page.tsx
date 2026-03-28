import SectionHero from '@/components/SectionHero'
import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'

export default function SecurityHeadersPage() {
  return (
    <div>
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Security Headers</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-600">HTTP response headers ที่ช่วยป้องกันการโจมตีหลายประเภท — ตั้งค่าครั้งเดียวได้ประโยชน์มาก</p>
          </div>

          {/* Header cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              {
                header: 'Content-Security-Policy',
                short: 'CSP',
                icon: 'fas fa-shield-halved',
                color: 'border-sky-500 bg-sky-50',
                tagColor: 'bg-sky-100 text-sky-700',
                desc: 'ป้องกัน XSS โดยกำหนดว่า script, style, image จาก source ใดถึงจะโหลดได้',
                example: "default-src 'self'; script-src 'self'",
              },
              {
                header: 'Strict-Transport-Security',
                short: 'HSTS',
                icon: 'fas fa-lock',
                color: 'border-emerald-500 bg-emerald-50',
                tagColor: 'bg-emerald-100 text-emerald-700',
                desc: 'บังคับให้ browser ใช้ HTTPS เสมอ ป้องกัน protocol downgrade attacks',
                example: 'max-age=31536000; includeSubDomains',
              },
              {
                header: 'X-Frame-Options',
                short: 'XFO',
                icon: 'fas fa-window-restore',
                color: 'border-orange-500 bg-orange-50',
                tagColor: 'bg-orange-100 text-orange-700',
                desc: 'ป้องกัน Clickjacking — ไม่ให้ site ถูกฝังใน iframe ของ site อื่น',
                example: 'DENY หรือ SAMEORIGIN',
              },
              {
                header: 'X-Content-Type-Options',
                short: 'XCTO',
                icon: 'fas fa-file-circle-check',
                color: 'border-violet-500 bg-violet-50',
                tagColor: 'bg-violet-100 text-violet-700',
                desc: 'ป้องกัน MIME-type sniffing — บังคับให้ browser ใช้ Content-Type ที่ server ส่งมา',
                example: 'nosniff',
              },
              {
                header: 'Referrer-Policy',
                short: 'RP',
                icon: 'fas fa-link-slash',
                color: 'border-pink-500 bg-pink-50',
                tagColor: 'bg-pink-100 text-pink-700',
                desc: 'ควบคุมข้อมูล Referer ที่ส่งไปพร้อม request ป้องกันการรั่วของ URL ที่มี sensitive data',
                example: 'strict-origin-when-cross-origin',
              },
              {
                header: 'Permissions-Policy',
                short: 'PP',
                icon: 'fas fa-sliders',
                color: 'border-teal-500 bg-teal-50',
                tagColor: 'bg-teal-100 text-teal-700',
                desc: 'จำกัด browser features เช่น camera, microphone, geolocation ป้องกันการใช้งานโดยไม่ตั้งใจ',
                example: 'camera=(), microphone=(), geolocation=()',
              },
            ].map((h) => (
              <div key={h.header} className={`border ${h.color} rounded-2xl p-5`}>
                <div className="flex items-center gap-2 mb-3">
                  <i className={`${h.icon} text-slate-600 text-sm`}></i>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${h.tagColor}`}>{h.short}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2 font-mono">{h.header}</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-3">{h.desc}</p>
                <code className="text-slate-700 text-xs font-mono bg-slate-100 text-slate-800 px-2 py-1 rounded block">{h.example}</code>
              </div>
            ))}
          </div>

          {/* Code example */}
          <CodeBlock
            variant="neutral"
            language="next.config.js"
            code={`/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // ป้องกัน XSS — กำหนด script source ที่อนุญาต
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https:",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self'",
              "frame-ancestors 'none'",
            ].join('; '),
          },
          // บังคับ HTTPS ตลอด 1 ปี
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // ป้องกัน Clickjacking
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // ป้องกัน MIME sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // ควบคุม Referrer
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // จำกัด browser features
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;`}
          />

          <div className="mt-6 bg-sky-50 border border-sky-200 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <i className="fas fa-circle-info text-sky-600 mt-0.5"></i>
              <div>
                <p className="font-semibold text-sky-800 text-sm mb-1">ทดสอบ Security Headers</p>
                <p className="text-slate-600 text-xs">
                  ใช้เครื่องมือออนไลน์ <span className="font-mono text-sky-600">securityheaders.com</span> เพื่อตรวจสอบว่า site ตั้ง headers ครบและถูกต้องหรือไม่
                  และดู score โดยรวมของ security posture
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/section/04-security/credential-management" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            <i className="fas fa-arrow-left text-xs"></i> Credential Management
          </Link>
          <Link href="/section/04-security/server-config" className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
            Server Config <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
