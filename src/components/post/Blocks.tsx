import { parseDOM } from 'htmlparser2'
import React, { ReactChildren, ReactElement } from 'react'
// import ErrorBoundary from 'react-error-boundary'
import { HR, LI, Pre, UL } from 'src/components/Elements'
import { Box } from 'src/components/primitives/Box'
import { Image } from 'src/components/primitives/Image'
import { Text } from 'src/components/primitives/Text'
import { H1, H2, H3, H4, H5, H6, P } from 'src/components/Typography'
import { UniversalLink } from 'src/components/UniversalLink'
import { Webview } from 'src/components/Webview'

interface LinkProps {
  href: string
  children: ReactChildren
}
const Link: React.FC<LinkProps> = ({
  href,
  ...props
}: LinkProps): ReactElement => (
  <UniversalLink as={Text} routeName={href} sx={{ color: 'blue' }} {...props} />
)

interface ImageProps {
  src: string
  alt: string
}
const Img: React.FC<ImageProps> = ({ src, alt }: ImageProps): ReactElement => {
  return (
    <Image
      source={{ uri: src }}
      sx={{
        mx: { xs: 'auto', md: 0 },
        height: '300hpx',
        width: '100rpx',
      }}
      alt={alt}
    />
  )
}

interface IframeProps {
  src: string
}
const Iframe: React.FC<IframeProps> = ({
  src,
}: React.PropsWithChildren<IframeProps>) => {
  return (
    <Box sx={{ width: 'full', mx: { xs: 'auto', md: 0 } }}>
      <Webview uri={src} />
    </Box>
  )
}

const transform = ({
  node,
  wrapText,
  key,
}: {
  node: any
  wrapText: any
  key: any
}): ReactElement | string => {
  const getChildren = (node, wrapText = true): [ReactElement] => {
    return node.children?.map((child, key) =>
      transform({ node: child, wrapText, key }),
    )
  }

  const Elements = {
    p: P,
    hr: HR,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    pre: Pre,
    li: LI,
    ul: UL,
    em: Text,
    figure: Text,
    div: Box,
    blockquote: Text,
    span: Text,
    img: Img,
    a: Link,
    iframe: Iframe,
  }

  const childLess = ['img', 'hr']

  const htmlDecode = (str): string =>
    str.replace(/&#(\d+);/g, function (match, dec) {
      return String.fromCharCode(dec)
    })

  if (node.type === 'text') {
    if (wrapText) {
      return (
        <Text key={key}>{htmlDecode(node.data.replace(/\n|\r/g, ''))}</Text>
      )
    }

    return htmlDecode(node.data.trim())
  }
  if (node.type === 'tag') {
    const Element = Elements[node.name]
    if (!Element) {
      return null
    }

    if (childLess.includes(node.name)) {
      return <Element {...node.attribs} key={key} />
    }

    return (
      <Element {...node.attribs} key={key}>
        {getChildren(node)}
      </Element>
    )
  }

  return null
}
interface RenderBlocksProps {
  content: string
}
export const RenderBlocks: React.FC<RenderBlocksProps> = ({
  content,
}: RenderBlocksProps) => {
  const nodes = React.useMemo(
    () =>
      parseDOM(content)
        .map((node, key) =>
          transform({ node, wrapText: true, key: key.toString() }),
        )
        .filter(Boolean),
    [content],
  )
  return nodes ? nodes.map((Node) => Node) : null
}
