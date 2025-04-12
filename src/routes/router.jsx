import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../Layout/MainLayouts";

import Home from "../Page/Home";
import About from "../Page/About";
import Skills from "../Page/Skills";
import Contact from "../Page/Contact";
import Project1 from './../Page/Details/Project1';
import Project2 from './../Page/Details/Project2';
import Project3 from './../Page/Details/Project3';
import ErrorPage from "../Page/ErrorPage";
import MyProjects from "../Page/MyProjects";


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
        path: "/my-projects",
        element:<MyProjects />,
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
