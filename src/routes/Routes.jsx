import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
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
import ViewerPDF from "../pages/ViewerPDF";
import ConfirmPayment from "../pages/ConfirmPayment";
import UploadPayment from "../pages/UploadPayment";
import ETiket from "../pages/ETiket";

const Routes = () => {
  const { isAuthenticated } = useSelector((state) => state.authStore);

  return [
    { path: "/signIn", element: <SignIn /> },
    { path: "/signUp", element: <SignUp /> },
    { path: "/", element: <Home /> },
    {
      path: "/",
      element: isAuthenticated ? <Home /> : <Navigate to="/signIn" />,
    },
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
    { path: "payment/:id", element: <Payment /> },
    { path: "confirmPayment/:id", element: <ConfirmPayment /> },
    { path: "uploadPayment/:id", element: <UploadPayment /> },
    { path: "eTicket/:id", element: <ETiket /> },
    { path: "viewerPdf", element: <ViewerPDF /> },
    { path: "/*", element: <NotFound /> },
  ];
};

export default Routes;
