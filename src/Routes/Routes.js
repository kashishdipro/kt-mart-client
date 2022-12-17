import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
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
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <ProtectedRoute><DashboardLayout/></ProtectedRoute>,
        children: [
            {
                path:'/dashboard',
                element:<ProtectedRoute><MyOrders/></ProtectedRoute>
            }
        ]
    }
])

export default router;