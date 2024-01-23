import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './snackbarStyles';

const CustomizedSnackbar = ({open, setOpen}) => {
    const classes = useStyles();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

      return (
        <div className={}>
          <Snackbar 
          anchorOrigin={{ }} 
          open={} autoHideDuration={} onClose={}>
            <MuiAlert onClose={} severity="success" elevation={} variant="">Transaction successfully created.</MuiAlert>
          </Snackbar>
        </div>
      );
};