import { Box } from '@mui/material';
import { MdFiberManualRecord } from 'react-icons/md';

const OnlineIndicator = () => {
  return (
    <Box
      sx={{
        color: '#3ba55d',
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        right: '5px',
      }}
    >
      <MdFiberManualRecord />
    </Box>
  );
};

export default OnlineIndicator;
