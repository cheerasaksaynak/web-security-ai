'use client'
import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeBlockProps {
  code: string
  label?: string
  variant?: 'vulnerable' | 'secure' | 'neutral'
  language?: string
}

const variantStyles = {
  vulnerable: {
    wrapper: 'border border-red-800',
    header: 'bg-red-950 text-red-400 border-b border-red-800',
    leftBorder: 'border-l-4 border-red-500',
  },
  secure: {
    wrapper: 'border border-green-800',
    header: 'bg-green-950 text-green-400 border-b border-green-800',
    leftBorder: 'border-l-4 border-green-500',
  },
  neutral: {
    wrapper: 'border border-slate-700',
    header: 'bg-slate-800 text-sky-400 border-b border-slate-700',
    leftBorder: 'border-l-4 border-sky-500',
  },
}

export default function CodeBlock({ code, label, variant = 'neutral', language = 'javascript' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const styles = variantStyles[variant]

  const defaultLabel = label ?? {
    vulnerable: 'VULNERABLE',
    secure: 'SECURE',
    neutral: language.toUpperCase(),
  }[variant]

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className={`rounded-xl overflow-hidden ${styles.wrapper} ${styles.leftBorder}`}>
      <div className={`px-4 py-2 flex items-center justify-between ${styles.header}`}>
        <div className="flex items-center gap-2">
          {variant === 'vulnerable' && <i className="fas fa-triangle-exclamation text-xs"></i>}
          {variant === 'secure' && <i className="fas fa-check-circle text-xs"></i>}
          {variant === 'neutral' && <i className="fas fa-code text-xs"></i>}
          <span className="text-xs font-bold tracking-widest">{defaultLabel}</span>
        </div>
        <button
          onClick={handleCopy}
          className="text-xs opacity-60 hover:opacity-100 transition-opacity flex items-center gap-1.5 px-2 py-1 rounded hover:bg-white/10"
          aria-label="Copy code"
        >
          <i className={`fas ${copied ? 'fa-check' : 'fa-copy'} text-xs`}></i>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          borderRadius: 0,
          fontSize: '0.875rem',
          lineHeight: '1.6',
        }}
        showLineNumbers={code.split('\n').length > 5}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
