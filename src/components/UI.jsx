// ═══════════════════════════════════════════════════════════════
// @axis-human/ui — componentes base
// Estilos vía CSS custom properties (var(--xxx))
// ═══════════════════════════════════════════════════════════════

import { useEffect } from 'react'

// ───── Logo (genérico, recibe nombre + accent del sistema) ─────
export function Logo({ name = 'axis', sub = '', size = 14, color }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontFamily: 'InterVariable, Inter, sans-serif',
      fontWeight: 600, fontSize: size, letterSpacing: '-0.01em',
      color: color || 'var(--text)',
    }}>
      {name}
      {sub && <span style={{ color: 'var(--accent)', fontWeight: 700 }}>/</span>}
      {sub}
    </span>
  )
}

// ───── Button ─────
export function Btn({ children, variant = 'ghost', size = 'md', icon, onClick, type = 'button', disabled, ...rest }) {
  const styles = {
    ghost:   { background: 'transparent',       color: 'var(--text)', border: '1px solid var(--border)' },
    primary: { background: 'var(--accent)',     color: 'var(--accent-on)', border: '1px solid var(--accent)' },
    subtle:  { background: 'var(--surface-alt)', color: 'var(--text)', border: '1px solid transparent' },
    danger:  { background: 'transparent',       color: 'var(--err)', border: '1px solid var(--border)' },
  }[variant]

  const sizes = {
    sm: { padding: '4px 10px', fontSize: 12, height: 26 },
    md: { padding: '6px 14px', fontSize: 13, height: 32 },
    lg: { padding: '8px 18px', fontSize: 14, height: 38 },
  }[size]

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      data-axis-btn={size}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        borderRadius: 5, fontWeight: 500,
        transition: 'all 120ms cubic-bezier(0.4,0,0.2,1)',
        opacity: disabled ? 0.4 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...styles, ...sizes,
      }}
      onMouseEnter={e => { if (!disabled) e.currentTarget.style.filter = 'brightness(1.08)' }}
      onMouseLeave={e => { e.currentTarget.style.filter = 'none' }}
      {...rest}
    >
      {icon && <span style={{ display: 'inline-flex' }}>{icon}</span>}
      {children}
    </button>
  )
}

// ───── Input ─────
export function Input({ label, hint, error, ...props }) {
  return (
    <label style={{ display: 'block' }}>
      {label && <div style={{ fontSize: 11, fontWeight: 500, marginBottom: 4, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.05em' }}>{label}</div>}
      <input
        {...props}
        data-axis-input
        style={{
          width: '100%', padding: '8px 12px',
          background: 'var(--surface)',
          border: `1px solid ${error ? 'var(--err)' : 'var(--border)'}`,
          borderRadius: 5, color: 'var(--text)', fontSize: 14,
          outline: 'none', transition: 'border-color 120ms',
          ...props.style,
        }}
        onFocus={e => e.currentTarget.style.borderColor = 'var(--accent)'}
        onBlur={e => e.currentTarget.style.borderColor = error ? 'var(--err)' : 'var(--border)'}
      />
      {hint && !error && <div style={{ fontSize: 11, color: 'var(--text-faint)', marginTop: 4 }}>{hint}</div>}
      {error && <div style={{ fontSize: 11, color: 'var(--err)', marginTop: 4 }}>{error}</div>}
    </label>
  )
}

// ───── Card ─────
export function Card({ children, padding = 16, style, ...rest }) {
  return (
    <div style={{
      background: 'var(--surface)', border: '1px solid var(--border)',
      borderRadius: 7, padding, ...style,
    }} {...rest}>
      {children}
    </div>
  )
}

// ───── Badge ─────
export function Badge({ children, tone = 'neutral', mono }) {
  const tones = {
    neutral: { bg: 'var(--surface-alt)', color: 'var(--text-muted)' },
    accent:  { bg: 'color-mix(in srgb, var(--accent) 18%, transparent)', color: 'var(--accent)' },
    ok:      { bg: 'var(--ok-bg)',  color: 'var(--ok)' },
    err:     { bg: 'var(--err-bg)', color: 'var(--err)' },
    warn:    { bg: 'var(--warn-bg)', color: 'var(--warn)' },
    info:    { bg: 'var(--info-bg)', color: 'var(--info)' },
  }[tone]
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', padding: '2px 7px',
      borderRadius: 3, fontSize: 11, fontWeight: 500,
      fontFamily: mono ? "'JetBrains Mono', monospace" : 'inherit',
      background: tones.bg, color: tones.color,
    }}>{children}</span>
  )
}

// ───── Spinner ─────
export function Spinner({ label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-muted)', fontSize: 13, padding: 24 }}>
      <span style={{
        width: 14, height: 14, border: '2px solid var(--border-strong)',
        borderTopColor: 'var(--accent)', borderRadius: '50%',
        animation: 'axis-spin 700ms linear infinite',
      }} />
      {label}
      <style>{`@keyframes axis-spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

// ───── Empty state ─────
export function Empty({ title, hint, action }) {
  return (
    <div style={{
      padding: 48, textAlign: 'center', color: 'var(--text-faint)',
      border: '1px dashed var(--border)', borderRadius: 7, background: 'var(--surface)',
    }}>
      <div style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 4 }}>{title}</div>
      {hint && <div style={{ fontSize: 12 }}>{hint}</div>}
      {action && <div style={{ marginTop: 16 }}>{action}</div>}
    </div>
  )
}

// ───── Theme toggle ─────
const STORAGE_KEY = 'axis-theme'
export function useThemeToggle() {
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('axisgov-theme')
    if (saved) document.documentElement.dataset.theme = saved
  }, [])
  return () => {
    const cur = document.documentElement.dataset.theme || 'dark'
    const next = cur === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    localStorage.setItem(STORAGE_KEY, next)
  }
}
