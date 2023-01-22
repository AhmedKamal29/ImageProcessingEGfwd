import express from 'express';
import imageProcess from './api/Resize';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('This is the main page for the server ');
});
routes.use('/', imageProcess.imageProcess);

export default routes;
