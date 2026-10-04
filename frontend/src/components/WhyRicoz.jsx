
export default function WhyRicoz() {
  const features = [
    {
      icon: '✦',
      title: 'Centralized Lead Generation',
      desc: 'Receive customer inquiries through a unified platform and focus on converting opportunities into successful projects.',
    },
    {
      icon: '⌂',
      title: 'Complete Operational Support',
      desc: 'Get assistance with business operations, workflows and service delivery so you can run your franchise with confidence.',
    },
    {
      icon: '▦',
      title: 'Technology-Powered Platform',
      desc: 'Manage leads, projects, teams, finances and performance from a single business dashboard.',
    },
  ];

  return (
    <section className="why-section" id="why">
      <div className="container">
        <div className="section-label">WHY RICOZ</div>
        <h2 className="section-title">Everything You Need To Build A Successful Franchise Business</h2>
        <p className="section-desc">
          Launch, manage and grow your business with a complete ecosystem designed for modern entrepreneurs. From technology and training to marketing and operational support, Ricoz helps you succeed at every stage.
        </p>

        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}