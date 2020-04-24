import React, { ReactElement } from 'react'
import { Text as TextRN } from 'react-native'

import { useStyling } from 'src/utils/native-styled'
import { ThemedStyle } from 'src/utils/native-styled/ThemeContext'

export interface BoxProps {
  sx?: ThemedStyle
  ref?: any
  key?: string
  children: any
}

export type Ref = React.RefObject<Text>

export const Text: React.FC<BoxProps> = React.forwardRef<any, BoxProps>(
  ({ sx, ...props }: BoxProps, ref) => {
    const styling = useStyling()
    Text.displayName = 'Text'
    const computedStyles = sx ? styling(sx) : null
    return <TextRN ref={ref} style={computedStyles} {...props} />
  },
)
