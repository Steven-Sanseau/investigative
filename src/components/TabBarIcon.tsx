import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import styled, { css } from 'styled-components/native'
import { color, position, space } from 'styled-system'

const Icon = styled(Ionicons)(() => {
  return css`
    ${color};
    ${space}
    ${position};
  `
})

export default function TabBarIcon({ name, ...props }) {
  return <Icon name={name} size={26} {...props} />
}
