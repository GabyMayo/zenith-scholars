function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="brand-block">
          <div className="brand-mark">Z</div>
          <div>
            <p className="brand-name">Zenith Scholars</p>
            <p className="brand-subtitle">Asesorías de Matemática y Física</p>
          </div>
        </div>
        <nav className="nav-menu">
          <a href="#home">Inicio</a>
          <a href="#courses">Cursos</a>
          <a href="#tutors">Tutores</a>
          <a href="#pricing">Precios</a>
          <a href="#contact">Contacto</a>
        </nav>
        <div className="nav-socials">
          <span aria-hidden="true">💬</span>
          <span aria-hidden="true">📸</span>
          <span aria-hidden="true">✉️</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
