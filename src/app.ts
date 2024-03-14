import express from 'express';
import { config } from 'dotenv';
import { basicAuthMiddleware } from '../middlewares/middlewares';
import routes from '../routes/routes';

const app = express();
config();

app.use(basicAuthMiddleware);
app.use('/', routes);

export default app;
