import React, { ReactElement } from 'react'
import { Box, BoxProps } from 'src/components/primitives/Box'

export const Flex: React.FC<BoxProps> = ({ sx, ...props }: BoxProps): any => {
  return <Box sx={{ ...(sx || null), display: 'flex' }} {...props} />
}

export const Grid: React.FC<BoxProps> = ({
  sx,
  ...props
}: BoxProps): ReactElement => {
  return <Box sx={{ ...(sx || null), display: 'grid' }} {...props} />
}

export const Column: React.FC<BoxProps> = ({
  sx,
  ...props
}: BoxProps): ReactElement => {
  return <Flex sx={{ ...(sx || null), flexDirection: 'column' }} {...props} />
}

export const Row: React.FC<BoxProps> = ({
  sx,
  ...props
}: BoxProps): ReactElement => {
  return <Flex sx={{ ...(sx || null), flexDirection: 'row' }} {...props} />
}
