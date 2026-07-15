import { ArrowUpRight } from 'lucide-react'
import { categories, menuItems } from '../data/menuItems'
import SectionHeading from './SectionHeading'

export default function MenuSection() {
  return (
    <section id="menu" className="section menu-section">
      <div className="section-shell">
        <div className="menu-heading-row">
          <SectionHeading eyebrow="Taste, thoughtfully made" title={<>A menu for every <em>mood.</em></>} copy="Familiar comforts, quietly elevated. Made with seasonal ingredients and no unnecessary fuss." />
          <a className="circle-link" href="#reserve" aria-label="Reserve a table"><ArrowUpRight /></a>
        </div>
        <div className="category-list" aria-label="Menu categories">{categories.map((item, index) => <button key={item} className={index === 0 ? 'active' : ''}>{item}</button>)}</div>
        <div className="menu-grid">
          {menuItems.map((item) => (
            <article className="menu-card reveal" key={item.name}>
              <div className="menu-image"><img loading="lazy" src={item.image} alt={item.name} /><span>{item.tag}</span></div>
              <div className="menu-card-top"><p>{item.category}</p><strong>{item.price}</strong></div>
              <h3>{item.name}</h3><p className="menu-note">{item.note}</p>
            </article>
          ))}
        </div>
        <a className="button button-outline dark" href="#reserve">Explore the full menu <ArrowUpRight size={17} /></a>
      </div>
    </section>
  )
}
