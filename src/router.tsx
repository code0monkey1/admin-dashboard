import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/categories",
    element: <div>Categories</div>,
  },
]);
