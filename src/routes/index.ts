import express from 'express';
import ImageProcess from './api/ImageProcessing';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send(
    '<h2 style="text-align:center; margin:5%">Hello There 👋🏻 ! <br> To start Please add to the URL "/resize" followed by the query parameters </h2>'
  );
});
routes.use('/', ImageProcess);

export default routes;
