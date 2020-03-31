import React from 'react'
import { Responsive } from '../utils/Responsive'
import { View } from 'react-native'

export const Box = function Box({ ...props }) {
  return <Responsive component={View} {...props} />
}
