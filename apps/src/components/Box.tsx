import React from 'react'
import { View } from 'react-native'
import { Responsive } from '../utils/Responsive'

export const Box = function Box({ ...props }) {
  return <Responsive component={View} {...props} />
}
