// Updated About Component Structure
import { useRef, useEffect, useState } from 'react';

const About = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  
  const stats = [
    { value: "1.5+", label: "Years Experience" },
    { value: "3+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const skills = [
    "React", "Django", "Python", "JavaScript",
    "TypeScript", "Node.js", "AI/ML", "MongoDB",
    "PostgreSQL", "AWS", "Docker", "Git",
    "UI/UX Design", "REST APIs", "GraphQL", "Next.js"
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "Best Employee Award",
      description: "Recognized for exceptional UI/UX design contributions"
    },
    {
      icon: "🚀",
      title: "Enterprise Projects",
      description: "Successfully delivered 3 major enterprise applications"
    },
    {
      icon: "💡",
      title: "AI Research",
      description: "Published research on Explainable AI in Pharmacovigilance"
    },
    {
      icon: "🌟",
      title: "Design Excellence",
      description: "Recognized for responsive design implementations"
    }
  ];

  return (
    <section id="about" className="about">
      {/* Floating Background Elements */}
      <div className="floating-element floating-element-1"></div>
      <div className="floating-element floating-element-2"></div>

      <div className="section-header">
        <h2 className="section-title">
          <span className="section-number">01.</span>
          About Me
        </h2>
        <div className="section-line"></div>
      </div>

      <div className="about-content">
        <div className="about-grid">
          {/* Left Column - Profile & Stats */}
          <div className="about-left">
            <div className="profile-card">
              <div className="profile-header">
                <div className="profile-avatar">
                  <div className="avatar-inner">
                    <span className="avatar-text">TK</span>
                  </div>
                </div>
                <div className="profile-title">
                  <h3>Teja Pavan Kalyan K</h3>
                  <p>Full Stack Developer | AI-Enabled Applications</p>
                </div>
              </div>
              
              <div className="profile-bio">
                Passionate developer with 1.5+ years of experience in creating 
                intelligent web solutions. Specializing in React, Django, and 
                AI integration to build robust, scalable applications that 
                drive innovation and exceed expectations.
              </div>

              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Experience & Skills */}
          <div className="about-right">
            {/* Experience Timeline */}
            <div className="experience-timeline">
              <div className="timeline-line"></div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4 className="timeline-company">Audree Info Tech Pvt Ltd</h4>
                    <span className="timeline-duration">1.5 Years Experience</span>
                  </div>
                  <p className="timeline-role">Full Stack Developer & AI Specialist</p>
                  <ul className="timeline-achievements">
                    <li>Recognized as 'Best Employee' for UI/UX design excellence</li>
                    <li>Led development of AI-powered enterprise applications</li>
                    <li>Implemented scalable microservices architecture</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills Cloud */}
           
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default About;