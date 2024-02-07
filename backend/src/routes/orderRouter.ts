import express from 'express';
import { Order } from '../models/OrderSchema';
import ShortUniqueId from 'short-unique-id';
import verifyToken from '../middleware/verifyToken';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    if (!orders) {
      throw new Error('Orders not found.');
    }

    res.status(200).json({
      status: 200,
      success: true,
      message: 'Orders fetched successfully.',
      data: orders,
    });
  } catch (error: any) {
    console.log('GetOrders Error: ', error);

    res.status(400).json({
      status: 400,
      message: error.message.toString(),
    });
  }
});

router.get('/user', verifyToken, async (req: any, res) => {
  try {
    console.log('UserOrders: ', req.userId);

    const orders = await Order.find({ user: req.userId });
    console.log('Orders: ', orders);
    res.status(200).json({
      status: 200,
      success: true,
      message: 'Orders fetched successfully.',
      data: orders,
    });
  } catch (error: any) {
    console.log('UserOrders Error: ', error);

    res.status(400).json({
      status: 400,
      message: error.message.toString(),
    });
  }
});

router.post('/add', async (req, res) => {
  const uid = new ShortUniqueId();
  const orderNumber = uid.randomUUID(6);
  const query = { ...req.body, orderNumber };

  try {
    const order = await Order.create(query);
    if (!order) {
      throw new Error('Order not created.');
    }

    res.status(201).json({
      status: 201,
      success: true,
      message: 'Order created successfully.',
      data: order,
    });
  } catch (error: any) {
    console.log('AddOrder Error: ', error);

    res.status(400).json({
      status: 400,
      message: error.message.toString(),
    });
  }
});

router.put('/edit', async (req, res) => {});

router.put('/delete', async (req, res) => {});

export default router;
