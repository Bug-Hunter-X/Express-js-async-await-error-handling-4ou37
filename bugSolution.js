const express = require('express');
const app = express();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', async (req, res) => {
  try {
    await someAsyncOperation();
    res.send('Hello World!');
  } catch (err) {
    next(err); // Pass the error to the error handling middleware
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('Something went wrong!');
  }
} 