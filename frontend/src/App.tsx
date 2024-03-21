import {Grid, IconButton, TextField} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function App() {

  return (
    <>
      <Grid container direction="column" gap={2} sx={{maxWidth: 400, mt: 4}} margin='auto'>
        <TextField multiline variant='outlined' label='Decoded message' rows={5} />
        <Grid container justifyContent='space-between' alignItems='center'>
          <TextField variant='outlined' label='Password' sx={{maxWidth: '78%'}} fullWidth/>
          <Grid>
            <IconButton>
              <ArrowDownwardIcon />
            </IconButton>
            <IconButton>
              <ArrowUpwardIcon />
            </IconButton>
          </Grid>
        </Grid>
        <TextField multiline variant='outlined' label='Encoded message' rows={5} />
      </Grid>
    </>
  );
}

export default App;
