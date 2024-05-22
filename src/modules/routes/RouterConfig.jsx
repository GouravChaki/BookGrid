import { Outlet, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "../auth/AuthProviderComponent/AuthProvider";
import Home from "../components/Home/Home";

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
