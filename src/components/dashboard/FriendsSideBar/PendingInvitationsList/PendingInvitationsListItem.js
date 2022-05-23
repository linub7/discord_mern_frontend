import { Box, Tooltip, Typography } from '@mui/material';
import Avatar from 'components/shared/Avatar';
import { useState } from 'react';
import InvitationDecisionsButton from './InvitationDecisionsButton';
import { connect } from 'react-redux';
import { getActions } from 'store/actions/friendsActions';

const PendingInvitationsListItem = ({
  id,
  username,
  email,
  acceptFriendInvitation,
  rejectFriendInvitation,
}) => {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const handleAcceptInvitation = () => {
    acceptFriendInvitation({ id });
    setButtonsDisabled(true);
  };

  const handleRejectInvitation = () => {
    rejectFriendInvitation({ id });
    setButtonsDisabled(true);
  };
  return (
    <Tooltip title={email}>
      <div style={{ width: '100%' }}>
        <Box
          sx={{
            width: '100%',
            height: '42px',
            marginTop: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{
              marginLeft: '7px',
              fontWeight: '700',
              color: '#8e9297',
              flexGrow: 1,
            }}
            variant="subtitle1"
          >
            {username}
          </Typography>
          <InvitationDecisionsButton
            disabled={buttonsDisabled}
            acceptFriendInvitationHandler={handleAcceptInvitation}
            rejectFriendInvitationHandler={handleRejectInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(PendingInvitationsListItem);
