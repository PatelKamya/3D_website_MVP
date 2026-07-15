import { Camera } from 'lucide-react'
import { galleryItems } from '../data/galleryItems'
import SectionHeading from './SectionHeading'

export default function GallerySection() {
  return (
    <section id="gallery" className="section gallery-section">
      <div className="section-shell">
        <div className="gallery-heading"><SectionHeading eyebrow="From the café" title={<>Seen at <em>Roast & Reverie.</em></>} /><a className="text-link" href="#footer"><Camera size={18} /> @roastandreverie</a></div>
        <div className="gallery-grid">{galleryItems.map((item, i) => <figure className={item.className || ''} key={item.src}><img loading="lazy" src={item.src} alt={item.alt} /><figcaption>0{i + 1}</figcaption></figure>)}</div>
      </div>
    </section>
  )
}
