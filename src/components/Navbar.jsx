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
        <nav className="nav-menu" aria-label="Main navigation">
          <a href="#home">Inicio</a>
          <a href="#courses">Cursos</a>
          <a href="#tutors">Tutores</a>
          <a href="#pricing">Precios</a>
          <a href="#contact">Contacto</a>
        </nav>
        <div className="nav-socials" aria-label="Social links">
          <a href="#chat" title="Chat"><span aria-hidden="true">💬</span></a>
          <a href="#instagram" title="Instagram"><span aria-hidden="true">📸</span></a>
          <a href="#email" title="Email"><span aria-hidden="true">✉️</span></a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
