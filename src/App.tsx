import { useEffect, useState } from 'react'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import siteData from './data/site.json'

type Site = typeof siteData
const site = siteData as Site
const { brand, contact, nav, home, footer } = site

function usePageMotion() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const seen = new WeakSet<Element>()
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-in')
        io.unobserve(entry.target)
      }
    }, { threshold: 0, rootMargin: '0px 0px -10% 0px' })
    const bind = (node: HTMLElement) => {
      if (seen.has(node)) return
      seen.add(node)
      if (reduce) { node.classList.add('is-in'); return }
      io.observe(node)
    }
    const scan = () => document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(bind)
    scan()
    let frame = 0
    const mo = new MutationObserver(() => { if (!frame) frame = requestAnimationFrame(() => { frame = 0; scan() }) })
    mo.observe(document.body, { childList: true, subtree: true })
    return () => { mo.disconnect(); io.disconnect(); if (frame) cancelAnimationFrame(frame) }
  }, [])
}

function Header() {
  usePageMotion()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const sentinel = document.querySelector('.scroll-sentinel')
    if (!sentinel) return
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting))
    io.observe(sentinel)
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => { io.disconnect(); window.removeEventListener('keydown', onKey) }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return <>
    <div className="scroll-sentinel" aria-hidden="true" />
    {open && <button type="button" className="nav-backdrop" aria-label="Fechar menu" onClick={() => setOpen(false)} />}
    <header className={['header', scrolled ? 'is-scrolled' : '', open ? 'is-open' : ''].filter(Boolean).join(' ')}>
      <div className="header-bar">
        <a className="brand" href="#inicio" aria-label={brand.ariaLabel}>
          <img className="brand-mark" src={brand.logo} alt="" width="1024" height="1024" />
          <span className="brand-name">{brand.name}<small>{brand.tagline}</small></span>
        </a>
        <nav className={open ? 'open' : ''}>
          {nav.groups.map(group => (
            <a href={group.href} key={group.label} onClick={() => setOpen(false)}>{group.label}</a>
          ))}
          <a className="nav-cta" href={contact.whatsapp} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>{nav.cta}</a>
        </nav>
        <button aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} className="menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  </>
}

function Hero() {
  return (
    <section className="hero hero-bleed" id="inicio" aria-label={brand.ariaLabel}>
      <div className="hero-scene" aria-hidden="true">
        <img className="hero-city" src={home.hero.cityImage} alt="" width="1600" height="900" />
        <div className="hero-veil" />
      </div>
      <div className="hero-grid hero-grid-solo">
        <div className="hero-copy">
          <p className="hero-kicker">{home.hero.kicker}</p>
          <span className="hero-rule" />
          <h1>{home.hero.title}</h1>
          <p className="hero-lead">{home.hero.lead}</p>
          <div className="hero-actions">
            <a className="hero-btn hero-btn-primary" href={home.hero.primaryHref} target="_blank" rel="noreferrer">{home.hero.primaryCta}</a>
            <a className="hero-btn hero-btn-secondary" href={home.hero.secondaryHref}>{home.hero.secondaryCta}</a>
          </div>
          <p className="hero-proof">{home.hero.proof}</p>
        </div>
      </div>
    </section>
  )
}

function Patterns() {
  const section = home.patterns
  return (
    <section className="split about patterns" id="padroes">
      <img className="about-photo" data-reveal src={section.image} alt={section.imageAlt} width="1200" height="900" />
      <div className="about-copy" data-reveal="1">
        <p className="eyebrow">{section.eyebrow}</p>
        <h2>{section.title}</h2>
        <ul className="pattern-list">
          {section.items.map(item => <li key={item}>{item}</li>)}
        </ul>
        <p className="pattern-closing">{section.closing}</p>
      </div>
    </section>
  )
}

function Quote() {
  return (
    <section className="statement quote-band" aria-label="Citação">
      <p data-reveal>“{home.quote}”</p>
    </section>
  )
}

function Methodology() {
  const section = home.methodology
  return (
    <section className="split about" id="metodologia">
      <div className="about-copy" data-reveal>
        <p className="eyebrow">{section.eyebrow}</p>
        <h2>{section.title}</h2>
        {section.paragraphs.map(paragraph => <p key={paragraph.slice(0, 48)}>{paragraph}</p>)}
        <a className="text-link" href={section.ctaHref} target="_blank" rel="noreferrer">{section.cta}</a>
      </div>
      <img className="about-photo" data-reveal="1" src={section.image} alt={section.imageAlt} width="1200" height="900" />
    </section>
  )
}

function Services() {
  const section = home.services
  return (
    <section id="atendimentos" className="services">
      <p className="eyebrow" data-reveal>{section.eyebrow}</p>
      <h2 data-reveal="1">{section.title}</h2>
      <div className="service-grid">
        {section.items.map((item, index) => (
          <article key={item.title} data-reveal={String(index + 1)}>
            <img src={item.image} alt={item.imageAlt} width="800" height="600" />
            <span className="card-number">{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <a href={item.href} target="_blank" rel="noreferrer">{item.cta}</a>
          </article>
        ))}
      </div>
    </section>
  )
}

function About() {
  const section = home.about
  return (
    <section className="split about" id="sobre">
      <img className="about-photo" data-reveal src={section.image} alt={section.imageAlt} width="1200" height="900" />
      <div className="about-copy" data-reveal="1">
        <p className="eyebrow">{section.eyebrow}</p>
        <h2>{section.title}</h2>
        {section.paragraphs.map(paragraph => <p key={paragraph.slice(0, 48)}>{paragraph}</p>)}
        <div className="about-sign">
          <strong>{section.signName}</strong>
          <span>{section.signRole}</span>
        </div>
        <a className="text-link" href={section.ctaHref} target="_blank" rel="noreferrer">{section.cta}</a>
      </div>
    </section>
  )
}

function Questions() {
  const section = home.questions
  return (
    <section className="questions" aria-label="Perguntas que ecoam">
      <ul>
        {section.items.map((item, index) => (
          <li key={item} data-reveal={String(index)}>{item}</li>
        ))}
      </ul>
      <p data-reveal="1">{section.closing}</p>
    </section>
  )
}

function Faq() {
  const section = home.faq
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="faq">
      <div className="faq-head" data-reveal>
        <p className="eyebrow">{section.eyebrow}</p>
        <h2>{section.title}</h2>
      </div>
      <div className="faq-list" data-reveal="1">
        {section.items.map((item, index) => {
          const isOpen = open === index
          return (
            <div className={['faq-item', isOpen ? 'is-open' : ''].filter(Boolean).join(' ')} key={item.q}>
              <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : index)}>
                <span>{item.q}</span>
                <ChevronDown size={18} aria-hidden="true" />
              </button>
              <div className="faq-answer" hidden={!isOpen}>
                <p>{item.a}</p>
              </div>
            </div>
          )
        })}
      </div>
      <a className="button" href={section.ctaHref} target="_blank" rel="noreferrer" data-reveal>{section.cta}</a>
    </section>
  )
}

function Steps() {
  const section = home.steps
  return (
    <section className="split approach" id="passos">
      <div data-reveal>
        <h2>{section.title}</h2>
        <ol>
          {section.items.map((item, index) => (
            <li key={item}>
              <b>{String(index + 1).padStart(2, '0')}</b>
              <span>{item}</span>
            </li>
          ))}
        </ol>
        <a className="button" href={section.ctaHref} target="_blank" rel="noreferrer">{section.cta}</a>
      </div>
      <img className="about-photo" data-reveal="1" src={section.image} alt={section.imageAlt} width="1200" height="900" />
    </section>
  )
}

function Contact() {
  const section = home.contact
  return (
    <section id="contato" className="contact">
      <div data-reveal>
        <p className="eyebrow">{section.eyebrow}</p>
        <h2>{section.title}</h2>
        <p>{section.lead}</p>
        <a className="button" href={section.ctaHref} target="_blank" rel="noreferrer">{section.cta}</a>
        <div className="contact-links">
          <a href={contact.whatsapp} target="_blank" rel="noreferrer">
            <Phone size={18} aria-hidden="true" />
            {contact.phone}
          </a>
          <p>{contact.place}</p>
        </div>
      </div>
      <img className="about-photo" data-reveal="1" src={section.image} alt={section.imageAlt} width="1200" height="900" />
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div data-reveal>
        <a className="brand" href="#inicio" aria-label={brand.ariaLabel}>
          <img className="brand-mark" src={footer.logo} alt="" width="1024" height="1024" />
          <span className="brand-name">{brand.name}<small>{brand.tagline}</small></span>
        </a>
        <p>{footer.tagline}</p>
      </div>
      <div data-reveal="1">
        <b>{footer.contactHeading}</b>
        <a href={contact.whatsapp} target="_blank" rel="noreferrer">{contact.phone}</a>
      </div>
      <div data-reveal="2">
        <b>{footer.serviceHeading}</b>
        <p>{contact.placeShort}</p>
        <p>{contact.modes}</p>
      </div>
      <nav className="footer-nav" data-reveal="1" aria-label="Rodapé">
        {nav.groups.map(group => <a href={group.href} key={group.label}>{group.label}</a>)}
      </nav>
      <small className="legal" data-reveal="1">{footer.legal}</small>
      <a className="float-cta" href={contact.whatsapp} target="_blank" rel="noreferrer">{footer.floatCta}</a>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    document.title = brand.documentTitle
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Patterns />
        <Quote />
        <Methodology />
        <Services />
        <About />
        <Questions />
        <Faq />
        <Steps />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
