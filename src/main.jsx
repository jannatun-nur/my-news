import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Home/Home';
import Details from './Category/Details';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:'/details',
      element:<Details/>
    }

    
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
