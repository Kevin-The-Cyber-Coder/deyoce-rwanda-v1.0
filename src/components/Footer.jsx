import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { nav, social } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <Link to="/" className="brand brand--light" aria-label="DEYOCE RWANDA home">
            <img src="/logo.png" alt="" width="48" height="48" />
            <span className="brand__name">DEYOCE <b>RWANDA</b></span>
          </Link>
          <p className="footer__tag">Youth Seed, World Fruit.</p>
          <p className="footer__loc"><MapPin size={16} /> Kigali, Rwanda</p>
        </div>
        <nav aria-label="Pages">
          <h3>Pages</h3>
          <ul>
            {nav.map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}
            <li><Link to="/get-involved">Get involved</Link></li>
          </ul>
        </nav>
        <div>
          <h3>Follow us</h3>
          <ul className="footer__social">
            {social.map(({ name, href, icon: Icon }) => (
              <li key={name}>
                <a href={href} target="_blank" rel="noreferrer" aria-label={name} title={name}><Icon size={20} /></a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrap footer__base">
        <p>&copy; {new Date().getFullYear()} DEYOCE RWANDA CBC. All rights reserved.</p>
      </div>
    </footer>
  )
}
