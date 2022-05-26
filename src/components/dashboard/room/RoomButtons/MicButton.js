import { IconButton } from '@mui/material';
import { useState } from 'react';
import { MdMic, MdMicOff } from 'react-icons/md';

const MicButton = () => {
  const [micEnabled, setMicEnabled] = useState(true);

  const handleToggleMic = () => setMicEnabled(!micEnabled);
  return (
    <IconButton onClick={handleToggleMic} style={{ color: 'white' }}>
      {micEnabled ? <MdMicOff /> : <MdMic />}
    </IconButton>
  );
};

export default MicButton;
