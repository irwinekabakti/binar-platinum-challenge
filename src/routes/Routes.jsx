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

const Routes = () => {
  return [
    { path: "/signIn", element: <SignIn /> },
    { path: "/signUp", element: <SignUp /> },
    { path: "/", element: <Home /> },
    { path: "searchCars", element: <SearchCar /> },
    { path: "resultCar", element: <ResultCar /> },
    { path: "/detailCar/:id", element: <Detail /> },
    { path: "/*", element: <NotFound /> },
  ];
};

export default Routes;
