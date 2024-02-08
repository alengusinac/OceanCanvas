import { IOrder } from '@/models/IOrder';
import { BodyText, Heading3 } from './styled/Text.styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { memo } from 'react';

interface Props {
  orders: IOrder[];
}

const OrderHistory = ({ orders }: Props) => {
  return (
    <div>
      <Heading3>Orders</Heading3>
      {orders.length > 0 ? (
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
      ) : (
        <BodyText>No orders have been made yet.</BodyText>
      )}
    </div>
  );
};

export default memo(OrderHistory);
