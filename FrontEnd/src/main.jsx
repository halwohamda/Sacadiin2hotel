import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Get from './Components/Get.jsx'
import Post from './Components/Post.jsx'
import Update from './Components/Update.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[
      {
        path:'/getAll',
        element: <Get />
      },
      {
        path:'/Post',
        element: <Post />
      },
      {
        path:'/Update',
        element: <Update />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    
  </React.StrictMode>,
)