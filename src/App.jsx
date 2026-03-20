export default function App() {
  const featured = [
    {
      title: "Signature Piece",
      description:
        "A refined handcrafted creation designed to bring warmth, texture, and quiet sophistication into curated interiors.",
    },
    {
      title: "Natural Texture Series",
      description:
        "A collection inspired by raw beauty, organic forms, and balanced tones that elevate modern and timeless spaces.",
    },
    {
      title: "Custom Interior Accent",
      description:
        "Bespoke decorative pieces imagined to complement your atmosphere, palette, and personal aesthetic.",
    },
  ];

  const creations = [
    {
      title: "Decor Pieces",
      text: "Elegant handcrafted objects created to enrich homes, offices, and curated spaces with character and artistic presence.",
    },
    {
      title: "Custom Collections",
      text: "Exclusive pieces and small collections developed around your preferences, style direction, and desired ambiance.",
    },
    {
      title: "Creative Guidance",
      text: "A thoughtful approach to selecting shapes, textures, and decorative accents that align beautifully with your vision.",
    },
  ];

  return (
    <div
      style={{
        fontFamily: 'Georgia, "Times New Roman", serif',
        backgroundColor: "#f8f3ec",
        color: "#1f1a17",
        margin: 0,
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "rgba(248, 243, 236, 0.95)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid #e4d8c8",
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "22px 28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ fontSize: "34px", letterSpacing: "0.04em" }}>Artysia</div>
            <div
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "13px",
                color: "#7b6a5d",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginTop: "6px",
              }}
            >
              Handcrafted décor and lifestyle pieces
            </div>
          </div>

          <nav
            style={{
              display: "flex",
              gap: "22px",
              flexWrap: "wrap",
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
            }}
          >
            <a href="#about" style={{ color: "#5d4c40", textDecoration: "none" }}>About</a>
            <a href="#creations" style={{ color: "#5d4c40", textDecoration: "none" }}>Creations</a>
            <a href="#collection" style={{ color: "#5d4c40", textDecoration: "none" }}>Collection</a>
            <a href="#contact" style={{ color: "#5d4c40", textDecoration: "none" }}>Contact</a>
          </nav>
        </div>
      </header>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "90px 28px 70px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "Arial, sans-serif",
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              fontSize: "12px",
              color: "#8a7462",
              marginBottom: "18px",
            }}
          >
            Crafted elegance
          </div>
          <h1
            style={{
              fontSize: "clamp(42px, 7vw, 76px)",
              lineHeight: 1.04,
              fontWeight: 500,
              margin: "0 0 24px",
            }}
          >
            Timeless pieces designed to elevate beautiful spaces.
          </h1>
          <p
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#5f5249",
              maxWidth: "620px",
              margin: 0,
            }}
          >
            Artysia brings together craftsmanship, softness, and natural inspiration to create décor objects and bespoke collections with a refined, understated luxury.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              marginTop: "34px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <a
              href="#collection"
              style={{
                backgroundColor: "#201815",
                color: "#fff",
                textDecoration: "none",
                padding: "14px 24px",
                borderRadius: "999px",
                fontSize: "14px",
                letterSpacing: "0.05em",
              }}
            >
              Discover the Collection
            </a>
            <a
              href="#contact"
              style={{
                color: "#201815",
                textDecoration: "none",
                padding: "14px 24px",
                borderRadius: "999px",
                border: "1px solid #cdb9a7",
                fontSize: "14px",
                letterSpacing: "0.05em",
                backgroundColor: "transparent",
              }}
            >
              Request a Custom Piece
            </a>
          </div>
        </div>

        <div
          style={{
            background: "linear-gradient(180deg, #eadfce 0%, #dcc7ad 100%)",
            borderRadius: "28px",
            minHeight: "520px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 25px 70px rgba(76, 53, 34, 0.14)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "28px",
              border: "1px solid rgba(255,255,255,0.45)",
              borderRadius: "24px",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "72%",
              height: "72%",
              backgroundColor: "rgba(255,255,255,0.32)",
              borderRadius: "26px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "20px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "34px",
                  marginBottom: "14px",
                }}
              >
                Artysia Collection
              </div>
              <p
                style={{
                  fontFamily: "Arial, sans-serif",
                  color: "#5f5249",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                Replace this visual area with a premium product photo, interior styling image, or hero collection image.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "30px 28px 80px",
        }}
      >
        <div
          style={{
            backgroundColor: "#fffaf4",
            border: "1px solid #eadfce",
            borderRadius: "26px",
            padding: "42px",
            boxShadow: "0 16px 50px rgba(76, 53, 34, 0.05)",
          }}
        >
          <div
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#8a7462",
              marginBottom: "12px",
            }}
          >
            About Artysia
          </div>
          <h2 style={{ fontSize: "42px", margin: "0 0 16px", fontWeight: 500 }}>
            Where craftsmanship meets quiet luxury.
          </h2>
          <p
            style={{
              fontFamily: "Arial, sans-serif",
              lineHeight: 1.9,
              fontSize: "17px",
              color: "#5f5249",
              maxWidth: "900px",
              margin: 0,
            }}
          >
            Artysia is a creative brand dedicated to handcrafted décor and lifestyle pieces. Each creation is imagined to bring depth, warmth, and elegance into a space, with an emphasis on natural beauty, thoughtful detail, and timeless aesthetic value.
          </p>
        </div>
      </section>

      <section
        id="creations"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 28px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            alignItems: "end",
            marginBottom: "28px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#8a7462",
                marginBottom: "10px",
              }}
            >
              Our creations
            </div>
            <h2 style={{ fontSize: "40px", margin: 0, fontWeight: 500 }}>
              Designed with intention and distinction.
            </h2>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "22px",
          }}
        >
          {creations.map((item) => (
            <div
              key={item.title}
              style={{
                backgroundColor: "#fffaf4",
                border: "1px solid #eadfce",
                borderRadius: "22px",
                padding: "28px",
                boxShadow: "0 14px 38px rgba(76, 53, 34, 0.05)",
              }}
            >
              <h3 style={{ fontSize: "28px", fontWeight: 500, margin: "0 0 14px" }}>{item.title}</h3>
              <p
                style={{
                  fontFamily: "Arial, sans-serif",
                  color: "#5f5249",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="collection"
        style={{
          backgroundColor: "#efe4d6",
          padding: "84px 28px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#8a7462",
              marginBottom: "10px",
            }}
          >
            Featured collection
          </div>
          <h2 style={{ fontSize: "42px", margin: "0 0 28px", fontWeight: 500 }}>
            Signature expressions of texture, form, and beauty.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {featured.map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: "#fffaf4",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 18px 40px rgba(76, 53, 34, 0.09)",
                }}
              >
                <div
                  style={{
                    height: "250px",
                    background: "linear-gradient(180deg, #d6c1ab 0%, #b99773 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.85)",
                    fontFamily: "Arial, sans-serif",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontSize: "12px",
                  }}
                >
                  Product Image
                </div>
                <div style={{ padding: "26px" }}>
                  <h3 style={{ fontSize: "28px", margin: "0 0 12px", fontWeight: 500 }}>{item.title}</h3>
                  <p
                    style={{
                      fontFamily: "Arial, sans-serif",
                      color: "#5f5249",
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "84px 28px",
        }}
      >
        <div
          style={{
            backgroundColor: "#201815",
            color: "#f7efe6",
            borderRadius: "28px",
            padding: "44px",
            boxShadow: "0 24px 60px rgba(28, 20, 17, 0.18)",
          }}
        >
          <div
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#d9bea4",
              marginBottom: "10px",
            }}
          >
            Get in touch
          </div>
          <h2 style={{ fontSize: "42px", margin: "0 0 16px", fontWeight: 500 }}>
            Let’s create something beautifully distinctive.
          </h2>
          <p
            style={{
              fontFamily: "Arial, sans-serif",
              color: "#e6d8ca",
              lineHeight: 1.9,
              maxWidth: "760px",
              margin: "0 0 28px",
            }}
          >
            Connect with Artysia for product inquiries, custom-made requests, collaborations, and collection information.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "18px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <div>
              <div style={{ color: "#d9bea4", marginBottom: "6px" }}>Email</div>
              <div>contact@artysia.com</div>
            </div>
            <div>
              <div style={{ color: "#d9bea4", marginBottom: "6px" }}>Phone</div>
              <div>+233 XX XXX XXXX</div>
            </div>
            <div>
              <div style={{ color: "#d9bea4", marginBottom: "6px" }}>Location</div>
              <div>Accra, Ghana</div>
            </div>
          </div>
        </div>
      </section>

      <footer
        style={{
          borderTop: "1px solid #e4d8c8",
          padding: "24px 28px 40px",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          color: "#7b6a5d",
          fontSize: "14px",
        }}
      >
        © 2026 Artysia. All rights reserved.
      </footer>
    </div>
  );
}
