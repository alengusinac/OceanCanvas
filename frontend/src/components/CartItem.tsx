import ButtonGroup from '@mui/material/ButtonGroup';
import MaterialIconButton from './MaterialIconButton';

import {
  CartImageContainer,
  ItemActionButtons,
  StyledCartItem,
} from './styled/Cart.styled';
import { ProductImage } from './styled/Products.styled';
import { BodyText, SmallBodyText } from './styled/Text.styled';
import { ICartItem } from '@/models/IItem';
import {
  MdDeleteForever,
  MdRemoveCircleOutline,
  MdAddCircleOutline,
} from 'react-icons/md';
import { FlexWrapper } from './styled/Flex.styled';
import { useCartContext } from '@/hooks/useCartContext';

interface Props {
  item: ICartItem;
}

const CartItem = ({ item }: Props) => {
  const { removeFromCart, changeAmount } = useCartContext();
  const product = item.product;

  return (
    <StyledCartItem>
      <FlexWrapper>
        <CartImageContainer>
          <ProductImage src={product.imageUrl} />
        </CartImageContainer>
        <div>
          <BodyText>{product.title}</BodyText>
          <SmallBodyText>{product.size} cm</SmallBodyText>
          <SmallBodyText>Quantity: {item.amount}</SmallBodyText>
        </div>
      </FlexWrapper>
      <ItemActionButtons>
        <MaterialIconButton
          $size={30}
          icon={<MdDeleteForever />}
          onClick={() => removeFromCart(item)}
        />
        <ButtonGroup sx={{ border: '1px solid black', height: '30px' }}>
          <MaterialIconButton
            $size={25}
            icon={<MdRemoveCircleOutline />}
            onClick={() => changeAmount(item, item.amount - 1)}
          />
          <MaterialIconButton
            $size={25}
            icon={<MdAddCircleOutline />}
            onClick={() => changeAmount(item, item.amount + 1)}
          />
        </ButtonGroup>
        <SmallBodyText>{`$${product.price * item.amount}`}</SmallBodyText>
      </ItemActionButtons>
    </StyledCartItem>
  );
};

export default CartItem;
