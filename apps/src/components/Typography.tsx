import {
  H1 as EH1,
  H2 as EH2,
  H3 as EH3,
  H4 as EH4,
  H4 as EH5,
  H4 as EH6,
  P as EP,
} from '@expo/html-elements'
import React from 'react'
import { Responsive } from 'src/utils/Responsive'
import styled from 'styled-components/native'

export const H1: React.FC<any> = (props) => {
  return (
    <Responsive
      component={EH1}
      color="grayDark"
      fontFamily="heading"
      fontSize={6}
      fontWeight="700"
      m={0}
      p={0}
      {...props}
    />
  )
}

export const H2: React.FC<any> = (props) => {
  return (
    <Responsive
      component={EH2}
      color="grayDark"
      fontFamily="heading"
      fontSize={4}
      fontWeight="700"
      m={0}
      p={0}
      {...props}
    />
  )
}

export const H3: React.FC<any> = (props) => {
  return (
    <Responsive
      component={EH3}
      color="grayDark"
      fontFamily="heading"
      fontSize={3}
      m={0}
      p={0}
      {...props}
    />
  )
}

export const H4: React.FC<any> = (props) => {
  return (
    <Responsive
      component={EH4}
      color="grayDark"
      fontFamily="heading"
      fontSize={2}
      m={0}
      p={0}
      textTransform="uppercase"
      {...props}
    />
  )
}
export const H5: React.FC<any> = (props) => {
  return (
    <Responsive
      component={EH5}
      color="grayDark"
      fontFamily="heading"
      fontSize={1}
      m={0}
      p={0}
      textTransform="uppercase"
      {...props}
    />
  )
}
export const H6: React.FC<any> = (props) => {
  return (
    <Responsive
      component={EH6}
      color="grayDark"
      fontFamily="heading"
      fontSize={1}
      textTransform="uppercase"
      {...props}
    />
  )
}

export const P: React.FC<any> = (props) => {
  return (
    <Responsive
      component={EP}
      fontFamily="serif"
      fontSize={1}
      m={0}
      {...props}
    />
  )
}

export const Caps = styled.Text`
  text-transform: uppercase;
`
