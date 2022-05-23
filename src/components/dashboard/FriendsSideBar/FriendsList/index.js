import { styled } from '@mui/system';
import FriendsListItem from './FriendsListItem';
import { connect } from 'react-redux';

const MainContainer = styled('div')({
  flexGrow: 1,
  width: '100%',
});

const FriendsList = ({ friends }) => {
  console.log(friends);
  return (
    <MainContainer className="scrollbar">
      {friends?.map((friend) => (
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
