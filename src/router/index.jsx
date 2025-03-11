import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../shared/layouts/mainlayout";
import Home from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",

    element: <Mainlayout />,
    children: [
      {
        path: "/",
        Component: Home,
      },
    ],
  },
]);
