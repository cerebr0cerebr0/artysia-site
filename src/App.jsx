import './App.css';

const collections = [
  {
    name: 'Wooden tableware',
    text: 'Bowls, trays and dining pieces shaped to bring warmth, depth and quiet luxury to the table.',
    accent: 'cyan',
  },
  {
    name: 'Raffia & natural fibers',
    text: 'Textural decorative objects for hotels, residences and spaces that need a strong natural identity.',
    accent: 'olive',
  },
  {
    name: 'Bespoke pieces',
    text: 'Custom dimensions, finishes and creative directions developed around the atmosphere of your project.',
    accent: 'terracotta',
  },
];

const steps = ['Consultation', 'Creative direction', 'Material selection', 'Production follow-up'];

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/artysiahome?igsh=MXRpejA3Mng5a2RiNA==' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/artysia/' },
  { name: 'Facebook', href: 'https://www.facebook.com/share/18vY7otHsD/' },
];

function App() {
  return (
    <main className="site">
      <header className="header">
        <a className="logo-wrap" href="#top" aria-label="ARTYSIA home">
          <img src="/ARTYSIA.png" alt="ARTYSIA logo" />
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a href="#collections">Collections</a>
          <a href="#approach">Approach</a>
          <a href="#socials">Platforms</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Wood • Raffia • Natural fibers</p>
          <h1>Objects with soul for refined interiors.</h1>
          <p className="lead">
            ARTYSIA designs premium wooden tableware and decorative pieces in natural fibers for homes,
            hotels, restaurants and curated spaces.
          </p>
          <div className="actions">
            <a className="btn primary" href="#contact">Start a project</a>
            <a className="btn secondary" href="#collections">Explore the work</a>
          </div>
        </div>

        <div className="visual-card" aria-label="ARTYSIA color identity">
          <div className="leaf leaf-cyan" />
          <div className="leaf leaf-rust" />
          <div className="leaf leaf-olive" />
          <div className="leaf leaf-coral" />
          <div className="leaf leaf-orange" />
          <div className="visual-text">
            <span>Signature palette</span>
            <strong>vivid, natural, premium</strong>
          </div>
        </div>
      </section>

      <section className="intro section-shell">
        <p className="statement">
          We create pieces that make a space feel intentional: elegant, grounded, contemporary and connected
          to natural materials.
        </p>
      </section>

      <section id="collections" className="section-shell split-section">
        <div>
          <p className="eyebrow">Collections</p>
          <h2>Designed for presence, made for everyday beauty.</h2>
        </div>
        <div className="collection-grid">
          {collections.map((item) => (
            <article className={`collection-card ${item.accent}`} key={item.name}>
              <span />
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="approach" className="approach">
        <div className="section-shell approach-inner">
          <p className="eyebrow light">Our approach</p>
          <h2>A tailored creative process for distinctive projects.</h2>
          <div className="steps">
            {steps.map((step, index) => (
              <div className="step" key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell values">
        <div className="value-panel dark">
          <p className="eyebrow">Mission</p>
          <h2>To create timeless essential pieces where elegance, refinement and functionality meet.</h2>
        </div>
        <div className="value-panel light-panel">
          <p className="eyebrow">Values</p>
          <div className="tags">
            <span>Authenticity</span>
            <span>Craftsmanship</span>
            <span>Durability</span>
            <span>Identity</span>
          </div>
        </div>
      </section>

      <section id="socials" className="socials section-shell">
        <div>
          <p className="eyebrow">Platforms</p>
          <h2>Follow ARTYSIA across our digital spaces.</h2>
        </div>
        <div className="social-grid">
          {socialLinks.map((link) => (
            <a className="social-card" href={link.href} target="_blank" rel="noreferrer" key={link.name}>
              <span>{link.name.slice(0, 2)}</span>
              <strong>{link.name}</strong>
              <small>Open platform</small>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="contact section-shell">
        <div className="contact-card">
          <p className="eyebrow">Contact</p>
          <h2>Let’s create something meaningful.</h2>
          <p>
            For bespoke pieces, tableware collections or natural fiber décor, tell us about your space and
            the atmosphere you want to create.
          </p>
          <div className="actions">
            <a className="btn primary" href="https://wa.me/233536939571" target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="btn secondary" href="mailto:contact@artysiahome.com">Email us</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <img src="/ARTYSIA.png" alt="ARTYSIA" />
        <div className="footer-socials" aria-label="ARTYSIA social platforms">
          {socialLinks.map((link) => (
            <a href={link.href} target="_blank" rel="noreferrer" key={link.name}>{link.name}</a>
          ))}
        </div>
        <p>Premium natural objects for refined spaces.</p>
      </footer>
    </main>
  );
}

export default App;
