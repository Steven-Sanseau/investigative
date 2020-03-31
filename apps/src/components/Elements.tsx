import React from 'react'
import { Responsive } from 'src/utils/Responsive'
import { Box } from 'src/components/Box'

export function HR(props) {
  return (
    <Responsive component={Box} bg="black" border="1" height="1px" {...props} />
  )
}
