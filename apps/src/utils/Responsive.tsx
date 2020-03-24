import React from 'react'
import { Dimensions } from 'react-native'

const responsiveProps = [
  'fontSize',
  'color',
  'flexbox',
  'layout',
  'position',
  'space',
  'color',
  'typography',
]

export function useViewportWidth() {
  const [width, setWidth] = React.useState(null)

  React.useEffect(() => {
    setWidth(Dimensions.get('window').width)

    function handleResize() {
      setWidth(Dimensions.get('window').width)
    }

    Dimensions.addEventListener('change', handleResize)
    return () => Dimensions.removeEventListener('change', handleResize)
  }, [])

  return width
}

export function useBreakpoint() {
  const DEFAULT_BREAKPOINTS = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  }
  const width = useViewportWidth()
  return React.useMemo(() => {
    return (
      Object.keys(DEFAULT_BREAKPOINTS)
        .reverse()
        .find((breakpoint) => width > DEFAULT_BREAKPOINTS[breakpoint]) || null
    )
  }, [DEFAULT_BREAKPOINTS, width])
}

export function useResponsiveProps(props) {
  const current = useBreakpoint()
  const responsivedProps = Object.entries(props).reduce(
    (acc, [propName, value]) => {
      if (!responsiveProps.includes(propName)) {
        return { ...acc, [propName]: value }
      }
      if (typeof value !== 'object') {
        return { ...acc, [propName]: value }
      }
      if (!value[current]) {
        return { ...acc, [propName]: value[Object.keys(value)[0]] }
      }
      return { ...acc, [propName]: value[current] }
    },
    [],
  )
  return responsivedProps
}
