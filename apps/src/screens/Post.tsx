import React from 'react'
import HTML from 'react-native-render-html'
import { Text } from 'src/components/Text'
import { getPostBySlug } from 'src/api/ghost'
import useSWR from 'swr'
import {
  ScrollView,
  Dimensions,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native'
import { useRouting } from 'expo-next-react-navigation'

export function Post({ initialData }) {
  const { getParam } = useRouting()
  const slug = getParam('slug')

  const { data: post } = useSWR(`${slug}`, getPostBySlug, {
    initialData,
  })
  const renderers = {
    hr: () => (
      <View style={{ width: '100%', height: 1, backgroundColor: 'blue' }} />
    ),
    a: (htmlAttribs, children) => (
      <Text
        key={children.count}
        // onPress={() =>
        //   navigation.navigate('Webview', { href: htmlAttribs.href })
        // }
      >
        {children}
      </Text>
    ),
  }
  return (
    <>
      <Text>Post page {slug} </Text>
      {post && (
        <ScrollView style={{ flex: 1 }}>
          <HTML renderers={renderers} html={post.html}></HTML>
        </ScrollView>
      )}
    </>
  )
}
