import express from 'express';
import routes from './routes/index';

const app = express();
const port: number = 3000;
const url: string = `http://localhost:${port}/api/resize`;

app.use('/api', routes);

app.listen(port, () => {
  console.log(`server started at ${url}`);
});

export default { __dirname, app };
