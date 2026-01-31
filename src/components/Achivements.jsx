import React from "react";

const achievements = [
  {
    icon: "🏆",
    title: "Best Employee Award",
    description: "Recognized for exceptional UI/UX design contributions",
  },
  {
    icon: "🚀",
    title: "Enterprise Projects",
    description: "Successfully delivered 3 major enterprise applications",
  },
  {
    icon: "💡",
    title: "AI Research",
    description: "Published research on Explainable AI in Pharmacovigilance",
  },
  
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements achievements-showcase">
   
      {/* Achievements Showcase */}
      <div className="section-header">
        <h3 className="section-title">
          <span className="section-number">02.</span> Achievements & Awards
        </h3>
        <div className="section-line"></div>
      </div>

      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-icon">{achievement.icon}</div>
            <div className="achievement-content">
              <h4>{achievement.title}</h4>
              <p>{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
     
  );
};

export default Achievements;
