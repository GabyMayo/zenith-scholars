function TutorSection({ tutors }) {
  return (
    <div className="tutor-grid">
      {tutors.map((tutor) => (
        <article key={tutor.name} className="tutor-card">
          <div className="tutor-avatar">
            {tutor.image ? (
              <img src={tutor.image} alt={`Portrait of ${tutor.name}`} />
            ) : (
              <span>{tutor.name.split(' ').map((part) => part[0]).join('')}</span>
            )}
          </div>
          <div className="tutor-content">
            <h3>{tutor.name}</h3>
            <p className="tutor-role">{tutor.subject}</p>
            <p className="tutor-meta">{tutor.university} · {tutor.degree}</p>
            <p>{tutor.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default TutorSection;
