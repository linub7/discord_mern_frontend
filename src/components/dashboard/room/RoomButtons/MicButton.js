import { IconButton } from '@mui/material';
import { MdMic, MdMicOff } from 'react-icons/md';
import { connect } from 'react-redux';
import { getActions } from 'store/actions/roomActions';

const MicButton = ({ audioOnly, setToggleAudio }) => {
  const handleToggleMic = () => {
    setToggleAudio(!audioOnly);
  };
  return (
    <IconButton onClick={handleToggleMic} style={{ color: 'white' }}>
      {audioOnly ? <MdMicOff /> : <MdMic />}
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
