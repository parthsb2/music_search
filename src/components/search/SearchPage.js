import { useParams } from "react-router"
import { useAppleApi, useLocalStorage } from "../../hooks"
import { prettyEntities, isValidInput } from "../../helpers"

import { AlbumCard, SongCard, MusicArtistCard } from "./cards"
import { FavouriteButton } from "../common/FavouriteButton"
import { Spinner } from "../common/Spinner"

export function SearchPage() {
  const { entity, query } = useParams()
  const [loading, searchResults] = useAppleApi(entity, query)
  const [favourites, setFavourites] = useLocalStorage(`favourite_${entity}s`, [])

  if (!isValidInput(entity)) return <div>Error!</div>

  return (
    <main>
      <section id="search-results">
        <h1>
          {prettyEntities[entity]} matching: <span className="query">{query}</span>
        </h1>
        <ul>
          {loading && (
            <li>
              <Spinner />
            </li>
          )}
          {!loading && searchResults.length === 0 && (
            <li>
              <div className="result">Nothing found :(</div>
            </li>
          )}
          {!loading &&
            searchResults.length > 0 &&
            searchResults.map((item, index) => {
              return (
                <li key={index}>
                  <div className="result">
                    {entity === "album" && <AlbumCard album={item} />}
                    {entity === "song" && <SongCard song={item} />}
                    {entity === "musicArtist" && <MusicArtistCard musicArtist={item} />}
                    <FavouriteButton
                      item={item}
                      entity={entity}
                      favourites={favourites}
                      setFavourites={setFavourites}
                    />
                  </div>
                </li>
              )
            })}
        </ul>
      </section>
    </main>
  )
}
