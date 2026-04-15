import './App.css';

import npeImage from './assets/npePPC.png'; 
import sgImage from './assets/sternG.png';
import pitchImage from './assets/pitchCor.png';

function App() {
  const projects = [
    { 
      id: 1, 
      title: 'Three-Body Problem NPE', 
      desc: <> 
              Applied Neural Posterior Estimation (NPE) to the chaotic three-body problem. Includes full research paper and codebase co-authored with my friend <a href="https://taric.me" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline'}}>Taric Somani</a>
            </>,
      link: 'https://github.com/7ar1c/three_body_npe/blob/main/final_results/Neural%20Posterior%20Estimation%20Chaotic%20Three%20Body%20Problem.pdf',
      linkLabel: 'View Paper & Repo',
      image: npeImage
    },
    { 
      id: 2, 
      title: 'Stern-Gerlach Simulation', 
      desc: 'A Jupyter Notebook simulation exploring the foundational Stern-Gerlach quantum mechanics experiment.',
      link: 'https://github.com/willpudupakkam/python-playground/blob/main/Physics/stern-gerlach.ipynb',
      linkLabel: 'View Notebook',
      image: sgImage
    },
    { 
      id: 3, 
      title: 'Pitch Correction Software', 
      desc: 'An audio processing tool that ingests an audio file and allows users to selectively pitch-correct any chosen segment.',
      link: 'https://github.com/willpudupakkam/python-playground/tree/main/Pitch-correction',
      linkLabel: 'View Source',
      image: pitchImage
    },
  ];

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <h1 className="logo">willpudupakkam.com</h1>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="about">
        <div className="hero-content">
          <p className="greeting">Hi, my name is</p>
          <h2 className="hero-title">William Pudupakkam.</h2>
          <p className="hero-description">
            Fourth year Mathematical Physics major at the University of Waterloo.
          </p>
          <a href="#projects" className="btn-primary">Check out my work</a>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h3 className="section-title">Some Things I've Built</h3>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              
              {/* 3. Replace the placeholder div with an image container */}
              <div className="project-image-container">
                <img src={project.image} alt={`Screenshot of ${project.title}`} />
              </div>

              <div className="project-info">
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.linkLabel}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="footer-content">
          <h2>Get In Touch</h2>
          <p>My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          <a href="mailto:wmpudupa@uwaterloo.ca" className="btn-outline">Say Hello</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Designed & Built by William Pudupakkam</p>
      </footer>
    </div>
  );
}

export default App;