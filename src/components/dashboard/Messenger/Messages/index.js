import { styled } from '@mui/system';
import { connect } from 'react-redux';
import Message from './Message';
import MessagesHeader from './MessagesHeader';

const DUMMY_MESSAGES = [
  {
    _id: 1,
    content: 'hello',
    sameAuthor: 'false',
    author: {
      username: 'Marek',
    },
    date: '22/01/2022',
    sameDay: false,
  },
  {
    _id: 2,
    content: 'hello once again',
    sameAuthor: 'true',
    author: {
      username: 'Marek',
    },
    date: '22/01/2022',
    sameDay: true,
  },
  {
    _id: 3,
    content: 'hello third time',
    sameAuthor: 'true',
    author: {
      username: 'Marek',
    },
    date: '23/01/2022',
    sameDay: false,
  },
  {
    _id: 4,
    content: 'hello response first time',
    sameAuthor: false,
    author: {
      username: 'John',
    },
    date: '23/01/2022',
    sameDay: true,
  },
  {
    _id: 5,
    content: 'hello response third time',
    sameAuthor: true,
    author: {
      username: 'John',
    },
    date: '24/01/2022',
    sameDay: false,
  },
];

const MainContainer = styled('div')({
  height: 'calc(100% - 60px)',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
});

const Messages = ({ chosenChatDetails, messages }) => {
  return (
    <MainContainer>
      <MessagesHeader name={chosenChatDetails?.name} />
      <div style={{ borderBottom: '1px solid black' }}></div>
      {DUMMY_MESSAGES.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStoreStateToProps)(Messages);
