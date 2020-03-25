import React from 'react'
import { Responsive } from 'src/utils/Responsive'
import { View } from 'react-native'

export function Space(props) {
  return <Responsive component={View} {...props} />
}
