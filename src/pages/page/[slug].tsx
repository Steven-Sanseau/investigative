import { useRouting } from 'expo-next-react-navigation'
import React from 'react'
import { Box } from 'src/components/primitives/Box'
import { Header } from 'src/components/Header'
import { Text } from 'src/components/primitives/Text'
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

export default Page
