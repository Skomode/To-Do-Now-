import React from "react"
import { AuthInput } from "./AuthInput"

function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] w-full ">

      <div className=" flex flex-col items-center justify-center w-96 p-4 gap-12 border border-white/20 rounded-md">

        <h3 className="tracking-widest font-medium text-white-600 ml-1">LOGIN</h3>

        <form className="flex flex-col gap-4">
          <AuthInput label="Email" />
          <AuthInput type="password" label="Contraseña" />
          <button className="
            w-full h-12 mt-4 rounded-xl 
            bg-gradient-to-r from-purple-600 to-indigo-600 
            hover:from-purple-500 hover:to-indigo-500 
            text-white font-bold shadow-lg shadow-purple-500/30 
            active:scale-95 transition-all ">
            Sign In
          </button>
        </form>
      </div>

    </div>
  )
}

export default LoginForm