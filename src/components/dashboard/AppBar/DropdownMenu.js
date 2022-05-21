import { IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { MdMoreVert } from 'react-icons/md';
import { logout } from 'utils/auth';

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
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
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownMenu;
