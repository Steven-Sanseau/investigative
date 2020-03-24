/* eslint-disable react/no-multi-comp */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from 'src/screens/Home'
import { More } from '../screens/More'
import TabBarIcon from 'src/components/TabBarIcon'

const Tab = createBottomTabNavigator()

export default function TabBar() {
  return (
    <Tab.Navigator
    // screenOptions={({ route }) => ({
    //   tabBarIcon: ({ focused }) => (
    //     <TabBarIcon focused={focused} name="ios-information-circle" />
    //   ),
    // })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  )
}
