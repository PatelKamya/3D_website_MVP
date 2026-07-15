import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [['Home', '#home'], ['Menu', '#menu'], ['About', '#about'], ['Gallery', '#gallery'], ['Contact', '#contact']]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`site-header ${scrolled || open ? 'is-scrolled' : ''}`}>
      <a className="brand" href="#home" aria-label="Roast and Reverie home">
        <span className="brand-mark">R</span><span>ROAST <i>&</i> REVERIE</span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <a className="nav-cta" href="#reserve">Reserve a table</a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
        {open ? <X /> : <Menu />}
      </button>
      <div className={`mobile-panel ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href], index) => <a key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</a>)}
          <a href="#reserve" onClick={() => setOpen(false)}>Reserve a table</a>
        </nav>
      </div>
    </header>
  )
}
