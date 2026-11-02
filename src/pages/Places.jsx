import { MapPin } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { places } from '../data.js'

export default function Places() {
  return (
    <>
      <PageHeader
        icon={MapPin}
        color="orange"
        title="Where we work"
        lede="Our activities are rooted in neighbourhoods across Kigali and its surrounding districts."
      />
      <section className="section">
        <div className="wrap">
          <ul className="grid grid--2 places">
            {places.map((p, i) => (
              <Reveal as="li" key={p.name} delay={(i % 2) * 110} className={`place place--${p.color}`}>
                <span className="place__pin"><MapPin size={24} /></span>
                <div>
                  <strong>{p.name}</strong>
                  <span>{p.note}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
