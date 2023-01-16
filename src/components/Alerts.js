import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'
import { alertActions } from '../redux/alertSlice';
import { useDispatch, useSelector } from 'react-redux';


export function WarnAlert() {
    const dispatch = useDispatch();
    const {warnMessage}= useSelector(state=> state.alert);
  return (

    <Alert
    variant="filled" severity="warning"
    action={
      <IconButton
        aria-label="close"
        color="inherit"
        size="small"
        onClick={()=>{ dispatch(
            alertActions.warning({message: "" })
            );}}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>
    }
  >
    <AlertTitle>Warning</AlertTitle>
    <strong>{warnMessage}</strong>
  </Alert>

    
  );
}

export  function ErrorAlert() {
    const dispatch = useDispatch();
    const { errorMessage }= useSelector(state=> state.alert);

  return ( 
    <Alert
    variant="filled" severity="error"
    action={
      <IconButton
        aria-label="close"
        color="inherit"
        size="small"
        onClick={()=>{ dispatch(
            alertActions.error({message: "" })
            );}}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>
    }
  >
    <AlertTitle>Error</AlertTitle>
    <strong>{errorMessage}</strong>
  </Alert>
  
  );
}
export  function InfoAlert() {
    const dispatch = useDispatch()
    const { infoMessage }= useSelector(state=> state.alert);
  return ( 


    <Alert
    variant="filled" severity="info"
    action={
      <IconButton
        aria-label="close"
        color="inherit"
        size="small"
        onClick={()=>{ dispatch(
            alertActions.info({message: "" })
            );}}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>
    }
  >
    <AlertTitle>Info</AlertTitle>
    <strong>{infoMessage}</strong>
  </Alert>
  
  );
}

export function SuccessAlert() {
    const dispatch = useDispatch();
    const {successMessage }= useSelector(state=> state.alert);
  return (
        

    <Alert
    variant="filled" severity="success"
    action={
      <IconButton
        aria-label="close"
        color="inherit"
        size="small"
        onClick={()=>{ dispatch(
            alertActions.success({message: "" })
            );}}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>
    }
  >
    <AlertTitle>Success</AlertTitle>
    <strong>{successMessage}</strong>
  </Alert>
  
  );
}