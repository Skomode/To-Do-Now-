import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (

    <div className="min-h-screen bg-gradient-to-br from-[#0a0817] via-[#0f0c29] to-[#1a1645] text-white">
      
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0)_0%,rgba(10,8,26,1)_100%)] pointer-events-none" />

      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-6">
        <Outlet /> 
      </main>
    </div>
  )
}