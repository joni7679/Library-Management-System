import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Singup/Singup";
import Contact from "../Pages/Contact/Contact";
import Error404 from "../Pages/Error404/Error404"
import Admin from "../Dasboard/Admin/Admin";
import UserTable from "../Dasboard/Admin/UserTable";
import AddStudents from "../Dasboard/Admin/AddStudents";

export let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "users",
        element: <UserTable />,
      },
      {
        path: "addstudents",
        element: <AddStudents />,
      },
      {
        path: "addbooks",
        element: <h1>Add Books</h1>,
      },
      {
        path: "editbooks",
        element: <h1>Edit Books</h1>,
      }
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  }
]);
