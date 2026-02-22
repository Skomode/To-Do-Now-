// src/layouts/AuthLayout.tsx
import type { ReactNode } from 'react';
import LoginForm from '../components/LoginForm';
import FanCardSpinner from '../components/FanCardSpinner';
import { motion } from 'framer-motion';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
}

export default function AuthLayout() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full px-14 py-10 relative overflow-hidden bg-[#0a0817]">
      
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

          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full max-w-[400px]"
            >
              <LoginForm />
            </motion.div>
          </div>
        </div>
      </div>

      {/* RESPLANDOR DE FONDO */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-purple-600/10 blur-[150px] pointer-events-none rounded-full" />
    </div>
  );
}