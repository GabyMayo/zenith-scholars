function ContactSection({ contacts }) {
  return (
    <div className="contact-grid">
      {contacts.map((item) => (
        <article key={item.label} className="contact-card">
          <div className="contact-icon">{item.icon}</div>
          <div>
            <h3>{item.label}</h3>
            <p>{item.detail}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ContactSection;
