import { IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { MdMoreVert } from 'react-icons/md';
import { logout } from 'utils/auth';
import { connect } from 'react-redux';
import { getActions } from 'store/actions/roomActions';

const DropdownMenu = ({ audioOnly, setToggleAudio }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleToggleAudioOnly = () => {
    setToggleAudio(!audioOnly);
  };
  return (
    <div>
      <IconButton onClick={handleMenuOpen} style={{ color: 'white' }}>
        <MdMoreVert />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleToggleAudioOnly}>
          {audioOnly ? 'Audio Only Disabled' : 'Audio Only Enabled'}
        </MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

const mapStateToProps = ({ room }) => {
  return { ...room };
};

export default connect(mapStateToProps, mapActionsToProps)(DropdownMenu);
