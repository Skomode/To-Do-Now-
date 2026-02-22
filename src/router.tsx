
import { createBrowserRouter } from 'react-router-dom';
import { RequireAuth } from './components/RequireAuth';
import MainLayout from './pages/MainLayout';
import AuthPage from './pages/AuthLayout';


export const router = createBrowserRouter([
  {
    path: '/',
    element:<MainLayout />,
    children: [
      {
        index: true,
        element: <p>hola esta es home page</p>,
      },
      {

        path: '/auth',
        element: <AuthPage />,

      },

      {
        
        path: '/register',
        element: <p>registro</p>

      },

      {
        path: '/colection',
        element: <p>coleccion</p>
      },

    
      {
        element: <RequireAuth />,
        children: 
        [
          {
          path: '/p',
          element: <p>Estado:</p>
          },

          {
          path: '/o',
          element: <p>solo  accedido</p>
          }
        ],
      },
    ],
  },
]);