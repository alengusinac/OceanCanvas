import {
  ImageContainer,
  ProductImage,
  StyledProductCard,
} from './styled/Products.styled';

interface Item {
  title: string;
  description: string;
  price: number;
  image: string;
}
interface Props {
  item: Item;
}

const ProductCard = ({ item }: Props) => {
  return (
    <StyledProductCard>
      <ImageContainer>
        <ProductImage src={item.image} />
      </ImageContainer>
      <h4>{item.title}</h4>
      <p>From: ${item.price}</p>
    </StyledProductCard>
  );
};

export default ProductCard;
