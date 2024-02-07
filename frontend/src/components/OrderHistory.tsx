import { IOrder } from '@/models/IOrder';
import { Heading3 } from './styled/Text.styled';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { memo } from 'react';

interface Props {
  orders: IOrder[];
}

const OrderHistory = ({ orders }: Props) => {
  return (
    <div>
      <Heading3>Orders</Heading3>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>OrderId</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Products</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order._id}>
              <TableCell>{order.orderNumber}</TableCell>
              <TableCell>
                {order.createdAt &&
                  new Date(order.createdAt).toLocaleDateString('sv-se')}
              </TableCell>
              <TableCell>
                {order.address.firstname} {order.address.lastname}
              </TableCell>
              <TableCell>
                {order.address.city}, {order.address.country}
              </TableCell>

              <TableCell align="right">{`${order.total.amount} ${
                order.total.amount === 1 ? 'pc' : 'pcs'
              }`}</TableCell>
              <TableCell align="right">{`$${order.total.price}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default memo(OrderHistory);
