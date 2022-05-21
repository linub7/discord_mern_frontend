import { Button, Dialog } from '@mui/material';
import { useEffect, useState } from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputWithLabel from 'components/shared/InputWithLabel';
import { validateEmail } from 'utils/validators';
import CustomPrimaryButton from 'components/shared/CustomPrimaryButton';
import { connect } from 'react-redux';
import { getActions } from 'store/actions/friendsActions';

const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation,
}) => {
  const [email, setEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateEmail(email));
  }, [email, setIsFormValid]);

  const handleSendInvitation = () => {
    sendFriendInvitation({ targetMailAddress: email }, handleCloseDialog);
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setEmail('');
  };

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Invite a friend</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter email address of friend which you would like to invite
          </DialogContentText>
          <InputWithLabel
            label={'Email'}
            type="text"
            value={email}
            setValue={setEmail}
            placeholder="Enter email address"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <CustomPrimaryButton
            label={'Send'}
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            additionalStyles={{
              marginRight: '15px',
              marginBottom: '10px',
              width: '100px',
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(AddFriendDialog);
