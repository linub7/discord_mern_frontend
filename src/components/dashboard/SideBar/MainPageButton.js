import { Button } from '@mui/material';
import { MdGroups } from 'react-icons/md';

const MainPageButton = () => {
  return (
    <Button
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
      <MdGroups size={25} />
    </Button>
  );
};

export default MainPageButton;
