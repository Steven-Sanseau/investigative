import React, { ReactElement } from 'react'
import { Text } from 'src/components/primitives/Text'
import { BoxProps } from 'src/components/primitives/Box'

export const DropCaps = ({ sx, ...props }: BoxProps): ReactElement => (
  <Text
    sx={{
      ...sx,
      fontSize: 4,
      lineHeight: 1.8,
      marginLeft: -0.5,
      marginBottom: -0.5,
      position: 'relative',
    }}
    {...props}
  />
)
