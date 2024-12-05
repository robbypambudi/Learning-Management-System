import React from 'react';

const SkillsSection: React.FC = () => {
  const skills = ['Figma', 'Javascript', 'Adobe XD', 'React Js'];

  return (
    <div className='bg-white p-6 rounded-lg shadow-md'>
      <h3 className='text-blue-600 font-semibold text-lg'>Skills</h3>
      <div className='mt-4 flex flex-wrap gap-2'>
        {skills.map((skill, index) => (
          <span
            key={index}
            className='bg-gray-200 text-gray-700 text-sm font-medium py-1 px-3 rounded-full'
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
