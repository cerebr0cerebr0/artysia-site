import './App.css';

const nav = ['Our Story', 'Tableware', 'Decor', 'Projects', 'Process', 'Contact'];

const collections = [
  { title: 'Wooden Tableware', subtitle: 'Bowls, trays, serving pieces and dining accents crafted for warm, refined tables.', tone: 'cyan' },
  { title: 'Raffia & Natural Fibers', subtitle: 'Wall decor, baskets, lampshades and textured objects for interiors with identity.', tone: 'olive' },
  { title: 'Bespoke Projects', subtitle: 'Custom pieces for homes, restaurants, hotels and curated spaces.', tone: 'rust' },
];

const values = [
  ['Made with intention', 'Every piece is designed around material, purpose and atmosphere.'],
  ['Made for interiors', 'Objects that elevate hospitality, residential and lifestyle spaces.'],
  ['Made together', 'A collaborative process from creative direction to final piece.'],
];

const products = ['Statement bowls', 'Serving trays', 'Raffia wall pieces', 'Decorative baskets', 'Natural fiber lamps', 'Custom hotel pieces'];

const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/artysiahome?igsh=MXRpejA3Mng5a2RiNA==' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/artysia/' },
  { name: 'Facebook', href: 'https://www.facebook.com/share/18vY7otHsD/' },
];

function LeafMark() {
  return <div className="leafmark"><i /><i /><i /><i /><i /></div>;
}

function App() {
  return (
    <main className="site" id="top">
      <header className="header">
        <a href="#top" className="brand" aria-label="ARTYSIA home"><img src="/ARTYSIA.png" alt="ARTYSIA" /></a>
        <nav>{nav.map((item) => <a href={`#${item.toLowerCase().replaceAll(' ', '-')}`} key={item}>{item}</a>)}</nav>
      </header>

      <section className="hero">
        <div className="hero-frame hero-one"><p>WELCOME TO</p><h1>ARTYSIA</h1></div>
        <div className="hero-frame hero-two"><p>NATURAL</p><h2>OBJECTS</h2></div>
        <div className="hero-frame hero-three"><p>WOOD • RAFFIA • FIBERS</p><h2>CREATE YOURS</h2></div>
        <div className="hero-marquee"><span>ARTYSIA</span><span>TABLEWARE</span><span>DECOR</span><span>BESPOKE</span></div>
      </section>

      <section id="our-story" className="story section">
        <div className="story-title"><p className="kicker">A refined natural home</p><h2>Premium tableware and decor made for spaces with soul.</h2></div>
        <div className="story-text">
          <p>ARTYSIA is a design house specialized in wooden tableware, raffia objects and natural fiber decoration. We create pieces that bring warmth, elegance and identity to homes, hotels, restaurants and curated interiors.</p>
          <p>Inspired by the Bonobo-style layout, this version is more editorial, image-led and catalogue-ready, while keeping ARTYSIA’s own colors, logo and premium direction.</p>
        </div>
      </section>

      <section id="tableware" className="collection-feature section">
        <div className="big-card wood"><LeafMark /><p>WOODEN TABLEWARE</p><h2>Timeless pieces for memorable tables.</h2></div>
        <div className="side-copy"><p className="kicker">Collection</p><h3>From everyday rituals to hospitality presentation.</h3><p>Bowls, trays and serving objects designed with a strong natural presence and a clean contemporary finish.</p><a href="#contact">Start a tableware project</a></div>
      </section>

      <section id="decor" className="cards section">
        {collections.map((item) => <article className={`card ${item.tone}`} key={item.title}><span /> <h3>{item.title}</h3><p>{item.subtitle}</p></article>)}
      </section>

      <section className="values-section section">
        <h2>ARTISANAL VALUE</h2>
        <div className="values-grid">{values.map(([title, text]) => <div className="value" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
      </section>

      <section id="projects" className="portfolio section">
        <div><p className="kicker">Where material meets creativity</p><h2>Explore pieces for interiors, hospitality and special projects.</h2></div>
        <div className="product-grid">{products.map((p) => <div className="product" key={p}><LeafMark /><strong>{p}</strong></div>)}</div>
      </section>

      <section id="process" className="order section">
        <h2>How to place an order?</h2>
        <div className="order-grid">
          <p><strong>Pick a direction:</strong> choose from our tableware, decor or social media references.</p>
          <p><strong>Get creative:</strong> share dimensions, colors, mood and the atmosphere you want.</p>
          <p><strong>Create together:</strong> we align the design, materials and finish before production.</p>
        </div>
      </section>

      <section id="contact" className="contact section">
        <div><h2>Looking for something personalized?</h2><p>Tell us about your space, project or collection.</p></div>
        <div className="contact-actions"><a href="https://wa.me/233536939571" target="_blank" rel="noreferrer">WhatsApp</a><a href="mailto:contact@artysiahome.com">Email</a></div>
      </section>

      <footer>
        <img src="/ARTYSIA.png" alt="ARTYSIA" />
        <div>{socials.map((s) => <a href={s.href} target="_blank" rel="noreferrer" key={s.name}>{s.name}</a>)}</div>
        <p>© ARTYSIA. Natural objects for refined spaces.</p>
      </footer>
    </main>
  );
}

export default App;
