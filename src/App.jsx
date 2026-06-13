import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import './App.css';

const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/artysiahome?igsh=MXRpejA3Mng5a2RiNA==', icon: 'instagram' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/artysia/', icon: 'linkedin' },
  { name: 'Facebook', href: 'https://www.facebook.com/share/18vY7otHsD/', icon: 'facebook' },
];

const collections = [
  { title: 'Tableware', image: '/table-setting.png', text: 'Wooden bowls, plates, trays and serving pieces for composed tables.' },
  { title: 'Decor', image: '/editorial-display.png', text: 'Natural fiber objects and warm sculptural details for refined interiors.' },
  { title: 'Signature Pieces', image: '/signature-bowl.png', text: 'Expressive pieces made to become quiet focal points in a room.' },
];

const journal = [
  { title: 'The Art of Hosting', image: '/table-setting.png', text: 'Creating a table that feels warm, intentional and memorable.' },
  { title: 'The Beauty of Natural Materials', image: '/tray-detail.png', text: 'Wood, raffia and natural fibers as a language of calm luxury.' },
  { title: 'Behind the Craft', image: '/craft-cup.png', text: 'A closer look at texture, finish and the hand behind every piece.' },
];

const policies = {
  privacy: {
    title: 'Privacy Policy',
    body: ['ARTYSIA respects your privacy and only collects information needed to respond to enquiries, manage communications and improve the website experience.', 'Information may include your name, email address, phone number, project details and messages submitted through contact links.', 'We do not sell personal information. Data is kept only for as long as necessary for communication, service delivery or legal requirements.'],
  },
  data: {
    title: 'Data Policy',
    body: ['We use submitted information to understand your request, prepare project discussions and maintain professional communication.', 'Website analytics, cookies or third-party services may be used to improve performance and understand general visitor behavior.', 'You may request access, correction or deletion of your personal information by contacting ARTYSIA.'],
  },
  terms: {
    title: 'Terms & Conditions',
    body: ['The ARTYSIA website presents brand information, collections and project enquiries. Content is provided for general information and may change without notice.', 'Images, logo, text and visual identity belong to ARTYSIA and may not be copied or reused without permission.', 'Bespoke project terms, timelines and pricing are confirmed separately in writing.'],
  },
  cookies: {
    title: 'Cookie Policy',
    body: ['Cookies may be used to support basic website functionality, improve browsing and understand visitor interactions.', 'You can disable cookies through your browser settings, although some features may not work as intended.', 'By continuing to use the website, you accept the use of essential and performance-related cookies.'],
  },
};

function Icon({ type }) {
  if (type === 'instagram') return <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8"/></svg>;
  if (type === 'linkedin') return <svg viewBox="0 0 24 24"><path d="M6.5 10v8M6.5 6.5v.1M11 18v-8M11 13.5c0-2 1.3-3.5 3.2-3.5s3.3 1.2 3.3 3.8V18"/></svg>;
  return <svg viewBox="0 0 24 24"><path d="M14 8h2V5h-2.4C11 5 10 6.6 10 8.8V11H8v3h2v6h3v-6h2.5l.5-3h-3V9c0-.7.3-1 1-1Z"/></svg>;
}

function Header() {
  return (
    <header className="header">
      <Link className="brand" to="/"><img src="/ARTYSIA.png" alt="ARTYSIA" /></Link>
      <nav>
        <Link to="/collections">Collections</Link>
        <Link to="/bespoke">Bespoke</Link>
        <Link to="/journal">Journal</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

function Footer() {
  const [modal, setModal] = useState(null);
  return (
    <footer className="footer">
      <img src="/ARTYSIA.png" alt="ARTYSIA" />
      <div className="footer-grid">
        <div><h4>Explore</h4><Link to="/collections">Collections</Link><Link to="/bespoke">Bespoke & Hospitality</Link><Link to="/journal">Journal</Link></div>
        <div><h4>Social</h4><div className="social-row">{socials.map((s) => <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}><Icon type={s.icon} /></a>)}</div></div>
        <div><h4>Legal</h4>{Object.entries(policies).map(([key, item]) => <button key={key} onClick={() => setModal(item)}>{item.title}</button>)}</div>
      </div>
      <p>© ARTYSIA — Natural objects for refined spaces.</p>
      {modal && <PolicyModal policy={modal} onClose={() => setModal(null)} />}
    </footer>
  );
}

function PolicyModal({ policy, onClose }) {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <p className="eyebrow">ARTYSIA</p>
        <h2>{policy.title}</h2>
        {policy.body.map((p) => <p key={p}>{p}</p>)}
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="hero" aria-label="ARTYSIA introduction">
        <video className="hero-video" src="/artysia-hero.mp4" autoPlay muted loop playsInline />
        <div className="hero-overlay" />
        <div className="hero-content">
          <img className="hero-logo" src="/ARTYSIA.png" alt="ARTYSIA" />
          <p>Refined tableware, natural décor and bespoke creations.</p>
          <h1>Crafted for spaces with soul.</h1>
          <Link to="/collections">Explore collection</Link>
        </div>
      </section>
      <section className="intro section compact">
        <div><p className="eyebrow">ARTYSIA HOME</p><h2>Rooted in craft. Refined by design.</h2></div>
        <div className="intro-copy"><p>ARTYSIA creates wooden tableware, raffia objects and natural fiber décor for homes, hotels, restaurants and interior projects.</p><Link className="text-link" to="/bespoke">Start a bespoke project</Link></div>
      </section>
      <section className="home-cards section">
        {collections.map((item) => <Link to="/collections" className="home-card" key={item.title}><img src={item.image} alt={item.title} /><span>{item.title}</span></Link>)}
      </section>
    </>
  );
}

function CollectionsPage() {
  return <PageHero eyebrow="Collections" title="Objects for refined natural spaces." text="Explore tableware, décor and signature pieces designed around wood, texture and atmosphere." image="/editorial-display.png"><CollectionGrid /></PageHero>;
}

function CollectionGrid() {
  return <section className="collections section page-section"><div className="collection-grid">{collections.map((item) => <article className="collection-card" key={item.title}><img src={item.image} alt={item.title} /><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></section>;
}

function BespokePage() {
  return <PageHero eyebrow="Bespoke & Hospitality" title="Created for hotels, restaurants and meaningful interiors." text="From mood to material, ARTYSIA develops pieces and collections with intention, scale and setting in mind." image="/tray-detail.png"><section className="split section page-section"><div><p className="eyebrow">Process</p><h2>From idea to object.</h2></div><div className="steps"><p><strong>01</strong> Share the space, mood and references.</p><p><strong>02</strong> Align material, dimensions and finish.</p><p><strong>03</strong> Develop the piece or collection.</p></div></section></PageHero>;
}

function JournalPage() {
  return <PageHero eyebrow="Journal" title="Notes on hosting, material and beautiful spaces." text="A quiet editorial space for the ARTYSIA universe." image="/craft-cup.png"><section className="journal-grid section page-section">{journal.map((post) => <article className="journal-card" key={post.title}><img src={post.image} alt={post.title} /><div><p className="eyebrow">Journal</p><h3>{post.title}</h3><p>{post.text}</p></div></article>)}</section></PageHero>;
}

function ContactPage() {
  return <PageHero eyebrow="Contact" title="Tell us about your space or project." text="For enquiries, collaborations, hospitality projects and bespoke pieces." image="/signature-bowl.png"><section className="contact section page-section"><div className="contact-actions"><a href="https://wa.me/233536939571" target="_blank" rel="noreferrer">WhatsApp</a><a href="mailto:contact@artysiahome.com">Email</a></div></section></PageHero>;
}

function PageHero({ eyebrow, title, text, image, children }) {
  return <><section className="page-hero section"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{text}</p></div><img src={image} alt="ARTYSIA visual" /></section>{children}</>;
}

function App() {
  return (
    <BrowserRouter>
      <main className="site">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/bespoke" element={<BespokePage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </main>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
