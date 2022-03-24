import { isFavourite, toggleFavourite } from "../../helpers"

export function FavouriteButton({ item, entity, favourites, setFavourites }) {
  const isItemFavourited = isFavourite(item, entity, favourites)
  const toggleItemFavourited = () => toggleFavourite(item, entity, favourites, setFavourites)

  return (
    <button
      className={`favourite-button ${isItemFavourited ? "is-active" : ""}`}
      onClick={toggleItemFavourited}
      aria-pressed={isItemFavourited}
    >
      <span className="favourite-status">Favourite</span>
      <span className="remove-favourite">Remove Favourite</span>
    </button>
  )
}
