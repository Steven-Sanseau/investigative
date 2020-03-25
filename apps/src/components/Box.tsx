import React from 'react'
import { Responsive } from '../utils/Responsive'
import { View } from 'react-native'

export function Box(props) {
  return <Responsive component={View} {...props} />
}
