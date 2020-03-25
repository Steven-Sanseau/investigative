import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from 'src/screens/Home'
import { More } from 'src/screens/More'
import TabBarIcon from 'src/components/TabBarIcon'
import { Text } from 'src/components/Text'
import { Space } from 'src/components/Space'

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

export default function TabBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: TabIcon('ios-today'),
          tabBarLabel: TabLabel('Home'),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: TabIcon('ios-settings'),
          tabBarLabel: TabLabel('More'),
        }}
        name="More"
        component={More}
      />
    </Tab.Navigator>
  )
}
