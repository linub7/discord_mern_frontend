import { styled } from '@mui/system';
import CameraButton from './CameraButton';
import CloseRoomButton from './CloseRoomButton';
import MicButton from './MicButton';
import ScreenShareButton from './ScreenShareButton';

const MainContainer = styled('div')({
  height: '15%',
  width: '100%',
  overflow: 'hidden',
  backgroundColor: '#5865f2',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const RoomButtons = () => {
  return (
    <MainContainer>
      <ScreenShareButton />
      <MicButton />
      <CloseRoomButton />
      <CameraButton />
    </MainContainer>
  );
};

export default RoomButtons;
