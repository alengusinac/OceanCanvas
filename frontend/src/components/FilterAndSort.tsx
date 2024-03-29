import { IProductFiltersSort } from '@/models/IFilters';
import {
  FirstFlexItem,
  SecondFlexItem,
  StyledFilterAndSort,
} from './styled/FilterAndSort.styled';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { memo, useEffect, useState } from 'react';
import { MenuItem } from './styled/Menu.styled';
import Drawer from '@mui/material/Drawer';
import { getCategories } from '@/services/categoryService';
import { ICategory } from '@/models/IProduct';

interface Props {
  totalProducts: number | undefined;
  setFilters: (filters: IProductFiltersSort) => void;
  filters: IProductFiltersSort;
}

const FilterAndSort = ({ totalProducts, filters, setFilters }: Props) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [openCategories, setOpenCategories] = useState<boolean>(false);
  const [openFilters, setOpenFilters] = useState<boolean>(false);
  useState<boolean>(false);

  useEffect(() => {
    getCategoriesAsync();
  }, []);

  const getCategoriesAsync = async () => {
    try {
      const response = await getCategories();
      if (response) setCategories(response);
    } catch (error) {
      console.log('Get Categories Error: ', error);
    }
  };

  return (
    <StyledFilterAndSort>
      <FirstFlexItem>
        <button
          data-cy="categoriesBtn"
          onClick={() => setOpenCategories(!openCategories)}
        >
          Categories
          <MdKeyboardArrowDown />
        </button>
        <Drawer
          anchor={'left'}
          ModalProps={{ disableScrollLock: true }}
          open={openCategories}
          onClose={() => setOpenCategories(false)}
        >
          {categories?.map((category) => (
            <MenuItem
              key={category._id}
              onClick={() => {
                setFilters({
                  ...filters,
                  category: category.category.toLowerCase(),
                });
                setOpenCategories(false);
              }}
            >
              {category.category}
            </MenuItem>
          ))}
        </Drawer>
        <button
          data-cy="filtersBtn"
          onClick={() => setOpenFilters(!openFilters)}
        >
          Filters
          <MdKeyboardArrowDown />
        </button>
        <Drawer
          anchor={'right'}
          ModalProps={{ disableScrollLock: true }}
          open={openFilters}
          onClose={() => setOpenFilters(false)}
        >
          <MenuItem data-cy="filterBtn">Horisontal</MenuItem>
          <MenuItem data-cy="filterBtn">Vertical</MenuItem>
        </Drawer>
      </FirstFlexItem>

      <SecondFlexItem>
        <p>{totalProducts} products</p>
        <div>
          <select
            aria-label="products per page"
            onChange={(e) => {
              setFilters({
                ...filters,
                productsPerPage: parseInt(e.target.value),
              });
            }}
          >
            <option>12 per page</option>
            <option>24 per page</option>
            <option>36 per page</option>
          </select>

          <select
            aria-label="sort products by"
            onChange={(e) => {
              let value = '';

              switch (e.target.value) {
                case 'Latest':
                  value = '-createdAt';
                  break;
                case 'Price Low':
                  value = 'priceMultiplier';
                  break;
                case 'Price High':
                  value = '-priceMultiplier';
                  break;
              }
              setFilters({
                ...filters,
                sort: value,
              });
            }}
          >
            <option>Latest</option>
            <option>Price Low</option>
            <option>Price High</option>
          </select>
        </div>
      </SecondFlexItem>
    </StyledFilterAndSort>
  );
};

export default memo(FilterAndSort);
