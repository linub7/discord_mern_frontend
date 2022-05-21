import { friendsActions } from 'store/actions/friendsActions';

const initialState = {
  friends: [],
  pendingFriendsInvitations: [],
  onlineUsers: [],
};

const friendsReducer = (state = initialState, action) => {
  const { type, pendingFriendsInvitations, friends, onlineUsers } = action;

  switch (type) {
    case friendsActions.SET_PENDING_FRIENDS_INVITATIONS:
      return { ...state, pendingFriendsInvitations };

    case friendsActions.SET_FRIENDS:
      return { ...state, friends };

    case friendsActions.SET_ONLINE_USERS:
      return { ...state, onlineUsers };

    default:
      return state;
  }
};
export default friendsReducer;
