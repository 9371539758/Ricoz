export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="badge">INDIA'S NEXT GENERATION FRANCHISE ECOSYSTEM</div>

        <h1>
          Building a business shouldn't mean starting alone. <span>Join ours.</span>
        </h1>

        <p className="hero-desc">
          Build your business with the backing of a complete ecosystem. From technology and operations to training, marketing and ongoing support, <strong>Ricoz</strong> helps you focus on growth while we help simplify the journey.
        </p>

        <div className="hero-btns">
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
          <a href="#franchise" className="btn btn-primary">Become a Franchise Partner</a>
        </div>

        {/* Dashboard Mockup */}
        <div className="dashboard-mock">
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
                <div className="stat-card">
                  <div className="label">Monthly Revenue</div>
                  <div className="value">₹7,82,500</div>
                  <div className="change">+24% from last month</div>
                </div>
                <div className="stat-card">
                  <div className="label">Tickets Resolved</div>
                  <div className="value">156</div>
                  <div className="change">87.2% resolution rate</div>
                </div>
                <div className="stat-card">
                  <div className="label">Open Tickets</div>
                  <div className="value">23</div>
                  <div className="change" style={{ color: '#dc2626' }}>5 critical</div>
                </div>
                <div className="stat-card">
                  <div className="label">SLA Compliance</div>
                  <div className="value">94.5%</div>
                  <div className="change">Avg. response: 48 min</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}