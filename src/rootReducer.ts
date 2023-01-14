import AdminReducer from './features/adminSlice'
import UserReducer from './features/userSlice'

const rootReducer = {
    admin: AdminReducer,
    user: UserReducer
}

export default rootReducer