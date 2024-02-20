import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./routes/MainPage";
import NotFound from "./routes/NotFound";
import { QueryClient, QueryClientProvider } from "react-query";
import Announce from "./routes/Announce";
import Noticemain from "./routes/Noticemain";
import Recipe from "./routes/Recipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "Announce",
        element: <Announce />,
      },
      {
        path: "Noticemain",
        element: <Noticemain />,
      },
      {
        path: "Recipe",
        element: <Recipe />,
      },
    ],
  },
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
