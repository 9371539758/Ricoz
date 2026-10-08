import { motion } from 'framer-motion';

const journeySteps = [
  {
    number: '01',
    icon: '◎',
    title: 'Express Interest',
    description: 'Tell us about your goals and location preference.',
  },
  {
    number: '02',
    icon: '♙',
    title: 'Get Onboarded',
    description: 'Our team will guide you through the opportunity and process.',
  },
  {
    number: '03',
    icon: '↗',
    title: 'Set Up & Launch',
    description: 'Receive training and setup support, then go live with your business.',
  },
  {
    number: '04',
    icon: '✦',
    title: 'Grow & Scale',
    description: 'Leverage our platform, marketing and operational support to expand.',
  },
];

export default function WhyRicoz() {
  return (
    <section className="why-section" id="why">
      <div className="container why-layout">
        <aside className="why-sticky">
          <div className="why-title-art" aria-hidden="true">
            <span>WHY</span>
            <strong>Ricoz?</strong>
            <i />
          </div>
          <div className="section-label">WHY RICOZ</div>
          <h2 className="section-title">The right partner makes all the difference.</h2>
          <p className="section-desc">
            Build with a team behind you. We bring the guidance, tools and operational support to help turn your ambition into a business that grows.
          </p>
        </aside>

        <div className="journey-content">
          <div className="journey-heading">
            <span>HOW IT WORKS</span>
            <h3>Your Journey as a Franchise Partner</h3>
          </div>

          <div className="journey-steps">
            {journeySteps.map((step, index) => (
              <motion.article
                className={`journey-step journey-step-${index + 1}`}
                key={step.number}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: 0.05 }}
              >
                <div className="journey-step-icon">
                  <span className="journey-step-number">{step.number}</span>
                  <span aria-hidden="true">{step.icon}</span>
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
