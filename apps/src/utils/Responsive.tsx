import React from 'react'
import { Dimensions } from 'react-native'
import { styled, css, Primitive } from './Styled'
import {
  color,
  flexbox,
  fontSize,
  grid,
  layout,
  position,
  space,
  background,
  shadow,
  border,
  typography,
} from 'styled-system'

const ResponsiveCss = css`
  ${fontSize}
  ${flexbox};
  ${layout};
  ${position};
  ${border};
  ${background};
  ${shadow};
  ${grid};
  ${space};
  ${color};
  ${typography};
`

const responsiveProps = [
  'alignContent',
  'alignItems',
  'alignSelf',
  'border',
  'borderBottom',
  'borderColor',
  'borderLeft',
  'borderRight',
  'borderStyle',
  'borderTop',
  'boxShadow',
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
  'gridArea',
  'gridAutoColumns',
  'gridAutoFlow',
  'gridAutoRows',
  'gridColumn',
  'gridColumnGap',
  'gridGap',
  'gridRow',
  'gridRow',
  'gridRowGap',
  'gridTemplateAreas',
  'gridTemplateColumns',
  'gridTemplateRows',
  'height',
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
  'mx',
  'my',
  'p',
  'px',
  'py',
  'pb',
  'pl',
  'position',
  'pr',
  'pt',
  'space',
  'textAlign',
  'textShadow',
  'textTransform',
  'typography',
  'width',
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

const StyledComponent = styled(Primitive)`
  ${ResponsiveCss}
`

export function Responsive({
  component,
  ...props
}: {
  component: any
  displayName?: string
}): any {
  const responsivedProps = useResponsiveProps(props)
  // console.log('StyledComponent', StyledComponent)

  if (props.displayName) {
    StyledComponent.displayName = props.displayName
  }
  return (
    <StyledComponent
      css={{ ResponsiveCss }}
      as={component}
      {...responsivedProps}
    />
  )
}
