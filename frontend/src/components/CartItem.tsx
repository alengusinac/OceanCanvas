import ButtonGroup from '@mui/material/ButtonGroup';
import MaterialIconButton from './MaterialIconButton';

import { CartImageContainer, StyledCartItem } from './styled/Cart.styled';
import { ProductImage } from './styled/Products.styled';
import { BodyText, SmallBodyText } from './styled/Text.styled';
import { ICartItem } from '@/models/IItem';
import {
  MdDeleteForever,
  MdRemoveCircleOutline,
  MdAddCircleOutline,
} from 'react-icons/md';

interface Props {
  item: ICartItem;
}

const CartItem = ({ item }: Props) => {
  const removeItem = (item: ICartItem) => {
    console.log(item);
  };

  return (
    <StyledCartItem>
      <CartImageContainer>
        <ProductImage src={item.image} />
      </CartImageContainer>
      <div>
        <BodyText>{item.title}</BodyText>
        <SmallBodyText>{item.size} cm</SmallBodyText>
        <SmallBodyText>Quantity: {item.amount}</SmallBodyText>
      </div>
      <div>
        <MaterialIconButton
          $size={30}
          icon={<MdDeleteForever />}
          onClick={() => removeItem(item)}
        />
        <ButtonGroup sx={{ border: '1px solid black', height: '30px' }}>
          <MaterialIconButton
            $size={25}
            icon={<MdRemoveCircleOutline />}
            onClick={() => removeItem(item)}
          />
          <MaterialIconButton
            $size={25}
            icon={<MdAddCircleOutline />}
            onClick={() => removeItem(item)}
          />
        </ButtonGroup>
        <SmallBodyText>{`$${item.price * item.amount}`}</SmallBodyText>
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
