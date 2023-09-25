import React from 'react'
import Nav from './nav'
import Footer from './footer'
import Contact from './Contact'

const About = () => {

  return (
   
    <div className='w-screen h-screen flex flex-col justify-between  overflow-hidden  bg-[#92b3c9]   div  '>
    <Nav />
    <Contact/>
    
    <div className='   h-full justify-center   bg-[#92b3c9]   '> 
       
    <div className="bg-[#92b3c9]  py-[6rem] ">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-3xl font-bold text-[black] mb-4">
          About Our Company
        </h1>
        <p className="text-[black] text-xl py-4 font-semibold leading-7"> 
          We are a leading e-government company dedicated to simplifying the
          transportation and salary tax processes for citizens. Our mission is
          to provide efficient, user-friendly solutions that enhance
          accessibility and transparency in government services.
        </p>
        <p className="text-[black] text-xl font-semibold leading-7 mt-4">
          With our innovative technology, we aim to streamline the tax
          collection process and make transportation services more convenient
          and cost-effective for everyone.
        </p>
        <p className="text-[black] text-xl font-semibold leading-7 mt-4">
          Join us on our journey towards a digital, efficient, and
          citizen-centric government experience.
        </p>
      </div>
    </div>
       
       </div>

<Footer/>
      </div>
  )
}

export default About