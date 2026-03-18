import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import UserRouter from "./modules/users/users.routes";

export const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());

app.use('/users',UserRouter);