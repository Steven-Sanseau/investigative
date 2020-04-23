import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { createCollapsibleStack } from 'react-navigation-collapsible'
import { Box } from 'src/components/primitives/Box'
// import TabBarIcon from 'src/components/TabBarIcon'
import { Text } from 'src/components/primitives/Text'
import { Webview } from 'src/components/Webview'
import Index from 'src/pages/index'
import Post from 'src/pages/post/[slug]'
import Page from 'src/pages/page/[uri]'
import Category from 'src/pages/category/[slug]'
import Author from 'src/pages/author/[slug]'
import Menu from 'src/pages/menu'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const TabLabel = (name) => ({ focused }) => (
  <Box sx={{ ml: { xs: 0, sm: 3 } }}>
    <Text fontFamily="heading" color={focused ? 'primary' : 'grayDark'}>
      {name}
    </Text>
  </Box>
)
// const TabIcon = (name) => ({ focused }) => (
//   <TabBarIcon color={focused ? 'primary' : 'grayDark'} name={name} />
// )

export function MainStack() {
  return (
    <Stack.Navigator headerMode="float">
      <Stack.Screen component={Index} name="home" />
    </Stack.Navigator>
  )
}

export function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={MainStack}
        options={{
          // tabBarIcon: TabIcon('ios-today'),
          tabBarLabel: TabLabel('Home'),
        }}
      />
      <Tab.Screen
        options={{
          // tabBarIcon: TabIcon('ios-settings'),
          tabBarLabel: TabLabel('More'),
        }}
        name="more"
        component={Menu}
      />
    </Tab.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="main" component={MainTabs} />
        <Stack.Screen component={Post} name="post" />
        <Stack.Screen component={Post} name="comment" />
        <Stack.Screen component={Author} name="author" />
        <Stack.Screen component={Category} name="category" />
        <Stack.Screen component={Page} name="page" />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
