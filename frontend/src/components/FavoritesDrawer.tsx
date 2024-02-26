import useFavoritesContext from '@/hooks/useFavoritesContext';
import { StyledCartDrawer } from './styled/Cart.styled';
import { BodyText, BoldBodyText, Heading2 } from './styled/Text.styled';

interface Props {
  setFavoritesDrawerOpen: (boolean: boolean) => void;
}

const FavoritesDrawer = ({ setFavoritesDrawerOpen }: Props) => {
  const { favorites } = useFavoritesContext();
  return (
    <StyledCartDrawer>
      <Heading2>Favorites</Heading2>
      {favorites.length !== 0 && (
        <>
          <BodyText>Items in your favorites:</BodyText>
          <ul>
            {favorites.map((favorite) => (
              <li key={favorite._id}>
                <BodyText>{favorite.title}</BodyText>
              </li>
            ))}
          </ul>
        </>
      )}
      {favorites.length === 0 && (
        <BoldBodyText>Your favorites list is empty.</BoldBodyText>
      )}
    </StyledCartDrawer>
  );
};

export default FavoritesDrawer;
