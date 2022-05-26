import { IconButton } from '@mui/material';
import { MdClose } from 'react-icons/md';
import { leaveRoom } from 'realtime-communication/roomHandler';

const CloseRoomButton = () => {
  const handleLeaveRoom = () => {
    leaveRoom();
  };
  return (
    <IconButton onClick={handleLeaveRoom} style={{ color: 'white' }}>
      <MdClose />
    </IconButton>
  );
};

export default CloseRoomButton;
