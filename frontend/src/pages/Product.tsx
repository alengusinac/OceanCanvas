import { Heading2, SmallBodyText } from '@/components/styled/Text.styled';
import { IProduct } from '@/models/IProduct';
import { getProduct } from '@/services/productService';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Product = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | undefined>(
    state?.product || undefined
  );

  useEffect(() => {
    if (!state?.product) {
      getProductAsync();
    }
  });

  const getProductAsync = async () => {
    try {
      const response = await getProduct(id as string);
      if (response) setProduct(response);
    } catch (error) {
      console.log('Get Product Error: ', error);
    }
  };

  return (
    <StyledProduct>
      <img src={product?.imageUrl} alt={product?.title} />
      <Heading2>{product?.title}</Heading2>
      {product?.categories.map((category) => (
        <SmallBodyText>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </SmallBodyText>
      ))}
    </StyledProduct>
  );
};

export default Product;

export const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  img {
    width: 100%;
    margin: 1rem 0;
    border: 5px solid #000;
    box-shadow: 0 0 10px #000;
  }

  p {
    margin: 0;
  }
`;
