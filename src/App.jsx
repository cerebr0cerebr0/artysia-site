export default function HomePage() {
  const services = [
    "Wooden Tableware Collections",
    "Raffia & Natural Fiber Décor",
    "Durable & Distinctive Creations",
  ];

  const approach = [
    {
      title: "Creative Consultation",
      text: "We begin with an in-depth dialogue to understand your vision, your space, and the atmosphere you want to create.",
    },
    {
      title: "Concept Exploration",
      text: "We propose refined aesthetic directions and concepts to identify the most relevant and inspiring solution for your project.",
    },
    {
      title: "Personal Follow-Up",
      text: "From concept to final piece, we ensure close collaboration at every stage to deliver a result aligned with your expectations.",
    },
  ];

  const customPoints = [
    "Made-to-measure design",
    "Flexible dimensions & forms",
    "Material & color customization",
    "Integration of your visual identity",
  ];

  const benefits = [
    {
      title: "Exceptional Craftsmanship",
      text: "Each piece is handmade by skilled artisans with years of experience and a deep commitment to quality.",
    },
    {
      title: "Contemporary Vision",
      text: "We reinterpret everyday objects through a modern design language rooted in natural materials.",
    },
    {
      title: "Distinctive Presence",
      text: "Our creations are designed for those who seek character, elegance, and refinement.",
    },
    {
      title: "Durability",
      text: "We select materials for their authenticity, strength, and ability to stand the test of time.",
    },
  ];

  const values = ["Authenticity", "Craftsmanship", "Durability"];
  const trustedBy = ["Restaurant AFRICAFE", "Improtechnology Ltd Ghana"];

  return (
    <main className="bg-[#f6f1eb] text-[#241f1a]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#8a6f55]">
              Artysia
            </p>
            <h1 className="max-w-xl font-serif text-5xl leading-tight md:text-6xl">
              A Story in Every Piece
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5b5148]">
              Artysia creates handcrafted wooden tableware and natural fiber
              decorative pieces designed to bring character, elegance, and
              identity into modern spaces.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#story"
                className="rounded-full bg-[#241f1a] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Discover Our World
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[#241f1a] px-6 py-3 text-sm font-medium text-[#241f1a] transition hover:bg-[#241f1a] hover:text-white"
              >
                Request a Custom Piece
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 hidden h-40 w-40 rounded-[2rem] bg-[#d8c5b1] lg:block" />
            <img
              src="/images/hero-artysia.jpg"
              alt="Artysia handcrafted decorative pieces"
              className="relative z-10 h-[520px] w-full rounded-[2rem] object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE CREATE */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#8a6f55]">
              What We Create
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Crafted for everyday beauty and meaningful spaces
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5b5148]">
              We design and craft refined wooden tableware collections, as well
              as decorative pieces made from raffia and other natural fibers.
              Each creation is designed to elevate both everyday living and
              exceptional hosting moments through timeless aesthetics and
              enduring quality.
            </p>
          </div>

          <div className="grid gap-4">
            {services.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-[#e2d7cc] bg-white/70 p-6 shadow-sm"
              >
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[#efe5db]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8a6f55]">
            Our Approach
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            A tailored creative experience
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {approach.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] bg-white p-8 shadow-sm"
              >
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#5b5148]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM PIECES */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <img
              src="/images/custom-piece.jpg"
              alt="Unique customizable Artysia piece"
              className="h-[500px] w-full rounded-[2rem] object-cover shadow-lg"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#8a6f55]">
              Custom Design
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Unique & Customizable Pieces
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5b5148]">
              Every Artysia creation is designed to adapt to your world.
              Dimensions, forms, materials, and colors can be tailored to
              reflect the identity of your space or brand.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {customPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#e2d7cc] bg-white/70 p-5"
                >
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE */}
      <section className="bg-[#241f1a] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d8c5b1]">
              Signature
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              A Distinctive Signature
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#ddd2c7]">
              Artysia combines noble materials with precise craftsmanship to
              create pieces that go beyond functionality. Each creation carries
              a strong visual identity, transforming everyday objects into
              collectible design pieces.
            </p>
            <p className="mt-8 text-2xl font-semibold text-[#f2e6d7]">
              Rare pieces for spaces with character.
            </p>
          </div>
        </div>
      </section>

      {/* WHY ARTYSIA */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8a6f55]">
          Why Artysia
        </p>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl">
          Why Work With Us
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-[#e2d7cc] bg-white p-8 shadow-sm"
            >
              <h3 className="font-serif text-2xl">{item.title}</h3>
              <p className="mt-4 leading-7 text-[#5b5148]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="bg-[#efe5db]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#8a6f55]">
              Our Story
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Design that remembers where it comes from
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-[#5b5148]">
              <p>
                Artysia was born from a simple observation: as our cities
                modernize, our spaces increasingly begin to look alike.
              </p>
              <p>
                Across different places, the identity of spaces is slowly
                fading, replaced by standardized aesthetics.
              </p>
              <p>
                Artysia was created to offer something different — objects that
                feel rooted, yet contemporary.
              </p>
              <p>
                We work with wood, raffia, and natural fibers to create pieces
                that do not imitate, but express.
              </p>
              <p>
                Our approach is to bring back identity into the spaces we live
                in, through design that is modern, meaningful, and deeply
                connected to its origins.
              </p>
            </div>
          </div>

          <div>
            <img
              src="/images/story-artysia.jpg"
              alt="Artysia woven design story"
              className="h-[560px] w-full rounded-[2rem] object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-10 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-[#8a6f55]">
              Our Mission
            </p>
            <h2 className="mt-3 font-serif text-4xl">
              Timeless essentials where elegance, refinement, and functionality
              meet
            </h2>
          </div>

          <div className="rounded-[2rem] border border-[#e2d7cc] bg-[#faf7f3] p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#8a6f55]">
              Our Values
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {values.map((value) => (
                <span
                  key={value}
                  className="rounded-full border border-[#cdb9a5] px-5 py-2 text-sm font-medium"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="bg-[#efe5db]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8a6f55]">
            Trusted By
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            Brands and spaces that trusted our vision
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {trustedBy.map((client) => (
              <div
                key={client}
                className="rounded-[1.75rem] bg-white p-8 text-xl shadow-sm"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="rounded-[2.5rem] bg-[#241f1a] px-8 py-14 text-white md:px-14">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d8c5b1]">
            Contact
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl md:text-5xl">
            Let’s create something meaningful
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#ddd2c7]">
            Whether you are looking for a statement piece, a refined collection,
            or a fully customized design, Artysia is ready to bring your vision
            to life.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/XXXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#241f1a] transition hover:opacity-90"
            >
              Request a Custom Piece
            </a>
            <a
              href="mailto:contact@artysiahome.com"
              className="rounded-full border border-white px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#241f1a]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/XXXXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 rounded-full bg-[#241f1a] px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:opacity-90"
      >
        Chat with us on WhatsApp
      </a>
    </main>
  );
}