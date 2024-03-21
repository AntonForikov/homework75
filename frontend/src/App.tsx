import {Grid, TextField} from '@mui/material';

function App() {

  return (
    <>
      <Grid container direction="column" gap={2} sx={{maxWidth: 400, mt: 4}} margin='auto'>
        <TextField multiline variant='outlined' label='Decoded message' rows={5} />
        <TextField variant='outlined' label='Password'/>
        <TextField multiline variant='outlined' label='Encoded message' rows={5} />
      </Grid>
    </>
  );
}

export default App;
