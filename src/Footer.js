import React from 'react';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome for icons

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h3 className="footer-title">Contact Me</h3>
          <p>
            LinkedIn: 
            <a href="https://www.linkedin.com/in/rishabh-sinha11/" target="_blank" rel="noopener noreferrer" className="footer-link">
              Rishabh Sinha
            </a>
          </p>
          <p>
            Email: 
            <a href="mailto:rishabhsinh952@gmail.com" className="footer-link">
              rishabhsinh952@gmail.com
            </a>
          </p>
        </div>

       
        <div className="footer-right">
          <h3 className="footer-title">Follow Me</h3>
          <p>
            <a href="https://github.com/RishabhSinha100" target="_blank" rel="noopener noreferrer" className="footer-link">
              <i className="fa fa-github" aria-hidden="true"></i> GitHub
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/rishabh-sinha11/" target="_blank" rel="noopener noreferrer" className="footer-link">
              <i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn
            </a>
          </p>
        </div>
      </div>

      <div className="footer-credits">
        <p> Rishabh Sinha </p>
        <p>Copyright @2024, Crypto-All Right Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
