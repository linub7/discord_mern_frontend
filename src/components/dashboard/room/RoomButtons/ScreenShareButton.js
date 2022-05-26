import { IconButton } from '@mui/material';
import { useState } from 'react';
import { MdScreenShare, MdStopScreenShare } from 'react-icons/md';

const ScreenShareButton = () => {
  const [screenShareEnable, setScreenShareEnable] = useState(false);
  const handleToggleScreenShare = () =>
    setScreenShareEnable(!screenShareEnable);
  return (
    <IconButton onClick={handleToggleScreenShare} style={{ color: 'white' }}>
      {screenShareEnable ? <MdStopScreenShare /> : <MdScreenShare />}
    </IconButton>
  );
};

export default ScreenShareButton;
