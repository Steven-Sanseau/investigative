import React from 'react'
import { Box } from '../components/primitives/Box'
import { Input } from '../components/primitives/Input'
import { SearchPostsQuery } from '../generated/graphql'
import useSWR from 'swr'
import { searchPosts } from '../graphql/post'
import { PostList } from '../components/posts/List'
import { useRouting } from 'expo-next-react-navigation'
import { useDebounce } from 'use-debounce'
import { Platform } from 'react-native'

const Search = () => {
  const searchInputRef = React.useRef<any>(null)

  const { getParam, push } = useRouting()
  const query: string = getParam('query')
  const [searchTerms, setSearchTerms] = React.useState<string>(query)
  const [searchTermsDebounced] = useDebounce(searchTerms, 300)

  const searchParams = React.useMemo(
    () => ({ search: searchTermsDebounced, after: null }),
    [searchTermsDebounced],
  )

  const { data }: { data?: SearchPostsQuery } = useSWR([
    searchPosts,
    searchParams,
  ])

  const handleSearch = (value) => {
    setSearchTerms(value)
    if (Platform.OS === 'web') {
      push({ routeName: 'search', web: { as: `/search?query=${value}` } })
    }
  }

  React.useEffect(() => searchInputRef.current.focus(), [])

  return (
    <Box>
      <Input
        ref={searchInputRef}
        sx={{ height: 40, p: 1 }}
        value={searchTerms}
        onChangeText={handleSearch}
      />
      <PostList query={searchPosts} params={searchParams} />
    </Box>
  )
}

export default Search
