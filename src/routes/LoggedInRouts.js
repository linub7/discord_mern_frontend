import Login from 'pages/authPages/login';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

export default function LoggedInRoutes() {
  const {
    auth: { userDetails },
  } = useSelector((state) => ({ ...state }));
  return userDetails ? <Outlet /> : <Login />;
}
