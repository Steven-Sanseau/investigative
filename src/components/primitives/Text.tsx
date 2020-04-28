import * as React from 'react'
import { Text as TextRN } from 'react-native'

import { useStyling } from 'src/utils/native-styled'
import { ThemedStyle } from 'src/utils/native-styled/ThemeContext'

export type Ref = React.RefObject<Text>

export type TextProps = React.ComponentProps<typeof TextRN> & {
  href?: string
  sx?: ThemedStyle
  key?: string
}
export const Text: React.FC<TextProps> = React.forwardRef<any, TextProps>(
  ({ sx, ...props }: TextProps, ref) => {
    const styling = useStyling()
    Text.displayName = 'Text'
    return <TextRN ref={ref} style={styling(sx)} {...props} />
  },
)
