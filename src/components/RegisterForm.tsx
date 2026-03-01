import React from "react"
import { AuthInput } from "./AuthInput"

function RegisterForm() {
    return (
        <div className="flex flex-col items-center w-full max-w-[400px] gap-8 p-6 md:p-8">
            <h3 className="tracking-widest font-medium text-white text-xl md:text-2xl">
                REGISTRO
            </h3>

            <form className="flex flex-col gap-5 w-full">
                <AuthInput label="Email" />
                <AuthInput type="password" label="Contraseña" />
                <AuthInput value="" type="password" label="Repetir contraseña" />

                <button
                    className="
            w-full h-12 mt-2 rounded-xl 
            bg-gradient-to-r from-purple-600 to-indigo-600 
            hover:from-purple-500 hover:to-indigo-500 
            text-white font-bold shadow-lg shadow-purple-500/30 
            active:scale-95 transition-all duration-200
          "
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default RegisterForm