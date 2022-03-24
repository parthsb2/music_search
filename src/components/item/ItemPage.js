import { useParams } from "react-router"
import { isValidInput } from "../../helpers"
import { useAppleApi, useLocalStorage } from "../../hooks"
import { Spinner } from "../common/Spinner"

import { AlbumItem, SongItem } from "./items"

export function SingleResult() {
  const { entity, id } = useParams()

  const [loading, data] = useAppleApi(entity, id)
  const [favourites, setFavourites] = useLocalStorage(`favourite_${entity}s`, [])

  if (!isValidInput(entity, ["album", "song"])) return <section id="item-result">Error</section>

  if (loading)
    return (
      <section id="item-result">
        <Spinner />
      </section>
    )

  if (!loading && data.length !== 1) return <section id="item-result">Not Found</section>

  const item = data[0]

  return (
    <section id="item-result">
      {entity === "album" && (
        <AlbumItem
          item={item}
          entity={entity}
          favourites={favourites}
          setFavourites={setFavourites}
        />
      )}
      {entity === "song" && (
        <SongItem
          item={item}
          entity={entity}
          favourites={favourites}
          setFavourites={setFavourites}
        />
      )}
    </section>
  )
}
