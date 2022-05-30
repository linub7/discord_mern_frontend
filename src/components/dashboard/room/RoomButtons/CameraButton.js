import { IconButton } from '@mui/material';
import { useState } from 'react';
import { MdVideocam, MdVideocamOff } from 'react-icons/md';

const CameraButton = ({ localStream }) => {
  const [cameraEnabled, setCameraEnabled] = useState(true);

  const handleToggleCamera = () => {
    localStream.getVideoTracks()[0].enabled = !cameraEnabled;
    setCameraEnabled(!cameraEnabled);
  };
  return (
    <IconButton onClick={handleToggleCamera} style={{ color: 'white' }}>
      {cameraEnabled ? <MdVideocam /> : <MdVideocamOff />}
    </IconButton>
  );
};

export default CameraButton;
