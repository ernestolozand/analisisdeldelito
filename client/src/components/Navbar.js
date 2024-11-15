import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, Link } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index.js'

export default function Navbar() {
  let navigate = useNavigate()
  const [query, setQuery] = useState('');
  const [progress, setProgress] = useState(0)
  const { searchQuery } = bindActionCreators(actionCreators, useDispatch())
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  async function searchSubmit(e) {
    // setProgress(30)
    e.preventDefault();
    // try {
    if (query.length == 0) {
      toast.error("El campo no puede estar vacío")
    }
    else {

      searchQuery(query)
      setProgress(100)

      navigate("/searchpage")

    }
  }

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const goToCart = () => {
    const cookie = Cookies.get("email")

    if (cookie == undefined || cookie == null) {
      toast.warn("Se requiere iniciar sesión")
      navigate("/login")

    }
    else {
      navigate("/cart")
    }
  }
  const goToOrders = () => {
    const cookie = Cookies.get("email")

    if (cookie == undefined || cookie == null) {
      toast.warn("Se requiere iniciar sesión")
      navigate("/login")

    }
    else {
      navigate("/orders")
    }
  }



  const [micState, setMicState] = useState(false);
  const recognition = new window.webkitSpeechRecognition(); // create a new instance of the SpeechRecognition object

  const handleStart = () => {
    setMicState(true)
    recognition.start(); // start the recognition process
    setTimeout(() => {
      recognition.stop(); // stop the recognition process after 3 seconds

      setMicState(false)

    }, 3000);

    recognition.onresult = async (event) => {
      let query = event.results[0][0].transcript;

      setQuery(query)
      searchQuery(query)
      setProgress(100)
      navigate("/searchpage")


    };

  }



  return (
    <div className='sticky top-0 z-50'>
      <LoadingBar
        color='red'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <header className="bg-slate-600 md:flex md:justify-between md:items-center md:px-4 md:py-0">
        <div className="flex items-center justify-between px-4 py-1 md:p-0">
          <div className=' w-20'>
            <Link to={"/"} >

              <img src={require('./Images/logo.png')} alt="Logo" className=" w-full cursor-pointer md:mt-1 md:mb-1" />
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              <i className="cursor-pointer ml-3 mr-2 fa-solid fa-bars scale-150"></i>
            </button>
          </div>
        </div>

        <nav className={` px-3 pt-1 pb-1 md:flex ${showMenu ? "block" : "hidden"}`}>

          <form id='search-form' onSubmit={searchSubmit}>
            <div className="relative flex mx-auto text-gray-600 ">
              {/* <i class="text-white text-xl mr-3 fa-solid fa-volume-high"></i> */}
              {/* {micState ? <i class="text-white text-xl mr-3 fa-solid fa-volume-high"></i> : */}

              <div className=" relative md:w-64 w-50 md:mr-4 mr-2 ">
                <input value={query} onChange={(e) => { setQuery(e.target.value) }} type="text" placeholder='Buscar en el sitio' id="footer-field" name="footer-field" className="h-8 w-full bg-gray-100  rounded border border-gray-300 focus:ring-2  focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-0 pl-2 leading-8 transition-colors duration-200 ease-in-out" />
              </div>

              <button type='submit' className=' text-white bg-indigo-500  px-4 focus:outline-none hover:bg-indigo-600  cursor-pointer  border-gray-200  border-solid rounded-lg ml-0'><i className="fa-solid fa-magnifying-glass w-[20px]"></i></button>

              {micState ? <p className='text-white text-base font-medium ml-2'>Habla ahora</p> :
                <i onClick={handleStart} class=" text-white fa-solid fa-microphone  text-xl ml-3 cursor-pointer"></i>
              }
            </div>
          </form>



          <Link className='block w-fit px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 md:ml-4' to={"/login"}>Regístrate / Inicia sesión </Link>
          <a className='cursor-pointer block w-fit px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 md:ml-4' onClick={goToOrders}>Acerca de </a>
          <a className='cursor-pointer block w-fit px-2 py-1 text-white font-semibold rounded hover:bg-gray-700  md:ml-4' onClick={goToCart} ><i className="fa-solid fa-circle-info "></i> </a>
          


        </nav>
      </header>

    </div>
  )
}
