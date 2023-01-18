import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
const ConfirmDialog = ({ title, children, open, setOpen, }) => {
  const navigate=useNavigate()
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="success-dialog"
    >
      <DialogTitle id="success-dialog">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <center>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={() => {
              setOpen(false);
              navigate('/')
            }}
          >
            Ok
          </Button>
        </DialogActions>
      </center>
    </Dialog>
  );
};
export default ConfirmDialog;