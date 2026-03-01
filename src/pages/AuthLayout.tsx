'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import FanCardSpinner from '../components/FanCardSpinner'

export default function AuthLayout() {
  const [isLoginView, setIsLoginView] = useState(true)

  return (
    <div className="flex items-center justify-center min-h-screen w-full px-14 py-10 relative">
      <div className="flex flex-col items-center w-full max-w-7xl z-10 gap-8">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-6xl font-black text-white tracking-tighter uppercase italic drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            TO-DO <span className="text-purple-500">QUEST</span>
          </h1>
          <p className="text-white/40 font-medium tracking-[0.3em] uppercase text-xs mt-1">
            Organiza tus tareas
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-12 md:gap-24">
          

          <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
            <div className="scale-90 lg:scale-105">
              <FanCardSpinner />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:justify-start">
            
            <div className="flex flex-col items-center w-full max-w-[400px] gap-2 md:gap-3">
              
              <div className="w-full flex justify-center">
                <div className="
                  relative inline-flex items-center h-10 px-1.5 
                  rounded-full bg-white/5 border border-white/10 
                  backdrop-blur-md shadow-inner
                ">
                  <div
                    className={`
                      absolute inset-y-0.5 
                      w-[calc(50%-0.375rem)] 
                      bg-gradient-to-r from-purple-600 to-indigo-600 
                      rounded-full transition-all duration-300 ease-out
                      shadow-[0_4px_20px_rgba(168,85,247,0.5)]
                      pointer-events-none
                      ${isLoginView ? 'left-1.5' : 'left-[calc(50%+0.375rem)]'}
                    `}
                  />

                  <button
                    type="button"
                    onClick={() => setIsLoginView(true)}
                    className={`
                      relative z-10 px-6 py-2 text-sm font-medium tracking-wide transition-colors duration-200
                      ${isLoginView 
                        ? 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]' 
                        : 'text-gray-300 hover:text-white'
                      }
                    `}
                  >
                    Iniciar sesión
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsLoginView(false)}
                    className={`
                      relative z-10 px-6 py-2 text-sm font-medium tracking-wide transition-colors duration-200
                      ${!isLoginView 
                        ? 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]' 
                        : 'text-gray-300 hover:text-white'
                      }
                    `}
                  >
                    Registrarse
                  </button>
                </div>
              </div>

              <motion.div
                key={isLoginView ? 'login' : 'register'}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="
                  w-full 
                  rounded-2xl 
                  shadow-2xl 
                  overflow-hidden
                "
              >
                {isLoginView ? <LoginForm /> : <RegisterForm />}
              </motion.div>
            
            </div>
          
          </div>
        
        </div>
      
      </div>

      {/* Resplandor de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-purple-600/10 blur-[150px] pointer-events-none rounded-full" />
    </div>
  )
}