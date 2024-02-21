import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { MdAddBox } from "react-icons/md";
import BeatLoader from 'react-spinners/BeatLoader'
const Get = () => {
  
  // Fetch Data
  const [dataList,setDataList]=  useState([])
  useEffect(()=>{
    fetchData()
  });
  const fetchData = async()=>{
    const response = await fetch("http://localhost:4000/api/hotel/all")
    .then(res => res.json())
    setDataList(response)
  }

  // Search
  const [search,setSearch] = useState('')

// Loading
const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])

  return (
    <div className="overflow-x-auto w-[1100px] translate-x-44">
        <div className="right justify-end ml-[1020px] ">
        <Link className='mt-4 text-green-600 text-[60px]' to='/Post'><MdAddBox /></Link>
        </div>
        <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Search
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="email"
                id="email"
                name="email"
                placeholder=""
                onChange={(e)=>setSearch(e.target.value)}
              />
            </div>
      <table className="min-w-full  bg-white border border-gray-300">
        <thead className='bg-gray-700 text-white'>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">HotelName</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
             {loading ? <div className='loader'><p>Fadlan Sug</p><BeatLoader color="#36d7b7"/></div>:
            dataList.filter((i)=>{return search === ''?i:i.hotelname.toLocaleLowerCase().includes(search)}).map((i)=>(
            <tr className='text-center'>
            <td className="py-2 px-4 border-b">{i.hotel_id}</td>
            <td className="py-2 px-4 border-b">{i.hotelname}</td>
            <td className="py-2 px-4 border-b">{i.email}</td>
            <td className="py-2 px-4 border-b">{i.phone}</td>
            <td className="py-2 px-4 border-b">
              <Link to='/Update' className="bg-blue-500 text-white py-1 px-2 rounded-md">Edit</Link>
              <button className="bg-red-500 text-white py-1 px-2 rounded-md ml-2">Delete</button>
            </td>
          </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Get