import React from 'react'
import { Box } from 'src/components/Box'
import { Text } from 'src/components/Text'
import { useRouting } from 'expo-next-react-navigation'
import { UniversalLink } from 'src/components/UniversalLink'
import { Header } from 'src/components/Header'
import { withApollo } from 'src/apollo/client'

function Page() {
  const { getParam } = useRouting()
  const slug = getParam('slug')

  return (
    <Box>
      <Header />
      <UniversalLink routeName="">
        <Text>titre</Text>
      </UniversalLink>
    </Box>
  )
}

export default withApollo(Page)
