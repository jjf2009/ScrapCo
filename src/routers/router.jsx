import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
// import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/scrapitem/CartPage.jsx";
import CheckoutPage from "../pages/scrapitem/CheckoutPage.jsx";
import SingleScrapMaterial from "../pages/scrapitem/SingleScrapMaterial.jsx";
// import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/scrapitem/OrderPage.jsx";
// import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardPage from "../pages/dashboard/DashboardPage.jsx";
// import Dashboard from "../pages/dashboard/Dashboard.jsx";
import ManageItems from "../pages/dashboard/manageItems/ManageItems.jsx";
import AddItem from "../pages/dashboard/AddItem/AddItem.jsx";
import UpdateItem from "../pages/dashboard/EditItem/UpdateItem.jsx";
import UserDashboard from "../pages/dashboard/users/UserDashboard.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        // {
        //     path: "/",
        //     element: <Home />,
        // },
        {
            path: "/orders",
            element: <OrderPage />
        },
        {
            path: "/about",
            element: <div>About</div>,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/checkout",
          element: <CheckoutPage />
        },
        {
          path: "/scrap/:id",
          element: <SingleScrapMaterial/>,
        },
        {
          path: "/user-dashboard",
          element: <UserDashboard />
        }
      ]
    },
    {
      path: "/admin",
      element: <AdminLogin />,
    },
    {
      path: "/dashboard",
      element: <DashboardPage/>,
      children: [
        // {
        //   path: "",
        //   element: <Dashboard />,
        // },
        {
          path: "add-new-scrap",
          element:<AddItem/>,
        },
        {
          path: "edit-scrap/:id",
          element:<UpdateItem/>,
        },
        {
          path: "manage-scrap",
          element: <ManageItems/>
        }
      ]
    }
]);

export default router;
