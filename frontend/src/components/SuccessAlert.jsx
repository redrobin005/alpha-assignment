import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function SuccessAlert({openSuccessAlert, setOpenSuccessAlert}) {

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={openSuccessAlert}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenSuccessAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{marginLeft: 7, textAlign:"center"}}
        >
          Payment successfully created!
        </Alert>
      </Collapse>
    </Box>
  );
}