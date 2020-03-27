import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Post } from 'src/screens/Post'
import { WebWiewScreen } from 'src/screens/Webview'

import TabBar from './TabBar'
import Page from 'src/pages/page/[slug]'

const Stack = createStackNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="float">
        <Stack.Screen component={TabBar} name="home" />
        <Stack.Screen component={Post} name="post" />
        <Stack.Screen component={Page} name="page" />
        <Stack.Screen component={WebWiewScreen} name="webview" />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
