import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivetRoute from "../provider/PrivetRoute";

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
        element: <AuthLayout/>,
        children:[
            {
                path: '/auth/login',
                element: <Login/>
            },
            {
                path: '/auth/register',
                element: <Register/>
            }
        ]
    },
    {
        path: '/news-details/:id',
        element: (<PrivetRoute>
            <NewsDetails/>
        </PrivetRoute>),
        loader: ()=> fetch('/news.json')
    },
    {
        path: '/*',
        element: <p>404 error</p>
    },
])