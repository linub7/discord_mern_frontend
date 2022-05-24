import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import Avatar from 'components/shared/Avatar';

const MainContainer = styled('div')({
  width: '97%',
  display: 'flex',
  marginTop: '10px',
});

const AvatarContainer = styled('div')({
  width: '70px',
});

const MessageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const MessageContent = styled('div')({
  color: '#dcddde',
});

const SameAuthorMessageContent = styled('div')({
  color: '#dcddde',
  width: '97%',
});

const SameAuthorMessageText = styled('div')({
  marginLeft: '70px',
});

const Message = ({ message }) => {
  const {
    content,
    author: { username },
    sameAuthor,
    date,
    sameDay,
  } = message;

  if (sameAuthor && sameDay) {
    return (
      <SameAuthorMessageContent>
        <SameAuthorMessageText>{content}</SameAuthorMessageText>
      </SameAuthorMessageContent>
    );
  }
  return (
    <MainContainer>
      <AvatarContainer>
        <Avatar username={username} />
      </AvatarContainer>
      <MessageContainer>
        <Typography style={{ fontSize: '16px', color: 'white' }}>
          {username}{' '}
          <span style={{ fontSize: '12px', color: '#72767d' }}>{date}</span>
        </Typography>
        <MessageContent>{content}</MessageContent>
      </MessageContainer>
    </MainContainer>
  );
};

export default Message;
