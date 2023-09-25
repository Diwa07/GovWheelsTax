import React, { useState, useEffect } from 'react';
import Nav from './nav'

import axios from 'axios'
import Footer from './footer'
import Contact from './Contact'

const Details = () => {
  const [data, setData] = useState([])
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3005/tax`, {

      });
      const result = response.data.validDetails.sort((a,b) =>a.name.localeCompare(b.name));
      
      
      setData(result)
      console.log(response.data.validDetails);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    fetchData()
  }, [])

  return (

    <div className='w-screen h-screen  flex flex-col justify-between  overflow-hidden  bg-gray-700  '>
      <Nav />
      <Contact />

      <div className=' overflow-x-hidden h-full overflow-scroll pl-[20%] p-[0.5rem] '>
      
          {
            data.map((item, id) => {
              return (
                <div className='h-auto w-[80%] mb-8 p-3 text-xl   rounded-lg px-[4rem] bg-[#77b493]' > <p className='text-center mb-[3rem]'>Nepal government tax department </p>
                <div className="  grid  grid-cols-2">

                <div className='name'>
                  Name: {item.name}
                  <br /> <br />
                  address : {item.address}
                  <br /> <br />
                  phone number:{item.phone}
                  <br /> <br />
                  Email: {item.email}
    
    
                </div>
    
                <div className="dherodv">
                  transportation type : {item.type}
                  <br /><br />
                  transporataion number : {item.number}
                  <br /><br />
                  color: {item.color}
                  <br /><br />
                  Amount :{item.amount}
    
                  <br /><br />
    
                  <br /><br />
    
                </div>
              </div>
              </div>
              )
            })
          }
         


        


      </div>

      <Footer />
    </div>
  )
}

export default Details