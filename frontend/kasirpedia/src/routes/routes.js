import Login from "../components/login"
import AdminPage from "../pages/adminpage"

const routes = [
    {
        path: "/",
        element: (<Login />)
    },
    {
        path: "/admin",
        element: (<AdminPage />)
    },
]

export default routes