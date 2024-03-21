import {CircularProgress, Grid, IconButton, TextField} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import axios from 'axios';
import React, {useState} from 'react';
interface Message {
  password: string
  decodedMessage: string
  encodedMessage: string
}

const initialMessage = {
  password: '',
  decodedMessage: '',
  encodedMessage: ''
}

interface Encoded {
  encoded: string
}

interface Decoded {
  decoded: string
}

function App() {
  const [message, setMessage] = useState<Message>(initialMessage);
  const [loading, setLoading] = useState(false);

  const changeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setMessage((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const encodeMessage = async () => {
    const toSend = {
      message: message.decodedMessage,
      password: message.password
    };

    if (message.decodedMessage[0] === ' ') {
      alert("Decoded message can't start from whitespace.");
    } else if (message.decodedMessage === '') {
      alert("Decoded message can't be an empty string.");
    } else if (message.password[0] === ' ') {
      alert("Password can't start from whitespace.");
    } else if (message.password === '') {
      alert("Password can't be an empty string.");
    } else {
      try {
        setLoading(true);
        const {data} = await axios.post<Encoded>('http://localhost:8000/encode', toSend);
        setMessage((prevState) => ({...prevState, encodedMessage: data.encoded}));
      } catch (e) {
        alert('Please check URL or run server!');
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
  };

  const decodeMessage = async () => {
    const toSend = {
      message: message.encodedMessage,
      password: message.password
    };

    if (message.encodedMessage[0] === ' ') {
      alert("Encoded message can't start from whitespace.");
    } else if (message.encodedMessage === '') {
      alert("Encoded message can't be an empty string.");
    } else if (message.password[0] === ' ') {
      alert("Password can't start from whitespace.");
    } else if (message.password === '') {
      alert("Password can't be an empty string.");
    } else {
      try {
        setLoading(true);
        const {data} = await axios.post<Decoded>('http://localhost:8000/decode', toSend);
        setMessage((prevState) => ({...prevState, decodedMessage: data.decoded}));
      } catch (e) {
        alert('Please check URL or run server!');
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Grid container direction="column" gap={2} sx={{maxWidth: 400, mt: 4}} margin="auto">
      <TextField
        multiline
        variant="outlined"
        label="Decoded message"
        rows={5}
        name="decodedMessage"
        value={message.decodedMessage}
        onChange={changeMessage}
      />
      <Grid container justifyContent="space-between" alignItems="center">
        <TextField
          variant="outlined"
          label="Password"
          type='password'
          sx={{maxWidth: '78%'}}
          fullWidth
          name="password"
          value={message.password}
          onChange={changeMessage}
        />
        <Grid>
          <IconButton type="button" disabled={loading} onClick={encodeMessage}>
            <ArrowDownwardIcon/>
          </IconButton>
          <IconButton type="button" disabled={loading} onClick={decodeMessage}>
            <ArrowUpwardIcon/>
          </IconButton>
        </Grid>
      </Grid>
      <TextField
        multiline
        variant="outlined"
        label="Encoded message"
        rows={5}
        name="encodedMessage"
        value={message.encodedMessage}
        onChange={changeMessage}
      />
      {loading && <Grid alignSelf='center'><CircularProgress/></Grid>}
    </Grid>
  );
}

export default App;
