import React from 'react'
import Image from 'next/image'
import ContactImg from '@/assets/contact.jpg'
import SocialButton from '../SocialButton'

const ContactField = () => {
  return (
    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
        <div className='lg:p-4 h-full'>
            <div>
                <Image 
                    className='rounded-xl hover:scale-105 ease-in duration-300'
                    src={ContactImg} 
                    alt='/'
                />
            </div>
            <div>
                <h2 className='py-2'> Furkan Aydin</h2>
                <p className='py-4'>Just contact me</p>
            </div>

            <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <SocialButton/>
            </div>
        </div>
    </div>
  )
}

export default ContactField