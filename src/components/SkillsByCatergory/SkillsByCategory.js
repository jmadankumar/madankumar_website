import React from 'react';
import Tag from '../common/Tag';

const SkillsByCategory = ({ data }) => {
  return (
    <div className="flex flex-wrap -mx-4">
      {data.map((skillCategory) => {
        return (
          <div
            className="w-full lg:w-1/3 skill-wrapper px-4 mb-4"
            key={skillCategory.category}
          >
            <div className="underline mb-2 font-medium tracking-wide">
              {skillCategory.category}
            </div>
            <div className="flex flex-wrap">
              {skillCategory.skills.map((skill) => (
                <Tag key={skill.title}>{skill.title}</Tag>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsByCategory;
