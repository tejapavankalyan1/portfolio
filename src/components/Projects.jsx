import { useState, useEffect, useRef } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(0);
  const containerRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Skillora AI Platform",
      description: "Skillora is an AI-driven interview and assessment platform designed to streamline hiring and employee evaluation processes. It allows creating exams, assignments, objective assessments, and competency reviews. The platform also provides advanced analytics to track performance, generate reports, and offer insights for improving candidate and employee skills.",
      technologies: ["AI", "React", "Python", "MSSQL", "Django", "MongoDB", "Azure"],
      duration: "4 Months",
      achievement: "Best Employee Award for UI/UX Design Excellence",
      color: "#FF6B6B",
      icon: "🤖",
      category: ["Full Stack", "AI"],
      complexity: 8,
      github: "#",
      demo: "#",
      features: ["AI Assessments", "Real-time Analytics", "Role-based Access", "Competency Mapping"]
    },
    {
      id: 2,
      title: "Vendor Portal",
      description: "Vendor Portal is a complete procurement management application that handles the full lifecycle of purchase requests to purchase orders. It features robust database management, multiple user roles, workflow automation, and reporting dashboards, ensuring efficient procurement operations and streamlined vendor management.",
      technologies: ["React", "Django", "PostgreSQL", "REST API"],
      duration: "4 Months",
      achievement: "Full-stack development with complex database architecture",
      color: "#4ECDC4",
      icon: "🏢",
      category: ["Full Stack", "Enterprise"],
      complexity: 7,
      github: "#",
      demo: "#",
      features: ["Purchase Order Management", "Vendor Database", "Workflow Automation", "Reporting Dashboard"]
    },
    {
      id: 3,
      title: "Material Safety Data Sheet (MSDS)",
      description: "The MSDS is an intelligent Material Safety Data Sheet solution that integrates with the PubChem API and uses AI fallback mechanisms to provide comprehensive chemical data retrieval. It offers end-to-end management of chemical information, ensuring safety compliance, multi-format exports, and seamless integration for researchers and chemists.",
      technologies: ["Python", "React", "AI", "APIs", "Django"],
      duration: "3 Months",
      achievement: "Seamless integration with PubChem API + AI fallback system",
      color: "#45B7D1",
      icon: "⚗️",
      category: ["AI", "API Integration"],
      complexity: 9,
      github: "#",
      demo: "#",
      features: ["Chemical Data Retrieval", "AI Fallback System", "Safety Compliance", "Multi-format Export"]
    },
    {
      id: 4,
      title: "Explainable AI for Pharmacovigilance",
      role: "Project Lead",
      description: "This academic project focuses on applying Explainable AI (XAI) techniques to improve the interpretability of adverse drug reaction (ADR) predictions. By integrating LIME and other XAI tools, the system provides insights into model decisions, helping healthcare professionals understand ADR patterns, analyze patient-reported outcomes, and make informed decisions.",
      technologies: ["Python", "Django", "Django ORM", "XAI", "LIME"],
      duration: "4 Months",
      achievement: "Led system design and XAI integration, improving interpretability of ADR predictions for healthcare professionals",
      color: "#96CEB4",
      icon: "📊",
      category: ["AI", "Research"],
      complexity: 9,
      github: "#",
      demo: "#",
      features: ["XAI Implementation (LIME)", "ADR Analysis Pipeline", "Model Interpretability Reports", "Research Documentation"]
    }
  ];

  const filters = ["All"];

  useEffect(() => {
    if (activeFilter === "All") {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(project => 
        project.category.includes(activeFilter)
      ));
    }
  }, [activeFilter]);

  const handleProjectClick = (index) => {
    setSelectedProject(index);
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getComplexityBars = (complexity) => {
    return Array.from({ length: 10 }, (_, i) => (
      <div 
        key={i} 
        className={`complexity-bar ${i < complexity ? 'filled' : ''}`}
        style={{ backgroundColor: i < complexity ? projects[selectedProject]?.color : '#2D3748' }}
      />
    ));
  };

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2 className="section-title">
          <span className="section-number">03.</span>
          Featured Projects
        </h2>
        <div className="section-line"></div>
      </div>

      {/* Interactive Filter Tabs */}
      <div className="projects-filter">
        {filters.map(filter => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
            <span className="filter-count">
              {filter === "All" ? projects.length : 
               projects.filter(p => p.category.includes(filter)).length}
            </span>
          </button>
        ))}
      </div>

      {/* Project Grid with Cards */}
      <div className="projects-grid" ref={containerRef}>
        {visibleProjects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card ${hoveredProject === index ? 'hovered' : ''} ${selectedProject === index ? 'selected' : ''}`}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => handleProjectClick(index)}
            style={{ '--project-color': project.color }}
          >
            <div className="project-card-inner">
              <div className="project-card-header">
                <div className="project-icon">{project.icon}</div>
                <div className="project-duration">{project.duration}</div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              {project.role && (
                <p className="project-role mb-2">{project.role}</p>
              )}
              
              <div className="project-tech-tags mt-1">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="tech-tag-more">+{project.technologies.length - 3}</span>
                )}
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-card-footer">
                
                <button className="project-view-btn">
                  View Details →
                </button>
              </div>
              
              <div className="project-glow"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Project View */}
      {visibleProjects.length > 0 && (
        <div className="project-detail-view">
          <div className="detail-view-header">
            <div className="detail-header-left">
              <h3 className="detail-title">
                <span className="detail-icon">{visibleProjects[selectedProject]?.icon}</span>
                {visibleProjects[selectedProject]?.title}
              </h3>
              
              <div className="detail-categories">
                {visibleProjects[selectedProject]?.category.map((cat, i) => (
                  <span key={i} className="detail-category">{cat}</span>
                ))}
              </div>
            </div>
            
            <div className="detail-actions">
              <button className="action-btn github">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                Source
              </button>
              <button className="action-btn demo">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                Live Demo
              </button>
            </div>
          </div>
          
          <div className="detail-content">
            <div className="detail-description">
              <h4>Project Overview</h4>
              {visibleProjects[selectedProject]?.role && (
                <p className="project-role mb-2">{visibleProjects[selectedProject]?.role}</p>
              )}
              <p>{visibleProjects[selectedProject]?.description}</p>
            </div>
            
            <div className="detail-features">
              <h4>Key Features</h4>
              <div className="features-grid">
                {visibleProjects[selectedProject]?.features.map((feature, i) => (
                  <div key={i} className="feature-item">
                    <div className="feature-icon">✓</div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="detail-stats">
              <div className="stat-card">
                <div className="stat-icon">⏱️</div>
                <div>
                  <div className="stat-value">{visibleProjects[selectedProject]?.duration}</div>
                  <div className="stat-label">Timeline</div>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">🏆</div>
                <div>
                  <div className="stat-value">Achievement</div>
                  <div className="stat-label">{visibleProjects[selectedProject]?.achievement}</div>
                </div>
              </div>
              
              
            </div>
            
            <div className="detail-technologies">
              <h4>Technology Stack</h4>
              <div className="tech-grid">
                {visibleProjects[selectedProject]?.technologies.map((tech, i) => (
                  <div 
                    key={i} 
                    className="tech-item"
                    style={{ 
                      backgroundColor: `${visibleProjects[selectedProject]?.color}15`,
                      borderColor: visibleProjects[selectedProject]?.color,
                      color: visibleProjects[selectedProject]?.color
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project Navigation */}
      <div className="project-navigation">
        <button 
          className="nav-btn prev"
          onClick={() => setSelectedProject(prev => prev === 0 ? visibleProjects.length - 1 : prev - 1)}
          disabled={visibleProjects.length <= 1}
        >
          ← Previous Project
        </button>
        
        <div className="nav-dots">
          {visibleProjects.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${selectedProject === index ? 'active' : ''}`}
              onClick={() => setSelectedProject(index)}
              style={{ backgroundColor: selectedProject === index ? visibleProjects[selectedProject]?.color : '#4A5568' }}
            />
          ))}
        </div>
        
        <button 
          className="nav-btn next"
          onClick={() => setSelectedProject(prev => (prev + 1) % visibleProjects.length)}
          disabled={visibleProjects.length <= 1}
        >
          Next Project →
        </button>
      </div>
    </section>
  );
};

export default Projects;
