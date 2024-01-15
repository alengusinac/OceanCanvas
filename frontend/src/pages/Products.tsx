import ProductCard from '@/components/ProductCard';
import { ProductsList } from '@/components/styled/Products.styled';

const data = {
  total: 65,
  products: [
    {
      id: 0,
      title: 'Fish',
      description: 'This is a lovely fish.',
      price: 20,
      image: 'src/assets/images/ocean1.jpg',
    },
    {
      id: 1,
      title: 'Shark',
      description: 'This is a lovely fish.',
      price: 20,
      image: 'src/assets/images/ocean2.jpg',
    },
    {
      id: 2,
      title: 'Coral',
      description: 'This is a lovely fish.',
      price: 20,
      image: 'src/assets/images/ocean1.jpg',
    },
    {
      id: 3,
      title: 'Diver',
      description: 'This is a lovely fish.',
      price: 20,
      image: 'src/assets/images/ocean2.jpg',
    },
  ],
};

const Products = () => {
  return (
    <>
      <h1>Photo Prints</h1>
      <p>Explore the Depths Through Captivating Prints</p>
      <div>
        <div>
          <button>Categories</button>
          <button>Filters</button>
        </div>
        <div>
          <p>66 products</p>
          <button>12 per page</button>
          <button>Sort</button>
        </div>
      </div>
      <ProductsList>
        {data.products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </ProductsList>
    </>
  );
};

export default Products;
