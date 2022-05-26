import { styled } from '@mui/system';
import { useState } from 'react';
import ResizeRoomButton from './ResizeRoomButton';
import RoomButtons from './RoomButtons';

import VideosContainer from './VideosContainer';

const MainContainer = styled('div')({
  position: 'absolute',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#202225',
});

const FullScreenRoomStyle = {
  width: '100%',
  height: '100vh',
};

const MinimizedRoomStyle = {
  bottom: '0px',
  right: '0px',
  width: '30%',
  height: '40vh',
};

const Room = () => {
  const [isRoomMinimized, setIsRoomMinimized] = useState(true);

  const handleRoomResize = () => setIsRoomMinimized(!isRoomMinimized);

  return (
    <MainContainer
      style={isRoomMinimized ? MinimizedRoomStyle : FullScreenRoomStyle}
    >
      <VideosContainer />
      <RoomButtons />
      <ResizeRoomButton
        isRoomMinimized={isRoomMinimized}
        handleRoomResize={handleRoomResize}
      />
    </MainContainer>
  );
};

export default Room;
