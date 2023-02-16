import AdminPage from '../pages/adminpage';
import ManualClose from '../components/modal';
import ItemList from '../components/itemlist';
import CashierProductCard from '../components/cashierCard';
import CashierPage from '../components/cashier';
import Chart from '../components/chart';
import ListUsers from '../components/listusers';
import ProtectedPage from './protected';
import CashierItem from '../pages/cashierItem';
import LoginPage from '../pages/loginpage';
import Addform from '../components/itemmodal';

const routes = [
  {
    path: '/',
    element: (<ProtectedPage guestOnly={true}>
      <LoginPage />
    </ProtectedPage>),
  },
  {
    path: '/admin',
    element: (
      <ProtectedPage needLogin={true} authRoles="Admin">
        <AdminPage />
      </ProtectedPage>
    ),
  },
  {
    path: '/modal',
    element: <ManualClose />,
  },
  {
    path: '/item',
    element: (
      <ProtectedPage needLogin={true}>
        <ItemList />
      </ProtectedPage>
    ),
  },
  {
    path: '/cahsierproduct',
    element: (
      <ProtectedPage needLogin={true}>
        <CashierProductCard />
      </ProtectedPage>
    ),
  },
  {
    path: '/cashierpage',
    element: (
      <ProtectedPage needLogin={true}>
        <CashierPage />
      </ProtectedPage>
    ),
  },
  {
    path: '/chart',
    element: (
      <ProtectedPage needLogin={true}>
        <Chart />
      </ProtectedPage>
    ),
  },
  {
    path: '/cashier',
    element: (
      <ProtectedPage needLogin={true}>
        <CashierItem />
      </ProtectedPage>
    ),
  },
  {
    path: '/listusers',
    element: (
      <ProtectedPage needLogin={true} authRoles="Admin">
        <ListUsers />
      </ProtectedPage>
    ),
  },
];

export default routes;
