import './App.css';

const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/artysiahome?igsh=MXRpejA3Mng5a2RiNA==' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/artysia/' },
  { name: 'Facebook', href: 'https://www.facebook.com/share/18vY7otHsD/' },
];

const collections = [
  { title: 'Tableware', image: '/tableware.jpg', text: 'Wooden bowls, trays and serving pieces crafted for refined tables.' },
  { title: 'Decor', image: '/decor.jpg', text: 'Raffia objects and natural fiber pieces for calm, expressive interiors.' },
  { title: 'Bespoke', image: '/interior.jpg', text: 'Custom creations for hotels, restaurants, residences and curated projects.' },
];

function App() {
  return (
    <main className="site" id="top">
      <header className="header">
        <a className="brand" href="#top"><img src="/ARTYSIA.png" alt="ARTYSIA" /></a>
        <nav>
          <a href="#story">Story</a>
          <a href="#collections">Collections</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" aria-label="ARTYSIA introduction">
        <video className="hero-video" src="/artysia-hero.mp4" autoPlay muted loop playsInline />
        <div className="hero-overlay" />
        <div className="hero-content">
          <img src="/ARTYSIA.png" alt="ARTYSIA" />
          <p>Refined tableware, natural décor and bespoke creations.</p>
          <h1>Crafted for spaces with soul.</h1>
          <a href="#collections">Explore collection</a>
        </div>
      </section>

      <section id="story" className="intro section">
        <p className="eyebrow">ARTYSIA HOME</p>
        <h2>A design house for wooden tableware, raffia objects and natural fiber décor.</h2>
        <p className="intro-text">We create warm, elegant and intentional pieces for homes, hotels, restaurants and interior projects — where natural materials become part of the atmosphere.</p>
      </section>

      <section className="editorial section">
        <div className="editorial-image"><img src="/texture-wood.jpg" alt="Natural ARTYSIA material mood" /></div>
        <div className="editorial-copy">
          <p className="eyebrow">Nature refined</p>
          <h2>Objects that feel quiet, grounded and considered.</h2>
          <p>ARTYSIA is built around material honesty, soft textures and a timeless visual language. The website now lets the imagery breathe instead of forcing too many colors or blocks.</p>
        </div>
      </section>

      <section id="collections" className="collections section">
        <div className="section-heading">
          <p className="eyebrow">Collections</p>
          <h2>For refined natural spaces.</h2>
        </div>
        <div className="collection-grid">
          {collections.map((item) => (
            <article className="collection-card" key={item.title}>
              <img src={item.image} alt={`${item.title} by ARTYSIA`} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="section projects-inner">
          <p className="eyebrow">Hospitality & private projects</p>
          <h2>Created for hotels, restaurants, interior designers and homes with character.</h2>
          <a href="#contact">Start a bespoke project</a>
        </div>
      </section>

      <section className="split section">
        <div>
          <p className="eyebrow">Process</p>
          <h2>From mood to material, every piece is developed with intention.</h2>
        </div>
        <div className="steps">
          <p><strong>01</strong> Share your space, mood and references.</p>
          <p><strong>02</strong> We align dimensions, materials and finish.</p>
          <p><strong>03</strong> ARTYSIA creates the piece or collection.</p>
        </div>
      </section>

      <section id="contact" className="contact section">
        <p className="eyebrow">Contact</p>
        <h2>Looking for something personalized?</h2>
        <p>Tell us about your home, hospitality space or interior project.</p>
        <div className="contact-actions">
          <a href="https://wa.me/233536939571" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="mailto:contact@artysiahome.com">Email</a>
        </div>
      </section>

      <footer className="footer">
        <img src="/ARTYSIA.png" alt="ARTYSIA" />
        <div>{socials.map((s) => <a key={s.name} href={s.href} target="_blank" rel="noreferrer">{s.name}</a>)}</div>
        <p>© ARTYSIA — Natural objects for refined spaces.</p>
      </footer>
    </main>
  );
}

export default App;
