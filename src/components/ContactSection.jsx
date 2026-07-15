import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from 'lucide-react'
import SectionHeading from './SectionHeading'

export default function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-shell">
        <SectionHeading eyebrow="Come by" title={<>Your favourite corner is <em>waiting.</em></>} copy="Tucked away from the rush, but close enough to become part of your everyday." />
        <div className="contact-grid">
          <div className="map-card">
            <div className="map-lines" aria-hidden="true"><span /><span /><span /><span /><i /></div>
            <div className="map-pin"><MapPin /><span>ROAST<br />& REVERIE</span></div>
            <a className="button button-primary" href="https://maps.google.com" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={17} /></a>
          </div>
          <div className="contact-details">
            <ContactItem Icon={MapPin} label="Find us" lines={['14 Banyan Lane, Indiranagar', 'Bengaluru, Karnataka 560038']} />
            <ContactItem Icon={Clock3} label="Opening hours" lines={['Mon–Fri · 7:30 am–9:00 pm', 'Sat–Sun · 8:00 am–10:00 pm']} />
            <ContactItem Icon={Phone} label="Call us" lines={['+91 98765 43210']} href="tel:+919876543210" />
            <ContactItem Icon={Mail} label="Write to us" lines={['hello@roastandreverie.com']} href="mailto:hello@roastandreverie.com" />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ Icon, label, lines, href }) {
  const content = <>{lines.map(line => <span key={line}>{line}</span>)}</>
  return <div className="contact-item"><Icon /><div><small>{label}</small>{href ? <a href={href}>{content}</a> : <p>{content}</p>}</div></div>
}
