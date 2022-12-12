import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import BrandItems from "../Pages/BrandItems/BrandItems";
import Home from "../Pages/Home/Home/Home";

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
            }
        ]
    }
])

export default router;