import { Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import SectionHeading from './SectionHeading'

export default function TestimonialsSection() {
  return (
    <section className="section testimonial-section">
      <div className="section-shell">
        <SectionHeading align="center" eyebrow="Kind words" title={<>Notes from our <em>regulars.</em></>} />
        <div className="testimonial-grid">{testimonials.map((item) => <blockquote className="testimonial-card reveal" key={item.name}><Quote /><div className="stars" aria-label="5 out of 5 stars">★★★★★</div><p>“{item.quote}”</p><footer><span>{item.name.charAt(0)}</span><div><strong>{item.name}</strong><small>{item.role}</small></div></footer></blockquote>)}</div>
      </div>
    </section>
  )
}
