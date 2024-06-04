import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layout/app'

import { NotFound } from './pages/404'
import { Error } from './pages/error'
import { AthletesProfile } from './pages/app//dashboard/athlete-profile'
import { Dashboard } from './pages/app/dashboard/dashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,

    errorElement: <Error />,

    children: [{ path: '/', element: <Dashboard /> },
    { path: '/athlete-profile', element: <AthletesProfile /> },
  ],
    
  },

  {
    path: '*',
    element: <NotFound />,
  },
])
