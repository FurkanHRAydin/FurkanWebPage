import React from 'react'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link'
import ContactField from './ContactField'
import Connect from './Connect'
import ScrollToHome from '../ScrollToHome'

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
        <div className='max-w-[1240px] mx-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widset uppercase text-[#5651e5]'>
                Contact
            </p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left */}

                <ContactField/>

                {/* right */}

                <Connect />
            </div>
            <ScrollToHome/>
        </div>
    </div>
  )
}

export default Contact