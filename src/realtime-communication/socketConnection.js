import io from 'socket.io-client';
import store from 'store';
import { setPendingFriendsInvitations } from 'store/actions/friendsActions';

let socket = null;

export const connectWithSocketServer = (userDetails) => {
  const jwtToken = userDetails.token;
  socket = io(process.env.REACT_APP_BACKEND, {
    auth: {
      token: jwtToken,
    },
  });

  socket.on('connect', () => {
    console.log('Successfully connected with socket.io server');
    console.log(socket.id);
  });

  socket.on('friends-invitations', (data) => {
    const { pendingInvitations } = data;

    console.log(`Friends invitations event came`);
    console.log(pendingInvitations);

    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  });
};
