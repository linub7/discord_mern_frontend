import { IconButton } from '@mui/material';
import { useState } from 'react';
import { MdVideocam, MdVideocamOff } from 'react-icons/md';

const CameraButton = () => {
  const [cameraEnabled, setCameraEnabled] = useState(false);

  const handleToggleCamera = () => setCameraEnabled(!cameraEnabled);
  return (
    <IconButton onClick={handleToggleCamera} style={{ color: 'white' }}>
      {cameraEnabled ? <MdVideocamOff /> : <MdVideocam />}
    </IconButton>
  );
};

export default CameraButton;
