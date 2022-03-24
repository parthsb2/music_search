import { useState, useEffect } from "react"

export function useAppleApi(entity, query) {
  const [data, setData] = useState(undefined)
  const [loading, setLoading] = useState(true)

  // Fetch data from iTunes API
  useEffect(() => {
    setLoading(true)
    fetch(`https://itunes.apple.com/search?term=${query}&entity=${entity}&country=GB`)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data.results)
        setLoading(false)
      })
  }, [entity, query])

  return [loading, data]
}
