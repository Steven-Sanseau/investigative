import React, { ReactChildren, ReactElement } from 'react'
import { Dimensions } from 'react-native'
import { P, H1, H2, H3, H4, H5, H6 } from 'src/components/Typography'
import { UL, LI, HR, Pre } from 'src/components/Elements'
import { Text } from 'src/components/primitives/Text'
import { GetPostBySlugQuery } from 'src/generated/graphql'
import { Box } from 'src/components/primitives/Box'
import { parseDOM } from 'htmlparser2'
import { UniversalLink } from 'src/components/UniversalLink'
import { Image } from 'src/components/primitives/Image'
import ErrorBoundary from 'react-error-boundary'
import { DropCaps } from 'src/components/DropCaps'

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
  const dimensions = Dimensions.get('window')
  const imageHeight = Math.round((dimensions.width * 9) / 16)
  const imageWidth = dimensions.width
  return (
    <Image
      source={{ uri: src }}
      sx={{
        mx: { xs: 'auto', md: 0 },
        height: { imageHeight },
        width: { imageWidth },
      }}
      loading="lazy"
      resizeMode="contain"
      alt={alt}
    />
  )
}

interface ParagraphProps {
  index: number
  level: number
}
function Paragraph({
  index,
  level,
  children,
}: React.PropsWithChildren<ParagraphProps>): ReactElement {
  const childrenContent = children
  if (level === 0) {
    return (
      <DropCaps>{childrenContent.toString().slice(0, 1)}</DropCaps> && (
        <P>{childrenContent.toString().slice(1, 0)}</P>
      )
    )
  }
  return <P>{children}</P>
}

const transform = ({
  node,
  wrapText,
  index,
  level,
}: {
  node
  wrapText
  index
  level
}): ReactElement => {
  const getChildren = (node, wrapText = true): [ReactElement] => {
    return node.children?.map((child) =>
      transform({ node: child, wrapText, index, level: level + 1 }),
    )
  }

  const Elements = {
    p: Paragraph,
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
    div: Box,
    blockquote: Text,
    span: Text,
    img: Img,
    a: Link,
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
      <Element {...node.attribs} index={index} level={level}>
        {getChildren(node)}
      </Element>
    ) : null
  }

  return null
}

export const RenderBlocks = ({
  data,
}: {
  data: GetPostBySlugQuery
}): JSX.Element => {
  const nodes = React.useMemo(
    () =>
      parseDOM(data?.post?.content)
        .map((node, index) =>
          transform({ node, wrapText: true, index, level: 0 }),
        )
        .filter(Boolean),
    [data],
  )

  return (
    <Box sx={{ width: '3/4', mx: 'auto' }}>
      <ErrorBoundary onError={console.log}>
        <Text>ok</Text>
        {nodes?.map((Node) => Node)}
      </ErrorBoundary>
    </Box>
  )
}
