import express from 'express';
import { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
// import { connectDatabase } from './services/databaseConnection';
import userRouter from './routes/userRouter';

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST'],
  })
);
app.use(morgan('dev'));
// connectDatabase();

app.get('/', (req: Request, res: Response) => {
  res.send('Application really works!');
});

app.use('/user', userRouter);

app.listen(3000, () => {
  console.log('Application started on port 3000!');
});
