import Home from "./pages/Home";
import "./App.css";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import { RouterProvider, createBrowserRouter } from 'react-router-dom/dist/umd/react-router-dom.development.js';

let allRoute = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);
function App() {
  return (
    <>
     <RouterProvider router={allRoute} />
    </>
  );
}

export default App;
