import { Ionicons } from '@expo/vector-icons'
import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components/native'
import { color, position, space } from 'styled-system'
import { PropsBox } from 'src/components/Box'

const Icon = styled(Ionicons)(() => {
  return css`
    ${color};
    ${space}
    ${position};
  `
})

interface TabBarIconProps extends PropsBox {
  name: string
}
export default function TabBarIcon({
  name,
  ...props
}: TabBarIconProps): ReactElement {
  return <Icon name={name} size={26} {...props} />
}
