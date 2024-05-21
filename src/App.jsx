import { RouterProvider } from "react-router-dom";
import RouterConfig from "./modules/routes/RouterConfig";

function App() {
  return (
    <>
      <RouterProvider router={RouterConfig} />
    </>
  );
}

export default App;
