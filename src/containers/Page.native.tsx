import React from 'react'
import { Text } from 'src/components/primitives/Text'
import { MenuList } from 'src/components/MenuList'
import { RenderBlocks } from 'src/components/post/Blocks'
import { GetPageByUriQuery, GetPagesQuery } from 'src/generated/graphql'
import { Box } from 'src/components/primitives/Box'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'

interface PageProps {
  pagesList: GetPagesQuery
  data: GetPageByUriQuery
}
export const Page: React.FC<PageProps> = ({ pagesList, data }: PageProps) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text sx={{ fontSize: 6, fontFamily: 'heading', mx: 'auto' }}>
          {data?.page?.title}
        </Text>
        <MenuList selector="uri" type="page" data={pagesList?.pages.edges} />
        <Box
          sx={{
            width: { xs: '11/12', md: '7/12', xl: '1/2' },
            mx: 'auto',
          }}
        >
          <RenderBlocks content={data?.page?.content} />
        </Box>
      </ScrollView>
    </SafeAreaView>
  )
}
