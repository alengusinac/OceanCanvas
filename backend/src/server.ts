import express from 'express';
import { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { connectDatabase } from './services/databaseConnection';
import userRouter from './routes/userRouter';
import productRouter from './routes/productRouter';
import orderRouter from './routes/orderRouter';
import sizeRouter from './routes/sizeRouter';
import categoryRouter from './routes/categoryRouter';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173', 'https://oceancanvas-frontend.onrender.com'],
    methods: ['GET', 'POST', 'PUT'],
  })
);

app.use(express.json({ limit: '5000kb' }));
app.use(
  express.urlencoded({
    extended: true,
    limit: '5000kb',
  })
);
app.use(morgan('dev'));
connectDatabase();

app.get('/', (req: Request, res: Response) => {
  res.send('Application really works!');
});

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);
app.use('/sizes', sizeRouter);
app.use('/categories', categoryRouter);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Application started on port ${process.env.SERVER_PORT}!`);
});
