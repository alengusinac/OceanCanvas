import { FavoritesContext } from '@/contexts/favoritesContext';
import { useContext } from 'react';

const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(
      'useFavoritesContext must be used within a FavoritesProvider'
    );
  }
  return context;
};

export default useFavoritesContext;
