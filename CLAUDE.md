# CLAUDE.md — Web Security AI Workshop

## Project Overview

Workshop website สำหรับหลักสูตร **"การพัฒนาระบบสารสนเทศอย่างมั่นคงปลอดภัยด้วย AI"**
จัดโดย นายจีรศักดิ์ สายนาค — สำนักนวัตกรรมดิจิทัลและระบบอัจฉริยะ มหาวิทยาลัยสงขลานครินทร์

- **Stack**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Deploy**: GitHub Actions → GitHub Pages (Static Export)
- **Audience**: นักศึกษา/บุคลากรไทย ระดับ beginner–intermediate
- **Language**: ภาษาไทยเป็นหลัก, ศัพท์เทคนิคใช้ภาษาอังกฤษ

---

## Architecture

```
app/
  page.tsx                    ← หน้าหลัก (Agenda + Schedule)
  layout.tsx                  ← Root layout (Sidebar + ThemeProvider)
  globals.css                 ← Tailwind base + custom CSS variables
  section/
    01-experience/page.tsx    ← บรรยาย: เส้นทางอาชีพ + Security incidents
    02-fundamentals/page.tsx  ← บรรยาย: HTML/CSS/JS/HTTP
    03-security/page.tsx      ← บรรยาย: OWASP Top 10, XSS, SQLi, CSRF
    04-nextjs/page.tsx        ← บรรยาย+Workshop: React, API Routes
    05-ai/page.tsx            ← Workshop: GitHub Copilot, Prompting
    06-deploy/page.tsx        ← Workshop: CI/CD, GitHub Pages
  checklist/page.tsx          ← Security Pre-deploy Checklist
components/
  Sidebar.tsx                 ← Left sidebar navigation (active state via usePathname)
  ThemeProvider.tsx           ← Dark/Light mode context (localStorage)
  SectionHero.tsx             ← Section header with number, title, icon
  CodeBlock.tsx               ← Syntax highlight + copy button (react-syntax-highlighter)
  InfoCard.tsx                ← Feature/info card with icon + items list
  WorkshopBox.tsx             ← Workshop exercise box with steps + Copilot prompt
```

---

## Component Reference

### SectionHero
```tsx
<SectionHero
  number="03"
  title="Web Security Essentials"
  subtitle="OWASP Top 10, XSS, SQL Injection และการป้องกัน"
  icon="fas fa-shield-halved"
  imageUrl="https://images.unsplash.com/..."
/>
```

### CodeBlock — 3 variants
```tsx
<CodeBlock variant="vulnerable" language="javascript" code={`...`} />
<CodeBlock variant="secure"    language="javascript" code={`...`} />
<CodeBlock variant="neutral"   language="bash"       code={`...`} label="TERMINAL" />
```
- `language` รองรับ: `javascript`, `typescript`, `python`, `bash`, `sql`, `yaml`, `json`, `html`, `css`
- แสดง line numbers อัตโนมัติเมื่อ code > 5 บรรทัด

### InfoCard
```tsx
<InfoCard
  icon="fas fa-shield-halved"
  title="Input Validation"
  description="ตรวจสอบข้อมูลทุกครั้งก่อน process"
  items={['ใช้ allowlist ไม่ใช่ blocklist', 'Validate ทั้ง client และ server']}
  variant="blue"   // blue | green | red | orange | purple
/>
```

### WorkshopBox
```tsx
<WorkshopBox
  number={3}
  title="Workshop: Secure API with AI"
  timeEstimate="30 นาที"
  steps={[
    { step: 1, title: 'สร้าง API Route', description: 'สร้างไฟล์ app/api/...', code: `...` },
  ]}
  copilotPrompt="Write a secure Next.js API route that validates input and..."
/>
```

---

## Content Patterns

### โครงสร้างทุก Section
1. `<SectionHero>` — เปิดด้วย hero banner เสมอ
2. **ส่วนบรรยาย** — อธิบาย concept ด้วย grid cards / InfoCard / CodeBlock
3. **Vulnerable vs Secure** — แสดง code เปรียบเทียบคู่กัน (red ↔ green)
4. `<WorkshopBox>` — workshop exercise ท้ายสุด (ยกเว้น section 01–02)
5. **Bottom navigation** — ลิงก์ ← ก่อนหน้า / ถัดไป →

### Pattern: Code Comparison
```tsx
<div className="grid md:grid-cols-2 gap-4">
  <CodeBlock variant="vulnerable" language="sql" code={vulnerableCode} />
  <CodeBlock variant="secure"    language="sql" code={secureCode} />
</div>
```

### Pattern: Risk/Solution Columns
```tsx
<div className="grid md:grid-cols-2 gap-6">
  <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-5">
    <h4 className="text-red-700 dark:text-red-400 font-bold mb-3">
      <i className="fas fa-triangle-exclamation mr-2"></i>ความเสี่ยง
    </h4>
    {/* risk items */}
  </div>
  <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-5">
    <h4 className="text-green-700 dark:text-green-400 font-bold mb-3">
      <i className="fas fa-check-circle mr-2"></i>การป้องกัน
    </h4>
    {/* solution items */}
  </div>
</div>
```

---

## Styling Conventions

| ปรอย | Class |
|------|-------|
| Section spacing | `py-20` vertical, `px-6` horizontal |
| Content container | `max-w-6xl mx-auto px-6` |
| Section heading | `text-3xl md:text-4xl font-black text-slate-900 dark:text-white` |
| Heading divider | `<div className="w-16 h-1 bg-sky-500 rounded-full mx-auto mb-4">` |
| Card base | `bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl` |
| Badge | `bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 px-3 py-1 rounded-full text-xs font-medium` |
| Dark navy section | `className="section-navy text-white"` (CSS class ใน globals.css) |

**Color semantic:**
- `sky-500` — Primary, highlights, links
- `red-500` / `red-950` — Vulnerable code, warnings, risks
- `green-500` / `green-950` — Secure code, success, best practices
- `slate-900` — Dark backgrounds
- `emerald-500` — AI/Copilot features

---

## Adding a New Section

1. สร้างไฟล์ `app/section/07-xxx/page.tsx`
2. เพิ่ม nav item ใน `components/Sidebar.tsx` (navItems array)
3. เพิ่ม agenda card ใน `app/page.tsx` (agenda array)
4. เพิ่ม schedule row ใน `app/page.tsx` (schedule array)
5. อัปเดต bottom navigation ของ section ก่อนหน้า

---

## Recommended Claude Skills

### `/simplify` — หลังเพิ่มเนื้อหาใหม่
ใช้ทุกครั้งหลัง implement section ใหม่หรือ component ใหม่
ช่วย review code quality, ลด duplication, และปรับ readability

```
/simplify
```

### `/claude-api` — เพิ่ม AI Features
ใช้เมื่อต้องการเพิ่มฟีเจอร์ที่ใช้ Claude API เช่น:
- **Quiz Generator**: สร้างข้อสอบ security จาก section content อัตโนมัติ
- **Code Review Assistant**: วิเคราะห์ code ที่ผู้เรียนส่งมา
- **Vulnerable Code Detector**: scan code snippet แล้ว highlight จุดเสี่ยง
- **Copilot Prompt Suggester**: แนะนำ prompt เพื่อ secure coding

```
/claude-api
```
> บอก context ว่าต้องการสร้าง feature อะไร เช่น "สร้าง API route ที่รับ code snippet แล้วให้ Claude วิเคราะห์ vulnerability"

### `/simplify` — Review เนื้อหาก่อน deploy
Run หลังเขียน section ใหม่เสร็จเพื่อตรวจ component patterns และ consistency

---

## Content Writing Guide

### เมื่อเพิ่มเนื้อหาบรรยาย
- เขียนภาษาไทยเข้าใจง่าย + ศัพท์เทคนิคภาษาอังกฤษ
- ทุก concept ต้องมี **ตัวอย่างจริง** (real-world scenario หรือ incident)
- หัวข้อ security ต้องมี vulnerable code + secure code เสมอ
- จบทุก section ด้วย key takeaway หรือ workshop

### เมื่อเพิ่ม Workshop
- กำหนดเวลา (เช่น 20–30 นาที)
- แบ่งเป็น numbered steps ≤ 6 ขั้นตอน
- ทุก workshop ต้องมี `copilotPrompt` ที่พร้อมใช้งาน
- Step สุดท้ายควรเป็น "ทดสอบและ verify"

### Prompt สำหรับ Claude เมื่อต้องการเขียนเนื้อหา
```
สร้างเนื้อหาสำหรับ Section [X] เรื่อง [หัวข้อ]
- ผู้เรียน: นักศึกษา/บุคลากรที่รู้ web development เบื้องต้น
- ภาษา: ภาษาไทย + ศัพท์เทคนิคภาษาอังกฤษ
- รูปแบบ: Next.js TSX component ใช้ Tailwind CSS
- ต้องการ: [concept cards / code comparison / workshop steps]
- component ที่ใช้ได้: SectionHero, CodeBlock, InfoCard, WorkshopBox
```

### Prompt สำหรับสร้าง Copilot Workshop Prompt
```
เขียน GitHub Copilot prompt สำหรับ workshop เรื่อง [หัวข้อ]
- ให้ผู้เรียน implement [feature] ที่มี security ที่ถูกต้อง
- ต้องครอบคลุม: [input validation / auth / error handling / ...]
- บริบท: Next.js App Router, TypeScript
```

---

## Build & Deploy

```bash
npm run dev          # development server
npm run build        # production build (ต้องผ่านก่อน commit)
npm run lint         # ESLint check
```

Deploy อัตโนมัติเมื่อ push ไป `main` branch ผ่าน GitHub Actions → GitHub Pages
