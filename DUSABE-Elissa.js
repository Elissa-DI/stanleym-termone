const express = require('express');
const app = express();

app.get('/add', (req, res) => {
  const numbers = req.query.numbers;
  const sum = numbers.split(',').reduce((acc, current) => acc + parseInt(current), 0);
  res.send({ sum: sum });
});

app.get('/multiply', (req, res) => {
  const numbers = req.query.numbers;
  const product = numbers.split(',').reduce((acc, current) => acc * parseInt(current), 1);
  res.send({ product: product });
});

app.listen(3000, () => {
  console.log('Calculator app listening on port 3000!');
});