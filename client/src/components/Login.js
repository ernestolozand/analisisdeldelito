import React, { useState } from 'react'
import Footer from "./Footer.js"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import Cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom"
import ReCAPTCHA from "react-google-recaptcha";

export default function Login() {

  // const [captchaValue, setCaptchaValue] = useState(null);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const submit = async (e) => {
    e.preventDefault();

    try {

      // if (!captchaValue) {
      //   toast.error("Fill the Captcha")

      // }
      // else {
        await axios.post("http://localhost:8000/login", {
          formData
        })
          .then(res => {
            if (res.data == "loginPass") {
              // const token=jwt.sign({email:formData.email},"helloandwelcometotechywebdevtutorialonauthhelloandwelcometotechywebdevtutorialonauth")
              Cookies.set("email", formData.email, { expires: 7 })
              toast.success("Bienvenido")

            }
            else if (res.data == "nouser") {
              toast.error("Usuario o correo electrónico no está registrado");

            }
            else if (res.data == "loginFail") {
              toast.error("Correo electrónico o contraseña incorrecta");
            }
            else if (res.data == "fail") {
              toast.error("Algo salió mal!");
            }
          })
          .catch(e => {
            toast.error("Algo salió mal!");
          })
        }
      // }


    catch (e) {
      toast.error("Algo salió mal!");

    }


  }

  return (
    <div className='mb-6'>
      
      <form method='/login' action="POST" onSubmit={submit} >
        <section className="text-gray-600 mt-14 body-font grid place-items-center  relative  ">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col   mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-2xl mb-5 font-medium title-font">Inicia sesión </h2>

            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">Correo electrónico </label>
              <input value={formData.email} onChange={(event) => setFormData({ ...formData, [event.target.name]: event.target.value })} required type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">Contraseña </label>
              <input value={formData.password} onChange={(event) => setFormData({ ...formData, [event.target.name]: event.target.value })} required type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>

            {/* <ReCAPTCHA
              sitekey={`${process.env.REACT_APP_RECAPTCHA}`}
              onChange={(value) => setCaptchaValue(value)}
              domain="ecommerce-both-frontend.onrender.com"
            /> */}


            <input className="mt-3 cursor-pointer text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit" value={"Iniciar sesión"} />
            <p className="text-base text-blue-700 mt-3"><Link to={"/forgotPassword"}>¿Olvidaste tu contraseña? </Link> </p>
            <p className="text-base text-gray-500 mt-3">¿No tienes una cuenta? </p>
            <p className="text-base text-blue-700 mt-3"><Link to={"/signup"}>Crear cuenta</Link> </p>

          </div>
        </section>

      </form>


    </div>
  )
}
