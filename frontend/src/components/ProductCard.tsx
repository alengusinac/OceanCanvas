import { IItem } from '../models/IItem';
import {
  ImageContainer,
  ProductImage,
  StyledProductCard,
} from './styled/Products.styled';
import { BodyText, SmallBodyText } from './styled/Text.styled';

interface Props {
  item: IItem;
}

const ProductCard = ({ item }: Props) => {
  return (
    <StyledProductCard>
      <ImageContainer>
        <ProductImage src={item.image} />
      </ImageContainer>
      <BodyText>{item.title}</BodyText>
      <SmallBodyText>From ${item.price}</SmallBodyText>
    </StyledProductCard>
  );
};

export default ProductCard;
