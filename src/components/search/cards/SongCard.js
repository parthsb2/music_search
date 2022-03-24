import { Link } from "react-router-dom"

export function SongCard({ song }) {
  const {
    trackName: name,
    trackId: id,
    artistName: artist,
    collectionName: album,
    artistViewUrl: artistUrl,
    collectionId: albumId,
    artworkUrl100: artworkUrl,
  } = song

  return (
    <>
      <img src={artworkUrl} alt="Album artwork" />
      <div className="result-title">
        <h3>
          <Link to={`/song/${id}`}>{name}</Link>
        </h3>
        <p>
          {artistUrl ? (
            <a href={artistUrl} target="_blank" rel="noreferrer">
              {artist}
            </a>
          ) : (
            artist
          )}{" "}
          &bull; <Link to={`/album/${albumId}`}>{album}</Link>
        </p>
      </div>
    </>
  )
}
