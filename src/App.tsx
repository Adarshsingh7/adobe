import { createBrowserRouter } from "react-router";
import Page from "./page";
import AboutUs from "@/components/AboutUs";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
