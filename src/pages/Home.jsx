import { Link } from 'react-router-dom'
import { ArrowRight, HandHeart, Sprout } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { programs, focusAreas, supported } from '../data.js'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__bg" aria-hidden="true"><i /><i /><i /></div>
        <div className="wrap hero__in">
          <div className="hero__text">
            <p className="pill"><Sprout size={16} /> Youth-led community beneficial company, Kigali</p>
            <h1>
              <span className="w w1">Youth seed,</span>{' '}
              <span className="w w2">world fruit.</span>
            </h1>
            <p className="lede hero__lede">
              DEYOCE RWANDA helps children and young people grow through education, mentoring and
              purposeful play, so what starts in one Kigali neighbourhood can feed the wider world.
            </p>
            <div className="actions">
              <Link className="btn" to="/programs">See our programs <ArrowRight size={18} className="btn__arrow" /></Link>
              <Link className="btn btn--ghost" to="/get-involved"><HandHeart size={18} /> Get involved</Link>
            </div>
          </div>
          <div className="hero__art" aria-hidden="true">
            <div className="orbit orbit--a"><span /></div>
            <div className="orbit orbit--b"><span /></div>
            <div className="orbit orbit--c"><span /></div>
            <img className="hero__logo" src="/logo.png" alt="" width="300" height="300" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2>What we do</h2>
            <Link className="link" to="/programs">All programs <ArrowRight size={16} className="btn__arrow" /></Link>
          </Reveal>
          <div className="grid grid--3">
            {programs.map((p, i) => (
              <Reveal key={p.title} delay={i * 110} className={`card card--${p.color}`}>
                <span className="icon-chip"><p.icon size={26} /></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className="wrap split">
          <Reveal>
            <h2>A way back to school</h2>
            <p className="prose">
              We help out-of-school youth, teen mothers and dropouts return to education, while
              building the leadership, confidence and innovation skills they need to move forward.
            </p>
            <Link className="btn btn--blue" to="/about">Read our story <ArrowRight size={18} className="btn__arrow" /></Link>
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

      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2>Where we focus</h2>
            <Link className="link" to="/focus">All focus areas <ArrowRight size={16} className="btn__arrow" /></Link>
          </Reveal>
          <ul className="tiles">
            {focusAreas.map((f, i) => (
              <Reveal as="li" key={f.name} delay={i * 70} className={`tile tile--${f.color}`}>
                <f.icon size={28} />
                <span>{f.name}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
