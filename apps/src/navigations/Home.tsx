import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Post } from 'src/screens/Post'
import { WebWiewScreen } from 'src/screens/Webview'

import TabBar from './TabBar'

const Stack = createStackNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen component={TabBar} name="home" />
        <Stack.Screen component={Post} name="post" />
        <Stack.Screen component={WebWiewScreen} name="Webview" />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
