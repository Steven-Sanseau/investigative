import React from 'react'
import { View } from 'react-native'
import { useStyling } from 'src/utils/native-styled'
import { ThemedStyle } from 'src/utils/native-styled/ThemeContext'

export type BoxProps = React.ComponentProps<typeof View> & {
  href?: string
  sx?: ThemedStyle
  displayName?: string
  key?: string
}

export type Ref = React.RefObject<View>

export const Box: React.FC<BoxProps> = React.forwardRef(
  (
    { sx, displayName, ...props }: React.PropsWithChildren<BoxProps>,
    ref?: Ref,
  ): any => {
    const styling = useStyling()
    Box.displayName = displayName || 'Box'
    return <View ref={ref} style={styling(sx)} {...props} />
  },
)
