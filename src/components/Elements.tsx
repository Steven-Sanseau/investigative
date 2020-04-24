import React from 'react'
import { Box, BoxProps } from 'src/components/primitives/Box'

export const HR: React.FC<BoxProps> = ({ sx, ...props }: BoxProps) => {
  return <Box sx={{ bg: 'black', ...sx }} {...props} />
}

export const Header: React.FC<BoxProps> = ({ ...props }) => {
  return <Box {...props} />
}

export const UL: React.FC<BoxProps> = ({ ...props }) => {
  return <Box {...props} />
}
export const LI: React.FC<BoxProps> = ({ ...props }) => {
  return <Box {...props} />
}
export const Main: React.FC<BoxProps> = ({ ...props }) => {
  return <Box {...props} />
}
export const Aside: React.FC<BoxProps> = ({ ...props }) => {
  return <Box {...props} />
}
export const Pre: React.FC<BoxProps> = ({ ...props }) => {
  return <Box {...props} />
}
