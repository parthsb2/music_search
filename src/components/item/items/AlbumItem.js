import { FavouriteButton } from "../../common/FavouriteButton"

export function AlbumItem({ item: album, entity, favourites, setFavourites }) {
  const {
    collectionName: name,
    artistName: artist,
    primaryGenreName: genre,
    collectionPrice: price,
    releaseDate,
    copyright,
    collectionExplicitness,
    collectionViewUrl: albumUrl,
    artistViewUrl: artistUrl,
    artworkUrl100: artworkUrl,
  } = album

  const explicit = collectionExplicitness === "explicit"

  return (
    <>
      <img src={artworkUrl} alt="Album artwork" />
      <div className="item-content">
        <header>
          <div className="item-title">
            <div className="item-main-title">
              <h1>
                <a href={albumUrl} target="_blank" rel="noreferrer">
                  {name}
                </a>
              </h1>
              {explicit && <span className="explicit">E</span>}
            </div>
            <div className="item-second-title">
              <h2>
                {artistUrl ? (
                  <a href={artistUrl} target="_blank" rel="noreferrer">
                    {artist}
                  </a>
                ) : (
                  <>{artist}</>
                )}
              </h2>
            </div>
          </div>
          <FavouriteButton
            item={album}
            entity={entity}
            favourites={favourites}
            setFavourites={setFavourites}
          />
        </header>
        <main>
          {genre && <p>Genre: {genre}</p>}
          {price && <p>Price: £{price}</p>}
          {releaseDate && <p>Released: {new Date(releaseDate).toLocaleDateString()}</p>}
          {copyright && <small>{copyright}</small>}
        </main>
      </div>
    </>
  )
}
