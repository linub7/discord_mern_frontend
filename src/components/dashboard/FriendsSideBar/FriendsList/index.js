import { styled } from '@mui/system';
import FriendsListItem from './FriendsListItem';
import { connect } from 'react-redux';

const MainContainer = styled('div')({
  flexGrow: 1,
  width: '100%',
});

const FriendsList = ({ friends, onlineUsers }) => {
  const checkOnlineUsers = (friends = [], onlineUsers = []) => {
    friends.forEach((friend) => {
      const isUserOnline = onlineUsers.find(
        (user) => user.userId === friend.id
      );
      friend.isOnline = isUserOnline ? true : false;
    });

    return friends;
  };
  return (
    <MainContainer className="scrollbar">
      {checkOnlineUsers(friends, onlineUsers)?.map((friend) => (
        <FriendsListItem
          username={friend.username}
          key={friend.id}
          id={friend.id}
          isOnline={friend.isOnline}
        />
      ))}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};

export default connect(mapStoreStateToProps)(FriendsList);
