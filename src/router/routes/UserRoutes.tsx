import React from "react";
import UserSignIn from "../../pages/UserSignIn";

const UserRoutes = [
    {
        path: '',
        component: UserSignIn,
        meta: {
            redirectUrl:'/sign-up',
            protectedRoute: false,
            role: 'Admin'
        }
    }
]

export default UserRoutes