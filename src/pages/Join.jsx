import { HandHeart, ExternalLink } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { social } from '../data.js'

export default function Join() {
  return (
    <>
      <PageHeader
        icon={HandHeart}
        color="green"
        title="Help the next harvest grow"
        lede="Join us to volunteer, partner, or support youth-led initiatives and help shape a brighter, inclusive future."
      />
      <section className="section">
        <div className="wrap">
          <Reveal>
            <h2>Reach us on social media</h2>
            <p className="prose">The quickest way to get in touch is through our channels. Send a message and we will reply.</p>
          </Reveal>
          <ul className="grid grid--3 socials">
            {social.map(({ name, href, icon: Icon }, i) => (
              <Reveal as="li" key={name} delay={(i % 3) * 90}>
                <a className="social" href={href} target="_blank" rel="noreferrer">
                  <span className="icon-chip"><Icon size={26} /></span>
                  <strong>{name}</strong>
                  <ExternalLink size={18} className="social__ext" />
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
