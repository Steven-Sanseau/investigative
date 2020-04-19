import React from 'react'
import { Text } from 'src/components/primitives/Text'

export const H1: React.FC<any> = (props) => {
  return (
    <Text
      accessibilityRole="heading"
      aria-level="1"
      sx={{
        color: 'grayDark',
        fontFamily: 'heading',
        fontSize: 6,
        fontWeight: '700',
      }}
      {...props}
    />
  )
}

export const H2: React.FC<any> = (props) => {
  return (
    <Text
      accessibilityRole="heading"
      aria-level="2"
      sx={{
        color: 'grayDark',
        fontFamily: 'heading',
        fontSize: 4,
        fontWeight: '700',
      }}
      {...props}
    />
  )
}

export const H3: React.FC<any> = (props) => {
  return (
    <Text
      accessibilityRole="heading"
      aria-level="3"
      sx={{
        color: 'grayDark',
        fontFamily: 'heading',
        fontSize: 3,
        fontWeight: '700',
      }}
      {...props}
    />
  )
}

export const H4: React.FC<any> = (props) => {
  return (
    <Text
      accessibilityRole="heading"
      aria-level="4"
      sx={{
        color: 'grayDark',
        fontFamily: 'heading',
        fontSize: 2,
        fontWeight: '700',
        textTransform: 'uppercase',
      }}
      {...props}
    />
  )
}
export const H5: React.FC<any> = (props) => {
  return (
    <Text
      accessibilityRole="heading"
      aria-level="5"
      sx={{
        color: 'grayDark',
        fontFamily: 'heading',
        fontSize: 1,
        fontWeight: '700',
      }}
      {...props}
    />
  )
}
export const H6: React.FC<any> = (props) => {
  return (
    <Text
      accessibilityRole="heading"
      aria-level="6"
      sx={{
        color: 'grayDark',
        fontFamily: 'heading',
        fontSize: 1,
        fontWeight: '700',
      }}
      {...props}
    />
  )
}

export const P: React.FC<any> = (props) => {
  return (
    <Text
      sx={{
        color: 'grayDark',
        fontFamily: 'serif',
        fontSize: 1,
        fontWeight: '700',
      }}
      {...props}
    />
  )
}

export const Caps = ({ ...props }) => (
  <Text sx={{ textTransform: 'uppercase' }} {...props} />
)
