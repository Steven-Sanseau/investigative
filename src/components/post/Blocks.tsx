import React, { ReactChildren, ReactElement } from 'react'
import { P, H1, H2, H3, H4, H5, H6 } from 'src/components/Typography'
import { UL, LI, HR, Pre } from 'src/components/Elements'
import { Text } from 'src/components/primitives/Text'
import { GetPostBySlugQuery } from 'src/generated/graphql'
import { Box } from 'src/components/primitives/Box'
import { parseDOM } from 'htmlparser2'
import { UniversalLink } from 'src/components/UniversalLink'
import { Image } from 'src/components/primitives/Image'
import { Webview } from 'src/components/Webview'
import ErrorBoundary from 'react-error-boundary'

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
      src={src}
      sx={{
        mx: { xs: 'auto', md: 0 },
        height: '300hpx',
        width: 'full',
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
  ...props
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
}: {
  node: any
  wrapText: any
}): ReactElement => {
  const getChildren = (node, wrapText = true): [ReactElement] => {
    return node.children?.map((child) => transform({ node: child, wrapText }))
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

  if (node.type === 'text') {
    if (wrapText) {
      return <Text>{node.data.replace(/\n|\r/g, '')}</Text>
    }

    return node.data.trim()
  }
  if (node.type === 'tag') {
    const Element = Elements[node.name]
    return Element ? (
      <Element {...node.attribs}>{getChildren(node)}</Element>
    ) : null
  }

  return null
}

export const RenderBlocks = ({ content }: { content: string }): JSX.Element => {
  const nodes = React.useMemo(
    () =>
      parseDOM(content)
        .map((node) => transform({ node, wrapText: true }))
        .filter(Boolean),
    [content],
  )

  return (
    <ErrorBoundary onError={console.log}>
      {nodes?.map((Node) => Node)}
    </ErrorBoundary>
  )
}
