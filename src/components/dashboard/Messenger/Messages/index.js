import { styled } from '@mui/system';
import DateSeparator from 'components/shared/DateSeparator';
import { connect } from 'react-redux';
import Message from './Message';
import MessagesHeader from './MessagesHeader';

const MainContainer = styled('div')({
  height: 'calc(100% - 60px)',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
});

const Messages = ({ chosenChatDetails, messages }) => {
  const convertDateToHumanReadable = (date, format) => {
    const map = {
      mm: date.getMonth() + 1,
      dd: date.getDate(),
      yy: date.getFullYear().toString().slice(-2),
      yyyy: date.getFullYear(),
    };

    return format.replace(/mm|dd|yy|yyy/gi, (matched) => map[matched]);
  };
  return (
    <MainContainer>
      <MessagesHeader name={chosenChatDetails?.name} />
      {messages?.map((message, index) => {
        const sameAuthor =
          index > 0 &&
          messages[index].author._id === messages[index - 1].author._id;

        const sameDay =
          index > 0 &&
          convertDateToHumanReadable(new Date(message.date), 'dd/mm/yy') ===
            convertDateToHumanReadable(
              new Date(messages[index - 1].date),
              'dd/mm/yy'
            );

        return (
          <div key={index} style={{ width: '97%' }}>
            {(!sameDay || index === 0) && (
              <DateSeparator
                date={convertDateToHumanReadable(
                  new Date(message.date),
                  'dd/mm/yy'
                )}
              />
            )}
            <Message
              content={message.content}
              username={message.author.username}
              sameAuthor={sameAuthor}
              sameDay={sameDay}
              date={convertDateToHumanReadable(
                new Date(message.date),
                'dd/mm/yy'
              )}
            />
          </div>
        );
      })}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStoreStateToProps)(Messages);
