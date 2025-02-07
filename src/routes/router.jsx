import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../Layout/MainLayouts";
import ErrorPage from "../page/ErrorPage";
import Home from "../Page/Home";
import About from "../Page/About";




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
    ],
  },
]);
