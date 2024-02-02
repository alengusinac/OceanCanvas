import { IProduct } from '@/models/IProduct';
import {
  ImageContainer,
  ProductImage,
  StyledProductCard,
} from './styled/Products.styled';
import { BodyText, SmallBodyText } from './styled/Text.styled';

interface Props {
  item: IProduct;
  onClick: () => void;
}

const ProductCard = ({ item, onClick }: Props) => {
  return (
    <StyledProductCard onClick={onClick}>
      <ImageContainer>
        <ProductImage src={item.imageUrl} />
      </ImageContainer>
      <BodyText>{item.title}</BodyText>
      <SmallBodyText>From ${item.sizes[0].price}</SmallBodyText>
    </StyledProductCard>
  );
};

export default ProductCard;
