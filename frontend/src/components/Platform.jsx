export default function Platform() {
  return (
    <section className="platform-section" id="platform">
      <div className="container">
        <div className="section-label">FRANCHISE PLATFORM</div>
        <h2 className="section-title">One Platform. Complete Franchise Management.</h2>
        <p className="section-desc">
          Manage leads, projects, finances, operations and performance from a centralized dashboard designed to help franchise partners run and grow their business with confidence.
        </p>

        <div className="platform-mock dashboard-mock">
          <div className="dashboard-header">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="dashboard-body">
            <div className="sidebar">
              <div className="sidebar-item active">Dashboard</div>
              <div className="sidebar-item">Leads</div>
              <div className="sidebar-item">Projects</div>
              <div className="sidebar-item">Finance</div>
              <div className="sidebar-item">Operations</div>
              <div className="sidebar-item">Performance</div>
            </div>
            <div className="main-panel">
              <div className="panel-title">Dashboard</div>
              <div className="panel-sub">Welcome back, Amit! Here's your franchise overview</div>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="label">Active Leads</div>
                  <div className="value">48</div>
                </div>
                <div className="stat-card">
                  <div className="label">Projects</div>
                  <div className="value">12</div>
                </div>
                <div className="stat-card">
                  <div className="label">Revenue</div>
                  <div className="value">₹4.2L</div>
                </div>
                <div className="stat-card">
                  <div className="label">Team</div>
                  <div className="value">18</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}