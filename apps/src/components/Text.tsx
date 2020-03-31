import React from 'react'
import { Responsive } from '../utils/Responsive'
import { Text as RNText } from 'react-native'

export function Text({ ...props }) {
  return <Responsive component={RNText} {...props} />
}
