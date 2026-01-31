import { useState } from "react";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    "React",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Django",
    "Python",
    "AI Integration",
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
    "Azure",
    "Git",
    
  ];

  return (
    <section id="skills" className="skills">
      {/* SECTION HEADER */}
      <div className="section-header">
        <h2 className="section-title">
          <span className="section-number">02.</span> My Skills
        </h2>
        <div className="section-line"></div>

      </div>


      

      {/* SKILLS CONTENT */}
      <div className="skills-cloud">
        <div className="skills-header">
          
            Technologies I work with
        </div>

        <div className="skills-tags">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`skill-tag ${
                activeSkill === skill ? "active" : ""
              }`}
              onMouseEnter={() => setActiveSkill(skill)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
