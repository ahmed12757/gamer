import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout/Layout";
import Signup from "./page/Signup/Signup";
import Login from "./page/Login/Login";
import Home from "./page/home/Home";
import ResetPassword from "./page/ResetPassword/ResetPassword";
import ForgotPassword from "./page/ForgotPassword/ForgotPassword";
import VerifyCode from "./page/VerifyCode/VerifyCode";
import Loader from "./components/Loading/Loading";
import Card from "./components/Card/Card";
import GameDetails from "./page/GameDetails/GameDetails";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        // ✅ الصفحات المفتوحة للجميع
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "signup", element: <Signup /> },
        { path: "login", element: <Login /> },
        { path: "resetPassword", element: <ResetPassword /> },
        { path: "forgotPassword", element: <ForgotPassword /> },
        { path: "verify", element: <VerifyCode /> },

        // 🔒 الصفحات المحمية (لازم Token)
        {
          path: "loading",
          element: (
            <ProtectedRoute>
              <Loader />
            </ProtectedRoute>
          ),
        },
        {
          path: "card",
          element: (
            <ProtectedRoute>
              <Card />
            </ProtectedRoute>
          ),
        },
        {
          path: "game/:id",
          element: (
            <ProtectedRoute>
              <GameDetails />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
