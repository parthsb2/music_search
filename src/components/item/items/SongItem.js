import { Link } from "react-router-dom"
import { FavouriteButton } from "../../common/FavouriteButton"

export function SongItem({ item: song, entity, favourites, setFavourites }) {
  const {
    trackName: name,
    previewUrl,
    collectionName: album,
    collectionId: albumId,
    artistName: artist,
    primaryGenreName: genre,
    trackPrice: price,
    releaseDate,
    copyright,
    collectionExplicitness,
    trackViewUrl: trackUrl,
    artistViewUrl: artistUrl,
    artworkUrl100: artworkUrl,
  } = song

  const explicit = collectionExplicitness === "explicit"

  return (
    <>
      <img src={artworkUrl} alt="Album artwork" />
      <div className="item-content">
        <header>
          <div className="item-title">
            <div className="item-main-title">
              <h1>
                <a href={trackUrl} target="_blank" rel="noreferrer">
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
                )}{" "}
              </h2>
              <span className="bullet">&bull;</span>
              <h3>
                <Link to={`/album/${albumId}`}>{album}</Link>
              </h3>
            </div>
          </div>
          <FavouriteButton
            item={song}
            entity={entity}
            favourites={favourites}
            setFavourites={setFavourites}
          />
        </header>
        <main>
          {previewUrl && (
            <audio controls>
              <source src={previewUrl} type="audio/mp4" />
              Your browser does not support the audio element.
            </audio>
          )}
          {genre && <p>Genre: {genre}</p>}
          {price && <p>Price: £{price}</p>}
          {releaseDate && <p>Released: {new Date(releaseDate).toLocaleDateString()}</p>}
          {copyright && <small>{copyright}</small>}
        </main>
      </div>
    </>
  )
}
