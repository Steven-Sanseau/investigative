import React from 'react'
import { View } from 'react-native'
import { Responsive } from 'src/utils/Responsive'

export function Space(props) {
  return <Responsive component={View} {...props} />
}
