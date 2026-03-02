import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";

import "./App.css";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Shayars } from "./pages/Shayars";
import { Share } from "./pages/Share";
import { ErrorPage } from "./pages/ErrorPage";
import {Admin} from "./pages/Admin";
import  {AdminPage}  from "./pages/AdminPage";  // ⬅️ import AdminPage

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "shayars",
        element: <Shayars />,
      },
      {
        path: "share",
        element: <Share />,
      },
      {
        path: "admin",         
        element: <Admin />,
      },
      {
        path: "adminpage",   // ✅ add AdminPage route
        element: <AdminPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;