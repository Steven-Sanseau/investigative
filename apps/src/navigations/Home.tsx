import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Post from 'src/pages/post/[slug]'
import { WebWiewScreen } from 'src/components/Webview'

import TabBar from './TabBar'
import Page from 'src/pages/page/[slug]'

const Stack = createStackNavigator()

export function PostStack() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen component={Post} name="post" />
      <Stack.Screen component={WebWiewScreen} name="webview" />
    </Stack.Navigator>
  )
}

export function AuthorStack() {
  return (
    <Stack.Navigator headerMode="screen">
      {/* <Stack.Screen component={MoreScreen} name="more" />
      <Stack.Screen component={Tags} name="tags" />
      <Stack.Screen component={Tag} name="tag" /> */}
    </Stack.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen component={TabBar} name="home" />
        <Stack.Screen component={Page} name="page" />
        <Stack.Screen component={PostStack} name="post" />
        <Stack.Screen component={AuthorStack} name="author" />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
