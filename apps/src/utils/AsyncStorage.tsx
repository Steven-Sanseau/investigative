import React from 'react'
import { Storage } from './storage'

export function useAsyncStorage(key, initialValue) {
  const [storedValue, setStoredValue] = React.useState(initialValue)

  React.useEffect(() => {
    const getItem = async (): Promise<string> => {
      const value = await Storage.getItem(key)
      if (value === null) {
        return initialValue
      }
      return JSON.parse(value)
    }

    setStoredValue(getItem())
  }, [key, initialValue])

  const setValue = async (value): Promise<void> => {
    const valueToStore = value instanceof Function ? value(storedValue) : value
    setStoredValue(valueToStore)
    await Storage.setItem(key, JSON.stringify(valueToStore))
  }

  return [storedValue, setValue] as const
}
