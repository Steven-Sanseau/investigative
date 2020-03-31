import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from 'src/pages/index'
import TabBarIcon from 'src/components/TabBarIcon'
import { Text } from 'src/components/Text'
import { Space } from 'src/components/Space'
import { createStackNavigator } from '@react-navigation/stack'
import Tags from 'src/pages/tags'
import Tag from 'src/pages/tag/[slug]'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const TabLabel = (name) => ({ focused }) => (
  <Space ml={{ xs: 0, sm: 3 }}>
    <Text fontFamily="heading" color={focused ? 'primary' : 'grayDark'}>
      {name}
    </Text>
  </Space>
)
const TabIcon = (name) => ({ focused }) => (
  <TabBarIcon color={focused ? 'primary' : 'grayDark'} name={name} />
)

export function More() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen component={Tags} name="tags" />
      <Stack.Screen component={Tag} name="tag" />
    </Stack.Navigator>
  )
}

export default function TabBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: TabIcon('ios-today'),
          tabBarLabel: TabLabel('Home'),
        }}
        name="home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: TabIcon('ios-settings'),
          tabBarLabel: TabLabel('More'),
        }}
        name="more"
        component={More}
      />
    </Tab.Navigator>
  )
}
