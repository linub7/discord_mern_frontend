import { IconButton } from '@mui/material';
import { MdClose } from 'react-icons/md';

const CloseRoomButton = () => {
  const handleLeaveRoom = () => {};
  return (
    <IconButton onClick={handleLeaveRoom} style={{ color: 'white' }}>
      <MdClose />
    </IconButton>
  );
};

export default CloseRoomButton;
