import { styled } from '@mui/system';
import FriendsListItem from './FriendsListItem';

const MainContainer = styled('div')({
  flexGrow: 1,
  width: '100%',
});

const DUMMY_FRIENDS = [
  {
    id: '1',
    username: 'Mohammad',
    isOnline: true,
  },
  {
    id: '2',
    username: 'Melina',
    isOnline: false,
  },
  {
    id: '3',
    username: 'Hooman',
    isOnline: false,
  },
];

const FriendsList = () => {
  return (
    <MainContainer className="scrollbar">
      {DUMMY_FRIENDS?.map((friend) => (
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

export default FriendsList;
