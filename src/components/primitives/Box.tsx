import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Styled } from 'src/utils/native-styled'
import { ThemedStyle } from 'src/utils/native-styled/ThemeContext'
// import { Responsive } from '../utils/Responsive'
// import {
//   ColorProps,
//   SpaceProps,
//   BackgroundProps,
//   FlexboxProps,
//   LayoutProps,
// } from 'styled-system'

// export interface PropsBox
//   extends ColorProps,
//     SpaceProps,
//     LayoutProps,
//     BackgroundProps,
//     FlexboxProps {
//   ref: any
// }

export interface BoxProps {
  sx?: ThemedStyle
  ref?: any
  displayName?: string
}

export type Ref = React.RefObject<View>

export const Box: React.FC<BoxProps> = React.forwardRef(
  (
    { sx, displayName, ...props }: React.PropsWithChildren<BoxProps>,
    ref?: Ref,
  ): any => {
    const styling = Styled().useStyling()
    Box.displayName = displayName || 'Box'
    return <View ref={ref} style={styling(sx)} {...props} />
  },
)
