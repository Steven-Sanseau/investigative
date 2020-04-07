import { GraphQLClient } from 'graphql-request'
import { Variables } from 'graphql-request/dist/src/types'
import { API_URL } from 'src/config/config'
import { getSdk } from 'src/generated/graphql' // THIS FILE IS THE GENERATED FILE run `yarn generate`

export const fetcher = async (query, variables?: Variables) => {
  const client = new GraphQLClient(API_URL)

  const sdk = getSdk(client)
  return await sdk[query](variables)
}
