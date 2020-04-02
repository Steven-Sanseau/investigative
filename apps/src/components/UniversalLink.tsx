import { Link } from 'expo-next-react-navigation'
import React from 'react'
import { Linking, Platform } from 'react-native'
import { Text } from 'src/components/Text'
// import { useFocus, useHover } from 'react-native-web-hooks'

export function UniversalLink({
  routeName,
  ...props
}: {
  routeName: string
  children: any
  params?: Object
  prefetch?: boolean
  web?: { as?: string; path?: string }
  as?: any
  onPress?: Function
}) {
  const ref = React.useRef(null)

  const isText = Platform.OS === 'web' || typeof props.children === 'string'
  const onPress = React.useCallback(() => {
    Linking.openURL(routeName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeName, isText])

  if (routeName.startsWith('http://') || routeName.startsWith('https://')) {
    const WrapperView = props.as ? props.as : Text

    if (Platform.OS !== 'web') props.onPress = onPress

    return (
      <WrapperView
        ref={ref}
        href={routeName}
        accessibilityRole="link"
        {...props}
      />
    )
  }

  let outputRouteName = routeName

  if (Platform.OS !== 'web' && routeName === '') outputRouteName = '/'

  return <Link ref={ref} routeName={outputRouteName} {...props} />
}
