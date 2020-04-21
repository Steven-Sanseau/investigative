import React, { ReactElement } from 'react'
import { Box } from 'src/components/primitives/Box'
import { Header } from 'src/components/Header'
import { Text } from 'src/components/primitives/Text'
import { UniversalLink } from 'src/components/UniversalLink'

function Page(): ReactElement {
  // const { getParam } = useRouting()
  // const slug: string = getParam('slug')
  // const [refreshing, setRefreshing] = React.useState(false)
  // const [lastRefreshingDate, setLastRefreshingDate] = React.useState(
  //   new Date().toDateString(),
  // )
  // const growl = useGrowl()
  // const t = useT()

  // const slugParams = React.useMemo(() => ({ slug }), [slug])
  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true)
  //   mutate([getPageBySlug, slugParams]).then(() => {
  //     growl.success(t('growl.message.refreshPost'))
  //     return wait(200).then(() => {
  //       setRefreshing(false)
  //       setLastRefreshingDate(new Date().toDateString())
  //     })
  //   })
  // }, [slugParams, growl, t])

  // const { data }: { data?: GetPage } = useSWR([getPostBySlug, slugParams])

  return (
    <Box>
      <Header />
      <UniversalLink routeName="">
        <Text>titre</Text>
      </UniversalLink>
    </Box>
  )
}

export default Page
