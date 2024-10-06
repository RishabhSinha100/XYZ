

import React from 'react';
import Typing from 'react-typing-effect';
import './App.css';
import pic from './photo/pic.jpg';

function App() {
  return (
    <div className="hacker-portfolio">
      <header>
        {/* <h1 className="header-title">Welcome to the Hacker's Den</h1> */}
      </header>

      <div className="terminal">
        <div className="terminal-header">
          <span className="close-btn">X</span>
          <span className="minimize-btn">_</span>
          <span className="expand-btn">[ ]</span>

          {/* Navbar */}
          <nav className="navbar">
            <ul className="navbar-list">
              <li><a href="#home">{'{ }'}</a></li>
              <li><a href="#about">{'$..##900'}</a></li>
              <li><a href="#projects">{'**t'}</a></li>
        
            </ul>
          </nav>
        </div>

        <div className="terminal-body">
          <p className="terminal-text">Hi .... I'm Rishabh Sinha</p>
          <Typing
            className="typing-text"
            text={[" Full Stack Developer | React | JavaScript | Java........"]}
            speed={100}
          />
          <p className="terminal-text">Organized and dependable candidate successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals.</p>
          <Typing
            className="typing-text"
            text={["Projects, Skills, and Contact Information loading..."]}
            speed={50}
          />
        </div>
      </div>

      {/* Sections */}
      <div className="content">
        <div className="about-section">
          <div className="about-left">
            <img src={pic} alt="Rishabh Sinha" className="profile-photo" />
            <a
              href="https://drive.google.com/file/d/1JylggTYe-9n_VwgTPDLRuWRZKtwQS0tb/view"
              download
              target="_blank"
              rel="noopener noreferrer" // Added for security
              className="resume-btn">
              Download Resume
            </a>
          </div>

          <div className="about-right">
            <h2 style={{ color: '#00FF7F' }}>Who's this guy?</h2>
            <p className="error-paragraph">
      A dedicated and skilled Full Stack Developer with expertise in React and JavaScript,
      along with hands-on experience in web development projects. I aspire towards a career that will
      allow me to channel my creativity through crafting beautiful software and engaging experiences.
      <br /><br />
      {'{'}
      <Typing
        className="typing-text"
        text={["When I'm not on the computer, I enjoy playing badminton and sketching..."]}
        speed={50}
      /> 
      {'}'}
    </p>

          </div>
        </div>

        <div className="section projects">
          <h2 style={{ color: '#00FF7F' }}>Projects</h2>

          <div className="project-item">
            <h3>CryptoTracker</h3>
            <p><strong>Tech:</strong> ReactJS, Material UI, CoinGecko API</p>
            <ul>
              <li>A web application providing comprehensive cryptocurrency information, built with the CoinGecko API, React.js, and Chart.js for a seamless user experience.</li>
              <li>Access detailed and up-to-date information on cryptocurrencies, including prices, market capitalizations, trading volumes, and more.</li>
              <li>Visualize historical and current price trends with dynamic and customizable charts powered by Chart.js.</li>
            </ul>
            <p>View on <a href="https://github.com/RishabhSinha100/crypto-tracker" target="_blank" rel="noopener noreferrer" style={{ color: '#00FF7F' }}>GitHub</a>.</p>
          </div>

          <div className="project-item">
            <h3>CodePen Clone</h3>
            <p><strong>Tech:</strong> ReactJS, Material-UI</p>
            <ul>
              <li>Developed a fully functional CodePen clone using React and Material-UI, replicating core features and demonstrating advanced skills in front-end development, UI design, and real-time code execution.</li>
              <li>Designed an aesthetically pleasing and unified user interface with Material-UI that works with various screen sizes and devices.</li>
            </ul>
            <p>View on <a href="https://github.com/RishabhSinha100/CodepenV1" target="_blank" rel="noopener noreferrer" style={{ color: '#00FF7F' }}>GitHub</a>.</p>
          </div>

          <div className="project-item">
            <h3>Employee Payroll System</h3>
            <p><strong>Tech:</strong> Java, Object-Oriented Programming, Terminal Interface</p>
            <ul>
              <li>Designed and implemented a payroll system using OOPS principles to manage full-time and part-time employees with customized salary calculations based on hours, overtime, and bonuses.</li>
              <li>Managed employee records with automated data input, salary breakdowns, and record storage. Developed a user-friendly terminal interface to streamline payroll management for HR administrators.</li>
            </ul>
            <p>View on <a href="https://github.com/RishabhSinha100/EmployeePayrollSystem" target="_blank" rel="noopener noreferrer" style={{ color: '#00FF7F' }}>GitHub</a>.</p>
          </div>

          <div className="github-link">
            <p>Check out more of my projects on <a href="https://github.com/RishabhSinha100" target="_blank" rel="noopener noreferrer" style={{ color: '#00FF7F' }}>GitHub</a>.</p>
          </div>
        </div>

        <div className="section experience">
          <h2 style={{ color: '#00FF7F' }}>Experience</h2>

          <div className="experience-item">
            <h3>FULL Stack Web Development Intern</h3>
            <h4>Devtown</h4>
            <p>August 2022 – November 2022 | Online</p>
            <ul>
              <li>Worked on 15+ front-end and back-end applications using Bootstrap, React JS, Node JS, MongoDB, and JavaScript ES6.</li>
              <li>Designed and implemented responsive user interfaces for the dashboard, enhancing user experience and performance.</li>
              <li>Collaborated with the team to integrate RESTful APIs and optimize data retrieval for real-time application updates.</li>
              <li>Developed reusable components to streamline future development efforts.</li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="section skills">
          <h2 style={{ color: '#00FF7F' }}>Skills</h2>
          <ul className="skills-list">
            {["React", "Java", "JavaScript", "GitHub", "Material UI", "C++", "MongoDB"].map(skill => (
              <li className="skill-item" key={skill}>
                <Typing
                  className="typing-text"
                  text={[skill]}
                  speed={100}
                  cursorColor="#00FF7F"
                  displayText="• "
                />
              </li>
            ))}
          </ul>
        </div>


        <div className="section certifications">
  <h2 style={{ color: '#00FF7F' }}>Certifications</h2>
  <ul className="certification-list">
    <li className="certification-item">
      Successfully completed a <span className="certification-link"><a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-1b97aa60-3cb6-445f-95d4-8c9bb881628b.pdf" target="_blank" rel="noopener noreferrer">MERN Stack course on Udemy</a></span>, enhancing my understanding of this technology stack.
    </li>
    <li className="certification-item">
      Earned certification in <span className="certification-link"><a href="https://www.hackerrank.com/certificates/5de87cc23134" target="_blank" rel="noopener noreferrer">JavaScript</a></span> from HackerRank.
    </li>
    <li className="certification-item">
      Earned certification in <span className="certification-link"><a href="https://www.hackerrank.com/certificates/c5f9c11230e4" target="_blank" rel="noopener noreferrer">CSS</a></span> from HackerRank.
    </li>
    <li className="certification-item">
      Resolved over 500 coding challenges across various platforms such as CodeStudio, LeetCode, and HackerRank.
    </li>
  </ul>
</div>


      </div>
    </div>
  );
}

export default App;
