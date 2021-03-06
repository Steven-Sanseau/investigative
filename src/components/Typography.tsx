import React from 'react'
import { Text, TextProps } from 'src/components/primitives/Text'

export const H1: React.FC<TextProps> = ({ sx, ...props }: TextProps) => {
  return (
    <Text
      accessibilityRole="header"
      aria-level="1"
      unstable_ariaSet={{ level: '1' }}
      sx={{
        color: 'grayDark',
        fontFamily: 'heading',
        fontSize: 6,
        fontWeight: '700',
        ...sx,
      }}
      {...props}
    />
  )
}

export const H2: React.FC<TextProps> = ({ sx, ...props }: TextProps) => {
  return (
    <Text
      accessibilityRole="header"
      aria-level="2"
      unstable_ariaSet={{ level: '2' }}
      sx={{
        ...sx,
        color: 'grayDark',
        fontFamily: 'heading',
        fontSize: 4,
        fontWeight: '700',
        ...sx,
      }}
      {...props}
    />
  )
}

export const H3: React.FC<TextProps> = ({ sx, ...props }: TextProps) => {
  return (
    <Text
      accessibilityRole="header"
      aria-level="3"
      unstable_ariaSet={{ level: '3' }}
      sx={{
        color: 'grayDark',
        fontFamily: 'heading',
        fontSize: { xs: 2, md: 3 },
        fontWeight: '700',
        ...sx,
      }}
      {...props}
    />
  )
}

export const H4: React.FC<TextProps> = ({ sx, ...props }: TextProps) => {
  return (
    <Text
      accessibilityRole="header"
      aria-level="4"
      unstable_ariaSet={{ level: '4' }}
      sx={{
        color: 'grayDark',
        fontFamily: 'heading',
        fontSize: 2,
        fontWeight: '700',
        ...sx,
      }}
      {...props}
    />
  )
}
export const H5: React.FC<TextProps> = ({ sx, ...props }: TextProps) => {
  return (
    <Text
      accessibilityRole="header"
      aria-level="5"
      unstable_ariaSet={{ level: '5' }}
      sx={{
        color: 'grayDark',
        fontFamily: 'heading',
        fontSize: { xs: 1, md: 2 },
        fontWeight: '300',
        ...sx,
      }}
      {...props}
    />
  )
}
export const H6: React.FC<TextProps> = ({ sx, ...props }: TextProps) => {
  return (
    <Text
      accessibilityRole="header"
      aria-level="6"
      unstable_ariaSet={{ level: '6' }}
      sx={{
        color: 'grayDark',
        fontFamily: 'heading',
        fontSize: 1,
        fontWeight: '700',
        ...sx,
      }}
      {...props}
    />
  )
}

export const P: React.FC<TextProps> = ({ sx, ...props }: TextProps) => {
  return (
    <Text
      sx={{
        color: 'grayDark',
        fontFamily: 'serif',
        fontSize: { xs: 3, sm: 3, md: 3, lg: 2, xl: 2 },
        fontWeight: '500',
        lineHeight: 23,
        ...sx,
      }}
      {...props}
    />
  )
}

export const Caps: React.FC<TextProps> = ({ sx, ...props }: TextProps) => (
  <Text sx={{ textTransform: 'uppercase', ...sx }} {...props} />
)
