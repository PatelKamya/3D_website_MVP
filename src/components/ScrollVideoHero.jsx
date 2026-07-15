import { useRef } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useScrollVideo } from '../hooks/useScrollVideo'

export default function ScrollVideoHero() {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const reducedMotion = useReducedMotion()
  useScrollVideo(containerRef, videoRef, reducedMotion)

  return (
    <section ref={containerRef} id="home" className={`scroll-hero ${reducedMotion ? 'reduced-motion' : ''}`}>
      <div className="hero-sticky">
        <video ref={videoRef} className="hero-video" muted playsInline preload="auto" aria-label="Cinematic espresso preparation animation">
          <source src="/videos/cafe-hero.mp4" type="video/mp4" />
        </video>
        <div className="video-shade" />
        <div className="story-stage stage-one">
          <p className="eyebrow"><span /> Welcome to Roast & Reverie</p>
          <h1>Where every cup<br />becomes an <em>experience.</em></h1>
          <p className="hero-copy">Handcrafted coffee, fresh flavours, and a warm space made for slow mornings, meaningful conversations, and memorable moments.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#menu">Explore our menu <ArrowRight size={17} /></a>
            <a className="button button-ghost" href="#reserve">Reserve a table</a>
          </div>
        </div>
        <StoryCard className="stage-two" label="01 / The craft" title="Crafted with precision" text="Freshly ground beans. Perfectly balanced espresso. Every cup prepared with patience and care." />
        <StoryCard className="stage-three" label="02 / The space" title="More than coffee" text="A warm, immersive place for conversation, creativity, and the quiet moments in between." />
        <StoryCard className="stage-four" label="03 / The menu" title="Find your favourite" text="Signature coffees, matcha, coolers, fresh pastries, and comforting café plates." button />
        <div className="scroll-cue"><span>Scroll to experience</span><ArrowDown size={16} /></div>
        <div className="hero-progress" aria-hidden="true"><span /></div>
        <div className="hero-end-fade" />
      </div>
    </section>
  )
}

function StoryCard({ className, label, title, text, button }) {
  return (
    <div className={`story-stage story-card ${className}`}>
      <p className="eyebrow"><span /> {label}</p>
      <h2>{title}</h2>
      <p>{text}</p>
      {button && <a href="#menu" className="text-link">View full menu <ArrowRight size={17} /></a>}
    </div>
  )
}
