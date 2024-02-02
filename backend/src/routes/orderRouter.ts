import express from 'express';
import { Order } from '../models/OrderSchema';
import { log } from 'console';

const router = express.Router();

router.post('/add', async (req, res) => {
  try {
    const order = await Order.create(req.body);
    if (!order) {
      throw new Error('Order not created.');
    }

    res.status(201).json({
      status: 201,
      success: true,
      message: 'Order created successfully.',
      order: order,
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
