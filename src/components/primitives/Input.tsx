import React from 'react'
import { TextInput } from 'react-native'
import { useStyling } from 'src/utils/native-styled'
import { SystemStyleObject } from '@theme-ui/css'

export type SxStyleProp = SystemStyleObject

export type InputProps = React.ComponentProps<typeof TextInput> & {
  href?: string
  sx?: SystemStyleObject
  displayName?: string
  key?: string
}

export type Ref = React.RefObject<TextInput>

export const Input: React.FC<InputProps> = React.forwardRef<any, InputProps>(
  (
    { sx, displayName, ...props }: React.PropsWithChildren<InputProps>,
    ref,
  ): any => {
    const styling = useStyling()
    Input.displayName = displayName || 'Input'
    return <TextInput ref={ref} style={styling(sx)} {...props} />
  },
)
