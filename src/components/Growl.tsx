import React, { ReactElement } from 'react'
import { useGrowlValue, useGrowl } from 'src/contexts/Growl'
import { Box } from 'src/components/Box'
import { styled } from 'src/utils/Styled'
import { T } from 'src/contexts/I18n'
import { Text } from 'src/components/Text'

const GrowlTitle = styled(Box)``

export const GrowlMessage: React.FC = (): ReactElement => {
  const growl = useGrowl()
  const growlValue = useGrowlValue()

  if (!growlValue) return null

  return growlValue.open ? (
    <Box>
      <Box>
        <Text onPress={growl.hide}>close</Text>
        <GrowlTitle variant={growlValue.type}>
          <T id={`growl.title.${growlValue.type}`} />
        </GrowlTitle>
        <Text>{growlValue.message}</Text>
      </Box>
    </Box>
  ) : null
}
