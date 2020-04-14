export const IS_SERVER = typeof window === 'undefined'
export const NODE_ENV = process.env.NODE_ENV
export const API_URL = 'https://api.tanzania-investigative.space/graphql'
export const IS_PROD = process.env.NODE_ENV === 'production'
