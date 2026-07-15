import { ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading'

export default function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="section-shell about-grid">
        <div className="about-visual reveal">
          <img loading="lazy" src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85" alt="Barista carefully preparing a pour-over coffee" />
          <div className="about-stamp"><strong>8</strong><span>years of<br />slow coffee</span></div>
        </div>
        <div className="about-copy reveal">
          <SectionHeading eyebrow="Our story" title={<>Coffee with a <em>point of view.</em></>} />
          <p className="lead">Roast & Reverie began with a simple idea: the best cafés give you more than coffee. They give you a reason to stay.</p>
          <p>We source characterful beans from trusted producers, roast in small batches, and build every plate around what is fresh. The result is a menu that feels generous, grounded, and quietly surprising.</p>
          <div className="about-values"><span><b>01</b> Direct relationships</span><span><b>02</b> Seasonal kitchen</span><span><b>03</b> Thoughtful hospitality</span></div>
          <a className="text-link" href="#contact">Read our story <ArrowRight size={17} /></a>
        </div>
      </div>
    </section>
  )
}
