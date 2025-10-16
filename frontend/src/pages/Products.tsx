import FilterAndSort from '@/components/FilterAndSort';
import ProductCard from '@/components/ProductCard';
import {
  LoadingContainer,
  ProductsList,
  StyledProducts,
} from '@/components/styled/Products.styled';
import { BodyText, Heading1 } from '@/components/styled/Text.styled';
import { IProductFiltersSort } from '@/models/IFilters';
import { IProduct } from '@/models/IProduct';
import { getProducts } from '@/services/productService';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { memo, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Products = () => {
  const { state } = useLocation();
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const [filters, setFilters] = useState<IProductFiltersSort>({
    category: state ? state.category : '',
    productsPerPage: 12,
    sort: '-createdAt',
  });
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    setProducts([]);
    loadProducts();
    setOffset(0);
  }, [filters]);

  useEffect(() => {
    offset > 0 && loadMoreProducts();
  }, [offset]);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const response = await getProducts(filters);
      if (response) {
        if (response.status === 200) {
          setProducts(response?.data.products);
          setTotalProducts(response?.data.total);
          setLoading(false);
        } else {
          setProducts([]);
          setTotalProducts(0);
          setError('Error fetching products');
        }
      }
    } catch (error) {
      console.log('Load Products Error: ', error);
      setProducts([]);
      setTotalProducts(0);
      setError('Error fetching products');
    }
  };

  const loadMoreProducts = async () => {
    try {
      const response = await getProducts(filters, offset);
      if (response) {
        setProducts([...products, ...response?.data.products]);
        setTotalProducts(response?.data.total);
      }
    } catch (error) {
      console.log('Load More Products Error: ', error);
    }
  };

  return (
    <StyledProducts>
      <Heading1>Photo Prints</Heading1>
      <BodyText>Explore the Depths Through Captivating Prints</BodyText>
      <FilterAndSort
        filters={filters}
        setFilters={setFilters}
        totalProducts={totalProducts}
      />
      <ProductsList>
        {loading && (
          <LoadingContainer>
            <CircularProgress />
          </LoadingContainer>
        )}
        {error && <BodyText data-cy="errorMessage">{error}</BodyText>}
        {products?.map((item) => (
          <ProductCard
            onClick={() =>
              navigate(`/products/${item._id}`, { state: { product: item } })
            }
            key={item._id}
            item={item}
          />
        ))}
      </ProductsList>
      {loading ||
        (products.length < totalProducts && (
          <Button
            onClick={() =>
              setOffset((prevOffset) => prevOffset + filters.productsPerPage)
            }
            variant="contained"
          >
            Load More
          </Button>
        ))}
    </StyledProducts>
  );
};

export default memo(Products);
