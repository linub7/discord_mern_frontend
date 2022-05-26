import { Button } from '@mui/material';
import { MdAdd } from 'react-icons/md';
import { createNewRoom } from 'realtime-communication/roomHandler';

const CreateRoomButton = () => {
  const createNewRoomHandler = () => {
    createNewRoom();
  };
  return (
    <Button
      onClick={createNewRoomHandler}
      style={{
        width: '48px',
        height: '48px',
        borderRadius: '16px',
        margin: 0,
        padding: 0,
        minWidth: 0,
        marginTop: '10px',
        color: 'white',
        backgroundColor: '#5865f2',
      }}
    >
      <MdAdd size={25} />
    </Button>
  );
};

export default CreateRoomButton;
