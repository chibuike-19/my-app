import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../types/userType";

const initialValue: UserType = {
    name:'',
    email:'',
    uid:'',
    userLoggedIn:false
}
export const UserSlice = createSlice({
    name:'admin',
    initialState: {value: initialValue},
    reducers: {
        userLogin(state, action){
            sessionStorage.setItem('userAccessToken', action.payload.user_access_token)
            if(action.payload.remember_me){
                localStorage.setItem('userccessToken', action.payload.user_access_token)
            }
            state.value = action.payload
        },
        setUser(state, action){
            state.value = {...state.value, ...action.payload}
        },
        userLogOut(state, action){
            sessionStorage.removeItem('userAccessToken')
            localStorage.removeItem('userAccessToken')
            state.value = initialValue
        }
    }
})

export const {userLogin, userLogOut, setUser} = UserSlice.actions
export default UserSlice.reducer
