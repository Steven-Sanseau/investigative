import React from 'react'
import { Responsive } from '../utils/Responsive'
import { Image as RNImage } from 'react-native'

export function Image(props) {
  return <Responsive component={RNImage} {...props} />
}
