import { RouterProvider } from "react-router-dom";
import RouterConfig from "./modules/routes/RouterConfig";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={RouterConfig} />
    </>
  );
}

export default App;
