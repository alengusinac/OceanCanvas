import { IProduct } from '@/models/IProduct';
import { TableRow } from './styled/Dashboard.styled';
import { BodyText, Heading4 } from '../styled/Text.styled';
import MaterialIconButton from '../MaterialIconButton';
import { deleteProduct } from '@/services/productService';
import { MdDeleteForever } from 'react-icons/md';

interface Props {
  products: IProduct[];
  getProductsAsync: () => void;
}

const PrintProducts = ({ products, getProductsAsync }: Props) => {
  return (
    <>
      {products.map((product) => (
        <TableRow key={product._id}>
          <img src={product.imageUrl} alt="" width={150} />
          <Heading4>{product.title}</Heading4>
          <BodyText>{product.priceMultiplier}</BodyText>
          <MaterialIconButton
            onClick={async () => {
              console.log(product._id);

              if (product._id) await deleteProduct(product._id);
              getProductsAsync();
            }}
            icon={<MdDeleteForever />}
          />
        </TableRow>
      ))}
    </>
  );
};

export default PrintProducts;
