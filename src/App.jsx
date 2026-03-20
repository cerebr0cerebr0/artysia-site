export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0, color: "#222", backgroundColor: "#fff" }}>
      <header style={{ borderBottom: "1px solid #ddd", padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: "28px" }}>Artysia</h1>
          <p style={{ margin: "5px 0 0", color: "#666" }}>Handcrafted décor and lifestyle pieces</p>
        </div>
        <nav style={{ display: "flex", gap: "20px" }}>
          <a href="#about">About</a>
          <a href="#creations">Creations</a>
          <a href="#collection">Collection</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section style={{ padding: "80px 40px", textAlign: "center", backgroundColor: "#f8f5f0" }}>
        <h2 style={{ fontSize: "42px", maxWidth: "800px", margin: "0 auto" }}>
          Timeless handcrafted pieces that bring warmth, texture, and character to your space
        </h2>
        <p style={{ maxWidth: "700px", margin: "20px auto", fontSize: "18px", color: "#555" }}>
          Discover Artysia’s world of artisanal creations, refined décor pieces, and custom-made collections
          designed to reflect beauty, authenticity, and craftsmanship.
        </p>
      </section>

      <section id="about" style={{ padding: "60px 40px" }}>
        <h3>About Artysia</h3>
        <p style={{ maxWidth: "800px", lineHeight: 1.7 }}>
          Artysia is a creative brand dedicated to handcrafted décor and lifestyle pieces. We transform
          natural inspiration into elegant objects designed to bring warmth, identity, and artistic value
          into homes, offices, and curated spaces.
        </p>
      </section>

      <section id="creations" style={{ padding: "60px 40px", backgroundColor: "#fafafa" }}>
        <h3>Our Creations</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginTop: "30px" }}>
          <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
            <h4>Decor Pieces</h4>
            <p>A curated selection of handcrafted décor items designed to enrich your interior spaces.</p>
          </div>
          <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
            <h4>Custom Collections</h4>
            <p>Exclusive pieces and small collections tailored to your preferences, colors, and desired atmosphere.</p>
          </div>
          <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
            <h4>Creative Guidance</h4>
            <p>Support and inspiration for selecting pieces that align with your space, style, and vision.</p>
          </div>
        </div>
      </section>

      <section id="collection" style={{ padding: "60px 40px" }}>
        <h3>Featured Collection</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "30px" }}>
          <div style={{ border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden" }}>
            <div style={{ height: "180px", backgroundColor: "#ddd" }}></div>
            <div style={{ padding: "20px" }}>
              <h4>Signature Piece</h4>
              <p>A handcrafted creation that reflects Artysia’s blend of authenticity, detail, and refined aesthetics.</p>
            </div>
          </div>
          <div style={{ border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden" }}>
            <div style={{ height: "180px", backgroundColor: "#ddd" }}></div>
            <div style={{ padding: "20px" }}>
              <h4>Natural Texture Series</h4>
              <p>Pieces inspired by raw textures, soft tones, and organic beauty.</p>
            </div>
          </div>
          <div style={{ border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden" }}>
            <div style={{ height: "180px", backgroundColor: "#ddd" }}></div>
            <div style={{ padding: "20px" }}>
              <h4>Custom Interior Accent</h4>
              <p>Unique objects created to elevate specific spaces with charm and personality.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: "60px 40px", backgroundColor: "#f8f5f0", textAlign: "center" }}>
        <h3>Get in Touch</h3>
        <p>Connect with Artysia for product inquiries, custom orders, collaborations, or collection requests.</p>
        <p>Email: contact@artysia.com</p>
        <p>Phone: +233 XX XXX XXXX</p>
        <p>Address: Accra, Ghana</p>
      </section>

      <footer style={{ borderTop: "1px solid #ddd", padding: "20px 40px", textAlign: "center", color: "#666" }}>
        © 2026 Artysia. All rights reserved.
      </footer>
    </div>
  );
}