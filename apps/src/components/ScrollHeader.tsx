import React from 'react'
import { Animated } from 'react-native'
import { useCollapsibleStack } from 'react-navigation-collapsible'

export function CollapsibleHeader(props): JSX.Element {
  const {
    onScroll,
    containerPaddingTop,
    scrollIndicatorInsetTop,
  } = useCollapsibleStack()

  return (
    <Animated.ScrollView
      onScroll={onScroll}
      contentContainerStyle={{ paddingTop: containerPaddingTop }}
      scrollIndicatorInsets={{ top: scrollIndicatorInsetTop }}
      scrollEventThrottle={1}
      {...props}
    />
  )
}
