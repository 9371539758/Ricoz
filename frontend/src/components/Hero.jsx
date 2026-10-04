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

        {/* Glass Dashboard */}
        <motion.div
          className="dashboard-mock"
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="dashboard-header">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="dashboard-body">
            <div className="sidebar">
              <div className="sidebar-item active">Dashboard</div>
              <div className="sidebar-item">Operations</div>
              <div className="sidebar-item">Request Queue</div>
              <div className="sidebar-item">Assignment Center</div>
              <div className="sidebar-item">Live Jobs</div>
              <div className="sidebar-item">Workforce</div>
              <div className="sidebar-item">Employees</div>
            </div>
            <div className="main-panel">
              <div className="panel-title">Dashboard</div>
              <div className="panel-sub">Welcome back, Amit! Here's your IT operations overview</div>
              <div className="stats-grid">
                {[
                  { label: 'Monthly Revenue', value: '₹7,82,500', change: '+24% from last month', green: true },
                  { label: 'Tickets Resolved', value: '156', change: '87.2% resolution rate', green: true },
                  { label: 'Open Tickets', value: '23', change: '5 critical', green: false },
                  { label: 'SLA Compliance', value: '94.5%', change: 'Avg. response: 48 min', green: true },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    className="stat-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -6 }}
                  >
                    <div className="label">{card.label}</div>
                    <div className="value">{card.value}</div>
                    <div className="change" style={{ color: card.green ? '#16a34a' : '#dc2626' }}>
                      {card.change}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}