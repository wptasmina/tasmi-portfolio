import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../Layout/MainLayouts";
import ErrorPage from "../page/ErrorPage";
import Home from "../Page/Home";




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
    ],
  },
]);
