import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout/>,
        children: [
            {
                path:'',
                element: <Home/>
            },
            {
                path:'/category/:id' ,
                element: <CategoryNews/>,
                loader: ()=>fetch('/news.json')
            }
        ]
    },
    {
        path: 'auth',
        element: <p>authentication layout</p>
    },
    {
        path: 'news',
        element: <p>Newslayout</p>
    },
    {
        path: '/*',
        element: <p>404 error</p>
    },
])