import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { MdCloseFullscreen, MdOpenInFull } from 'react-icons/md';

const MainContainer = styled('div')({
  position: 'absolute',
  bottom: '2px',
  right: '10px',
});

const ResizeRoomButton = ({ isRoomMinimized, handleRoomResize }) => {
  return (
    <MainContainer>
      <IconButton style={{ color: 'white' }} onClick={handleRoomResize}>
        {isRoomMinimized ? <MdOpenInFull /> : <MdCloseFullscreen />}
      </IconButton>
    </MainContainer>
  );
};

export default ResizeRoomButton;
