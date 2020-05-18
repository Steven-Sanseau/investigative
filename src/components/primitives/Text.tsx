import * as React from 'react'
import { Text as TextRN } from 'react-native'

import { useStyling } from 'src/utils/native-styled'

export type TextProps = React.ComponentProps<typeof TextRN> & {
  href?: string
  ref?: any
  sx?: any
  key?: string
  unstable_ariaSet?: any
}
export const Text: React.FC<TextProps> = React.forwardRef<any, TextProps>(
  ({ sx, ...props }: TextProps, ref) => {
    const styling = useStyling()
    Text.displayName = 'Text'
    return (
      <TextRN
        ref={ref}
        style={styling({
          color: 'grayDark',
          fontFamily: 'serif',
          ...sx,
        })}
        {...props}
      />
    )
  },
)
