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
import { memo } from 'react';

interface Props {
  item: ICartItem;
}

const CartItem = ({ item }: Props) => {
  const { removeFromCart, changeAmount } = useCartContext();
  const product = item.product;

  return (
    <StyledCartItem data-cy="cartItem">
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
          $size={35}
          icon={<MdDeleteForever />}
          onClick={() => removeFromCart(item)}
        />
        <ButtonGroup sx={{ border: '1px solid black', height: '30px' }}>
          <MaterialIconButton
            $size={35}
            icon={<MdRemoveCircleOutline />}
            onClick={() => changeAmount(item, item.amount - 1)}
          />
          <MaterialIconButton
            $size={35}
            icon={<MdAddCircleOutline />}
            onClick={() => changeAmount(item, item.amount + 1)}
          />
        </ButtonGroup>
        <BodyText>{`$${product.price * item.amount}`}</BodyText>
      </ItemActionButtons>
    </StyledCartItem>
  );
};

export default memo(CartItem);
