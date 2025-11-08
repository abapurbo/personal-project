import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import { Home } from "lucide-react";
import About from "../Page/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }, {
                path: '/about',
                element: <About />
            }
        ]
    },
]);
export default router