import CashierItem from "../components/cashierItem"
import Login from "../components/login"
import AdminPage from "../pages/adminpage"
import SalesReport from "../components/salesReport"

const routes = [
    {
        path: "/",
        element: (<Login />)
    },
    {
        path: "/admin",
        element: (<AdminPage />)
    },
    {
        path: "/kasir",
        element: (<CashierItem/>)
    },
    {
        path: "/admin/salesreport",
        element: (<SalesReport/>)
    }
]

export default routes