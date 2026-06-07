import './App.css';

const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/artysiahome?igsh=MXRpejA3Mng5a2RiNA==' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/artysia/' },
  { name: 'Facebook', href: 'https://www.facebook.com/share/18vY7otHsD/' },
];

const collectionCards = [
  {
    label: '01',
    title: 'Tableware',
    image: '/table-setting.png',
    text: 'Wooden plates, bowls and cutlery designed for quiet, refined tables.',
  },
  {
    label: '02',
    title: 'Serving Pieces',
    image: '/engraved-tray.png',
    text: 'Statement trays and objects where carved detail meets warm natural wood.',
  },
  {
    label: '03',
    title: 'Bespoke Objects',
    image: '/carved-bowl.png',
    text: 'Custom pieces for homes, hotels, restaurants and interior projects.',
  },
];

function App() {
  return (
    <main className="site" id="top">
      <header className="header" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="ARTYSIA home">
          <img src="/ARTYSIA.png" alt="ARTYSIA" />
        </a>
        <nav>
          <a href="#story">Story</a>
          <a href="#collections">Collections</a>
          <a href="#craft">Craft</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" aria-label="ARTYSIA video introduction">
        <video className="heroVideo" src="/artysia-hero.mp4" autoPlay muted loop playsInline />
        <div className="heroShade" />
        <div className="heroInner">
          <p className="kicker">ARTYSIA HOME</p>
          <h1>Crafted for spaces with soul.</h1>
          <p className="heroText">Refined wooden tableware, natural décor and bespoke creations for warm, intentional interiors.</p>
          <a className="button buttonLight" href="#collections">Explore the collection</a>
        </div>
      </section>

      <section id="story" className="manifesto section">
        <div className="manifestoText">
          <p className="eyebrow">Design house</p>
          <h2>Natural objects with presence, texture and quiet elegance.</h2>
        </div>
        <div className="manifestoCopy">
          <p>ARTYSIA creates wooden tableware, raffia objects and natural fiber décor for homes, hotels, restaurants and curated interior projects.</p>
          <p>Our pieces bring warmth and identity to spaces while keeping a refined, contemporary language.</p>
        </div>
      </section>

      <section className="feature section">
        <figure className="featureImage large">
          <img src="/signature-display.png" alt="ARTYSIA wooden tableware display" />
        </figure>
        <div className="featureText">
          <p className="eyebrow">Rooted in craft</p>
          <h2>Wood shaped into atmosphere.</h2>
          <p>Every curve, grain and finish is selected to feel grounded, tactile and timeless.</p>
        </div>
      </section>

      <section id="collections" className="collections section">
        <div className="sectionHead">
          <p className="eyebrow">Collections</p>
          <h2>For refined natural spaces.</h2>
        </div>
        <div className="cards">
          {collectionCards.map((item) => (
            <article className="card" key={item.title}>
              <div className="cardImage">
                <img src={item.image} alt={`${item.title} by ARTYSIA`} />
              </div>
              <div className="cardBody">
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="craft" className="craft">
        <div className="craftGrid section">
          <div className="craftText">
            <p className="eyebrow">Signature detail</p>
            <h2>Pieces that carry the hand of the maker.</h2>
            <p>ARTYSIA’s visual language is warm and grounded: carved surfaces, natural grain, soft light and intentional silhouettes.</p>
          </div>
          <figure className="craftImage portrait">
            <img src="/craft-cup.png" alt="ARTYSIA wooden cup and tray" />
          </figure>
        </div>
      </section>

      <section className="gallery section" aria-label="ARTYSIA image gallery">
        <img src="/table-setting.png" alt="Wooden plate and cutlery by ARTYSIA" />
        <img src="/engraved-tray.png" alt="Engraved wooden tray by ARTYSIA" />
        <img src="/carved-bowl.png" alt="Carved wooden bowl by ARTYSIA" />
      </section>

      <section className="projects section">
        <div>
          <p className="eyebrow">Hospitality & interiors</p>
          <h2>Created for hotels, restaurants, interior designers and private homes.</h2>
        </div>
        <p>For bespoke projects, ARTYSIA develops objects and collections that align with the mood, materials and identity of each space.</p>
      </section>

      <section id="contact" className="contact section">
        <img src="/ARTYSIA.png" alt="ARTYSIA" />
        <p className="eyebrow">Contact</p>
        <h2>Let’s create something natural, refined and personal.</h2>
        <div className="contactActions">
          <a className="button" href="https://wa.me/233536939571" target="_blank" rel="noreferrer">WhatsApp</a>
          <a className="button" href="mailto:contact@artysiahome.com">Email</a>
        </div>
        <div className="socials">
          {socials.map((social) => (
            <a key={social.name} href={social.href} target="_blank" rel="noreferrer">{social.name}</a>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
