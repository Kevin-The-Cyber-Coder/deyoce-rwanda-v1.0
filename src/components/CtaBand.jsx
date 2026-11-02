import { Link } from 'react-router-dom'
import { ArrowRight, HandHeart } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function CtaBand() {
  return (
    <section className="cta">
      <Reveal className="wrap cta__in">
        <div>
          <h2>Help the next harvest grow</h2>
          <p>Volunteer, partner or back a youth-led initiative in Kigali.</p>
        </div>
        <Link className="btn btn--white" to="/get-involved">
          <HandHeart size={18} /> Get involved <ArrowRight size={18} className="btn__arrow" />
        </Link>
      </Reveal>
    </section>
  )
}
