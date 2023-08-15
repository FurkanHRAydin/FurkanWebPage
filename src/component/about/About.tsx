import React from 'react'
import Image from 'next/image';
import { ImagesCommon } from "@/const/Images";

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>
                  I began my programming journey in 2017 learning the basics of
                  Java, C# and C in school. Then gradually expanded my skillset by
                  learning web development. In 2020 I started studying
                  Applied Computer Science at university and dived deeper into the
                  core concepts of programming and software architecture through
                  Java, C/C++, Unix and databases. This enabled me to create
                  software projects for assignments and personal projects and
                  continue to improve my skills.
                </p>
                <p className='py-2 text-gray-600'> 
                  In my spare time, I enjoy activities to stay healthy and fit,
                  playing video games and traveling. Besides I try new technologies out to increase my own knowledge and widen my horizon.
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image className='rounded-xl' src={ImagesCommon.profile} alt="/"/>
            </div>
        </div>
    </div>
  )
}


export default About