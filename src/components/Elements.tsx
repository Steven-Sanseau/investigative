import React from 'react'
import { Box } from 'src/components/Box'
import { Responsive } from 'src/utils/Responsive'
import {
  Header as EHeader,
  UL as EUL,
  LI as ELI,
  Main as EMain,
  Aside as EAside,
  Pre as EPre,
} from '@expo/html-elements'

export function HR(props) {
  return <Responsive component={Box} bg="black" {...props} />
}

export function Header({ ...props }) {
  return <Responsive component={EHeader} {...props} />
}

export function UL({ ...props }) {
  return <Responsive component={EUL} {...props} />
}
export function LI({ ...props }) {
  return <Responsive component={ELI} {...props} />
}
export function Main({ ...props }) {
  return <Responsive component={EMain} {...props} />
}
export function Aside({ ...props }) {
  return <Responsive component={EAside} {...props} />
}
export function Pre({ ...props }) {
  return <Responsive component={EPre} {...props} />
}
