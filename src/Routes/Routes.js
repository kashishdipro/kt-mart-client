import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import MakeAdmin from "../Pages/Dashboard/MakeAdmin/MakeAdmin";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute/AdminRoute";
import BuyerRoute from "./BuyerRoute/BuyerRoute";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import AddAProduct from "../Pages/Dashboard/AddAProduct/AddAProduct";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";

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
                path: '/dashboard/myorders',
                element: <BuyerRoute><MyOrders/></BuyerRoute>
            },
            {
                path: '/dashboard/addaproduct',
                element: <AddAProduct/>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts/>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers/></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers/></AdminRoute>
            },
            {
                path: '/dashboard/makeadmin',
                element: <AdminRoute><MakeAdmin/></AdminRoute>
            }
        ]
    }
])

export default router;