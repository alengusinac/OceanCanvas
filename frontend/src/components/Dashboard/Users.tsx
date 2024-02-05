import { IUser } from '@/models/IUser';
import { getUsers } from '@/services/userService';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getUsersAsync();
  }, []);

  const getUsersAsync = async () => {
    try {
      const response = await getUsers();
      if (response) setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <h2>Users</h2>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Admin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>
                {user.createdAt &&
                  new Date(user.createdAt).toLocaleString('sv-se')}
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.admin === true ? 'Yes' : 'No'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Users;
