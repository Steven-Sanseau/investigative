import React from 'react'
import styled from 'styled-components/native'
import {
  H1 as EH1,
  H2 as EH2,
  H3 as EH3,
  H4 as EH4,
  P as EP,
} from '@expo/html-elements'
import { Responsive } from 'src/utils/Responsive'

export function H1(props) {
  return (
    <Responsive
      component={EH1}
      fontSize={{ xs: 3, lg: 5, xl: 6 }}
      fontFamily="heading"
      color="primary"
      {...props}
    />
  )
}

export function H2(props) {
  return (
    <Responsive
      component={EH2}
      fontSize={{ xs: 3, lg: 4, xl: 2 }}
      fontFamily="heading"
      color="grayDark"
      {...props}
    />
  )
}

export function H3(props) {
  return (
    <Responsive
      component={EH3}
      fontSize={{ xs: 3, lg: 4, xl: 2 }}
      fontFamily="heading"
      {...props}
    />
  )
}

export function H4(props) {
  return (
    <Responsive
      component={EH4}
      fontSize={{ xs: 4, lg: 4, xl: 4 }}
      fontFamily="heading"
      textTransform="uppercase"
      color="grayDark"
      {...props}
    />
  )
}

export function P(props) {
  return (
    <Responsive
      component={EP}
      fontSize={{ xs: 1 }}
      fontFamily="serif"
      {...props}
    />
  )
}

export const Caps = styled.Text`
  text-transform: uppercase;
`
