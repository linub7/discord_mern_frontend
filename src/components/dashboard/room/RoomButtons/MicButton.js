import { IconButton } from '@mui/material';
import { MdMic, MdMicOff } from 'react-icons/md';
import { connect } from 'react-redux';
import { getActions } from 'store/actions/roomActions';

const MicButton = ({ audioOnly, setToggleAudio, localStream }) => {
  const handleToggleMic = () => {
    localStream.getAudioTracks()[0].enabled = !audioOnly;
    setToggleAudio(!audioOnly);
  };
  return (
    <IconButton onClick={handleToggleMic} style={{ color: 'white' }}>
      {audioOnly ? <MdMic /> : <MdMicOff />}
    </IconButton>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

const mapStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStateToProps, mapActionsToProps)(MicButton);
