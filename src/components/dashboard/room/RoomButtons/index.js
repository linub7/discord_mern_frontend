import { styled } from '@mui/system';
import CameraButton from './CameraButton';
import CloseRoomButton from './CloseRoomButton';
import MicButton from './MicButton';
import ScreenShareButton from './ScreenShareButton';
import { connect } from 'react-redux';
import { getActions } from 'store/actions/roomActions';

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

const RoomButtons = (props) => {
  const { localStream, isUserJoinedWithOnlyAudio } = props;
  return (
    <MainContainer>
      {!isUserJoinedWithOnlyAudio && <ScreenShareButton {...props} />}
      <MicButton localStream={localStream} />
      <CloseRoomButton />
      {!isUserJoinedWithOnlyAudio && <CameraButton localStream={localStream} />}
    </MainContainer>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(RoomButtons);
