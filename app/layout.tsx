import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import { ThemeProvider } from '@/components/ThemeProvider'

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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Noto+Sans+Thai:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors">
        <ThemeProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 lg:ml-60 flex flex-col min-h-screen">
              <main className="flex-1">{children}</main>
              <footer className="bg-slate-900 text-slate-400 py-10">
                <div className="max-w-6xl mx-auto px-6 text-center">
                  <p className="text-xs mt-2">
                    &copy; 2026 Cheerasak Saynak
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
