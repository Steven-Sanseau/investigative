import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { color } from 'styled-system'
import styled, { css } from 'styled-components'

const Icon = styled(Ionicons)(css`
  ${color}
`)

export default function TabBarIcon({ name, focused }) {
  return (
    <Icon name={name} size={26} color={focused ? 'indigo.1' : 'indigo.5'} />
  )
}
