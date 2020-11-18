import React from 'react';

const SkillBadge = ({ skill }) => {
  return (
    <div className="skill-badge mr-2 mb-3" key={skill.title}>
      <img src={skill.badge} alt={skill.title}/>
    </div>
  );
};
const SkillsByCategory = ({ data }) => {
  return (
    <div className="flex flex-wrap -mx-4">
      {data.map((skillCategory) => {
        return (
          <div className="w-full lg:w-1/3 skill-wrapper px-4 mb-4"> 
            <h6 className="underline mb-2 font-medium tracking-wide">{skillCategory.category}</h6>
            <div className="flex flex-wrap">
              {skillCategory.skills.map((skill) => (
                <SkillBadge skill={skill} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsByCategory;
