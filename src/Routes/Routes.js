import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/brand/:name',
                loader: ({params}) =>fetch(`http://localhost:5000/products/${params.name}`),
                element: <ProtectedRoute><BrandProducts/></ProtectedRoute>
            },
            {
                path: '/dashboard',
                element: <ProtectedRoute><Dashboard/></ProtectedRoute>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    }
])

export default router;