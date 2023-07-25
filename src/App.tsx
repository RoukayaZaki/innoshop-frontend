import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemPage from "./Components/ItemPage/ItemPage";
import PurchasePage from "./Components/PurchasePage/PurchasePage";
import StorePage from "./Components/StorePage/StorePage";
import SignInPage from "./Components/SignIn/SignInPage";
import UserProfilePage from "./Components/User/UserProfilePage";
import Success from "./Components/Verdict/Success";
import Fail from "./Components/Verdict/Fail";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
function App() {
  return React.createElement(
    Router,
    null,
    React.createElement(
      Routes,
      null,
      React.createElement(Route, {
        path: "/",
        element: React.createElement(Home),
      }),
      React.createElement(Route, {
        path: "/about",
        element: React.createElement(About),
      }),
      React.createElement(Route, {
        path: "/store/",
        element: React.createElement(StorePage),
      }),
      React.createElement(Route, {
        path: "/product/:id",
        element: React.createElement(ItemPage),
      }),
      React.createElement(Route, {
        path: "/signin/",
        element: React.createElement(SignInPage),
      }),
      React.createElement(Route, {
        path: "/checkout/",
        element: React.createElement(PurchasePage),
      }),
      React.createElement(Route, {
        path: "/profile/",
        element: React.createElement(UserProfilePage),
      }),
      React.createElement(Route, {
        path: "/success/",
        element: React.createElement(Success),
      }),
      React.createElement(Route, {
        path: "/fail/",
        element: React.createElement(Fail),
      })
    )
  );
}

export default App;
