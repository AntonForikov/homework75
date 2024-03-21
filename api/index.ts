import express from 'express';
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const port = 8000;

// app.get('/', (req, res) => {
//   return res.send('This is Home page.')
// });

app.post('/encode/:target', (req, res) => {
  res.send(Vigenere.Cipher(password).crypt(req.params.target));
});

app.post('/decode/:target', (req,res) => {
  res.send(Vigenere.Decipher(password).crypt(req.params.target));
});

app.listen(port, () => {
  console.log(`Server run on ${port} port.`)
});
