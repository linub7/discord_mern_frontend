import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import Avatar from 'components/shared/Avatar';

const MainContainer = styled('div')({
  width: '98%',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '10px',
  marginLeft: '10px',
});

const MessagesHeader = ({ name }) => {
  return (
    <MainContainer>
      <Avatar large username={name} />
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold', color: 'white', margin: '0 5px' }}
      >
        {name}
      </Typography>
      <Typography sx={{ color: '#b9bbbe', margin: '0 5px' }}>
        This is the beginning of your conversation with {name}
      </Typography>
    </MainContainer>
  );
};

export default MessagesHeader;
