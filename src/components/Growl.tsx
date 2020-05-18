import React, { ReactElement } from 'react'
import { useGrowl, useGrowlValue } from 'src/contexts/Growl'
import { Box } from 'src/components/primitives/Box'
import { T } from 'src/contexts/I18n'
import { Text } from 'src/components/primitives/Text'

export const GrowlMessage: React.FC = (): ReactElement => {
  const growl = useGrowl()
  const growlValue = useGrowlValue()

  if (!growlValue) return null

  return growlValue.open ? (
    <Box>
      <Box>
        <Text onPress={growl.hide}>close</Text>
        <Text>
          <T id={`growl.title.${growlValue.type}`} />
        </Text>
        <Text>{growlValue.message}</Text>
      </Box>
    </Box>
  ) : null
}
