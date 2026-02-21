
import { createBrowserRouter } from 'react-router-dom';
import { RequireAuth } from './components/RequireAuth';
import MainLayout from './pages/MainLayout';


export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <MainLayout />,
      },
      // ── Rutas protegidas ──
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