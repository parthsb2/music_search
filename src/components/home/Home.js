import { Redirect } from "react-router-dom"
import React from "react"
import ErrorMessage from "./ErrorMessage"

export function Home() {
  const [entity, setEntity] = React.useState("")
  const [search, setSearch] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)
  const [showMessage, setShowMessage] = React.useState(false)

  function handleSelect(event) {
    setEntity(event.target.value)
  }

  function handleSearch(event) {
    setSearch(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (entity && search) {
      return setSubmitted(true)
    } else {
      setShowMessage(true)
    }
  }

  if (submitted) return <Redirect push to={`/search/${entity}/${search}`} />

  return (
    <main>
      <section className="home-page">
        <div className="home-container">
          <form onSubmit={handleSubmit}>
            <select onChange={handleSelect} value={entity}>
              <option selected disabled value="">
                Select Search Criteria
              </option>
              <option value="musicArtist">Artists</option>
              <option value="song">Songs</option>
              <option value="album">Album</option>
            </select>
            <input
              type="text"
              placeholder="Search for Music here"
              onChange={handleSearch}
              value={search}
            />
            <button>Search</button>
          </form>
          {showMessage ? <ErrorMessage /> : ""}
        </div>
      </section>
    </main>
  )
}
