import "../styles/Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">📚 VAULT PRO DIGITAL</div>
      <ul className="nav-links">
        <li><a href="/home">Inicio</a></li>
        <li><a href="#">Catálogo</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}
