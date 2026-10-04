export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="logo">
              <div className="logo-icon">rZ</div>
              Ricoz
            </a>
            <p>
              India's next generation franchise ecosystem. Build your business with technology, training, and complete operational support.
            </p>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <a href="#why">Why Ricoz</a>
            <a href="#platform">Platform</a>
            <a href="#franchise">Become a Partner</a>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <a href="#contact">Get in Touch</a>
            <a href="#login">Franchise Login</a>
            <a href="#">Help Center</a>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter / X</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Ricoz. All rights reserved.</span>
          <span>Made for modern entrepreneurs</span>
        </div>
      </div>
    </footer>
  );
}