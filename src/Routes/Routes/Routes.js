import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import FourOFour from "../../Pages/FourOFour";
import Home from "../../Pages/Home/Home/Home";

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