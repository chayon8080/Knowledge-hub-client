import { createBrowserRouter } from "react-router-dom"
import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Blogs from "../../Pages/Blogs/Blogs";
import Catagories from "../../Pages/Catagories/Catagories";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import FourOFour from "../../Pages/FourOFour";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/catagories',
                element: <Catagories></Catagories>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/categories/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/catagories/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
        ]
    },
    {
        path: '*',
        element: <FourOFour></FourOFour>
    }
])
export default router;