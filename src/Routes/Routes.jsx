import { createBrowserRouter } from "react-router";
import Mainmother from "../Layouts/Mainmother";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignIn from "../Pages/SignIn/SignIn";
import SkillDetails from "../Pages/SkillDetails";
import PrivetRoute from "../Pages/PrivetRoute";
import MyProfile from "../Pages/MyProfile";
import ForgetPassword from "../Pages/Login/ForgetPassword";
import NoData from "../Pages/NoData/NoData";
import AllItem from "../Pages/All Item/AllItem";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainmother />,
        errorElement: <NoData />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/my-profile',
                element: <MyProfile />
            },
            {
                path: '/sign-in',
                element: <SignIn />
            },
            {
                path: '/skill/:skillId',
                element:<SkillDetails />
            },
            {
                path: '/myprofile',
                element: <PrivetRoute> <MyProfile /></PrivetRoute>
            },
            {
                path: '/forget-password',
                element: <ForgetPassword />
            },
            {
                path: '/allitem',
                element: <AllItem />
            },
            {
                path: '*',
                element: <NoData />
            }
        ]
    }
])
    