import { Linkedin, Target, School } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { supported, approach, links } from '../data.js'

export default function About() {
  return (
    <>
      <PageHeader
        icon={Target}
        color="orange"
        title="Empowering youth in Rwanda and beyond"
        lede="A youth-led community beneficial company based in Kigali, where the benefit of the community comes first."
      />

      <section className="section">
        <div className="wrap split">
          <Reveal><h2>Who we are</h2></Reveal>
          <Reveal className="prose" delay={100}>
            <p>
              DEYOCE RWANDA empowers youth in Rwanda and beyond by fostering education, debate,
              public speaking, green initiatives, health awareness, entrepreneurship, arts, and
              cultural programs.
            </p>
            <p>
              Through mentorship, community projects, and partnerships, we promote sustainable
              development, unity, and social impact, and we work toward a brighter, inclusive future.
            </p>
            <p>
              We are a youth-led community beneficial company based in Kigali, and the benefit of the
              community comes first in everything we build.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--grey">
        <div className="wrap">
          <Reveal><h2>How we work</h2></Reveal>
          <ul className="grid grid--3 approach">
            {approach.map((a, i) => (
              <Reveal as="li" key={a.name} delay={i * 110} className="approach__item">
                <span className="icon-chip icon-chip--blue"><a.icon size={24} /></span>
                <h3>{a.name}</h3>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <Reveal>
            <span className="icon-chip icon-chip--green"><School size={26} /></span>
            <h2>A way back to school</h2>
            <p className="prose">
              We help out-of-school youth, teen mothers and dropouts return to education, while
              building the leadership, confidence and innovation skills they need to move forward.
            </p>
          </Reveal>
          <ul className="supported">
            {supported.map((s, i) => (
              <Reveal as="li" key={s.name} delay={i * 110} className={`supported__item supported__item--${s.color}`}>
                <s.icon size={26} /> {s.name}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--orange">
        <div className="wrap split">
          <Reveal><h2>Led by a young founder</h2></Reveal>
          <Reveal className="prose" delay={100}>
            <p>
              <strong>Thierry Mukeshimana</strong> founded DEYOCE RWANDA and serves as its Executive
              Chairman, guiding the organisation&rsquo;s work with youth and children.
            </p>
            <a className="btn btn--dark" href={links.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} /> Connect on LinkedIn
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
