import React from "react";
import AdminSignIn from "../../pages/AdminSignIn";

const AdminRoutes = [
    {
        path: "",
        component: AdminSignIn,
        meta: {
            redirectUrl:'/sign-up',
            protectedRoute: true,
            role: 'admin'
        }
    },
    {
        path: '/sign-up',
        component: AdminSignIn,
        meta: {
            redirectUrl: '/sign-up',
            protectedRoute: false,
            role: 'admin'
        }
    }
]

export default AdminRoutes