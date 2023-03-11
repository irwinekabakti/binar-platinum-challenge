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
import Dashboard from "../Admin/pages/Dashboard";
import LoginAdmin from "../Admin/pages/LoginAdmin";
import ViewerPDF from "../pages/ViewerPDF";
import Toast from "../pages/Toast";
import Cars from "../Admin/pages/Cars";
import CarFormPage from "../Admin/pages/CarFormPage";
import ConfirmPayment from "../pages/ConfirmPayment";
import UploadPayment from "../pages/UploadPayment";

const Routes = () => {
  const { isAuthenticated } = useSelector((state) => state.authStore);
  // const { isRegister } = useSelector((state) => state.regStore);
  const { isAdminAuthenticated } = useSelector((state) => state.adminStore);

  return [
    { path: "toast", element: <Toast /> },
    { path: "/signIn", element: <SignIn /> },
    { path: "/signUp", element: <SignUp /> },
    { path: "/", element: <Home /> },
    { path: "/", element: <SignIn /> },
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
    { path: "uploadPayment", element: <UploadPayment /> },
    // { path: "eTicket/:id", element: <ETiket /> },
    { path: "eTicket", element: <ETiket /> },
    { path: "/*", element: <NotFound /> },
    { path: "viewerPdf", element: <ViewerPDF /> },

    // ======= ADMIN PAGE ======= //
    { path: "loginAdmin", element: <LoginAdmin /> },
    {
      path: "dashboard",
      element: isAdminAuthenticated ? (
        <Dashboard />
      ) : (
        <Navigate to="/loginAdmin" />
      ),
    },
    {
      path: "/cars",
      element: isAdminAuthenticated ? <Cars /> : <Navigate to="/loginAdmin" />,
    },
    { path: "/cars/edit/:id", element: <CarFormPage currentPage="edit" /> },
    { path: "/cars/add-new", element: <CarFormPage currentPage="add" /> },
  ];
};

export default Routes;
