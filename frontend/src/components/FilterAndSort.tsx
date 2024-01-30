import { IProductFiltersSort } from '@/models/IFilters';
import {
  FirstFlexItem,
  SecondFlexItem,
  StyledFilterAndSort,
} from './styled/FilterAndSort.styled';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { MenuItem } from './styled/Menu.styled';
import { Drawer } from '@mui/material';
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
        <button onClick={() => setOpenCategories(!openCategories)}>
          Categories
          <MdKeyboardArrowDown />
        </button>
        <Drawer
          anchor={'left'}
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
        <button onClick={() => setOpenFilters(!openFilters)}>
          Filters
          <MdKeyboardArrowDown />
        </button>
        <Drawer
          anchor={'right'}
          open={openFilters}
          onClose={() => setOpenFilters(false)}
        >
          <MenuItem>Filters</MenuItem>
          <MenuItem>Filters</MenuItem>
          <MenuItem>Filters</MenuItem>
          <MenuItem>Filters</MenuItem>
        </Drawer>
      </FirstFlexItem>

      <SecondFlexItem>
        <p>{totalProducts} products</p>
        <div>
          <select>
            <option>12 per page</option>
            <option>24 per page</option>
            <option>36 per page</option>
          </select>

          <select>
            <option>Latest</option>
            <option>Price Low</option>
            <option>Price High</option>
          </select>
        </div>
      </SecondFlexItem>
    </StyledFilterAndSort>
  );
};

export default FilterAndSort;
