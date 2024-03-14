import express from 'express';
import { basicAuthMiddleware } from '../middlewares/middlewares';
import routes from '../routes/routes';

const app = express();

app.use(basicAuthMiddleware);
app.use('/', routes);

export default app;
