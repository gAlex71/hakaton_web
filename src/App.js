// import styles from './App.module.scss';
import { observer } from 'mobx-react-lite';
import store from './store/store';
import NoAccessRole from './routes/NoAccessRole';
import EmployeeRoutes from './routes/EmployeeRoutes';
import AdminRoutes from './routes/AdminRoutes';
import ClientRoutes from './routes/ClientRoutes';

const App = observer(() => {
  const {authUser} = store;

  const routes = {
    '': <NoAccessRole />,
    'employee': <EmployeeRoutes />,
    'admin': <AdminRoutes />,
    'client': <ClientRoutes />
  };

  return routes[authUser];
});

export default App;
