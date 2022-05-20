import AlertNotification from 'components/shared/AlertNotification';
import Login from 'pages/authPages/login';
import Register from 'pages/authPages/register';
import Dashboard from 'pages/dashboard';
import Home from 'pages/home';
import { Routes, Route } from 'react-router-dom';
import LoggedInRoutes from 'routes/LoggedInRouts';
import NotLoggedInRoutes from 'routes/NotLoggedInRouts';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route element={<NotLoggedInRoutes />}>
          <Route path="/login" element={<Login />} exact />
          <Route path="/register" element={<Register />} exact />
        </Route>
        <Route element={<LoggedInRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} exact />
          <Route path="/" element={<Home />} exact />
        </Route>
      </Routes>
      <AlertNotification />
    </>
  );
}

export default App;
