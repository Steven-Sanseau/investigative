import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { Post } from 'src/screens/Post'
import { WebWiewScreen } from 'src/screens/Webview'
import { More } from 'src/screens/More'

import { Home } from '../screens/Home'
import TabBarIcon from '../components/TabBarIcon'
import { Platform } from 'react-native'

const HomeStack = createStackNavigator({
  home: {
    screen: Home,
    path: '',
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? `ios-home` : 'md-home'}
        />
      ),
    },
  },
  post: Post,
  webview: WebWiewScreen,
})

const SettingsStack = createStackNavigator({
  more: More,
})

export default createAppContainer(
  createBottomTabNavigator({
    Home: HomeStack,
    Settings: SettingsStack,
  }),
)
