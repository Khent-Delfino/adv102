import { Link, Outlet } from "react-router-dom";
import image from '../assets/images/logo512.png'
import SideBar from "./sideBar";


const HeaderComp = () => {

  const style={
    items: {
      color: 'white',
      textTransform: 'none',
    }
  }

  return (
    <>
      <div class='flex items-center space-x-2 bg-slate-800 w-[100%] h-12 p-2'>
        <img src={image} class='w-8 h=8'/>
        <h1 class='text-white text-2xl font-bold'>
          REACT SAMPLE
        </h1>
      </div>
      <div class='flex'>
        <SideBar/>
        <div class='p-2'>
          <Outlet/>
        </div>
      </div>
      
    </>
    
  )
}

export default HeaderComp;