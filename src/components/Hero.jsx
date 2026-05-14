function Hero() {
  return (
    <div className="hero-copy">
      <span className="eyebrow">Asesorías académicas con un enfoque moderno</span>
      <h1>Zenith Scholars te ayuda a mejorar en matemática y física.</h1>
      <p>
        Apoyo para estudiantes de secundaria e IB mediante explicación clara de conceptos, práctica y preparación con confianza.
      </p>

      <div className="hero-actions">
        <a className="button button-primary" href="#contact">Reservar consulta</a>
        <a className="button button-secondary" href="#courses">Ver cursos</a>
      </div>

      <div className="hero-stats">
        <div className="stat-card">
          <strong>4.9 / 5</strong>
          <span>Satisfacción estudiantil</span>
        </div>
        <div className="stat-card">
          <strong>12+</strong>
          <span>Años combinados de experiencia</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
