import express from 'express';
import routes from './routes/index.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(routes);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});