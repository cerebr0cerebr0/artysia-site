import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="site">
      <header className="header">
        <div className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <h1>Artysia</h1>
            <p>Handcrafted objects for refined spaces</p>
          </Link>
        </div>

        <nav className="nav">
          <Link to="/about">About</Link>
          <Link to="/creations">Creations</Link>
          <Link to="/story">Story</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      {children}

      <a
        href="https://wa.me/233536939571"
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
      >
        Chat with us
      </a>
    </div>
  );
}