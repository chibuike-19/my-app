import { createSlice } from "@reduxjs/toolkit";
import { AdminType } from "../types/adminType";

const initialValue: AdminType = {
    name:'',
    email:'',
    uid:'',
    adminLoggedIn:false
}
export const AdminSlice = createSlice({
    name:'admin',
    initialState: {value: initialValue},
    reducers: {
        adminLogin(state, action){
            sessionStorage.setItem('adminAccessToken', action.payload.admin_access_token)
            if(action.payload.remember_me){
                localStorage.setItem('adminAccessToken', action.payload.admin_access_token)
            }
            state.value = action.payload
        },
        setAdmin(state, action){
            state.value = {...state.value, ...action.payload}
        },
        adminLogOut(state, action){
            sessionStorage.removeItem('adminAccessToken')
            localStorage.removeItem('adminAccessToken')
            state.value = initialValue
        }
    }
})

export const {adminLogin, adminLogOut, setAdmin} = AdminSlice.actions
export default AdminSlice.reducer
