import React from 'react';

const About = () => {
  return (
    <div className="about">
      <h2>🦰 About Me</h2>

      <section className="about-section what-i-do">
        <h3>🤖 What I Do?</h3>
        <p>
          I work on AI-focused personal projects—specializing in voice synthesis and text generation. Proficient in Python, Java, C++, and C#, I strive to build innovative, impactful software solutions.
        </p>
      </section>

      <section className="about-section ongoing-learning">
        <h3>📚 Ongoing Learning</h3>
        <ul>
          <li>
            <strong>Current Course:</strong> Bachelor in Science Specializing in Computer Science at CIIT: College of Arts and Technology.
          </li>
          <li>
            <strong>Personal Project:</strong> Developing a mobile application using React and TypeScript called <em>MobileLLaMA</em> while deepening my Machine Learning expertise.
          </li>
          <li>
            <strong>Tech Research:</strong> Constantly exploring the latest in Python libraries and Machine Learning methodologies.
          </li>
        </ul>
      </section>

      <section className="about-section expertise">
        <h3>🛠️ Expertise</h3>
        <ul>
          <li>
            <strong>Programming Languages:</strong> Python, Java, C++, and C#.
          </li>
          <li>
            <strong>Frameworks & Libraries:</strong> PyTorch, Flask, and RVC.
          </li>
          <li>
            <strong>Collaboration Tools:</strong> GitHub, Jira, and Trello.
          </li>
          <li>
            <strong>Other Skills:</strong> Back-end development and AI innovation.
          </li>
        </ul>
      </section>

      <section className="about-section skills">
        <h3>💡 Skills // Beyond the Code</h3>
        <div className="skills-columns">
          <div className="skills-column">
            <ul>
              <li>
                <strong>Leadership:</strong> Guiding teams with vision and accountability.
              </li>
              <li>
                <strong>Adaptability:</strong> Embracing new challenges and technologies with ease.
              </li>
            </ul>
          </div>
          <div className="skills-column">
            <ul>
              <li>
                <strong>Creativity:</strong> Innovating solutions through imaginative approaches.
              </li>
              <li>
                <strong>Critical Thinking:</strong> Analyzing issues methodically to find effective solutions.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
