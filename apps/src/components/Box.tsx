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
    FlexboxProps {}
export const Box: React.FC<PropsBox> = function Box(props: PropsBox) {
  return <Responsive component={View} {...props} />
}
