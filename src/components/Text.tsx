import React from 'react'
import { Text as RNText } from 'react-native'
import { Responsive } from '../utils/Responsive'

export const Text: React.FC<any> = (props: any) => {
  return <Responsive component={RNText} {...props} />
}
