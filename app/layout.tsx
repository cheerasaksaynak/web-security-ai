import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'การพัฒนาระบบสารสนเทศอย่างมั่นคงปลอดภัยด้วย AI',
  description: 'Secure Information Systems Development with AI-Powered Tools — Workshop by นายจีรศักดิ์ สายนาค, มหาวิทยาลัยสงขลานครินทร์',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-slate-900 font-sans">
        <Navbar />
        <main>{children}</main>
        <footer className="bg-slate-900 text-slate-400 py-10 mt-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm">
              <span className="text-sky-400 font-semibold">Secure Information Systems Development with AI-Powered Tools</span>
            </p>
            <p className="text-xs mt-2">
              นายจีรศักดิ์ สายนาค — สำนักนวัตกรรมดิจิทัลและระบบอัจฉริยะ มหาวิทยาลัยสงขลานครินทร์
            </p>
            <p className="text-xs mt-3 text-slate-600">Workshop | บรรยาย + ปฏิบัติ | GitHub Copilot + Next.js</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
