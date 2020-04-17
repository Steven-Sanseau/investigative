import { GraphQLClient } from 'graphql-request'
import { Variables } from 'graphql-request/dist/src/types'
import { API_URL } from 'src/config/config'

export const wait = (timeout): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

export const fetcher = async (query?, variables?: Variables): Promise<any> => {
  const client = new GraphQLClient(API_URL)

  return await client.request(query, variables)
}
