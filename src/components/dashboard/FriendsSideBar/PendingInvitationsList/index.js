import { styled } from '@mui/system';
import PendingInvitationsListItem from './PendingInvitationsListItem';

const MainContainer = styled('div')({
  width: '100%',
  height: '22%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'auto',
});

const DUMMY_INVITATIONS = [
  {
    _id: '1',
    senderId: {
      username: 'mohammad',
      email: 'linub7@gmail.com',
    },
  },
  {
    _id: '2',
    senderId: {
      username: 'test',
      email: 'test@gmail.com',
    },
  },
];

const PendingInvitationsList = () => {
  return (
    <MainContainer className="scrollbar">
      {DUMMY_INVITATIONS?.map((invitation) => (
        <PendingInvitationsListItem
          key={invitation._id}
          id={invitation._id}
          username={invitation.senderId.username}
          email={invitation.senderId.email}
        />
      ))}
    </MainContainer>
  );
};

export default PendingInvitationsList;
