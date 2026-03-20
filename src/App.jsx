export default function App() {
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

  const values = [
    "Authenticity",
    "Craftsmanship",
    "Durability",
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

  const trustedBy = [
    "Restaurant AFRICAFE",
    "Improtechnology Ltd Ghana",
  ];

  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#1f1a17]">
      {/* NAVBAR */}
      <header className="border-b border-[#d8cfc3]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <div>
            <h1 className="font-serif text-5xl leading-none tracking-tight">
              Artysia
            </h1>
            <p className="mt-2 text-sm uppercase tracking-[0.28em] text-[#8a715a]">
              Handcrafted objects for refined spaces
            </p>
          </div>

          <nav className="hidden gap-8 text-lg text-[#5b4d42] md:flex">
            <a href="#about" className="transition hover:opacity-70">
              About
            </a>
            <a href="#creations" className="transition hover:opacity-70">
              Creations
            </a>
            <a href="#story" className="transition hover:opacity-70">
              Story
            </a>
            <a href="#contact" className="transition hover:opacity-70">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-8 pb-20 pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-8 text-sm uppercase tracking-[0.35em] text-[#9a7b5f]">
              A Story in Every Piece
            </p>

            <h2 className="max-w-xl text-6xl font-medium leading-[0.92] tracking-tight md:text-7xl">
              Handcrafted pieces designed to bring character, elegance, and
              identity into modern spaces.
            </h2>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#story"
                className="rounded-full bg-[#1f1a17] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Discover Our World
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[#1f1a17] px-6 py-3 text-sm font-medium text-[#1f1a17] transition hover:bg-[#1f1a17] hover:text-white"
              >
                Request a Custom Piece
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#e9dcc9] p-6">
            <div className="rounded-[2rem] border border-white/40 p-6">
              <div className="flex min-h-[440px] items-center justify-center rounded-[2rem] bg-[#f3ede4] p-10 text-center">
                <div>
                  <h3 className="font-serif text-4xl md:text-5xl text-[#2d2219]">
                    Artysia Signature
                  </h3>
                  <p className="mx-auto mt-6 max-w-md text-xl leading-10 text-[#6c5440]">
                    Wooden tableware, raffia décor, and natural fiber creations
                    crafted for refined interiors and meaningful living.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-[#e3d9ce]">
        <div className="mx-auto max-w-7xl px-8 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#9a7b5f]">
                About Artysia
              </p>
              <h3 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                Crafted to elevate everyday living and exceptional spaces
              </h3>
            </div>

            <div className="space-y-6 text-xl leading-10 text-[#5c4f45]">
              <p>
                Artysia creates handcrafted wooden tableware and natural fiber
                decorative pieces designed to elevate everyday living and
                exceptional spaces.
              </p>
              <p>
                Each creation is rooted in craftsmanship, refined aesthetics,
                and a desire to bring identity back into modern interiors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CREATIONS */}
      <section id="creations" className="bg-[#f0e8de]">
        <div className="mx-auto max-w-7xl px-8 py-20">
          <div className="mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-[#9a7b5f]">
              What We Create
            </p>
            <h3 className="mt-4 font-serif text-4xl md:text-5xl">
              Refined pieces with lasting character
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {creations.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-[#ddd2c6] bg-[#f8f4ef] p-8"
              >
                <h4 className="font-serif text-3xl leading-tight">
                  {item.title}
                </h4>
                <p className="mt-5 text-lg leading-8 text-[#5c4f45]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-[#e3d9ce]">
        <div className="mx-auto max-w-7xl px-8 py-20">
          <div className="mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-[#9a7b5f]">
              Our Approach
            </p>
            <h3 className="mt-4 font-serif text-4xl md:text-5xl">
              A tailored creative experience
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {process.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] bg-[#e9dcc9] p-8"
              >
                <div className="rounded-[1.5rem] bg-[#f5f1eb] p-6">
                  <h4 className="font-serif text-3xl leading-tight">
                    {item.title}
                  </h4>
                  <p className="mt-5 text-lg leading-8 text-[#5c4f45]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="bg-[#f5f1eb] border-t border-[#e3d9ce]">
        <div className="mx-auto max-w-7xl px-8 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#9a7b5f]">
                Our Story
              </p>
              <h3 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                Design that remembers where it comes from
              </h3>
            </div>

            <div className="space-y-6 text-xl leading-10 text-[#5c4f45]">
              <p>
                Artysia was born from a simple observation: as our cities
                modernize, our spaces increasingly begin to look alike.
              </p>
              <p>
                We created Artysia to offer something different — objects that
                feel rooted, yet contemporary. Pieces made from wood, raffia,
                and natural fibers that do not imitate, but express.
              </p>
              <p>
                Our approach is to bring identity back into the spaces we live
                in through meaningful, modern design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ARTYSIA */}
      <section className="bg-[#f0e8de] border-t border-[#e3d9ce]">
        <div className="mx-auto max-w-7xl px-8 py-20">
          <div className="mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-[#9a7b5f]">
              Why Artysia
            </p>
            <h3 className="mt-4 font-serif text-4xl md:text-5xl">
              Distinction through craftsmanship
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-[#ddd2c6] bg-[#f8f4ef] p-8"
              >
                <h4 className="font-serif text-3xl leading-tight">
                  {item.title}
                </h4>
                <p className="mt-5 text-lg leading-8 text-[#5c4f45]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION + VALUES */}
      <section className="border-t border-[#e3d9ce]">
        <div className="mx-auto max-w-7xl px-8 py-20">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] bg-[#e9dcc9] p-8">
              <div className="rounded-[1.5rem] bg-[#f5f1eb] p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-[#9a7b5f]">
                  Our Mission
                </p>
                <h3 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                  To create timeless essential pieces where elegance,
                  refinement, and functionality meet.
                </h3>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#ddd2c6] bg-[#f8f4ef] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9a7b5f]">
                Our Values
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {values.map((value) => (
                  <span
                    key={value}
                    className="rounded-full border border-[#c9b7a3] px-5 py-2 text-sm font-medium text-[#5c4f45]"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="bg-[#f5f1eb] border-t border-[#e3d9ce]">
        <div className="mx-auto max-w-7xl px-8 py-20">
          <div className="mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-[#9a7b5f]">
              Trusted By
            </p>
            <h3 className="mt-4 font-serif text-4xl md:text-5xl">
              They trusted our vision
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {trustedBy.map((item) => (
              <div
                key={item}
                className="rounded-[2rem] border border-[#ddd2c6] bg-[#f8f4ef] p-8 text-2xl text-[#2d2219]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-[#e3d9ce] bg-[#f0e8de]"
      >
        <div className="mx-auto max-w-7xl px-8 py-20">
          <div className="rounded-[2rem] bg-[#e9dcc9] p-8">
            <div className="rounded-[2rem] bg-[#f5f1eb] px-8 py-12 md:px-12">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9a7b5f]">
                Contact
              </p>
              <h3 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                Let’s create something meaningful
              </h3>
              <p className="mt-6 max-w-3xl text-xl leading-10 text-[#5c4f45]">
                Whether you are looking for a statement piece, a refined
                collection, or a custom design, Artysia is ready to bring your
                vision to life.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/233XXXXXXXXX"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#1f1a17] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Request a Custom Piece
                </a>
                <a
                  href="mailto:contact@artysiahome.com"
                  className="rounded-full border border-[#1f1a17] px-6 py-3 text-sm font-medium text-[#1f1a17] transition hover:bg-[#1f1a17] hover:text-white"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/233XXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 rounded-full bg-[#1f1a17] px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:opacity-90"
      >
        Chat with us
      </a>
    </div>
  );
}