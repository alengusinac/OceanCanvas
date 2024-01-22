import express from 'express';
import { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { connectDatabase } from './services/databaseConnection';
import userRouter from './routes/userRouter';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173', 'https://oceancanvas-frontend.onrender.com'],
    methods: ['GET', 'POST'],
  })
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(morgan('dev'));
connectDatabase();

app.get('/', (req: Request, res: Response) => {
  res.send('Application really works!');
});

app.use('/users', userRouter);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Application started on port ${process.env.SERVER_PORT}!`);
});
