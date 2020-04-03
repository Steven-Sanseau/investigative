import { useRouting } from 'expo-next-react-navigation'
import React from 'react'
import { withApollo } from 'src/apollo/client'
import { Box } from 'src/components/Box'
import { Header } from 'src/components/Header'
import { Text } from 'src/components/Text'
import { UniversalLink } from 'src/components/UniversalLink'

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
