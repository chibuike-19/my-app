import React from "react";
import AdminSignIn from "../../pages/AdminSignIn";

const AdminRoutes = [
    {
        path: '',
        component: AdminSignIn,
        meta: {
            redirectUrl:'/sign-up',
            protectedRoute: false,
            role: 'Admin'
        }
    }
]

export default AdminRoutes