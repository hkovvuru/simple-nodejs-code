import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/user-route';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

router.get('/', (req, res) => {
  res.send('<h1>Hello World<h1>');
});

// created application server
const server = app.listen(3000, () => {
  console.log('server is listening at port: 3000');
});

export default server;
