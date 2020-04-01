import { Box } from 'src/components/Box'
import styled from 'styled-components/native'

export const Stack = styled(Box)`
  display: grid;
  justifycontent: 'justify';
  alignitems: 'align';
  flexdirection: ${(props) =>
    props.direction === 'vertical' ? 'column' : 'row'};
`
