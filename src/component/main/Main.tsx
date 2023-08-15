import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import SocialButton from '../SocialButton'

const Main = () => {
  return (
    <div id='main' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                  LET&apos;S BUILD SOMETHING TOGHETHER
                </p>
                <h1 className='py-4 text-gray-700'>
                  Hi, I&apos;m <span className='text-[#5651e5]'>Furkan</span>
                </h1>
                <h1 className='py-4 text-gray-700'>
                  A Computer Science Student
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                  I am passionate about learning and technologies that allow me to bring ideas to reality
                </p>
                <SocialButton/>
            </div>
        </div>
    </div>
  )
}

export default Main