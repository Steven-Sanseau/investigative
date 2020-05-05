import React from 'react'
import { Box } from '../components/primitives/Box'
import { Input } from '../components/primitives/Input'
import { SearchPostsQuery } from '../generated/graphql'
import useSWR from 'swr'
import { searchPosts } from '../graphql/post'
import { PostList } from '../components/posts/List'
import { useRouting } from 'expo-next-react-navigation'
import { useDebounce } from 'use-debounce'
import { Platform, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'

const Search: React.FC = () => {
  const searchInputRef = React.useRef<any>(null)

  const { getParam, push } = useRouting()
  const query: string = getParam('query')
  const [searchTerms, setSearchTerms] = React.useState<string>(query)
  const [searchTermsDebounce] = useDebounce(searchTerms, 300)

  const searchParams = React.useMemo(
    () => ({ search: searchTermsDebounce, after: null }),
    [searchTermsDebounce],
  )

  const { data }: { data?: SearchPostsQuery } = useSWR([
    searchPosts,
    searchParams,
  ])

  const handleSearch = (value): void => {
    setSearchTerms(value)
    if (Platform.OS === 'web') {
      push({ routeName: 'search', web: { as: `/search?query=${value}` } })
    }
  }

  React.useEffect(() => searchInputRef.current.focus(), [])

  return (
    <SafeAreaView>
      <ScrollView>
        <Box>
          <Input
            ref={searchInputRef}
            sx={{ height: 40, p: 1 }}
            value={searchTerms}
            onChangeText={handleSearch}
          />
          <PostList
            initialData={data}
            query={searchPosts}
            params={searchParams}
          />
        </Box>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Search
