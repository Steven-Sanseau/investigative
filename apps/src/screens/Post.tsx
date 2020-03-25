import React from 'react'
import HTML from 'react-native-render-html'
import { Text } from 'src/components/Text'
import { getPostBySlug } from 'src/api/ghost'
import useSWR from 'swr'

import { Platform, Linking, View } from 'react-native'
import { useRouting } from 'expo-next-react-navigation'
import { ScrollView } from 'react-native-gesture-handler'

export function Post({ initialData }) {
  const { getParam, navigate } = useRouting()
  const slug = getParam('slug')

  const { data: post } = useSWR(`${slug}`, getPostBySlug, {
    initialData,
  })
  const renderers = {
    hr: () => (
      <View style={{ width: '100%', height: 1, backgroundColor: 'blue' }} />
    ),

    p: (_, children) => (
      <Text fontFamily="serif" fontSize="1">
        {children}
      </Text>
    ),
  }
  return (
    <>
      <Text>Post page {slug} </Text>
      {post && (
        <ScrollView style={{ flex: 1 }}>
          <HTML
            onLinkPress={(evt, href) => {
              Platform.OS === 'web'
                ? Linking.openURL(href)
                : navigate({
                    routeName: 'webview',
                    params: { href },
                  })
            }}
            renderers={renderers}
            html={post.html}
          ></HTML>
        </ScrollView>
      )}
    </>
  )
}
