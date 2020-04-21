import React, { ReactElement } from 'react'
import { Text } from 'src/components/primitives/Text'
import { BoxProps } from 'src/components/primitives/Box'

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

export const H2: React.FC<any> = ({ sx, ...props }: BoxProps) => {
  return (
    <Text
      accessibilityRole="heading"
      aria-level="2"
      sx={{
        ...sx,
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
        fontSize: { xs: 2, sm: 3, md: 3, lg: 2, xl: 2 },
        fontWeight: '500',
      }}
      {...props}
    />
  )
}

export const Caps = ({ ...props }): ReactElement => (
  <Text sx={{ textTransform: 'uppercase' }} {...props} />
)
