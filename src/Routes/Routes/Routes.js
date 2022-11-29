import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Catagories from "../../Pages/Catagories/Catagories";
import FourOFour from "../../Pages/FourOFour";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Products/Products";

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
                path: '/categories/:id',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`http://localhost:5000/catagories/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '*',
        element: <FourOFour></FourOFour>
    }
])
export default router;