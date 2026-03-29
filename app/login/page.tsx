'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push('/demo')
    } else {
      setError('Incorrect password')
      setLoading(false)
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Outfit:wght@300;400;500&family=JetBrains+Mono:wght@400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #06080E; }
      `}</style>
      <div style={{
        minHeight: '100vh',
        background: '#06080E',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Outfit', sans-serif",
        padding: '24px',
      }}>

        {/* Logo */}
        <div style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '28px',
          fontWeight: 800,
          letterSpacing: '.08em',
          color: '#EDF0FF',
          marginBottom: '8px',
        }}>
          GY<span style={{ color: '#4B8FFF' }}>S</span>T
        </div>
        <div style={{
          fontSize: '11px',
          color: '#3D4A60',
          letterSpacing: '.1em',
          textTransform: 'uppercase',
          marginBottom: '40px',
          fontFamily: "'JetBrains Mono', monospace",
        }}>
          Agentic AI Commerce System
        </div>

        {/* Card */}
        <div style={{
          background: '#0C0F1B',
          border: '1px solid #1C2338',
          borderRadius: '10px',
          padding: '32px',
          width: '100%',
          maxWidth: '340px',
        }}>
          <div style={{
            fontSize: '13px',
            color: '#7A8699',
            marginBottom: '24px',
            lineHeight: 1.6,
          }}>
            This demo is private. Enter the access password to continue.
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="Access password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoFocus
              style={{
                width: '100%',
                background: '#06080E',
                border: `1px solid ${error ? '#FF7043' : '#1C2338'}`,
                borderRadius: '6px',
                padding: '10px 14px',
                fontSize: '13px',
                color: '#EDF0FF',
                fontFamily: "'JetBrains Mono', monospace",
                outline: 'none',
                marginBottom: error ? '8px' : '16px',
                transition: 'border-color .2s',
              }}
            />
            {error && (
              <div style={{
                fontSize: '11px',
                color: '#FF7043',
                marginBottom: '16px',
                fontFamily: "'JetBrains Mono', monospace",
              }}>
                ✗ {error}
              </div>
            )}
            <button
              type="submit"
              disabled={loading || !password}
              style={{
                width: '100%',
                background: loading || !password ? '#1C2338' : '#4B8FFF',
                color: loading || !password ? '#3D4A60' : '#fff',
                border: 'none',
                borderRadius: '6px',
                padding: '11px',
                fontSize: '13px',
                fontWeight: 600,
                fontFamily: "'Syne', sans-serif",
                cursor: loading || !password ? 'not-allowed' : 'pointer',
                transition: 'all .2s',
                letterSpacing: '.03em',
              }}
            >
              {loading ? 'Verifying…' : 'Enter Demo →'}
            </button>
          </form>
        </div>

        <div style={{
          marginTop: '24px',
          fontSize: '10px',
          color: '#3D4A60',
          fontFamily: "'JetBrains Mono', monospace",
        }}>
          Investor preview · Confidential
        </div>
      </div>
    </>
  )
}
