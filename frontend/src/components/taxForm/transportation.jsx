
import React, { useState } from 'react';
import { Formik, Field, Form,  } from 'formik';
import axios from 'axios';
import Contact from '../Contact'
import Nav from '../nav'
import Footer from '../footer';

const Transportation  = () => {
  const initialValues = {
    name: '',
    type: '',
    phone:'',
    number: '',
    email:'',
    amount: '',
    address: '',
    color: '',
  };

const [successMessage, setSuccessMessage] = useState('');
  const [formValues, setFormValues] = useState(initialValues);
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post('http://localhost:3005/tax', values);
      setSuccessMessage('Success! Data saved.');
      console.log('Data saved:', response.data);
      alert('sucessfully added')
      resetForm();
      setFormValues(initialValues); // Clear the form values
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div className='w-screen h-screen flex flex-col justify-between  overflow-hidden  bg-[#c7d6a4]  '>
    <Nav />
    <Contact/>
    <div className='h-full '> 
      <div className=' border  h-full border-[green] w-full bg-gray-100 '>


      <div className="mt-4 bg-gray-100 ">
  <h2 className="text-2xl font-semibold mb-7"> <center> Tax_payment</center></h2>
     
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
        <div className=" ml-[1rem] grid grid-cols-2 w-full">
            <label htmlFor="name" className="block mb-[2rem] happy text-3xl font-medium border text-gray-600">
              Name  &nbsp;    <Field
              type="text"
              id="name"
              name="name"
              placeholder='name' required
              className=" p-3 border border-blue-300 rounded-md   h-[4rem] w-[23rem]"
              />
            </label>
            <label htmlFor="name" className="block mb-[2rem] happy text-3xl font-medium border text-gray-600">
              Transportation-Type  &nbsp;    <Field
              type="text"
              id="type"
              name="type" required
              placeholder='Transportation-Type'
              className=" p-3 border border-blue-300 rounded-md   h-[4rem] w-[23rem]"
              />
            </label>
        
            <label htmlFor="name" className="block mb-[2rem] happy text-3xl font-medium border text-gray-600">
              Phone  &nbsp;    <Field
              type="text"
              id="phone"
              name="phone"
              placeholder='Phone' required
              className=" p-3 border border-blue-300 rounded-md   h-[4rem] w-[23rem]"
              />
            </label>
            <label htmlFor="name" className="block mb-[2rem] happy text-3xl font-medium border text-gray-600">
              Transportation-Color  &nbsp;    <Field
              type="text"
              id="color"
              name="color" required
              placeholder='Transportation-Color'
              className=" p-3 border border-blue-300 rounded-md   h-[4rem] w-[23rem]"
              />
            </label>
            
            <label htmlFor="name" className="block mb-[2rem] happy text-3xl font-medium border text-gray-600">
              Address  &nbsp;    <Field
              type="text"
              id="address"
              name="address"
              placeholder='Address' required
              className=" p-3 border border-blue-300 rounded-md   h-[4rem] w-[23rem]"
              />
            </label>
            
            <label htmlFor="name" className="block mb-[2rem] happy text-3xl font-medium border text-gray-600">
              Transportation-number  &nbsp;    <Field
              type="text"
              id="number"
              name="number" required
              placeholder=' Transportation-number'
              className=" p-3 border border-blue-300 rounded-md   h-[4rem] w-[23rem]"
              />
            </label>
            <label htmlFor="name" className="block mb-[2rem] happy text-3xl font-medium border text-gray-600">
              Email  &nbsp;    <Field
              type="email"
              id="email"
              name="email"
              placeholder='Email' required
              className=" p-3 border border-blue-300 rounded-md   h-[4rem] w-[23rem]"
              />
            </label>
            <label htmlFor="name" className="block mb-[2rem] happy text-3xl font-medium border text-gray-600">
              Tax-Amount  &nbsp;    <Field
              type="text"
              id="amount"
              name="amount"
              placeholder='Tax-Amount' required
              className=" p-3 border border-blue-300 rounded-md   h-[4rem] w-[23rem]"
              />
            </label>
           

       
          </div>

          
          <div className="mb-4"> <center> <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
             Submit 
            </button></center>
           
          </div>
        </Form>
      </Formik>
    </div>
    </div>
       
       
       </div>
   <div className='z-20 '> <Footer/></div>  

     </div>
  );
};

export default Transportation ;
