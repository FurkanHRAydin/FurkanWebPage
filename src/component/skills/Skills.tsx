import React from 'react'
import SkillsBE from './groups/SkillsBE';
import SkillsDataBase from './groups/SkillsDataBase';
import SkillsFE from './groups/SkillsFE';
import SkillsLangugage from './groups/SkillsLanguage';
import SkillsTools from './groups/SkillsTools';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <SkillsFE/>
            <SkillsBE/>
            <SkillsDataBase/>
            <SkillsLangugage/>
            <SkillsTools/>
          </div>
    </div>
  );
};

export default Skills