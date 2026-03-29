import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GYST — Agentic AI Commerce',
  description: 'Investor Demo',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#06080E' }}>
        {children}
      </body>
    </html>
  )
}
