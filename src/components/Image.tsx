import React from 'react'
import { Image as RNImage } from 'react-native'
import { Responsive } from '../utils/Responsive'

export function Image(props) {
  return <Responsive component={RNImage} {...props} />
}
