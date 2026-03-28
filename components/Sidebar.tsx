'use client'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

type NavChild = { label: string; href: string }
type NavItem = {
  label: string
  href: string
  icon: string
  children?: NavChild[]
}

const navItems: NavItem[] = [
  { label: 'หน้าหลัก', href: '/', icon: 'fas fa-house' },
  {
    label: '01 Fundamentals', href: '/section/01-fundamentals', icon: 'fas fa-globe',
    children: [
      { label: 'How the Web Works', href: '/section/01-fundamentals/how-web-works' },
      { label: 'Frontend Technologies', href: '/section/01-fundamentals/frontend-technologies' },
      { label: 'Protocols', href: '/section/01-fundamentals/protocols' },
      { label: 'HTTP Methods', href: '/section/01-fundamentals/http-methods' },
      { label: 'API คืออะไร', href: '/section/01-fundamentals/api' },
      { label: 'Frontend vs Backend', href: '/section/01-fundamentals/frontend-vs-backend' },
      { label: 'HTTPS & Storage', href: '/section/01-fundamentals/https-storage' },
      { label: 'SSR / SPA / SSG', href: '/section/01-fundamentals/rendering' },
    ],
  },
  {
    label: '02 Frameworks', href: '/section/02-frameworks', icon: 'fas fa-layer-group',
    children: [
      { label: 'ภาษาโปรแกรมมิ่ง', href: '/section/02-frameworks/programming-languages' },
      { label: 'Web Frameworks', href: '/section/02-frameworks/web-frameworks' },
      { label: 'IDEs', href: '/section/02-frameworks/ides' },
      { label: 'React.js', href: '/section/02-frameworks/react' },
      { label: 'Next.js', href: '/section/02-frameworks/nextjs' },
      { label: 'Tailwind CSS', href: '/section/02-frameworks/tailwind' },
      { label: 'Material UI', href: '/section/02-frameworks/material-ui' },
      { label: 'VS Code', href: '/section/02-frameworks/vscode' },
      { label: 'GitHub Copilot', href: '/section/02-frameworks/github-copilot' },
      { label: 'Workshop', href: '/section/02-frameworks/workshop' },
    ],
  },
  {
    label: '03 Version Control', href: '/section/03-version-control', icon: 'fas fa-code-branch',
    children: [
      { label: 'ทำไมต้องใช้ Version Control?', href: '/section/03-version-control/why-version-control' },
      { label: 'ประเภทของ Version Control', href: '/section/03-version-control/types' },
      { label: 'Git Commands', href: '/section/03-version-control/git-commands' },
      { label: 'GitHub vs GitLab', href: '/section/03-version-control/github-gitlab' },
      { label: 'Workshop', href: '/section/03-version-control/workshop' },
    ],
  },
  {
    label: '04 Security', href: '/section/04-security', icon: 'fas fa-shield-halved',
    children: [
      { label: 'Credential Management', href: '/section/04-security/credential-management' },
      { label: 'Security Headers', href: '/section/04-security/security-headers' },
      { label: 'Server Config', href: '/section/04-security/server-config' },
      { label: 'OWASP Top 10', href: '/section/04-security/owasp' },
    ],
  },
  {
    label: '05 AI Coding Agent', href: '/section/05-ai', icon: 'fas fa-robot',
    children: [
      { label: 'AI Agent คืออะไร', href: '/section/05-ai/what-is-ai-agent' },
      { label: 'AI Coding Agents', href: '/section/05-ai/ai-coding-agents' },
      { label: 'AI Coding Tools', href: '/section/05-ai/ai-tools' },
      { label: 'ราคาเปรียบเทียบ', href: '/section/05-ai/pricing' },
      { label: 'ติดตั้ง Copilot', href: '/section/05-ai/install-copilot' },
      { label: 'SPEC.md', href: '/section/05-ai/spec-md' },
      { label: 'การเขียน Prompt', href: '/section/05-ai/prompting' },
      { label: 'คำสั่ง Copilot', href: '/section/05-ai/copilot-commands' },
      { label: 'Workshop', href: '/section/05-ai/workshop' },
    ],
  },
  {
    label: '06 Deploy', href: '/section/06-deploy', icon: 'fas fa-rocket',
    children: [
      { label: 'Deploy Methods', href: '/section/06-deploy/deploy-methods' },
      { label: 'CI/CD Pipeline', href: '/section/06-deploy/cicd' },
      { label: 'Security', href: '/section/06-deploy/security' },
    ],
  },
]

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-slate-900 border border-slate-700 text-slate-300 hover:text-sky-400 rounded-lg flex items-center justify-center shadow-lg transition-colors"
        aria-label="Toggle menu"
      >
        <i className={`fas ${open ? 'fa-xmark' : 'fa-bars'} text-base`}></i>
      </button>

      {/* Mobile backdrop */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-60 bg-slate-900 border-r border-slate-800
          flex flex-col transition-transform duration-300 ease-in-out shadow-2xl
          ${open ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
          {navItems.map((item) => {
            const active = isActive(item.href)
            const childActive = item.children?.some(c => pathname === c.href) ?? false
            const expanded = active

            return (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                    ${active
                      ? 'bg-sky-500/15 text-sky-400 border border-sky-500/25'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-transparent'
                    }
                  `}
                >
                  <i
                    className={`${item.icon} w-4 text-center text-sm flex-shrink-0 ${
                      active ? 'text-sky-400' : 'text-slate-500'
                    }`}
                  ></i>
                  <span className="flex-1 truncate">{item.label}</span>
                  {active && !childActive && !item.children && (
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0"></span>
                  )}
                  {item.children && (
                    <i className={`fas fa-chevron-${expanded ? 'up' : 'down'} text-[10px] flex-shrink-0 ${active ? 'text-sky-500' : 'text-slate-600'}`}></i>
                  )}
                </Link>

                {expanded && item.children && (
                  <div className="ml-7 mt-0.5 mb-1 border-l border-slate-700/50 pl-3 space-y-0.5">
                    {item.children.map((child) => {
                      const childIsActive = pathname === child.href
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className={`
                            flex items-center gap-2 px-2 py-1.5 rounded-md text-xs transition-colors
                            ${childIsActive
                              ? 'text-sky-300 font-semibold bg-sky-500/20 border border-sky-500/30'
                              : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/50 border border-transparent'
                            }
                          `}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${childIsActive ? 'bg-sky-400' : 'bg-slate-700'}`}></span>
                          <span className="truncate">{child.label}</span>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
