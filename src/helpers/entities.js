export const prettyEntities = {
  song: "Songs",
  musicArtist: "Artists",
  album: "Albums",
}

export function isValidInput(entity, validEntities = ["song", "musicArtist", "album"]) {
  return validEntities.includes(entity)
}
