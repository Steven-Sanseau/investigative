import React from 'react'
import { Link } from 'expo-next-react-navigation'
import { Text } from 'src/components/Text'
import { Linking, Platform } from 'react-native'
// import { useFocus, useHover } from 'react-native-web-hooks'

export default function UniversalLink({ routeName, ...props }: any) {
  const ref = React.useRef(null)

  // Handle External links
  if (routeName.startsWith('http://') || routeName.startsWith('https://')) {
    const isText = Platform.OS === 'web' || typeof props.children === 'string'

    const onPress = React.useCallback(() => {
      Linking.openURL(routeName)
    }, [routeName, isText])

    const WrapperView = props.as ? props.as : Text

    if (Platform.OS !== 'web') props.onPress = onPress

    return (
      <WrapperView
        {...props}
        ref={ref}
        href={routeName}
        accessibilityRole="link"
      />
    )
  }

  let outputRouteName = routeName

  if (Platform.OS !== 'web' && routeName === '') outputRouteName = '/'

  return <Link ref={ref} routeName={outputRouteName} {...props} />
}
