import React, { ReactElement } from 'react'
import { Image as RNImage } from 'react-native'
import { Responsive } from '../utils/Responsive'

export function Image(props): ReactElement {
  return <Responsive component={RNImage} {...props} />
}
