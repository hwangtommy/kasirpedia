import AdminPage from "../pages/adminpage"
import ManualClose from "../components/modal";
import ItemList from "../components/itemlist"
import CashierProductCard from "../components/cashierCard";
import CashierPage from "../components/cashier";
import Chart from "../components/chart";

import CashierItem from "../pages/cashierItem"
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
        path: "/modal",
        element: (<ManualClose />)
    },
    {
        path: "/item",
        element: (<ItemList/>)
    },
    {
        path: "/cahsierproduct",
        element: (<CashierProductCard/>)
    },
    {
        path: "/cashierpage",
        element: (<CashierPage/>)
    },
    {
        path: "/chart",
        element: (<Chart />)
    },

    {
        path: "/cashier",
        element: (<CashierItem/>)
    },
]

export default routes