import CashierItem from "../pages/cashierItem"
import AdminPage from "../pages/adminpage"
import LoginPage from "../pages/loginpage"

const routes = [
    {
        path: "/",
        element: (<LoginPage />)
    },
    {
        path: "/admin",
        element: (<AdminPage />)
    },
    {
        path: "/cashier",
        element: (<CashierItem/>)
    }
]

export default routes