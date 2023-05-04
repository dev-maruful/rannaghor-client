import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import ChefRecipes from "../components/ChefRecipes";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorPage from "../components/ErrorPage";
import Blog from "../components/Blog";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: (
          <PrivateRoute>
            <ChefRecipes></ChefRecipes>
          </PrivateRoute>
        ),
      },
      {
        path: "loader",
        element: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
