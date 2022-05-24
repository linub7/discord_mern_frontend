import { styled } from '@mui/system';
import { useState } from 'react';
import { connect } from 'react-redux';

const MainContainer = styled('div')({
  height: '60px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Input = styled('input')({
  backgroundColor: '#2f3136',
  width: '98%',
  height: '44px',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '14px',
  padding: '0 10px',
});

const NewMessageInput = ({ chosenChatDetails }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => setMessage(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    console.log('Sending message to server');
    setMessage('');
  };

  return (
    <MainContainer>
      <Input
        value={message}
        placeholder={`Writing message to ${chosenChatDetails?.name}`}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStoreStateToProps)(NewMessageInput);
