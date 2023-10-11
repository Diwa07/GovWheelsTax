import React from 'react'
import Nav from './nav'

import Footer from './footer'
import tax from '../uploads/tax.jpg'
import Contact from './Contact'


const Home = () => {
  return (



    
     

      <div className='w-screen h-screen flex flex-col justify-between  overflow-hidden  bg-[#92b3c9]   div  '>
    <Nav />
    <Contact/>
    
    <div className='  h-full justify-center overflow-hidden    bg-[#92b3c9]    '> 
  
    <img src={tax} alt='' className='h-full rounded-md w-[80%] ' />
       </div>

<Footer/>
      </div>




    


  )
}

export default Home