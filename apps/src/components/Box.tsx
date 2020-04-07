import React from 'react'
import { View } from 'react-native'
import { Responsive } from '../utils/Responsive'

export const Box: React.FC<any> = function Box(props) {
  return <Responsive component={View} {...props} />
}
