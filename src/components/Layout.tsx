import React from 'react'

import { Box, BoxProps } from 'src/components/primitives/Box'

export const Layout: React.FC<BoxProps> = ({ sx, ...props }: BoxProps) => (
  <Box
    sx={{
      ...sx,
      minWidth: {
        xs: '100%',
        sm: '600px',
        md: '800px',
        lg: '1000px',
        xl: '1200px',
      },
      maxWidth: { xs: '100%', xl: '1200px' },
      mx: 'auto',
      position: 'relative',
    }}
    {...props}
  />
)
