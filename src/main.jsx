import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import About from "./routes/About.jsx";
import Project from "./routes/Project.jsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  {
    path: "/project/:id",
    element: <Project />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
