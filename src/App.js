import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import SingleBlog from "./Pages/SingleBlog";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:slug",
        element: <SingleBlog />,
      },
      {
        path: "/project",
        element: <Project />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
