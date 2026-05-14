function PreviewCard({ title, description, icon }) {
  return (
    <div className="preview-card">
      <div className="preview-icon">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default PreviewCard;
