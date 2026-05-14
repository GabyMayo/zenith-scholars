function CourseSection({ plans }) {
  return (
    <div className="course-grid">
      {plans.map((plan) => (
        <article key={plan.title} className="course-card">
          <span className="course-tag">{plan.category}</span>
          <h3>{plan.title}</h3>
          <p>{plan.description}</p>
          <div className="course-topics">
            {plan.topics.map((topic) => (
              <span key={topic} className="course-chip">{topic}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export default CourseSection;
