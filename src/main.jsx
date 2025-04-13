import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';


import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
        <RouterProvider router={router} /> 
        <ToastContainer position="top-center" />
     </HelmetProvider>
  </StrictMode>,
)
