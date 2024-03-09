import { useNavigate } from "react-router-dom";


const SideBar = () => {

  const navigate = useNavigate();

  const changeURLHandler = (url) => {
    navigate(url);
  }

  return (
    <div class=' flex-row space-y-1 h-[100vh] w-[200px] p-2 bg-slate-800'>
      <button class='text-white bg-slate-700 p-2 w-[100%] hover:bg-slate-300 hover:text-black'
        onClick={() => changeURLHandler('/profile')}
      >
        Home
      </button>
      <button class='text-white bg-slate-700 p-2 w-[100%] hover:bg-slate-300 hover:text-black'
        onClick={() => changeURLHandler('/about')}
      >
        About
      </button>
      <button class='text-white bg-slate-700 p-2 w-[100%] hover:bg-slate-300 hover:text-black'
        onClick={() => changeURLHandler('/gallery')}
      >
        Gallery
      </button>
    </div>
  )
}

export default SideBar;