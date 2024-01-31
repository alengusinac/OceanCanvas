import { FlexWrapper } from '@/components/styled/Flex.styled';
import { BodyText, Heading2, Heading4 } from '@/components/styled/Text.styled';
import { IProduct } from '@/models/IProduct';
import { getProduct } from '@/services/productService';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Product = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const [open, setOpen] = useState<boolean>(false);
  const [product, setProduct] = useState<IProduct | undefined>(
    state?.product || undefined
  );
  const [size, setSize] = useState<string>(state?.product.sizes[0].size || '');
  const [price, setPrice] = useState<number>(
    state?.product.sizes[0].price || 0
  );

  useEffect(() => {
    if (!state?.product) {
      getProductAsync();
    }
  }, []);

  const getProductAsync = async () => {
    try {
      const response = await getProduct(id as string);
      if (response) {
        setProduct(response);
        console.log(response);

        setSize(response?.sizes[0].size);
        setPrice(response?.sizes[0].price);
      }
    } catch (error) {
      console.log('Get Product Error: ', error);
    }
  };

  const handleOnLoad = (e: any) => {
    console.log('Image loaded');
    console.log(e.target.offsetWidth, e.target.offsetHeight);
  };

  const addToCart = () => {};

  return (
    <StyledProduct>
      <img src={product?.imageUrl} onLoad={handleOnLoad} alt={product?.title} />
      <Heading2>{product?.title}</Heading2>
      <StyledSizeChooser onClick={() => setOpen(!open)}>
        <BodyText>{size} cm</BodyText>
        <FlexWrapper>
          <BodyText>${price}</BodyText>
          <MdKeyboardArrowDown />
        </FlexWrapper>
        {open && (
          <StyledSizeChooserOpen>
            {product?.sizes.map((size) => (
              <StyledSizeChooser
                key={size.size}
                onClick={() => {
                  setSize(size.size);
                  setPrice(size.price);
                }}
              >
                <BodyText>{size.size} cm</BodyText>
                <FlexWrapper>
                  <BodyText>${size.price}</BodyText>
                </FlexWrapper>
              </StyledSizeChooser>
            ))}
          </StyledSizeChooserOpen>
        )}
      </StyledSizeChooser>
      <Button variant="contained" onClick={addToCart}>
        Add to Cart
      </Button>
      <Heading4>Key Features:</Heading4>
      <ul>
        <li>Photographer: Alen Gusinac Print </li>
        <li>Title: Eternal Abyss Print</li>
        <li>
          Size: Available in various sizes to suit your space (Choose from 20x30
          cm to 70x100 cm)
        </li>
        <li>
          Paper Quality: Crafted on 240 g Multidesign Smooth White paper from
          the renowned Clairefontaine paper mill in France.
        </li>
        <li>
          Archival Quality: The paper is archival, ensuring your print remains
          vibrant and does not yellow over time.
        </li>
        <li>
          Environmental Responsibility: Our commitment to responsible forestry
          is reflected in the FSC and EU Ecolabel environmental labels on the
          paper.
        </li>
      </ul>
    </StyledProduct>
  );
};

export default Product;

export const StyledSizeChooser = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  min-width: 250px;
  border: 1px solid #000;
  border-radius: 3px;
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  background-color: #fff;
`;

export const StyledSizeChooserOpen = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 35px;
  left: -1px;
  z-index: 1000;
`;

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
