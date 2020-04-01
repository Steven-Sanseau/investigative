export const Storage =
  typeof window === 'undefined'
    ? {
        setItem: () => {
          return undefined
        },
        getItem: () => {
          return undefined
        },
        removeItem: () => {
          return undefined
        },
      }
    : window.localStorage
