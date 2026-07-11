import "./App.css";

import dockerLogo from "./assets/docker.png";
import ecrLogo from "./assets/aws-ecr-logo.jpg";
import ebLogo from "./assets/aws-eb-logo.jpg";
import ghlogo from "./assets/github-actions.jpg";
import gllogo from "./assets/gitlab.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>AWS CI/CD Pipeline Demo</h1>

        <p style={{ maxWidth: "800px", textAlign: "center" }}>
          End-to-end automated deployment pipeline using GitHub Actions,
          Docker, Amazon ECR, and AWS Elastic Beanstalk.
        </p>

        {/* PIPELINE SECTION */}
        <div className="pipeline">

          <div className="tech-card">
            <img src={ghlogo} alt="GitHub Actions" className="logo" />
            <h3>GitHub Actions</h3>
            <p>CI/CD Pipeline</p>
          </div>

          <div className="tech-card">
            <img src={gllogo} alt="GitHub Actions" className="logo" />
            <h3>Gitlab CI/CD</h3>
            <p>CI/CD Pipeline</p>
          </div>

          <div className="arrow">⬇</div>

          <div className="tech-card">
            <img src={dockerLogo} alt="Docker" className="logo" />
            <h3>Docker</h3>
            <p>Containerization</p>
          </div>

          <div className="arrow">⬇</div>

          <div className="tech-card">
            <img src={ecrLogo} alt="Amazon ECR" className="logo" />
            <h3>Amazon ECR</h3>
            <p>Image Registry</p>
          </div>

          <div className="arrow">⬇</div>

          <div className="tech-card">
            <img src={ebLogo} alt="Elastic Beanstalk" className="logo" />
            <h3>Elastic Beanstalk</h3>
            <p>Deployment</p>
          </div>

        </div>

        {/* FEATURES */}
        <div className="features">
          <div className="feature">✔ Automated Build</div>
          <div className="feature">✔ Docker Image Creation</div>
          <div className="feature">✔ Push to Amazon ECR</div>
          <div className="feature">✔ Deploy to Elastic Beanstalk</div>
          <div className="feature">✔ CI/CD via GitHub Actions & Gitlab CI/CD</div>
          <div className="feature">✔ Automated Testing</div>
        </div>

        {/* LINK */}
        <a
          className="App-link"
          href="https://github.com/ananthu-sunil/aws-containerized-cicd-pipeline"
          target="_blank"
          rel="noreferrer"
        >
          🔗 View Source Code
        </a>

      </header>
    </div>
  );
}

export default App;