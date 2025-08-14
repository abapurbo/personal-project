import {

    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../Mainlayout/Mainlayout";
import Home from "../Page/Home";
import About from "../Page/About";
const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout/>,
        children: [
            {
               path:'/',
               element:<Home></Home>
            },{
                path:'/about',
                element:<About></About>
            }
        ]
    },
]);
export default router