import { BrowserRouter , Routes, Route} from "react-router-dom"
import { useSelector } from "react-redux"
import customRoute from "./routes"
import { IRootState } from ".."
import Redirect from "./Redirect"


const Router = () => {
    const user = useSelector((state: IRootState)=> state.user.value)
    const admin = useSelector((state: IRootState) => state.admin.value)

    const { userLoggedIn } = user
    const { adminLoggedIn } = admin

    return(
        <BrowserRouter>
            <Routes>
            {customRoute.map((route) => {
          if (
            route.meta.protectedRoute &&
            route.meta.role === "user" &&
            userLoggedIn
          ) {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            );
          }

          if (
            route.meta.protectedRoute &&
            route.meta.role === "admin" &&
            adminLoggedIn
          ) {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            );
          }

          if (route.meta.protectedRoute && (!userLoggedIn || !adminLoggedIn)) {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<Redirect redirectUrl={route.meta.redirectUrl} />}
              />
            );
          }

          return (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          );
        })}

            </Routes>
        </BrowserRouter>
    )
}

export default Router