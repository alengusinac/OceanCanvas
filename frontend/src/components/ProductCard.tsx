import { IProduct } from '@/models/IProduct';
import {
  ImageContainer,
  ProductImage,
  StyledProductCard,
} from './styled/Products.styled';
import { Heading4, SmallBodyText } from './styled/Text.styled';
import { memo } from 'react';

interface Props {
  item: IProduct;
  onClick: () => void;
}

const ProductCard = ({ item, onClick }: Props) => {
  const cloudinaryUrl =
    'https://res.cloudinary.com/dkoejzei7/image/upload/f_auto,q_auto/';

  return (
    <StyledProductCard data-cy="productCard" onClick={onClick}>
      <ImageContainer>
        <ProductImage alt={item.title} src={`${cloudinaryUrl}${item.title}`} />
      </ImageContainer>
      <Heading4>{item.title}</Heading4>
      <SmallBodyText>From ${item.sizes[0].price}</SmallBodyText>
    </StyledProductCard>
  );
};

export default memo(ProductCard);
