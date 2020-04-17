import { styled } from 'src/utils/Styled'
import { Text } from 'src/components/Text'

export const DropCaps = styled(Text)`
  font-feature-settings: 'kern' 0;
  font-kerning: none;
  font-size: 3.25em;
  line-height: 0.8;
  margin-left: -0.05em;
  margin-bottom: -0.05em;
  padding: 0.05em 0.075em 0 0;
  position: relative;
  -webkit-font-smoothing: antialiased;
`
