import React from 'react'
import { Text } from 'src/components/primitives/Text'

export const DropCaps = ({ sx, ...props }: any) => (
  <Text
    sx={{
      ...sx,
      fontFeatureSettings: 'kern 0',
      fontKerning: 'none',
      fontSize: '3.25rpx',
      lineHeight: '0.8',
      marginLeft: '-0.05rpx',
      marginBottom: '-0.05rpx',
      p: '0.05em 0.075em 0 0',
      position: 'relative',
      fontSmoothing: 'antialiased',
    }}
    {...props}
  />
)
