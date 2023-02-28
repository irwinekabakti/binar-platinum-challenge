import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "jquery/dist/jquery.js";
import Home from "../pages/Home";
import SearchCar from "../pages/SearchCar";
import ResultCar from "../pages/ResultCar";
import Detail from "../pages/Detail";
import NotFound from "../pages/NotFound";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import Payment from "../pages/Payment";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import ETiket from "../pages/ETiket";
// import SignInAdmin from "../components/SignIn/SignInAdmin";
import Dashboard from "../Admin/pages/Dashboard";
import LoginAdmin from "../Admin/pages/LoginAdmin";

const Routes = () => {
  const { isAuthenticated } = useSelector((state) => state.authStore);
  // const { isRegister } = useSelector((state) => state.regStore);
  const { isAdminAuthenticated } = useSelector((state) => state.adminStore);

  return [
    { path: "/signIn", element: <SignIn /> },
    { path: "/signUp", element: <SignUp /> },
    // { path: "/signInAdmin", element: <SignInAdmin /> },
    { path: "/", element: <Home /> },
    { path: "/", element: <SignIn /> },
    {
      path: "/",
      element: isAuthenticated ? <Home /> : <Navigate to="/signIn" />,
    },
    // {
    //   path: "searchCars",
    //   element: isAuthenticated ? <SearchCar /> : <Navigate to="/signIn" />,
    // },
    {
      path: "searchCars",
      element: isAuthenticated ? <SearchCar /> : <Navigate to="/signIn" />,
    },
    {
      path: "resultCar",
      element: isAuthenticated ? <ResultCar /> : <Navigate to="/signIn" />,
    },
    {
      path: "/detailCar/:id",
      element: isAuthenticated ? <Detail /> : <Navigate to="/signIn" />,
    },
    { path: "pembayaran", element: <Payment /> },
    { path: "/*", element: <NotFound /> },
    { path: "ETiket", element: <ETiket /> },

    // ======= ADMIN PAGE =======
    { path: "loginAdmin", element: <LoginAdmin /> },
    {
      path: "dashboard",
      element: isAdminAuthenticated ? (
        <Dashboard />
      ) : (
        <Navigate to="/loginAdmin" />
      ),
    },
  ];
};

export default Routes;
