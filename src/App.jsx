import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/layout";

import Signup from "./page/Signup/Signup";
import Login from "./page/Login/Login";
import { Toaster } from "react-hot-toast";
import Home from "./page/home/Home";
import ResetPassword from "./page/ResetPassword/ResetPassword";
import ForgotPassword from "./page/ForgotPassword/ForgotPassword";
import VerifyCode from "./page/VerifyCode/VerifyCode";
import Loader from "./components/Loading/Loading";
import Card from "./components/Card/Card";
import GameDetails from "./page/GameDetails/GameDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "signup", element: <Signup /> },

        { path: "resetPassword", element: <ResetPassword /> },
        { path: "forgotPassword", element: <ForgotPassword /> },
        { path: "verify", element: <VerifyCode /> },
        { path: "login", element: <Login /> },
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "loading", element: <Loader /> },
        { path: "card", element: <Card /> },
        { path: "game/:id", element: <GameDetails /> },
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
{
  /* <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="SpecialOffers" element={<SpecialOffers />} />
      <Route path="sports" element={<Sports />} />
      <Route path="games" element={<Games />} />
      <Route path="inventory" element={<Inventory />} />
      <Route path="search" element={<Search />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="sports" element={<Sports />} />
      <Route path="sports" element={<Sports />} />
    </Route>
  </Routes>
</BrowserRouter>; */
}
export default App;
