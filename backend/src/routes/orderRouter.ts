import express from 'express';
import { Order } from '../models/OrderSchema';
import ShortUniqueId from 'short-unique-id';

const router = express.Router();

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
