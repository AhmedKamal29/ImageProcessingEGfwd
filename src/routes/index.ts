import express from 'express';
import ImageProcess from './api/Resize';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('This is the main page for the server ');
});
routes.use('/', ImageProcess.imageProcess);

export default routes;
