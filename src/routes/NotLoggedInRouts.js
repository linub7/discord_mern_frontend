import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function NotLoggedInRoutes() {
  const {
    auth: { userDetails },
  } = useSelector((state) => ({ ...state }));
  return userDetails ? <Navigate to={'/dashboard'} /> : <Outlet />;
}
