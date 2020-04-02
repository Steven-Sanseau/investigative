import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { createCollapsibleStack } from 'react-navigation-collapsible'
import { Header } from 'src/components/Header'
import { Space } from 'src/components/Space'
import TabBarIcon from 'src/components/TabBarIcon'
import { Text } from 'src/components/Text'
import Home from 'src/pages/index'
import Tag from 'src/pages/tag/[uri]'
import Tags from 'src/pages/tags'

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
      {createCollapsibleStack(
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: TabIcon('ios-today'),
            tabBarLabel: TabLabel('Home'),
            headerStyle: { backgroundColor: 'green' },
            headerTitle: () => <Header />,
            title: 'Home',
          }}
        />,
      )}
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
