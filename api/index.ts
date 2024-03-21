import express from 'express';
import cors from 'cors';
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
app.use(express.json());
app.use(cors({origin: ['http://localhost:5173']}))
const port = 8000;

app.post('/encode', (req, res) => {
  const {password, message} = req.body;
  return res.json({encoded: Vigenere.Cipher(password).crypt(message)});
});

app.post('/decode', (req,res) => {
  const {password, message} = req.body;
  return res.json({decoded: Vigenere.Decipher(password).crypt(message)});
});

app.listen(port, () => {
  console.log(`Server run on ${port} port.`)
});
