import { IProduct } from '@/models/IProduct';
import {
  ImageContainer,
  ProductImage,
  StyledProductCard,
} from './styled/Products.styled';
import { Heading4, SmallBodyText } from './styled/Text.styled';

interface Props {
  item: IProduct;
  onClick: () => void;
}

const ProductCard = ({ item, onClick }: Props) => {
  return (
    <StyledProductCard data-cy="productCard" onClick={onClick}>
      <ImageContainer>
        <ProductImage src={item.imageUrl} />
      </ImageContainer>
      <Heading4>{item.title}</Heading4>
      <SmallBodyText>From ${item.sizes[0].price}</SmallBodyText>
    </StyledProductCard>
  );
};

export default ProductCard;
