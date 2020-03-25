import React from 'react'
import styled, { css } from 'styled-components/native'
import {
  color,
  flexbox,
  fontSize,
  layout,
  position,
  space,
  typography,
} from 'styled-system'
import { useResponsiveProps } from 'src/utils/Responsive'

const TextStyled = styled.Text(
  () => css`
    ${fontSize}
    ${flexbox};
    ${layout};
    ${position};
    ${space};
    ${color};
    ${typography};
  `,
)

export function Text(props) {
  const responsivedProps = useResponsiveProps(props)
  return responsivedProps ? <TextStyled {...responsivedProps} /> : null
}
