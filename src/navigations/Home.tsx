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

export function PostStack() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen component={Post} name="post" />
      <Stack.Screen component={Webview} name="webview" />
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
const MainStack = createStackNavigator()
export function Main() {
  return (
    <MainStack.Navigator headerMode="float">
      {createCollapsibleStack(
        <MainStack.Screen
          component={Index}
          name="home"
          options={{
            headerStyle: { backgroundColor: 'gray' },
            title: 'Home',
          }}
        />,
      )}

      <MainStack.Screen component={Post} name="post" />
      <MainStack.Screen component={Webview} name="webview" />
    </MainStack.Navigator>
  )
}

export function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Main}
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
        component={Main}
      />
    </Tab.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
