import { Outlet, createBrowserRouter } from "react-router-dom";
import { Home } from "../components/Home";
import { AuthProvider } from "../auth/AuthProvider/AuthProvider";

const RouterConfig = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      }
    ],
  },
]);

export default RouterConfig;
