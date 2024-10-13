import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingUp from "./auth/SingUp";
import Login from "./auth/Login";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import VerifyEmail from "./auth/VerifyEmail";
import HereSection from "./components/HereSection";
import MainLayout from "./Layout/MainLayout";
import Profile from "./components/Profile";
import SearchPage from "./components/SearchPage";
import RestaurantsDetails from "./components/RestaurantsDetails";
import Cart from "./components/Cart";
import Restaurants from "./admin/Restaurants";
import AddMenu from "./admin/AddMenu";
import Order from "./components/Orders";
import Orders from "./admin/Orders";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HereSection />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/order/status",
        element: <Order />,
      },
      {
        path: "/search/:text",
        element: <SearchPage />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantsDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },

      //! admin routes start here
      {
        path: "/admin/restaurants",
        element: <Restaurants />,
      },
      {
        path: "/admin/menu",
        element: <AddMenu />,
      },
      {
        path: "/admin/orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/singUp",
    element: <SingUp />,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/ResetPassword",
    element: <ResetPassword />,
  },
  {
    path: "/VerifyEmail",
    element: <VerifyEmail />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
}

export default App;
