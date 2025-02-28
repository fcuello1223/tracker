import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Subscription Tracker!')
})

app.listen(3003, () => {
  console.log('API server started on port 3003');
})

export default app;
