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
import SellerRoute from "./SellerRoute/SellerRoute";
import Blogs from "../Pages/Blogs/Blogs";
import NotFound from "../Pages/NotFound/NotFound";
import Payment from "../Pages/Dashboard/Payment/Payment";

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
                loader: ({params}) =>fetch(`https://kt-mart-server.vercel.app/products/${params.name}`),
                element: <ProtectedRoute><BrandProducts/></ProtectedRoute>
            },
            {
                path: '/blogs',
                element: <Blogs/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '*',
                element: <NotFound/>
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
                path: '/dashboard/payment/:id',
                loader: ({params}) =>fetch(`https://kt-mart-server.vercel.app/bookings/${params.id}`),
                element: <BuyerRoute><Payment/></BuyerRoute>
            },
            {
                path: '/dashboard/addaproduct',
                element: <SellerRoute><AddAProduct/></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts/></SellerRoute>
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