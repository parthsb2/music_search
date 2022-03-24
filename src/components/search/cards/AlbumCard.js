import { Link } from "react-router-dom"

export function AlbumCard({ album }) {
  const {
    collectionName: name,
    artistName: artist,
    collectionId: id,
    artistViewUrl: artistUrl,
    artworkUrl100: artworkUrl,
  } = album

  return (
    <>
      <img src={artworkUrl} alt="Album artwork" />
      <div className="result-title">
        <h3>
          <Link to={`/album/${id}`}>{name}</Link>
        </h3>
        {artistUrl ? (
          <a href={artistUrl} target="_blank" rel="noreferrer">
            <p>{artist}</p>
          </a>
        ) : (
          artist
        )}
      </div>
    </>
  )
}
