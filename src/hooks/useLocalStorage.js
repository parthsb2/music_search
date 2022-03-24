import { useState, useEffect } from "react"

export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || defaultValue)

  useEffect(() => {
    setValue(JSON.parse(localStorage.getItem(key)) || defaultValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return [value, setValue]
}
