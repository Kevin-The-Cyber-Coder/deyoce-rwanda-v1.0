import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap notfound">
        <h1>Page not found</h1>
        <p className="lede">That address does not lead anywhere on this site.</p>
        <Link className="btn" to="/"><Home size={18} /> Back to home</Link>
      </div>
    </section>
  )
}
