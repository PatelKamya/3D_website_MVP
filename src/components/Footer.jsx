import { Camera, MessageCircle, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="section-shell">
        <div className="footer-top">
          <div><a className="brand footer-brand" href="#home"><span className="brand-mark">R</span><span>ROAST <i>&</i> REVERIE</span></a><p>Specialty coffee, thoughtful food,<br />and room for a slower kind of day.</p></div>
          <div className="footer-links"><strong>Explore</strong><a href="#menu">Menu</a><a href="#about">Our story</a><a href="#gallery">Gallery</a><a href="#reserve">Reservations</a></div>
          <div className="footer-links"><strong>Visit</strong><span>14 Banyan Lane<br />Indiranagar, Bengaluru</span><span>Daily from 7:30 am</span></div>
          <div className="footer-socials"><strong>Follow along</strong><div><a className="instagram" href="#footer" aria-label="Instagram"><Camera /></a><a className="facebook" href="#footer" aria-label="Facebook"><b>f</b></a><a className="whatsapp" href="#footer" aria-label="WhatsApp"><MessageCircle /></a></div></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Roast & Reverie</span><span>Made slowly, served warmly.</span><a href="#home" aria-label="Back to top">Back to top <ArrowUp size={15} /></a></div>
      </div>
    </footer>
  )
}
