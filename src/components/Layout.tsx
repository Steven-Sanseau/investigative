import { Box } from 'src/components/Box'
import { styled } from 'src/utils/Styled'

export const Layout = styled(Box).attrs({
  minWidth: {
    xs: '100%',
    sm: '600px',
    md: '800px',
    lg: '1000px',
    xl: '1200px',
  },
  maxWidth: { xs: '100%', xl: '1200px' },
  mx: 'auto',
})`
  position: relative;
`
