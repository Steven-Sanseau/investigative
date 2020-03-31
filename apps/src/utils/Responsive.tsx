import React from 'react'
import { Dimensions } from 'react-native'
import {
  color,
  flexbox,
  fontSize,
  layout,
  position,
  space,
  typography,
} from 'styled-system'

import styled, { css } from 'styled-components/native'

const ResponsiveCss = css`
  ${fontSize}
  ${flexbox};
  ${layout};
  ${position};
  ${space};
  ${color};
  ${typography};
`

const responsiveProps = [
  'alignContent',
  'alignItems',
  'alignSelf',
  'color',
  'color',
  'display',
  'flex',
  'flexBasis',
  'flexbox',
  'flexDirection',
  'flexWrap',
  'fontSize',
  'fontWeight',
  'gridRow',
  'height',
  'justifyContent',
  'layout',
  'letterSpacing',
  'lineHeight',
  'm',
  'maxWidth',
  'maxWidth',
  'mb',
  'ml',
  'mr',
  'mt',
  'p',
  'pb',
  'pl',
  'position',
  'pr',
  'pt',
  'space',
  'textAlign',
  'typography',
  'width',
  'height',
  'borderBottom',
  'borderColor',
  'textTransform',
]

export function useViewportWidth() {
  const [width, setWidth] = React.useState(null)
  const layoutEffect =
    typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect
  layoutEffect(() => {
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
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
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
  if (props.debug) {
    console.log({ current, props })
  }
  const responsivedProps = Object.entries(props).reduce(
    (acc, [propName, value]) => {
      if (!responsiveProps.includes(propName)) {
        return { ...acc, [propName]: value }
      }
      if (typeof value !== 'object') {
        return { ...acc, [propName]: value }
      }
      if (value[current] === undefined) {
        return {
          ...acc,
          [propName]: value[Object.keys(value)[Object.keys(value).length - 1]],
        }
      }

      return { ...acc, [propName]: value[current] }
    },
    [],
  )

  return responsivedProps
}

export function Responsive({
  component,
  ...props
}: {
  component: any
  displayName?: string
}): any {
  const responsivedProps = useResponsiveProps(props)
  const Component = styled(component).withConfig({
    shouldForwardProp: (prop) => !['filterThis'].includes(prop),
  })`
    ${ResponsiveCss}
  `
  if (props.displayName) {
    Component.displayName = props.displayName
  }
  return <Component {...responsivedProps} />
}
