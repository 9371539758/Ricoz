const franchises = [
  {
    name: 'SeaView Cafe',
    category: 'Food and Beverage',
    icon: '☕',
    investment: '₹28L',
    roi: '20–30%',
    popular: true,
    artwork: 'cafe',
  },
  {
    name: 'NewLife Gym',
    category: 'Fitness and Wellness',
    icon: '✚',
    investment: '₹10L',
    roi: '11–19%',
    popular: false,
    artwork: 'gym',
  },
];

function CafeArtwork() {
  return (
    <svg viewBox="0 0 640 280" role="img" aria-label="Cafe patio overlooking the sea">
      <defs>
        <linearGradient id="cafe-sky" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#a9dce8" />
          <stop offset="1" stopColor="#e6f4e7" />
        </linearGradient>
      </defs>
      <rect width="640" height="280" fill="url(#cafe-sky)" />
      <path d="M0 105c90-25 135-10 218 3s135-15 216-3 136-1 206-13v76H0z" fill="#54aeb8" />
      <path d="M0 166h640v114H0z" fill="#d9c49a" />
      <path d="M0 159h640v12H0z" fill="#80573d" />
      <path d="M22 108c46-44 100-48 160-20l23 37H0zm425-13c42-36 91-42 138-24l55 41H429z" fill="#39754b" />
      <path d="M25 178h210v13H25zm22 13v58m164-58v58M291 199h169v12H291zm18 12v42m133-42v42" stroke="#704832" strokeWidth="8" />
      <path d="M11 174h239l-19-26H30zM277 195h196l-19-25H296z" fill="#b4774a" />
      <path d="M536 74v93m-35 0h70m-61-75 53 75m0-75-53 75" stroke="#273746" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

function GymArtwork() {
  return (
    <svg viewBox="0 0 640 280" role="img" aria-label="Modern gym with strength-training equipment">
      <defs>
        <linearGradient id="gym-room" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#dce3e6" />
          <stop offset=".55" stopColor="#89979a" />
          <stop offset="1" stopColor="#343e42" />
        </linearGradient>
      </defs>
      <rect width="640" height="280" fill="url(#gym-room)" />
      <path d="M0 0h640v24H0zM28 24v190M612 24v190M28 24l130 76h324l130-76" fill="none" stroke="#343e42" strokeWidth="12" />
      <path d="M158 100V30m108 70V30m108 70V30m108 70V30" stroke="#526064" strokeWidth="6" />
      <rect x="42" y="48" width="102" height="62" rx="4" fill="#b9d0d1" opacity=".7" />
      <rect x="496" y="48" width="102" height="62" rx="4" fill="#b9d0d1" opacity=".7" />
      <path d="M0 224h640v56H0z" fill="#293236" />
      <g fill="none" stroke="#1b2428" strokeLinecap="round" strokeWidth="12">
        <path d="M178 218v-70h70v70m-85-70h100m-85 0v-20m70 20v-20" />
        <path d="M385 218v-75h76v75m-88-75h100m-79 0v-21m67 21v-21" />
      </g>
      <g fill="#202a2e">
        <rect x="160" y="131" width="13" height="34" rx="5" />
        <rect x="250" y="131" width="13" height="34" rx="5" />
        <rect x="375" y="123" width="13" height="36" rx="5" />
        <rect x="458" y="123" width="13" height="36" rx="5" />
      </g>
    </svg>
  );
}

export default function Franchises() {
  return (
    <section className="franchises-section" id="franchise">
      <div className="container">
        <div className="franchises-heading">
          <div>
            <div className="section-label">FIND YOUR FIT</div>
            <h2 className="section-title">Explore Our Franchises</h2>
          </div>
          <p>Choose a business that matches your ambition, with the right support behind you.</p>
        </div>

        <div className="franchise-grid">
          {franchises.map((franchise) => (
            <article
              className={`franchise-card${franchise.popular ? ' franchise-card-popular' : ''}`}
              key={franchise.name}
            >
              <div className="franchise-card-heading">
                <div className="franchise-brand">
                  <span className="franchise-icon" aria-hidden="true">{franchise.icon}</span>
                  <div>
                    <h3>{franchise.name}</h3>
                    <p>{franchise.category}</p>
                  </div>
                </div>
                {franchise.popular && <span className="popular-badge">★ Popular</span>}
              </div>

              <div className={`franchise-art franchise-art-${franchise.artwork}`}>
                {franchise.artwork === 'cafe' ? <CafeArtwork /> : <GymArtwork />}
              </div>

              <div className="franchise-details">
                <div>
                  <span className="detail-icon" aria-hidden="true">₹</span>
                  <div><strong>{franchise.investment}</strong><span>Investment</span></div>
                </div>
                <div>
                  <span className="detail-icon" aria-hidden="true">↗</span>
                  <div><strong>{franchise.roi}</strong><span>Avg. ROI</span></div>
                </div>
              </div>
              <a className="franchise-link" href="#contact" aria-label={`Enquire about ${franchise.name}`}>
                Explore opportunity <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
