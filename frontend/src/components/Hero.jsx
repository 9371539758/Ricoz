import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="badge"
        >
          INDIA'S NEXT GENERATION FRANCHISE ECOSYSTEM
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Building a business shouldn't mean starting alone. <span>Join ours.</span>
        </motion.h1>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Build your business with the backing of a complete ecosystem. From technology and operations to training, marketing and ongoing support, <strong>Ricoz</strong> helps you focus on growth while we help simplify the journey.
        </motion.p>

        <motion.div
          className="hero-btns"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
          <a href="#franchise" className="btn btn-primary">Become a Franchise Partner</a>
        </motion.div>

        <motion.div
          className="impact-layout"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <div className="impact-stat impact-stat-top-left">
            <strong>20+</strong>
            <span>Business Categories</span>
          </div>
          <div className="impact-stat impact-stat-top-right">
            <strong>100%</strong>
            <span>Operational Support</span>
          </div>
          <div className="impact-stat impact-stat-bottom-left">
            <strong>Dedicated</strong>
            <span>Partner Success Team</span>
          </div>
          <div className="impact-stat impact-stat-bottom-right">
            <strong>Pan India</strong>
            <span>Expansion Vision</span>
          </div>
          <div className="founder-illustration">
            <svg
              className="founder-tree"
              viewBox="0 0 440 470"
              role="img"
              aria-labelledby="founder-art-title"
            >
              <title id="founder-art-title">A business owner growing with the Ricoz franchise ecosystem</title>
              <defs>
                <radialGradient id="tree-canopy" cx="50%" cy="45%" r="58%">
                  <stop offset="0%" stopColor="#b7e36a" />
                  <stop offset="100%" stopColor="#267a38" />
                </radialGradient>
              </defs>
              <circle cx="220" cy="190" r="150" fill="#edf7df" />
              <circle cx="220" cy="190" r="130" fill="url(#tree-canopy)" opacity=".95" />
              {Array.from({ length: 24 }, (_, index) => {
                const angle = (index * 15 * Math.PI) / 180;
                const x = 220 + Math.cos(angle) * 106;
                const y = 190 + Math.sin(angle) * 106;
                return (
                  <ellipse
                    key={index}
                    cx={x}
                    cy={y}
                    rx="15"
                    ry="8"
                    transform={`rotate(${index * 15} ${x} ${y})`}
                    fill={index % 2 === 0 ? '#f0bc45' : '#6eb34a'}
                  />
                );
              })}
              <path d="M220 270v101M220 340c-30 34-62 42-91 63m91-43c29 30 61 39 92 55m-92-39c-3 30-20 51-42 71m42-52c6 27 23 43 47 60" fill="none" stroke="#8c5b34" strokeLinecap="round" strokeWidth="10" />
              <path d="M220 365c-42 8-83 16-123 35m123-25c44 5 82 13 123 30m-123-9c-14 13-29 25-44 35m44-25c14 12 30 22 49 32" fill="none" stroke="#a97448" strokeLinecap="round" strokeWidth="5" />
            </svg>
            <img
              className="founder-photo"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=640&q=85"
              alt="Franchise partner"
              referrerPolicy="no-referrer"
            />
            <div className="founder-caption">
              <span>Grow with confidence</span>
              <strong>Your business. Our ecosystem.</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}