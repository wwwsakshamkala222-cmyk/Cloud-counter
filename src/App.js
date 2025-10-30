import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://zkd3gloogkyn4u5atq46ko5ov40ndail.lambda-url.eu-north-1.on.aws/')
      .then(res => res.json())
      .then(data => {
        setCount(data.count);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const skills = ['AWS', 'React', 'Node.js', 'Docker', 'Lambda', 'DynamoDB'];
  
  const projects = [
    { title: 'Cloud Resume Challenge', tech: 'AWS Lambda + React' },
    { title: 'Serverless API', tech: 'API Gateway + DynamoDB' },
  ];

  return (
    <div className="container">
      <div className="card">
        {/* Header Section */}
        <div className="header">
          <h1 className="name">Saksham kala</h1>
          <p className="title">B.Tech Student | Cloud Developer</p>
        </div>
        
        {/* Visitor Counter */}
        <div className="visitor-section">
          <h3>👁️ Visitor Count</h3>
          <div className="count-display">
            {loading && <span className="loading">Loading...</span>}
            {error && <span className="error">Unable to load</span>}
            {!loading && !error && (
              <span className="count">{count?.toLocaleString()}</span>
            )}
          </div>
        </div>

        {/* Skills Section */}
        <div className="section">
          <h3>💻 Skills</h3>
          <div className="skills">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="section">
          <h3>🚀 Projects</h3>
          <div className="projects">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h4>{project.title}</h4>
                <p>{project.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;