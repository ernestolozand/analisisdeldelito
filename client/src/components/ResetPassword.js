import React, { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import Cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom"

export default function ResetPassword() {
  const navigate = useNavigate()

  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')

  const submit = async (e) => {
    e.preventDefault();

    try {

      if (password != cpassword) {
        toast.error("Las contraseñas no coinciden")

      }
      else if (password.length < 6) {
        toast.error("La contraseña debe tener al menos 8 caracteres")

      }
      else {
        const cookieVal = Cookies.get("resetEmail")
        await axios.post("http://localhost:3000/resetPassword", {
          cookieVal, password
        })
          .then(res => {
            if (res.data == "pass") {
              toast.success("Contraseña cambiada exitosamente")
              Cookies.remove("resetEmail")
              navigate("/login")


            }
            else if (res.data == "fail") {
              toast.error("Algo salió mal!");

            }
          })
          .catch(e => {
            toast.error("Algo salió mal!");
          })
        }
    }

    
    catch (e) {
      toast.error("Algo salió mal!");

    }



  }

  return (
    <div className='mb-6'>

      <form onSubmit={submit} >
        <section className="text-gray-600 mt-14 body-font grid place-items-center  relative  ">

          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col   mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-2xl mb-5 font-medium title-font">Modificar contraseña</h2>


            <div className="relative mb-4">
              <label for="password" className="leading-7 text-sm text-gray-600">Contraseña</label>
              <input value={password} onChange={(event) => setPassword(event.target.value)} required type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label for="password" className="leading-7 text-sm text-gray-600">Confirmar contraseña</label>
              <input value={cpassword} onChange={(event) => setCpassword(event.target.value)} required type="password" id="cpassword" name="cpassword" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>



            <input className="mt-3 cursor-pointer text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit" value={"Modificar contraseña"} />

          </div>
        </section>

      </form>


    </div>
  )
}
