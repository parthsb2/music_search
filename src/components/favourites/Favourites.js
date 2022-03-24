import { useLocalStorage } from "../../hooks"
import { toggleFavourite } from "../../helpers"
import { Link } from "react-router-dom"

export function Favourites() {
  const [favouriteAlbums, setFavouriteAlbums] = useLocalStorage("favourite_albums", [])
  const [favouriteArtists, setFavouriteArtists] = useLocalStorage("favourite_musicArtists", [])
  const [favouriteSongs, setFavouriteSongs] = useLocalStorage("favourite_songs", [])

  return (
    <div className="favourites-page">
      <h1>Your Favourites!</h1>
      <div className="favourites-container">
        <section className="liked-lists">
          <h2>Liked Songs</h2>
          {favouriteSongs.map((song) => {
            return (
              <div key={song.trackId}>
                <div className="details">
                  <Link to={`/song/${song.trackId}`}>
                    <h4>{song.trackName}</h4>
                  </Link>
                  <a href={song.artistViewUrl} target="_blank" rel="noreferrer noopener">
                    <p>{song.artistName}</p>
                  </a>
                </div>
                <button
                  className="button"
                  onClick={() => toggleFavourite(song, "song", favouriteSongs, setFavouriteSongs)}
                >
                  Remove from Favourites
                </button>
              </div>
            )
          })}
        </section>

        <section className="liked-lists">
          <h2>Liked Artists</h2>
          {favouriteArtists.map((artist) => {
            return (
              <div key={artist.artistId}>
                <div className="details">
                  <a href={artist.artistLinkUrl} target="_blank" rel="noreferrer noopener">
                    <h4>{artist.artistName}</h4>
                  </a>
                  <p>{artist.primaryGenreName}</p>
                </div>
                <button
                  className="button"
                  onClick={() =>
                    toggleFavourite(artist, "musicArtist", favouriteArtists, setFavouriteArtists)
                  }
                >
                  Remove from Favourites
                </button>
              </div>
            )
          })}
        </section>

        <section className="liked-lists">
          <h2>Liked Albums</h2>
          {favouriteAlbums.map((album) => {
            return (
              <div key={album.collectionId}>
                <div className="details">
                  <Link to={`/album/${album.collectionId}`}>
                    <h4>{album.collectionName}</h4>
                  </Link>
                  <a href={album.artistViewUrl} target="_blank" rel="noreferrer noopener">
                    <p>{album.artistName}</p>
                  </a>
                </div>
                <button
                  className="button"
                  onClick={() =>
                    toggleFavourite(album, "album", favouriteAlbums, setFavouriteAlbums)
                  }
                >
                  Remove from Favourites
                </button>
              </div>
            )
          })}
        </section>
      </div>
    </div>
  )
}
