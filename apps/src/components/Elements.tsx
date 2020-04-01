import React from 'react'
import { Box } from 'src/components/Box'
import { Responsive } from 'src/utils/Responsive'

export function HR(props) {
  return (
    <Responsive component={Box} bg="black" border="1" height="1px" {...props} />
  )
}
