import React from 'react'
import { Box } from 'src/components/Box'

export function Grid({ ...props }) {
  return <Box flexWrap="wrap" display="flex" {...props} />
}

export function Column({ ...props }) {
  return <Box flexDirection="column" {...props} />
}

export function Row({ ...props }) {
  return <Column flexDirection="row" width={12} {...props}></Column>
}
