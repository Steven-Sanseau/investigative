import React from 'react'
import { Text } from 'src/components/Text'
import { Flex, Row } from 'src/components/Grid'

export function Sidebar() {
  return (
    <Flex>
      <Text>Sidebar</Text>
      <Row justifyContent="space-around">
        <Text>gauche</Text>
        <Text>droite</Text>
      </Row>
    </Flex>
  )
}
