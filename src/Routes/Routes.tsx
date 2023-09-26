import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";

const router = createBrowserRouter([
  { index: true, element: <HomePage /> },
  { path: "/" },
]);
export default router;
