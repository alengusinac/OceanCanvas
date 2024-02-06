import FilterAndSort from '@/components/FilterAndSort';
import ProductCard from '@/components/ProductCard';
import {
  ProductsList,
  StyledProducts,
} from '@/components/styled/Products.styled';
import { BodyText, Heading1 } from '@/components/styled/Text.styled';
import { IProductFiltersSort } from '@/models/IFilters';
import { IProduct } from '@/models/IProduct';
import { getProducts } from '@/services/productService';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Products = () => {
  const { state } = useLocation();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const [filters, setFilters] = useState<IProductFiltersSort>({
    category: state.category || '',
    productsPerPage: 12,
    sort: '-createdAt',
  });
  const navigate = useNavigate();

  useEffect(() => {
    loadProducts();
    setOffset(0);
  }, [filters]);

  useEffect(() => {
    offset > 0 && loadMoreProducts();
  }, [offset]);

  const loadProducts = async () => {
    try {
      const response = await getProducts(filters);
      if (response) {
        setProducts(response?.products);
        setTotalProducts(response?.total);
      }
    } catch (error) {
      console.log('Load Products Error: ', error);
      setProducts([]);
      setTotalProducts(0);
    }
  };

  const loadMoreProducts = async () => {
    try {
      const response = await getProducts(filters, offset);
      if (response) {
        setProducts([...products, ...response?.products]);
        setTotalProducts(response?.total);
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
      {products.length < totalProducts && (
        <Button
          onClick={() =>
            setOffset((prevOffset) => prevOffset + filters.productsPerPage)
          }
          variant="contained"
        >
          Load More
        </Button>
      )}
    </StyledProducts>
  );
};

export default Products;
