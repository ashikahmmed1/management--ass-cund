import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/HomePages/HomePages.jsx";
import AddTransactions from "../pages/AddTransactions/AddTransactions.jsx";
import Report from "../pages/Report/Report.jsx";
import Signup from "../pages/Signup/Signup.jsx";
import Signin from "../pages/Signin/Signin.jsx";
import UpdateTransaction from "../pages/UpdatTransaction/UpdatTrensaction.jsx";
import Details from "../pages/Details/Detils.jsx";
import MyTransactions from "../pages/MyTransactions/MyTransactions.jsx";
import MyProfile from "../pages/MyProfile/MyProfile.jsx";
import HomePages from "../pages/HomePages/HomePages.jsx";
import PrivateRoute from "../PrivatRout/PrivatRout.jsx";

export const router = createBrowserRouter(
   [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        // PUBLIC ROUTES
        {
          index: true,
          element: <HomePages />,
        },
        {
          path: "/signin",
          element: <Signin />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },

        // PRIVATE ROUTES
        {
  path: "/my-transactions",
  element: (
    <PrivateRoute>
      <MyTransactions />
    </PrivateRoute>
  ),
  loader: () => fetch("https://assignment-ten-serversites.vercel.app/api/management"),
},
        {
          path: "/add-transaction",
          element: (
            <PrivateRoute>
              <AddTransactions />
            </PrivateRoute>
          ),
        },
        {
          path: "/report",
          element: (
            <PrivateRoute>
              <Report />
            </PrivateRoute>
          ),
        },
        {
          path: "/update/:id",
          element: (
            <PrivateRoute>
              <UpdateTransaction />
            </PrivateRoute>
          ),
        },
        {
          path: "/transaction-details/:id",
          element: (
            <PrivateRoute>
              <Details />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(`https://assignment-ten-serversites.vercel.app/api/management/${params.id}`),
        },
        {
          path: "/update-profile",
          element: (
            <PrivateRoute>
              <MyProfile />
            </PrivateRoute>
          ),
        },
      ],
    },
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true,
    },
  }
);
