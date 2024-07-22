import "./App.css";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import React from "react";
import {
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
  RouterProvider,
} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <ScrollRestoration />
      <Outlet />
    </div>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact-us", element: <ContactUs /> },
    ],
  },
]);

function App() {
  return (
    <div className=" w-full flex flex-col items-start justify-start font-mono ">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
