import FilterAndSort from '@/components/FilterAndSort';
import ProductCard from '@/components/ProductCard';
import { ProductsList } from '@/components/styled/Products.styled';
import { BodyText, Heading1 } from '@/components/styled/Text.styled';
import { IProductFiltersSort } from '@/models/IFilters';
import { IProduct } from '@/models/IProduct';
import { getProducts } from '@/services/productService';
import { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [totalProducts, setTotalProducts] = useState<number | undefined>(0);
  const [filters, setFilters] = useState<IProductFiltersSort>({
    category: '',
    productsPerPage: 12,
    sort: 'ReleaseDesc',
    offset: 0,
  });

  useEffect(() => {
    loadProducts();
  }, [filters]);

  const loadProducts = async () => {
    try {
      const response = await getProducts(filters);
      console.log('Load Products Response: ', response);

      if (response) setProducts(response?.products);
      setTotalProducts(response?.total);
    } catch (error) {
      console.log('Load Products Error: ', error);
      setProducts([]);
      setTotalProducts(0);
    }
  };

  return (
    <>
      <Heading1>Photo Prints</Heading1>
      <BodyText>Explore the Depths Through Captivating Prints</BodyText>
      <FilterAndSort
        filters={filters}
        setFilters={setFilters}
        totalProducts={totalProducts}
      />
      <ProductsList>
        {products?.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </ProductsList>
    </>
  );
};

export default Products;
