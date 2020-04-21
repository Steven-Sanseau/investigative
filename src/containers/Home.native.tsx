import React from 'react'
import { PostList } from 'src/components/posts/List'
import { CollapsibleHeader } from 'src/components/ScrollHeader'
import { Flex } from 'src/components/Grid'
import { Sidebar } from 'src/components/Sidebar'
import { Box } from 'src/components/primitives/Box'
import { Main, Aside } from 'src/components/Elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GrowlMessage } from 'src/components/Growl'
import { FeaturedPost } from 'src/components/posts/FeaturedPost'

export const Home: React.FC = () => {
  return (
    <CollapsibleHeader>
      <SafeAreaView>
        <GrowlMessage />
        <Main>
          <FeaturedPost />
          <PostList />
        </Main>
      </SafeAreaView>
    </CollapsibleHeader>
  )
}
