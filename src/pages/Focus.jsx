import { Compass } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { focusAreas, approach } from '../data.js'

export default function Focus() {
  return (
    <>
      <PageHeader
        icon={Compass}
        color="blue"
        title="Where we focus"
        lede="Six areas where young people in Kigali build knowledge, voice and livelihoods."
      />
      <section className="section">
        <div className="wrap">
          <ul className="grid grid--3 focus">
            {focusAreas.map((f, i) => (
              <Reveal as="li" key={f.name} delay={(i % 3) * 100} className={`card card--${f.color}`}>
                <span className="icon-chip"><f.icon size={26} /></span>
                <h3>{f.name}</h3>
                <p>{f.note}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <section className="section section--grey">
        <div className="wrap">
          <Reveal><h2>How we work</h2></Reveal>
          <ul className="chips">
            {approach.map((a, i) => (
              <Reveal as="li" key={a.name} delay={i * 100} className="chip">
                <a.icon size={20} /> {a.name}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
