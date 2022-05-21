import { Box, IconButton } from '@mui/material';
import React from 'react';
import { MdCheck, MdClear } from 'react-icons/md';

const InvitationDecisionsButton = ({
  disabled,
  acceptFriendInvitationHandler,
  rejectFriendInvitationHandler,
}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        style={{ color: 'white' }}
        disabled={disabled}
        onClick={acceptFriendInvitationHandler}
      >
        <MdCheck />
      </IconButton>
      <IconButton
        style={{ color: 'white' }}
        disabled={disabled}
        onClick={rejectFriendInvitationHandler}
      >
        <MdClear />
      </IconButton>
    </Box>
  );
};

export default InvitationDecisionsButton;
