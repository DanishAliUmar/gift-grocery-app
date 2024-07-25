import { createBrowserRouter, Outlet, RouterProvider, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home"
import About from "./pages/AboutUs/About"
import Contacts from "./pages/Contacts"
import Partners from "./pages/Partners"
import Results from "./pages/Results"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Dashboard from "./pages/Dashboard";
import Stats from "./pages/Dashboard/Stats";
import Wallet from "./pages/Dashboard/Wallet";
import ClaimGift from "./pages/Dashboard/Stats/ClaimGift";
import StatsContent from "./pages/Dashboard/Stats/StatsContent";
import Affiliate from "./pages/Dashboard/Affiliate/index";
import Faqs from "./pages/Dashboard/Faqs/index";
import HelpSupport from "./pages/Dashboard/HelpAndSupport/index";
import Profile from "./pages/Dashboard/Profile/index";
import PromoteBusiness from "./pages/Dashboard/PromoteBusiness/index";
import ReferAndEarn from "./pages/Dashboard/ReferAndEarn/index";
import Testimonials from "./pages/Dashboard/Testimonials/index";
import WalletDetail from "./pages/Dashboard/Wallet/WalletDetail";
import GiftWalletDetail from "./pages/Dashboard/Wallet/GiftWalletDetail";
import { useState } from "react";
import ProfileSettings from "./pages/Dashboard/Profile/ProfileSettings";
import BankAccount from "./pages/Dashboard/Profile/BankAccount";
import NotFoundPage from "./components/NotFoundPage";
import Rewards from "./pages/Dashboard/Rewards";
import GetCoupon from "./pages/GetCoupon";

function App() {
  const [popupType, setPopupType] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const Layout = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('/login');
    const isSignUp = location.pathname.includes('/signup');
    return (
      <div className="app">
        <Navbar />
        <Outlet />
       {isLogin || isSignUp ? <></> : <Footer />}
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/get-coupon",
          element: <GetCoupon />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/partners",
          element: <Partners />,
        },
        {
          path: "/results",
          element: <Results />,
        },
        {
          path: "/contacts",
          element: <Contacts />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
          children: [
            {
              index: true, element: <Stats popupType={popupType} setPopupType={setPopupType} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />,
            }, // Default for /dashboard
            {
              path: "stats", element: <Stats popupType={popupType} setPopupType={setPopupType} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />, children: [
                { path: "", element: <StatsContent /> }, // Default for /dashboard/stats
                { path: "claim-form", element: <ClaimGift setPopupType={setPopupType} /> }, // Child route for /dashboard/stats/claim-form
              ]
            },
            {
              path: "wallet", element: <Wallet />, children: [
                { path: "", element: <WalletDetail /> },
                { path: "gift-wallet", element: <GiftWalletDetail /> },
              ]
            },
            { path: "affiliate", element: <Affiliate /> },
            { path: "rewards", element: <Rewards /> },
            { path: "faqs", element: <Faqs /> },
            { path: "support", element: <HelpSupport /> },
            { path: "profile", element: <Profile />, children: [
              { path: "", element: <ProfileSettings /> },
              { path: "bank-account", element: <BankAccount /> },
            ] },
            { path: "promote-business", element: <PromoteBusiness /> },
            { path: "refer-and-earn", element: <ReferAndEarn /> },
            { path: "testimonials", element: <Testimonials /> },
          ],
        },

      ],
    },
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
