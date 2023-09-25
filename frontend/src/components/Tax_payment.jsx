import React from 'react'
import Nav from './nav'
import { NavLink } from 'react-router-dom'
import Footer from './footer';
import Contact from './Contact'
import trans from '../uploads/trans.jpg'


const Tax_payment = () => {

    return (
        <>

            <div className='w-screen h-screen flex flex-col justify-between  overflow-hidden  bg-[#92b3c9]'>
                <Nav />
                <Contact />

                <div className=' flex  h-full gap-[7rem] items-center   justify-center '>

                    <NavLink to="/Tax_payment/transportation"><div className="h-[25rem] rounded-md overflow-hidden w-[27rem] p-4 bg-white ">
                        <p className='flex justify-center items-center text-4xl'>Transportation tax </p>
                        <img src={trans} alt='' className='relative hover:scale-150 transform transition-all mt-4 ' /></div></NavLink>

                     


             


                </div>
                <Footer />

            </div>
        </>
    )
}

export default Tax_payment