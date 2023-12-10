import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'

import SharedLayout from './components/SharedLayout'
import ProtectedRoute from './components/ProtectedRoute'

import {
  Home,
  ProductPage,
  About,
  Contact,
  AddProduct,
  EditProduct,
  Login,
  Error,
} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'add-product',
        element: (
          <ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: 'product',
        children: [
          {
            path: ':id',
            element: <ProductPage />,
          },
          {
            path: ':id/edit',
            element: (
              <ProtectedRoute>
                <EditProduct />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
])

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}

export default App
