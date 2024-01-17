import {
  FirstFlexItem,
  SecondFlexItem,
  StyledFilterAndSort,
} from './styled/FilterAndSort.styled';
import { MdKeyboardArrowDown } from 'react-icons/md';

const FilterAndSort = () => {
  const handleClick = () => {
    console.log('CLICK!!!');
  };

  return (
    <StyledFilterAndSort>
      <FirstFlexItem>
        <button onClick={handleClick}>
          Categories
          <MdKeyboardArrowDown />
        </button>
        <button onClick={handleClick}>
          Filters
          <MdKeyboardArrowDown />
        </button>
      </FirstFlexItem>
      <SecondFlexItem>
        <p>66 products</p>
        <div>
          <button onClick={handleClick}>
            12 per page
            <MdKeyboardArrowDown />
          </button>
          <button onClick={handleClick}>
            Sort
            <MdKeyboardArrowDown />
          </button>
        </div>
      </SecondFlexItem>
    </StyledFilterAndSort>
  );
};

export default FilterAndSort;
