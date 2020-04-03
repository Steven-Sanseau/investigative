import React from 'react'
import { Box } from 'src/components/Box'

export function Flex({ ...props }): JSX.Element {
  return <Box flexWrap="wrap" display="flex" {...props} />
}

export function Grid({ ...props }): JSX.Element {
  return <Box display="grid" {...props} />
}

export function Column({ ...props }): JSX.Element {
  return <Box flexDirection="column" {...props} />
}

export function Row({ ...props }): JSX.Element {
  return <Column flexDirection="row" {...props}></Column>
}
