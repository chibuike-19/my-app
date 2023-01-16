import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";

const customRoute = [...AdminRoutes, ...UserRoutes]

export default customRoute