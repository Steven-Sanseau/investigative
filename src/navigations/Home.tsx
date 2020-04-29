import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Box } from 'src/components/primitives/Box'
import { Text } from 'src/components/primitives/Text'
import Index from 'src/pages/index'
import Post from 'src/pages/post/[slug]'
import Page from 'src/pages/page/[uri]'
import Category from 'src/pages/category/[slug]'
import Author from 'src/pages/author/[slug]'
import Search from 'src/pages/search'
import { HeaderMenu } from '../components/ScrollHeaderMenu'
import { Storage } from '../utils/storage'
import { ActivityIndicator } from 'react-native'

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

const MoreStackNavigator = createStackNavigator()

export function MoreStack() {
  return (
    <MoreStackNavigator.Navigator headerMode="float">
      <MoreStackNavigator.Screen component={HeaderMenu} name="more" />
      <MoreStackNavigator.Screen component={Search} name="search" />
    </MoreStackNavigator.Navigator>
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
        component={MoreStack}
      />
    </Tab.Navigator>
  )
}

const PERSISTENCE_KEY = 'NAVIGATION_STATE'

export default function Navigation() {
  const [isReady, setIsReady] = React.useState(false)
  const [initialState, setInitialState] = React.useState()

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await Storage.getItem(PERSISTENCE_KEY)
        const state = JSON.parse(savedStateString)

        setInitialState(state)
      } finally {
        setIsReady(true)
      }
    }

    if (!isReady) {
      restoreState()
    }
  }, [isReady])

  if (!isReady) {
    return <ActivityIndicator />
  }

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={(state) =>
        Storage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
      }
    >
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
