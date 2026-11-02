import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, HandHeart } from 'lucide-react'
import { nav } from '../data.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="wrap nav__in">
        <Link to="/" className="brand" aria-label="DEYOCE RWANDA home">
          <img src="/logo.png" alt="" width="44" height="44" />
          <span className="brand__name">DEYOCE <b>RWANDA</b></span>
        </Link>
        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav id="menu" className={open ? 'menu is-open' : 'menu'}>
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end}>{n.label}</NavLink>
          ))}
          <Link className="btn btn--sm" to="/get-involved"><HandHeart size={16} /> Get involved</Link>
        </nav>
      </div>
    </header>
  )
}
