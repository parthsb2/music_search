export function MusicArtistCard({ musicArtist }) {
  const { artistLinkUrl: url, artistName: name, primaryGenreName: genre } = musicArtist

  return (
    <>
      <div className="result-title">
        <h3>
          {url ? (
            <a href={url} target="_blank" rel="noreferrer">
              {name}
            </a>
          ) : (
            name
          )}
        </h3>
        <p>{genre}</p>
      </div>
    </>
  )
}
