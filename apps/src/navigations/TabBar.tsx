/* eslint-disable react/no-multi-comp */
import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Home } from 'src/screens/Home'
import TabBarIcon from 'src/components/TabBarIcon'
import { More } from '../screens/More'

const Tab = createBottomTabNavigator({
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
  more: {
    screen: More,
    path: 'more',
  },
})

export function TabBar() {
  return <Tab />
}
