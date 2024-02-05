import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { getOrders } from '@/services/orderService';
import { IOrder } from '@/models/IOrder';

export default function Orders() {
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    getOrdersAsync();
  }, []);

  const getOrdersAsync = async () => {
    try {
      const response = await getOrders();
      if (response) setOrders(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <h2>Orders</h2>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order._id}>
              <TableCell>
                {order.createdAt &&
                  new Date(order.createdAt).toLocaleString('sv-se')}
              </TableCell>
              <TableCell>
                {order.address.firstname} {order.address.lastname}
              </TableCell>
              <TableCell>
                {order.address.city}, {order.address.country}
              </TableCell>

              {/* <TableCell align="right">{`$${order.total}`}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
