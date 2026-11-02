import { Sprout } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { programs } from '../data.js'

export default function Programs() {
  return (
    <>
      <PageHeader
        icon={Sprout}
        color="green"
        title="What we do"
        lede="Three programs that move young people from a first idea to a harvest the whole community shares."
      />
      <section className="section">
        <div className="wrap">
          <ol className="stages">
            {programs.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 80} className={`stage stage--${p.color}`}>
                <div className="stage__side">
                  <span className="icon-chip"><p.icon size={28} /></span>
                  <span className="stage__tag">{p.tag}</span>
                </div>
                <div>
                  <h2>{p.title}</h2>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
