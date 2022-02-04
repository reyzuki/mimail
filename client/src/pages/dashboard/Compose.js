import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core';
import Stack from '@mui/material/Stack';


function Compose() {
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '100ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic" type = "email" label="Sender" variant="outlined" />
    <TextField id="outlined-basic" label="To" variant="outlined" />
    <TextField id="outlined-basic" label="Subject" variant="outlined" />
    <TextField id="outlined-basic" label="Compose mail" variant="outlined" />
    <Stack direction="row" ><Button onClick={() => {alert('Submited');}}variant="contained">Send</Button></Stack>
    
  </Box>
  )
}

export default Compose;
