import React from 'react'
import {Link,Outlet} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <div className="header bg-blue-600 p-4 text-center font-bold text-3xl text-white uppercase ">
       <Link to='/'><h1>Sacaada Hotel</h1></Link>
      </div>
      <h1 className='text-center '>Welcome to DashBoard</h1>
      <div className="menu">
        <nav>
          <ul>
            <Link to='/GetAll'>Hotel</Link> <br />
            <Link to='/Get'>Emplooye</Link>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  )
}

export default App