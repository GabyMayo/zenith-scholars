function PricingSection({ options }) {
  return (
    <div className="pricing-grid">
      {options.map((option) => (
        <article key={option.name} className="pricing-card">
          <div className="pricing-header">
            <span>{option.name}</span>
            <strong>{option.price}</strong>
          </div>
          <ul>
            {option.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <a className="button button-primary" href="#contact">Select plan</a>
        </article>
      ))}
    </div>
  );
}

export default PricingSection;
