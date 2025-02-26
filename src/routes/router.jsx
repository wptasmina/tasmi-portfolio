import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../Layout/MainLayouts";
import ErrorPage from "../page/ErrorPage";
import Home from "../Page/Home";
import About from "../Page/About";
import Skills from "../Page/Skills";
import Contact from "../Page/Contact";
import Projects from '../components/MyProject/Projects';
import Project1 from './../Page/Details/Project1';
import Project2 from './../Page/Details/Project2';
import Project3 from './../Page/Details/Project3';


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
        path: "/Projects",
        element:<Projects />,
      },
      {
        path: "/trakSmart",
        element: <Project1 />,
      },
      {
        path: "/galaxy-blogger",
        element: <Project2 />,
      },
      {
        path: "/cricket-team",
        element: <Project3 />,
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
