import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../Layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      // { path: "/product/:id", element: <Project /> },
    ],
  },
]);
