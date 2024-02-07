import { FlexWrapper } from '@/components/styled/Flex.styled';
import {
  StyledProduct,
  StyledSizeChooser,
  StyledSizeChooserOpen,
} from '@/components/styled/Product.styled';
import {
  BodyText,
  BoldBodyText,
  Heading2,
  Heading4,
} from '@/components/styled/Text.styled';
import { useCartContext } from '@/hooks/useCartContext';
import { ICartItem } from '@/models/IItem';
import { IProduct } from '@/models/IProduct';
import { getProduct } from '@/services/productService';
import { Button } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useLocation, useParams } from 'react-router-dom';

const Product = () => {
  const { addToCart } = useCartContext();
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

        setSize(response?.sizes[0].size);
        setPrice(response?.sizes[0].price);
      }
    } catch (error) {
      console.log('Get Product Error: ', error);
    }
  };

  const handleOnLoad = (e: any) => {
    // console.log('Image loaded');
    console.log(e.target.offsetWidth, e.target.offsetHeight);
  };

  const prepareForAddToCart = () => {
    if (!product) return;
    const cartItem: ICartItem = {
      amount: 1,
      product: {
        _id: String(product._id),
        title: product.title,
        imageUrl: product.imageUrl,
        size: size,
        price: price,
      },
    };

    addToCart(cartItem);
  };

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
      <Button variant="contained" onClick={prepareForAddToCart}>
        Add to Cart
      </Button>
      <Heading4>Key Features:</Heading4>

      <BodyText>
        <BoldBodyText>Photographer:</BoldBodyText> Alen Gusinac
      </BodyText>

      <BodyText>
        <BoldBodyText>Size:</BoldBodyText> Available in various sizes to suit
        your space (Choose from 20x30 cm to 70x100 cm)
      </BodyText>
      <BodyText>
        <BoldBodyText>Paper Quality:</BoldBodyText> Crafted on 240 g Multidesign
        Smooth White paper from the renowned Clairefontaine paper mill in
        France.
      </BodyText>
      <BodyText>
        <BoldBodyText>Archival Quality:</BoldBodyText> The paper is archival,
        ensuring your print remains vibrant and does not yellow over time.
      </BodyText>
      <BodyText>
        <BoldBodyText>Environmental Responsibility:</BoldBodyText> Our
        commitment to responsible forestry is reflected in the FSC and EU
        Ecolabel environmental labels on the paper.
      </BodyText>
    </StyledProduct>
  );
};

export default memo(Product);
