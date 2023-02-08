import Login from "../components/login";
import AdminPage from "../pages/adminpage"
import ManualClose from "../components/modal";
import ItemList from "../components/itemlist"
import CashierProductCard from "../components/cashierCard";
import CashierPage from "../components/cashier";
import Chart from "../components/chart";


const routes = [
    {
        path: "/",
        element: (<Login/>)
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

]

export default routes