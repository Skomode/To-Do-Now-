
import { useAuth } from '../context/AuthContext'

export default function MainLayout() {
  const { isAuthenticated, login, logout } = useAuth()

  return (
    <div>
      <h1>Home</h1>
      <p>Estado: {isAuthenticated ? 'autenticado' : 'No autenticado'}</p>
      
      <button onClick={() => login({ name: "Test User" })}>
        Login falso
      </button>
      
      <button onClick={logout}>
        Logout
      </button>
    </div>
  )
}