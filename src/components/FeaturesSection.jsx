import { Bean, Sparkles, Wheat, Armchair } from 'lucide-react'
import SectionHeading from './SectionHeading'

const features = [
  [Bean, 'Freshly roasted', 'Small-batch beans, roasted to reveal their sweetest, most expressive side.'],
  [Sparkles, 'Skilled baristas', 'Precise hands and genuine hospitality in every pour and every hello.'],
  [Wheat, 'Fresh ingredients', 'Season-led plates and pastries made in our kitchen each morning.'],
  [Armchair, 'A room to exhale', 'Warm light, good music, and corners designed for lingering.'],
]

export default function FeaturesSection() {
  return (
    <section className="section features-section">
      <div className="section-shell">
        <SectionHeading align="center" eyebrow="Why us" title={<>Simple things, done <em>beautifully.</em></>} />
        <div className="feature-grid">
          {features.map(([Icon, title, copy], index) => <article className="feature-card reveal" key={title}><span className="feature-number">0{index + 1}</span><Icon /><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </div>
    </section>
  )
}
