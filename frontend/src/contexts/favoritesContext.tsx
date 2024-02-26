import { IProduct } from '@/models/IProduct';
import { createContext, useState } from 'react';

export const FavoritesContext = createContext<IFavoritesContextType>({
  favorites: [],
  addToFavorites: (newFavorite) => {
    console.log(newFavorite);
  },
  removeFromFavorites: (favorite) => {
    console.log(favorite);
  },
});

interface IFavoritesContextType {
  favorites: IProduct[];
  addToFavorites: (newFavorite: IProduct) => void;
  removeFromFavorites: (favorite: IProduct) => void;
}

export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useState<IProduct[]>([]);

  const addToFavorites = (newFavorite: IProduct) => {
    setFavorites([...favorites, newFavorite]);
    localStorage.setItem(
      'favorites',
      JSON.stringify([...favorites, newFavorite])
    );
  };

  const removeFromFavorites = (favorite: IProduct) => {
    setFavorites(favorites.filter((item) => item._id !== favorite._id));
    localStorage.setItem(
      'favorites',
      JSON.stringify(favorites.filter((item) => item._id !== favorite._id))
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
