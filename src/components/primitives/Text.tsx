import React from 'react'
import { Text as TextRN } from 'react-native'

import { useStyling } from 'src/utils/native-styled'
import { ThemedStyle } from 'src/utils/native-styled/ThemeContext'

export interface BoxProps extends TextRN {
  sx?: ThemedStyle
  ref?: any
}

export type Ref = React.RefObject<Text>

export const Text = React.forwardRef(
  ({ sx, ...props }: React.PropsWithChildren<BoxProps>, ref?: Ref): any => {
    const styling = useStyling()
    Text.displayName = 'Text'
    const computedStyles = sx ? styling(sx) : null
    return <TextRN ref={ref} style={computedStyles} {...props} />
  },
)
