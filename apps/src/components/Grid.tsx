import React from 'react'
import { Box, PropsBox } from 'src/components/Box'

export const Flex: React.FC<PropsBox> = ({ ...props }) => {
  return <Box display="flex" {...props} />
}

export const Grid: React.FC<PropsBox> = (props) => {
  return <Box display="grid" {...props} />
}

export const Column: React.FC<PropsBox> = (props) => {
  return <Flex flexDirection="column" {...props} />
}

export const Row: React.FC<PropsBox> = (props) => {
  return <Flex flexDirection="row" {...props} />
}
