import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../Layout/MainLayouts";
import ErrorPage from "../page/ErrorPage";
import Home from "../Page/Home";
import About from "../Page/About";
import Portfolio from "../Page/Portfolio";
import Skills from "../Page/Skills";
import Contact from "../Page/Contact";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-me",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
