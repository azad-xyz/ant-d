import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login";
import Register from "../pages/register";
import { adminRoutes } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    element: <App />,
    children: adminRoutes,
  },
]);

export default router;
