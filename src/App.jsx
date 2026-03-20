import "./App.css";

function App() {
  const creations = [
    {
      title: "Wooden Tableware",
      text: "Refined wooden pieces designed to bring warmth, elegance, and character to everyday dining and hosting moments.",
    },
    {
      title: "Raffia Décor",
      text: "Decorative creations made from raffia and natural fibers, crafted to add texture, identity, and softness to modern interiors.",
    },
    {
      title: "Custom Creations",
      text: "Unique pieces tailored to your space, with flexible dimensions, forms, finishes, and visual details.",
    },
  ];

  const process = [
    {
      title: "Creative Consultation",
      text: "We begin with a thoughtful conversation to understand your vision, your atmosphere, and the identity you want your space to express.",
    },
    {
      title: "Concept Exploration",
      text: "We develop aesthetic directions and creative proposals to shape the most relevant and inspiring outcome for your project.",
    },
    {
      title: "Personal Follow-Up",
      text: "From first concept to final creation, we stay close to every step to ensure a result aligned with your expectations.",
    },
  ];

  const advantages = [
    {
      title: "Exceptional Craftsmanship",
      text: "Each piece is handmade with care, precision, and a deep respect for artisanal know-how.",
    },
    {
      title: "Distinctive Presence",
      text: "Our creations are made for spaces that seek character, elegance, and refinement.",
    },
    {
      title: "Contemporary Vision",
      text: "We reinterpret everyday objects through a modern design language rooted in natural materials.",
    },
    {
      title: "Durability",
      text: "We select authentic materials for their beauty, resilience, and ability to endure gracefully over time.",
    },
  ];

  const values = ["Authenticity", "Craftsmanship", "Durability"];

  const trustedBy = ["Restaurant AFRICAFE", "Improtechnology Ltd Ghana"];

  return (
    <div className="site">
      <header className="header">
        <div className="brand">
          <h1>Artysia</h1>
          <p>Handcrafted objects for refined spaces</p>
        </div>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#creations">Creations</a>
          <a href="#story">Story</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-left">
          <p className="eyebrow">A Story in Every Piece</p>
          <h2>
            Handcrafted pieces designed to bring character, elegance, and
            identity into modern spaces.
          </h2>

          <div className="hero-buttons">
            <a href="#story" className="btn btn-dark">
              Discover Our World
            </a>
            <a href="#contact" className="btn btn-outline">
              Request a Custom Piece
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-inner">
            <h3>Artysia Signature</h3>
            <p>
              Wooden tableware, raffia décor, and natural fiber creations
              crafted for refined interiors and meaningful living.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-head two-col">
          <div>
            <p className="eyebrow">About Artysia</p>
            <h3>Crafted to elevate everyday living and exceptional spaces</h3>
          </div>
          <div className="section-text">
            <p>
              Artysia creates handcrafted wooden tableware and natural fiber
              decorative pieces designed to elevate everyday living and
              exceptional spaces.
            </p>
            <p>
              Each creation is rooted in craftsmanship, refined aesthetics, and
              a desire to bring identity back into modern interiors.
            </p>
          </div>
        </div>
      </section>

      <section id="creations" className="section section-alt">
        <div className="section-head">
          <p className="eyebrow">What We Create</p>
          <h3>Refined pieces with lasting character</h3>
        </div>

        <div className="card-grid three">
          {creations.map((item) => (
            <article className="card" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">Our Approach</p>
          <h3>A tailored creative experience</h3>
        </div>

        <div className="card-grid three">
          {process.map((item) => (
            <article className="card soft" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="story" className="section section-alt">
        <div className="section-head two-col">
          <div>
            <p className="eyebrow">Our Story</p>
            <h3>Design that remembers where it comes from</h3>
          </div>
          <div className="section-text">
            <p>
              Artysia was born from a simple observation: as our cities
              modernize, our spaces increasingly begin to look alike.
            </p>
            <p>
              We created Artysia to offer something different — objects that
              feel rooted, yet contemporary. Pieces made from wood, raffia, and
              natural fibers that do not imitate, but express.
            </p>
            <p>
              Our approach is to bring identity back into the spaces we live in
              through meaningful, modern design.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">Why Artysia</p>
          <h3>Distinction through craftsmanship</h3>
        </div>

        <div className="card-grid four">
          {advantages.map((item) => (
            <article className="card" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="mission-values">
          <div className="mission-box">
            <p className="eyebrow">Our Mission</p>
            <h3>
              To create timeless essential pieces where elegance, refinement,
              and functionality meet.
            </h3>
          </div>

          <div className="values-box">
            <p className="eyebrow">Our Values</p>
            <div className="tags">
              {values.map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">Trusted By</p>
          <h3>They trusted our vision</h3>
        </div>

        <div className="card-grid two">
          {trustedBy.map((item) => (
            <article className="card trust" key={item}>
              <h4>{item}</h4>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section section-alt">
        <div className="contact-box">
          <p className="eyebrow">Contact</p>
          <h3>Let’s create something meaningful</h3>
          <p className="contact-text">
            Whether you are looking for a statement piece, a refined collection,
            or a custom design, Artysia is ready to bring your vision to life.
          </p>

          <div className="hero-buttons">
            <a
              href="https://wa.me/233536939571"
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              Request a Custom Piece
            </a>
            <a href="mailto:contact@artysiahome.com" className="btn btn-outline">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/233XXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
      >
        Chat with us
      </a>
    </div>
  );
}

export default App;