import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { TiArrowBack } from "react-icons/ti";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Post = () => {
  const notify = () => toast("Waa lagu guulaystay!");
  const [values,setValues]= useState({
   firstname: "",
    middleName: "",
    lastName: "",
    postion: "",
    salary: "",
     phone: "",
     email: "",
     hireDate: ""
 
  })
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const {hotelname,address,email,phone} = values;
    if(!firstname||!middleName ||!lastName ||!postion ||!salary ||!phoen ||!email ||!hireDate){
     
    }
    else{
      const data = {
         firstname,
         middleName,
        lastName,
        postion,
        salary,
        phone,
        email,
        hireDate
      }
      const response = await fetch("http://localhost:4000/api/Employee/new",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      const json = await response.json()
      console.log(json)
    }
  }
    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
         <div className="all flex flex-row-reverse justify-between">
         <div className="back">
            <Link to='/getAll'>
            <TiArrowBack />
            </Link>
         </div>
         <div className="title">
         <h2 className="text-2xl font-semibold mb-4">Create Employee</h2>
         </div>
         </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                HotelName
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                onChange={(e)=>setValues({...values, hotelname: e.target.value})}
              />
            </div>
    
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="email"
                id="email"
                name="email"
                placeholder="email"
                onChange={(e)=>setValues({...values, email: e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Address
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                onChange={(e)=>setValues({...values, address: e.target.value})}
              />
            </div>
    
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                phone
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="number"
                id="phone"
                name="phone"
                placeholder="(+000) 000000000"
                onChange={(e)=>setValues({...values, phone: e.target.value})}
              />
            </div>
    
            <button
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
              type="submit"
              onClick={notify}
            >
              <ToastContainer />
              Submit
            </button>
          </form>
        </div>
      );
}

export default Post