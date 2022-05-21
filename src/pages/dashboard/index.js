import { styled } from '@mui/system';
import AppBar from 'components/dashboard/AppBar';
import FriendsSideBar from 'components/dashboard/FriendsSideBar';
import Messenger from 'components/dashboard/Messenger';
import SideBar from 'components/dashboard/SideBar';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { connectWithSocketServer } from 'realtime-communication/socketConnection';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
});

const Dashboard = () => {
  const {
    auth: { userDetails },
  } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    connectWithSocketServer(userDetails);
  }, []);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

export default Dashboard;
