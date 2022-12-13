import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import BrandItems from "../Pages/BrandItems/BrandItems";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

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
                element: <BrandItems/>
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