import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Button } from "@/components/ui/button";
import ErrorPage from "./pages/error";
import RootLayout from "./layouts/root.layout";
import HomePage from "./pages/home";
import CreatePage from "./pages/create";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/create",
        element: <CreatePage></CreatePage>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
