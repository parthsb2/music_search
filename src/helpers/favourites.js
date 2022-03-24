function getComparisonKey(entity) {
  if (entity === "album") return "collectionId"
  if (entity === "song") return "trackId"
  if (entity === "musicArtist") return "artistId"
}

export function isFavourite(item, entity, favourites) {
  const comparisonKey = getComparisonKey(entity)
  const favouriteIds = favourites.map((favourite) => favourite[comparisonKey])
  return favouriteIds.includes(item[comparisonKey])
}

export function toggleFavourite(item, entity, favourites, setFavourites) {
  const comparisonKey = getComparisonKey(entity)
  const index = favourites.findIndex(
    (favourite) => favourite[comparisonKey] === item[comparisonKey]
  )
  if (index === -1) setFavourites([...favourites, item])
  else setFavourites(favourites.filter((_, i) => i !== index))
}
