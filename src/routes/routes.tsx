import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login";
import Register from "../pages/register";
import About from "../pages/about";
import Contact from "../pages/contact";
import AdminDashboard from "../pages/admin/adminDashboard";
import CreateStudent from "../pages/admin/createStudent";
import AdminLayout from "../components/layout/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
]);

export default router;
