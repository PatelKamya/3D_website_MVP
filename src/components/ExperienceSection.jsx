import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'

const experiences = [
  { n: '01', title: 'The morning ritual', text: 'Dialled-in espresso and hand-poured coffee, made unhurriedly.', image: 'https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=1100&q=85' },
  { n: '02', title: 'A little artistry', text: 'Silky milk and a steady hand turn each cup into something personal.', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=1100&q=85' },
  { n: '03', title: 'From our oven', text: 'Laminated, glazed, and baked golden every single morning.', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1100&q=85' },
]

export default function ExperienceSection() {
  return (
    <section className="section experience-section">
      <div className="section-shell">
        <div className="experience-intro"><SectionHeading eyebrow="The experience" title={<>Made to be <em>remembered.</em></>} /><p>There is a rhythm to a great café—grind, pour, conversation, pause. Come find yours.</p></div>
        <div className="experience-grid">
          {experiences.map((item) => <article className="experience-card reveal" key={item.n}><div className="experience-image"><img loading="lazy" src={item.image} alt={item.title} /><span>{item.n}</span></div><div><h3>{item.title}</h3><p>{item.text}</p><ArrowUpRight size={20} /></div></article>)}
        </div>
      </div>
    </section>
  )
}
