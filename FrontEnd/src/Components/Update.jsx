import React from 'react'
import {Link} from 'react-router-dom'
import { TiArrowBack } from "react-icons/ti";
const Update = () => {
    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
         <div className="all flex flex-row-reverse justify-between">
         <div className="back">
            <Link to='/getAll'>
            <TiArrowBack />
            </Link>
         </div>
         <div className="title">
         <h2 className="text-2xl font-semibold mb-4">Update Hotel</h2>
         </div>
         </div>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
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
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Address
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="email"
                id="email"
                name="email"
                placeholder="Address"
              />
            </div>
    
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                phone
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="number"
                id="email"
                name="email"
                placeholder="(+000) 000000000"
              />
            </div>
    
            <button
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      );
}

export default Update