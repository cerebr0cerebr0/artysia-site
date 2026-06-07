import './App.css';

const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/artysiahome?igsh=MXRpejA3Mng5a2RiNA==' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/artysia/' },
  { name: 'Facebook', href: 'https://www.facebook.com/share/18vY7otHsD/' },
];

const collections = [
  {
    title: 'Tableware',
    image: '/table-setting.png',
    text: 'Bowls, plates, spoons and serving pieces shaped for quiet, refined tables.',
  },
  {
    title: 'Statement Pieces',
    image: '/carved-tray.png',
    text: 'Hand-finished wooden pieces designed to bring warmth and presence to interiors.',
  },
  {
    title: 'Bespoke Projects',
    image: '/carved-bowl.png',
    text: 'Custom pieces for homes, hotels, restaurants and curated hospitality projects.',
  },
];

function App() {
  return (
    <main className="site" id="top">
      <header className="header">
        <a className="brand" href="#top" aria-label="ARTYSIA home">
          <img src="/ARTYSIA.png" alt="ARTYSIA" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#story">Story</a>
          <a href="#collections">Collections</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" aria-label="ARTYSIA introduction">
        <img className="hero-image" src="/showcase-atelier.png" alt="ARTYSIA wooden tableware display" />
        <div className="hero-shade" />
        <div className="hero-panel">
          <p className="eyebrow light">ARTYSIA HOME</p>
          <h1>Wooden tableware and natural décor with soul.</h1>
          <p className="hero-text">Refined objects for homes, hotels, restaurants and considered interiors.</p>
          <a className="button light-button" href="#collections">Explore collection</a>
        </div>
      </section>

      <section id="story" className="story section">
        <div className="story-copy">
          <p className="eyebrow">Our language</p>
          <h2>Natural materials, quiet luxury, and pieces made to belong.</h2>
        </div>
        <p className="story-text">
          ARTYSIA is a design house specializing in wooden tableware, raffia objects and natural fiber décor. Each piece is created to bring warmth, identity and understated elegance into refined spaces.
        </p>
      </section>

      <section className="feature section">
        <div className="feature-image tall">
          <img src="/table-setting.png" alt="Wooden plate and cutlery by ARTYSIA" />
        </div>
        <div className="feature-copy">
          <p className="eyebrow">Tableware</p>
          <h2>Designed for tables that feel calm, warm and intentional.</h2>
          <p>From everyday rituals to hospitality settings, ARTYSIA pieces bring natural texture and a grounded presence to the table.</p>
        </div>
      </section>

      <section id="collections" className="collections section">
        <div className="section-heading">
          <p className="eyebrow">Collections</p>
          <h2>Objects with texture, presence and purpose.</h2>
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

      <section id="projects" className="wide-feature">
        <img src="/cup-tray.png" alt="Wooden cup and tray by ARTYSIA" />
        <div className="wide-content">
          <p className="eyebrow light">Hospitality & private projects</p>
          <h2>Created for spaces with character.</h2>
          <p>Hotels, restaurants, interior designers and private residences can develop bespoke pieces or curated sets with ARTYSIA.</p>
          <a className="button light-button" href="#contact">Start a project</a>
        </div>
      </section>

      <section className="feature reverse section">
        <div className="feature-copy">
          <p className="eyebrow">Details</p>
          <h2>Wood grain, carved lines and the warmth of the hand.</h2>
          <p>The beauty of each object comes from its material: the pattern of the wood, the softness of the finish and the quiet irregularities that make every piece feel alive.</p>
        </div>
        <div className="feature-image">
          <img src="/carved-bowl.png" alt="Carved wooden bowl by ARTYSIA" />
        </div>
      </section>

      <section id="contact" className="contact section">
        <p className="eyebrow">Contact</p>
        <h2>Looking for something personalized?</h2>
        <p>Tell us about your home, hospitality space or interior project.</p>
        <div className="contact-actions">
          <a className="button" href="https://wa.me/233536939571" target="_blank" rel="noreferrer">WhatsApp</a>
          <a className="button outline" href="mailto:contact@artysiahome.com">Email</a>
        </div>
      </section>

      <footer className="footer">
        <img src="/ARTYSIA.png" alt="ARTYSIA" />
        <div className="socials">
          {socials.map((s) => <a key={s.name} href={s.href} target="_blank" rel="noreferrer">{s.name}</a>)}
        </div>
        <p>© ARTYSIA — Natural objects for refined spaces.</p>
      </footer>
    </main>
  );
}

export default App;
