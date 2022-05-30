import { IconButton } from '@mui/material';
import { MdScreenShare, MdStopScreenShare } from 'react-icons/md';
import { switchOutgoingTracks } from 'realtime-communication/webRTCHandler';

const constraints = {
  audio: false,
  video: true,
};

const ScreenShareButton = ({
  localStream,
  setScreenSharingStream,
  screenSharingStream,
  isScreenSharingActive,
}) => {
  const handleToggleScreenShare = async () => {
    if (!isScreenSharingActive) {
      let stream = null;

      try {
        stream = await navigator.mediaDevices.getDisplayMedia(constraints);
      } catch (error) {
        console.log(
          'an error occured when trying to get an access to sharing access'
        );
        console.log(error);
      }

      if (stream) {
        setScreenSharingStream(stream);
        switchOutgoingTracks(stream);
      }
    } else {
      switchOutgoingTracks(localStream);
      screenSharingStream.getTracks().forEach((element) => element.stop());
      setScreenSharingStream(null);
    }
  };

  return (
    <IconButton onClick={handleToggleScreenShare} style={{ color: 'white' }}>
      {isScreenSharingActive ? <MdStopScreenShare /> : <MdScreenShare />}
    </IconButton>
  );
};

export default ScreenShareButton;
