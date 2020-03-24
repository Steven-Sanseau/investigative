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

const BoxStyled = styled.View(css`
  ${fontSize}
  ${flexbox};
  ${layout};
  ${position};
  ${space};
  ${color};
  ${typography};
`)

export function Box(props) {
  const responsivedProps = useResponsiveProps(props)

  return <>{responsivedProps && <BoxStyled {...responsivedProps} />}</>
}
