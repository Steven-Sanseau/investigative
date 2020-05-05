import { Link } from 'expo-next-react-navigation'
import React, { CSSProperties } from 'react'
import { Linking, Platform } from 'react-native'
import { Text } from 'src/components/primitives/Text'
import { Box } from 'src/components/primitives/Box'

type PropsUniversalLink = React.ComponentProps<typeof Box> & {
  routeName: string
  params?: Record<string, any>
  prefetch?: boolean
  web?: { as?: string; path?: string }
  as?: any
  onPress?: Function
  style?: CSSProperties
}
export const UniversalLink: React.FC<PropsUniversalLink> = ({
  routeName,
  ...props
}: PropsUniversalLink) => {
  const isText = Platform.OS === 'web' || typeof props.children === 'string'
  const onPress = React.useCallback(() => {
    Linking.openURL(routeName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeName, isText])

  if (routeName.startsWith('http://') || routeName.startsWith('https://')) {
    const WrapperView = props.as ? props.as : Text

    if (Platform.OS !== 'web') props.onPress = onPress

    return <WrapperView href={routeName} accessibilityRole="link" {...props} />
  }

  let outputRouteName = routeName

  if (Platform.OS !== 'web' && routeName === '') outputRouteName = '/'

  return (
    <Link accessibilityRole="link" routeName={outputRouteName} {...props} />
  )
}
