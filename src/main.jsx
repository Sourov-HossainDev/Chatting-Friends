import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Page/Home.jsx';
import SideBar from './Page/SideBar.jsx';
import Registration from './Page/Registration.jsx';
import './fireBaseConfig.jsx'
import 'react-toastify/dist/ReactToastify.css';
import Login from './Page/Login.jsx';
import FontPage from './Page/FontPage.jsx';
import Profile from './Component/Menu/Profile.jsx';
import MassageDashboard from './Component/Massage/MassageDashboard.jsx';
import PictureUploadUI from './Component/PictureUploadUI/PictureUploadUI.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <FontPage></FontPage> ,
  },
  {
    path: "Registration",
    element: <Registration></Registration> ,
  },
 
  {
    path: "Login",
    element: <Login></Login> ,
  },
 
  {
    path: "SideBar",
    element: <SideBar></SideBar>,
  },
  {
    path: "Home",
    element: <Home></Home>,
  },
  {
    path: "profilePage",
    element: <Profile></Profile>,
  },
  {
    path: "PictureUploadUI",
    element: <PictureUploadUI></PictureUploadUI>
  }
  // {
  //   path: "ProfileUploadUI",
  //   element: <ProfileUploadUI></ProfileUploadUI> ,
  // },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
