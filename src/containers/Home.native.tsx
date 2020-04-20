import React from 'react'
import { PostList } from 'src/components/posts/List'
import { CollapsibleHeader } from 'src/components/ScrollHeader'
import { Flex } from 'src/components/Grid'
import { Sidebar } from 'src/components/Sidebar'
import { Box } from 'src/components/primitives/Box'
import { Main, Aside } from 'src/components/Elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GrowlMessage } from 'src/components/Growl'

export const Home: React.FC = () => {
  return (
    <CollapsibleHeader>
      <SafeAreaView>
        <GrowlMessage />
        <Box sx={{ overflow: 'hidden' }}>
          <Flex sx={{ flexDirection: 'row' }}>
            <Main sx={{ width: { xs: 'full', lg: '9/12' } }}>
              <PostList />
            </Main>
            <Aside sx={{ width: { xs: 'full', md: '3/12' } }}>
              <Sidebar />
            </Aside>
          </Flex>
        </Box>
      </SafeAreaView>
    </CollapsibleHeader>
  )
}
