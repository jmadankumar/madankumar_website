import React from 'react';

const SkillBadge = ({ skill }) => {
  return (
    <div className="skill-badge mr-2 mb-3" key={skill.title}>
      <img src={skill.badge} className="h-6"/>
    </div>
  );
};
const SkillsByCategory = ({ data }) => {
  return (
    <>
      {data.map((skillCategory) => {
        return (
          <div className="skill-wrapper">
            <h6 className="mb-2">{skillCategory.category}</h6>
            <div className="flex flex-wrap">
              {skillCategory.skills.map((skill) => (
                <SkillBadge skill={skill} />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SkillsByCategory;
