import { Add } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';

const Products = () => {
  return (
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <h2>Products</h2>
      <IconButton>
        <Add />
      </IconButton>
    </Paper>
  );
};

export default Products;
