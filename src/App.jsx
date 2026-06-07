import './App.css';

const socials = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/artysiahome?igsh=MXRpejA3Mng5a2RiNA==',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.5"/><circle cx="17" cy="7" r="1"/></svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/artysia/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.8 9.8v8.8"/><path d="M11.3 18.6v-8.8"/><path d="M11.3 13.5c0-2.4 1.5-4 3.6-4 2 0 3.1 1.3 3.1 3.8v5.3"/><circle cx="6.8" cy="6.2" r="1.1"/></svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/18vY7otHsD/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 8.2h2.2V4.7h-2.6c-3 0-4.5 1.8-4.5 4.4v2H7v3.6h2.6v5.1h3.8v-5.1h3l.5-3.6h-3.5V9.5c0-.9.4-1.3 1.1-1.3Z"/></svg>
    ),
  },
];

const collections = [
  {
    number: '01',
    title: 'Wooden Tableware',
    image: '/table-setting.png',
    text: 'Plates, bowls, cutlery and serving pieces shaped for slow meals and refined hosting.',
  },
  {
    number: '02',
    title: 'Decor & Objects',
    image: '/engraved-tray.png',
    text: 'Carved trays, sculptural vessels and natural accents with warmth, texture and presence.',
  },
  {
    number: '03',
    title: 'Bespoke Creations',
    image: '/carved-bowl.png',
    text: 'Tailored pieces for hotels, restaurants, residences and interior design projects.',
  },
];

const journal = [
  {
    tag: 'Hosting',
    title: 'The Art of Hosting',
    text: 'How natural materials create a table that feels generous, elegant and personal.',
    image: '/cup-tray.png',
  },
  {
    tag: 'Materials',
    title: 'The Beauty of Natural Fibers',
    text: 'A quiet look at wood, raffia and the textures that bring depth to interiors.',
    image: '/craft-cup.png',
  },
  {
    tag: 'Craft',
    title: 'Behind the Craft',
    text: 'From grain to gesture, every ARTYSIA piece is guided by touch and intention.',
    image: '/showcase-atelier.png',
  },
];

const legalPages = [
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    intro: 'This policy explains how ARTYSIA handles personal information shared through our website, contact forms and social channels.',
    points: ['Contact details you choose to share may be used to respond to enquiries.', 'We do not sell personal information.', 'Third-party platforms may apply their own privacy practices when you visit our social pages.'],
  },
  {
    id: 'data-policy',
    title: 'Data Policy',
    intro: 'ARTYSIA collects only the information needed to communicate with clients, manage enquiries and improve the website experience.',
    points: ['Information may include name, email, phone number, project details and website usage data.', 'Data is kept only for as long as it is useful for legitimate business communication.', 'You may request correction or deletion by contacting ARTYSIA.'],
  },
  {
    id: 'terms',
    title: 'Terms & Conditions',
    intro: 'By using this website, you agree to use the content, images and information respectfully and only for lawful purposes.',
    points: ['All ARTYSIA visuals, copy and brand elements remain the property of ARTYSIA unless stated otherwise.', 'Project enquiries do not create a binding agreement until confirmed in writing.', 'Product availability, lead times and specifications may vary depending on project requirements.'],
  },
  {
    id: 'cookies',
    title: 'Cookie Policy',
    intro: 'Cookies may be used to support basic website functionality and understand general visitor activity.',
    points: ['You can manage cookies in your browser settings.', 'Analytics cookies, if enabled, help improve content and navigation.', 'External platforms linked from this site may use their own cookies.'],
  },
];

function SocialIcon({ social }) {
  return (
    <a className="socialIcon" href={social.href} target="_blank" rel="noreferrer" aria-label={social.name}>
      {social.icon}
      <span>{social.name}</span>
    </a>
  );
}

function App() {
  return (
    <main className="site" id="top">
      <header className="header" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="ARTYSIA home">
          <img src="/ARTYSIA.png" alt="ARTYSIA" />
        </a>
        <nav className="mainNav">
          <a href="#story">Story</a>
          <a href="#collections">Collections</a>
          <a href="#bespoke">Bespoke</a>
          <a href="#journal">Journal</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="headerSocials" aria-label="Social links">
          {socials.map((social) => <SocialIcon key={social.name} social={social} />)}
        </div>
      </header>

      <section className="hero" aria-label="ARTYSIA video introduction">
        <video className="heroVideo" src="/artysia-hero.mp4" autoPlay muted loop playsInline />
        <div className="heroShade" />
        <div className="heroContent">
          <p className="kicker">ARTYSIA HOME</p>
          <h1>Crafted for spaces with soul.</h1>
          <p>Refined wooden tableware, natural décor and bespoke creations for homes, hotels and curated interiors.</p>
          <div className="heroActions">
            <a className="button light" href="#collections">Discover ARTYSIA</a>
            <a className="textLink lightText" href="#story">Our story</a>
          </div>
        </div>
      </section>

      <section id="story" className="manifesto section split">
        <div>
          <p className="eyebrow">Design House</p>
          <h2>Rooted in craft. Refined by design.</h2>
        </div>
        <div className="copyBlock">
          <p>ARTYSIA creates wooden tableware, raffia objects and natural fiber décor designed to bring warmth, authenticity and timeless elegance to exceptional spaces.</p>
          <p>Every piece is shaped to feel tactile, grounded and quietly luxurious.</p>
        </div>
      </section>

      <section className="editorial section">
        <figure className="imageFrame wide">
          <img src="/signature-display.png" alt="ARTYSIA wooden tableware and decor display" />
        </figure>
        <div className="editorialText">
          <p className="eyebrow">Nature Refined</p>
          <h2>Objects that change the atmosphere of a room.</h2>
          <p>Warm wood, carved details and soft natural tones create pieces that belong in spaces where beauty is intentional.</p>
        </div>
      </section>

      <section id="collections" className="collections section">
        <div className="sectionIntro">
          <p className="eyebrow">Collections</p>
          <h2>For tables, interiors and memorable spaces.</h2>
        </div>
        <div className="collectionGrid">
          {collections.map((item) => (
            <article className="collectionCard" key={item.title}>
              <figure>
                <img src={item.image} alt={`${item.title} by ARTYSIA`} />
              </figure>
              <div>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="craft" className="craftSection">
        <div className="section craftGrid">
          <div className="craftCopy">
            <p className="eyebrow muted">Craftsmanship</p>
            <h2>Every piece carries the hand of the maker.</h2>
            <p>ARTYSIA celebrates the beauty of natural material: the visible grain, the carved edge, the imperfect texture and the quiet character that make each object feel alive.</p>
          </div>
          <figure className="imageFrame portrait">
            <img src="/craft-cup.png" alt="ARTYSIA wooden cup and tray" />
          </figure>
          <figure className="imageFrame landscape">
            <img src="/showcase-atelier.png" alt="ARTYSIA atelier display" />
          </figure>
        </div>
      </section>

      <section id="bespoke" className="bespoke section split reverse">
        <div className="copyBlock">
          <p className="eyebrow">Bespoke Projects</p>
          <h2>Tailored creations for exceptional spaces.</h2>
          <p>For hotels, restaurants, luxury residences and interior designers, ARTYSIA develops custom objects and collections aligned with the material palette, mood and identity of each project.</p>
          <a className="button" href="#contact">Start a project</a>
        </div>
        <figure className="imageFrame tall">
          <img src="/carved-tray.png" alt="Carved wooden tray by ARTYSIA" />
        </figure>
      </section>

      <section className="hospitality section">
        <p className="eyebrow">Hospitality & Interiors</p>
        <h2>Designed for hotels, restaurants, villas and curated homes.</h2>
        <div className="hospitalityGrid">
          <span>Hotels</span>
          <span>Restaurants</span>
          <span>Interior Designers</span>
          <span>Luxury Residences</span>
        </div>
      </section>

      <section id="journal" className="journal section">
        <div className="sectionIntro center">
          <p className="eyebrow">Journal</p>
          <h2>The ARTYSIA Journal</h2>
          <p>Notes on hosting, material culture, interiors and the quiet luxury of natural objects.</p>
        </div>
        <div className="journalGrid">
          {journal.map((item) => (
            <article className="journalCard" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div>
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="socialWall section">
        <div>
          <p className="eyebrow">Social</p>
          <h2>Follow the world of ARTYSIA.</h2>
        </div>
        <div className="socialLarge">
          {socials.map((social) => <SocialIcon key={social.name} social={social} />)}
        </div>
      </section>

      <section className="newsletter section">
        <p className="eyebrow">Newsletter</p>
        <h2>Join the ARTYSIA Journal.</h2>
        <form onSubmit={(event) => event.preventDefault()}>
          <input type="email" placeholder="Email address" aria-label="Email address" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <section id="contact" className="contact section">
        <img src="/ARTYSIA.png" alt="ARTYSIA" />
        <p className="eyebrow">Contact</p>
        <h2>Let’s create something natural, refined and personal.</h2>
        <div className="contactActions">
          <a className="button filled" href="https://wa.me/233536939571" target="_blank" rel="noreferrer">WhatsApp</a>
          <a className="button" href="mailto:contact@artysiahome.com">Email</a>
        </div>
      </section>

      <section className="legal section" aria-label="Legal information">
        {legalPages.map((page) => (
          <article id={page.id} key={page.id}>
            <h3>{page.title}</h3>
            <p>{page.intro}</p>
            <ul>
              {page.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </article>
        ))}
      </section>

      <footer className="footer">
        <div className="footerInner section">
          <div className="footerBrand">
            <img src="/ARTYSIA.png" alt="ARTYSIA" />
            <p>Refined tableware, natural décor and bespoke creations.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <a href="#story">Story</a>
            <a href="#collections">Collections</a>
            <a href="#bespoke">Bespoke</a>
            <a href="#journal">Journal</a>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="#privacy-policy">Privacy Policy</a>
            <a href="#data-policy">Data Policy</a>
            <a href="#terms">Terms & Conditions</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
          <div>
            <h4>Social</h4>
            {socials.map((social) => <a key={social.name} href={social.href} target="_blank" rel="noreferrer">{social.name}</a>)}
          </div>
        </div>
        <p className="copyright">© 2026 ARTYSIA. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default App;
