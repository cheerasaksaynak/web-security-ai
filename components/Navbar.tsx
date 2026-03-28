'use client'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { label: 'หน้าหลัก', href: '/' },
  { label: '01 ประสบการณ์', href: '/section/01-experience' },
  { label: '02 Fundamentals', href: '/section/02-fundamentals' },
  { label: '03 Security', href: '/section/03-security' },
  { label: '04 Next.js', href: '/section/04-nextjs' },
  { label: '05 AI Dev', href: '/section/05-ai' },
  { label: '06 Deploy', href: '/section/06-deploy' },
  { label: 'Checklist', href: '/checklist' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 border-b border-sky-500/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-sm">
            <span className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
              <i className="fas fa-shield-halved text-white text-sm"></i>
            </span>
            <span className="hidden sm:block text-sky-400">SecureAI</span>
            <span className="hidden sm:block text-slate-400 font-normal">Workshop</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-sky-400 px-3 py-2 rounded-md text-xs font-medium transition-colors hover:bg-slate-800"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="xl:hidden text-slate-300 hover:text-sky-400 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${open ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="xl:hidden pb-4 border-t border-slate-700 mt-2 pt-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-300 hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-800"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
