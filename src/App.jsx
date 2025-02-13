import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/layout";
import SpecialOffers from "./page/Special Offers/SpecialOffers";
import Sports from "./page/Sports/Sports";
import Games from "./page/Games/Games";
import Inventory from "./page/inventry/Inventory";
import Search from "./page/search/Search";
import Signup from "./page/Signup/Signup";
import Login from "./page/Login/Login";
import { Toaster } from "react-hot-toast";
import Home from "./page/home/Home";
import ResetPassword from "./page/ResetPassword/ResetPassword";
import ForgotPassword from "./page/ForgotPassword/ForgotPassword";
import VerifyCode from "./page/VerifyCode/VerifyCode";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "signup", element: <Signup /> },
        { index: true, element: <Login /> },
        { path: "resetPassword", element: <ResetPassword /> },
        { path: "forgotPassword", element: <ForgotPassword /> },
        { path: "verify", element: <VerifyCode /> },
        { path: "login", element: <Login /> },
        { path: "home", element: <Home /> },
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
