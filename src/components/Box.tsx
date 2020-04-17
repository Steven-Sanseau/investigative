/* eslint-disable react/display-name */
import React from 'react'
import { View } from 'react-native'
import { Responsive } from '../utils/Responsive'
import {
  ColorProps,
  SpaceProps,
  BackgroundProps,
  FlexboxProps,
  LayoutProps,
} from 'styled-system'

export interface PropsBox
  extends ColorProps,
    SpaceProps,
    LayoutProps,
    BackgroundProps,
    FlexboxProps {
  ref: any
}
export const Box = React.forwardRef((props: PropsBox, ref) => {
  return <Responsive ref={ref} component={View} {...props} />
})
