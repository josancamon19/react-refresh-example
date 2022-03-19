import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (meetup) => {},
  removeFavorite: (meetupId) => {},
  isFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [favorites, setFavorites] = useState([]);
  const context = {
    favorites: favorites,
    totalFavorites: favorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: itemsIsFavoriteHandler,
  };

  function addFavoriteHandler(meetup) {
    setFavorites((prev) => {
      return prev.concat(meetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setFavorites((prev) => {
      return prev.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemsIsFavoriteHandler(meetupId) {
    return favorites.some((meetup) => meetup.id === meetupId);
  }

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
