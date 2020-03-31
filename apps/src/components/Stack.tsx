import React from 'react'
import styled, { css } from 'styled-components/native'
import { Box } from 'src/components/Box'

export const Stack = styled(Box)`
  display: grid;
  justifycontent: 'justify';
  alignitems: 'align';
  flexdirection: ${(props) =>
    props.direction === 'vertical' ? 'column' : 'row'};
`
