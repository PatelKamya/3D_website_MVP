import { ArrowRight } from 'lucide-react'

export default function ReservationSection() {
  const submit = (event) => { event.preventDefault(); event.currentTarget.reset(); alert('Thank you — your table request has been received.') }
  return (
    <section id="reserve" className="section reservation-section">
      <div className="section-shell reservation-grid">
        <div className="reservation-copy">
          <p className="eyebrow"><span /> Your table awaits</p>
          <h2>Make time for<br /><em>something lovely.</em></h2>
          <p>Breakfast with an old friend, an afternoon alone, or a table full of people you love. We will keep your corner warm.</p>
          <div className="reservation-meta"><span><small>For groups of 8+</small><a href="tel:+919876543210">+91 98765 43210</a></span><span><small>Questions?</small><a href="mailto:hello@roastandreverie.com">Send us a note</a></span></div>
        </div>
        <form className="reservation-form" onSubmit={submit}>
          <div className="field full"><label htmlFor="name">Full name</label><input id="name" name="name" autoComplete="name" required placeholder="Your name" /></div>
          <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required placeholder="you@email.com" /></div>
          <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" autoComplete="tel" required placeholder="+91 00000 00000" /></div>
          <div className="field"><label htmlFor="date">Date</label><input id="date" name="date" type="date" required /></div>
          <div className="field"><label htmlFor="time">Time</label><input id="time" name="time" type="time" required /></div>
          <div className="field full"><label htmlFor="guests">Guests</label><select id="guests" name="guests" required defaultValue=""><option value="" disabled>Select party size</option>{[1,2,3,4,5,6,7,8].map(n => <option key={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>)}</select></div>
          <div className="field full"><label htmlFor="request">Special request <span>Optional</span></label><textarea id="request" name="request" rows="2" placeholder="Celebration, allergies, or a favourite corner?" /></div>
          <button className="button button-primary full" type="submit">Request a table <ArrowRight size={17} /></button>
        </form>
      </div>
    </section>
  )
}
