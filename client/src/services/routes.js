import DashboardLayout from "../layouts/DashboardLayout";
import Inbox from "../pages/dashboard/Inbox";
import Compose from "../pages/dashboard/Compose";
import AuxLayout from "../layouts/AuxLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const routes = [
    {
        layout: AuxLayout,
        component: Login,
        path: '/login',
        private: false,
        exact: false,
    },
    {
        layout: AuxLayout,
        component: Register,
        path: '/register',
        private: false,
        exact: false,
    },
    {
        layout: DashboardLayout,
        component: Inbox,
        path: '/',
        private: true,
        exact: true,
    },
    {
        layout: DashboardLayout,
        component: Compose,
        path: '/compose',
        private: true,
        exact: false,
    },
]

export default routes
