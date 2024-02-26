import { IProduct } from '@/models/IProduct';
import {
  ImageContainer,
  ProductImage,
  StyledProductCard,
} from './styled/Products.styled';
import { Heading4, SmallBodyText } from './styled/Text.styled';
import { memo } from 'react';
import MaterialIconButton from './MaterialIconButton';
import { MdOutlineFavoriteBorder } from 'react-icons/md';

interface Props {
  item: IProduct;
  onClick: () => void;
  favoriteOption?: boolean;
}

const ProductCard = ({ item, onClick, favoriteOption }: Props) => {
  const cloudinaryUrl =
    'https://res.cloudinary.com/dkoejzei7/image/upload/f_auto,q_auto/';

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {};

  return (
    <StyledProductCard data-cy="productCard" onClick={onClick}>
      <ImageContainer>
        {favoriteOption && (
          <MaterialIconButton
            icon={<MdOutlineFavoriteBorder />}
            onClick={handleClick}
          />
        )}
        <ProductImage alt={item.title} src={`${cloudinaryUrl}${item.title}`} />
      </ImageContainer>
      <Heading4>{item.title}</Heading4>
      <SmallBodyText>From ${item.sizes[0].price}</SmallBodyText>
    </StyledProductCard>
  );
};

export default memo(ProductCard);
