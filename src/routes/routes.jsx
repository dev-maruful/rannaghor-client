import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import ChefRecipes from "../components/ChefRecipes";
import SingleChef from "../components/SingleChef";
import LoadingSpinner from "../components/LoadingSpinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/chefrecipes/:id",
        element: <ChefRecipes></ChefRecipes>,
      },
      {
        path: "loader",
        element: <LoadingSpinner></LoadingSpinner>,
      },
    ],
  },
]);

export default router;
