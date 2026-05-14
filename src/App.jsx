import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import SectionHeader from './components/SectionHeader.jsx';
import PreviewCard from './components/PreviewCard.jsx';
import CourseSection from './components/CourseSection.jsx';
import TutorSection from './components/TutorSection.jsx';
import PricingSection from './components/PricingSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

const coursePlans = [
  {
    title: 'Matemática - Secundaria',
    description: 'Dominio de funciones, álgebra, geometría y trigonometría para el currículo secundario.',
    topics: [
      'Funciones cuadráticas',
      'Polinomios',
      'Productos notables y factorización',
      'Sistemas de ecuaciones lineales',
      'Análisis combinatorio',
      'Logaritmos y exponentes',
      'Progresiones aritméticas y geométricas',
      'Interés simple y compuesto',
      'Geometría',
      'Trigonometría',
      'Binomio de Newton',
      'Sector circular'
    ],
    category: 'Secundaria'
  },
  {
    title: 'Física - Secundaria',
    description: 'Fundamentos de movimiento, fuerzas y energía con énfasis en resolución de problemas.',
    topics: [
      'Análisis dimensional',
      'Vectores',
      'MRU',
      'MRUV',
      'Movimiento parabólico',
      'Diagrama de cuerpo libre',
      'Problemas de estática',
      'Dinámica',
      'Potencia, energía y trabajo',
      'MCU y gravitación'
    ],
    category: 'Secundaria'
  },
  {
    title: 'Matemática - IB',
    description: 'Apoyo IB para álgebra, funciones, geometría, probabilidad y cálculo.',
    topics: [
      'Números y álgebra',
      'Funciones',
      'Geometría y trigonometría',
      'Estadística y probabilidad',
      'Cálculo'
    ],
    category: 'IB'
  },
  {
    title: 'Física - IB',
    description: 'Cobertura IB de mecánica, ondas, electricidad y física moderna con enfoque conceptualmente claro.',
    topics: [
      'Mediciones e incertidumbre',
      'Mecánica',
      'Física térmica',
      'Ondas',
      'Electricidad y magnetismo',
      'Movimiento circular y gravitación',
      'Física atómica, nuclear y de partículas',
      'Producción de energía'
    ],
    category: 'IB'
  }
];

const tutors = [
  {
    name: 'Joaquin Alarcón',
    subject: 'Tutor de Matemática y Física',
    university: 'Purdue University',
    degree: 'Estudiante de Ingeniería Aeroespacial',
    description: '“No basta con saber cómo se llama una estrella, la emoción está en entender cómo brilla y qué historias cuenta del universo.”'
  },
  {
    name: 'Álvaro Castro',
    subject: 'Tutor de Matemática y Física',
    university: 'UPC',
    degree: 'Estudiante de Ingeniería Mecatrónica',
    description: '“El futuro pertenece a quienes entienden la tecnología no solo como una herramienta, sino como un puente hacia la innovación.”'
  },
  {
    name: 'Marcelo Katayama',
    subject: 'Tutor de Matemática y Física',
    university: 'University of Winnipeg',
    degree: 'Estudiante de Física Matemática',
    description: '“La belleza de la ciencia yace en ser un proyecto paradójico: es la satisfacción de poder entender el universo a detalle.”'
  }
];

const pricingOptions = [
  {
    name: 'Paquete semanal',
    price: 'S/.90',
    features: ['Sesiones semanales', 'Revisión de tareas', 'Chequeos de progreso']
  },
  {
    name: 'Paquete mensual',
    price: 'S/.170',
    features: ['Preparación para exámenes', 'Práctica de problemas', 'Apoyo IB dedicado']
  },
  {
    name: 'Precio por hora',
    price: 'S/.360',
    features: ['Acceso preferente', 'Plan personalizado', 'Revisión de material']
  }
];

const contacts = [
  { label: 'WhatsApp', detail: '+123 456 7890', icon: '💬' },
  { label: 'Instagram', detail: '@zenithscholars', icon: '📸' },
  { label: 'Gmail', detail: 'zenithscholars@gmail.com', icon: '✉️' },
  { label: 'Yape / Plin', detail: 'Payment placeholder', icon: '💳' }
];

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <section className="hero-section">
          <div className="page-shell">
            <section className="hero-panel" id="home">
              <div className="hero-content">
                <Hero />
                <div className="hero-cards">
                  <PreviewCard
                    title="Matemática"
                    description="Construye confianza matemática a través de álgebra, cálculo y pensamiento preparado para exámenes."
                    icon="∑"
                  />
                  <PreviewCard
                    title="Física"
                    description="Gana claridad en mecánica, ondas, electricidad y resolución de problemas estilo IB."
                    icon="⚛️"
                  />
                </div>
              </div>
              <div className="hero-sidebar">
                <div className="feature-card card">
                  <h3>¿Listo para tu siguiente paso?</h3>
                  <p>Explora los cursos, conoce a los tutores y elige el plan que mejor se adapte a tus metas.</p>
                  <div className="hero-pill-grid">
                    <span>Funciones</span>
                    <span>Vectores</span>
                    <span>Cálculo</span>
                    <span>Ondas</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="section-block" id="courses">
          <div className="page-shell">
            <SectionHeader
              eyebrow="Cursos"
              title="Rutas para Secundaria e IB"
              description="Elige el nivel adecuado para tu etapa académica con rutas de aprendizaje claras y organizadas."
            />
            <CourseSection plans={coursePlans} />
          </div>
        </section>

        <section className="section-block tutors-block" id="tutors">
          <div className="page-shell">
            <SectionHeader
              eyebrow="Tutores"
              title="Conoce a tus tutores"
              description="Tutores con experiencia en STEM, enfocados en comprensión, práctica y confianza."
            />
            <TutorSection tutors={tutors} />
          </div>
        </section>

        <section className="section-block pricing-block" id="pricing">
          <div className="page-shell">
            <SectionHeader
              eyebrow="Precios"
              title="Planes de asesoría simples y transparentes"
              description="Compara opciones de precios claras y adaptadas a tus necesidades."
            />
            <PricingSection options={pricingOptions} />
          </div>
        </section>

        <section className="section-block contact-block" id="contact">
          <div className="page-shell">
            <SectionHeader
              eyebrow="Contacto"
              title="Contáctanos"
              description="Escríbenos por WhatsApp, Instagram o correo electrónico."
            />
            <ContactSection contacts={contacts} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
