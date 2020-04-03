import React from 'react'
import { Text as RNText } from 'react-native'
import { Responsive } from '../utils/Responsive'

export function Text({ ...props }) {
  return <Responsive component={RNText} {...props} />
}
