import React from 'react'
import { TextInput } from 'react-native'
import { useStyling } from 'src/utils/native-styled'

export type InputProps = React.ComponentProps<typeof TextInput> & {
  href?: string
  sx?: any
  displayName?: string
  key?: string
  unstable_dataSet?: any
  ref?: any
}

export const Input: React.FC<InputProps> = React.forwardRef<any, InputProps>(
  (
    { sx, displayName, ...props }: React.PropsWithChildren<InputProps>,
    ref: any,
  ): any => {
    const styling = useStyling()
    Input.displayName = displayName || 'Input'
    return <TextInput ref={ref} style={styling(sx)} {...props} />
  },
)
