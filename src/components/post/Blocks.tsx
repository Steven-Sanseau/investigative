import React from 'react'
import { H2, H1, H3, H4, H5, H6 } from 'src/components/Typography'
import { UL, LI } from 'src/components/Elements'
import { HR } from '@expo/html-elements'
import { Text } from 'src/components/Text'
import { GetPostBySlugQuery } from 'src/generated/graphql'

function cleanContent(content: string): string {
  return content.replace(/<\/?[^>]+(>|$)/g, '')
}

function GetComponentHeading({
  level,
  ...props
}: {
  level: number
  children: any
}): JSX.Element {
  switch (level) {
    case 1:
      return <H1 {...props} />
    case 2:
      return <H2 {...props} />
    case 3:
      return <H3 {...props} />
    case 4:
      return <H4 {...props} />
    case 5:
      return <H5 {...props} />
    case 6:
      return <H6 {...props} />
  }
}

function CoreHeadingBlock({
  attributes: { level, content },
}: {
  attributes: { level: number; content: string }
}): JSX.Element {
  return (
    <GetComponentHeading level={level}>
      {cleanContent(content)}
    </GetComponentHeading>
  )
}

function CoreQuoteBlock() {
  return <></>
}

function CoreSeparatorBlock() {
  return <HR />
}

function CoreListBlock({
  attributes: { values },
}: {
  attributes: { level: number; values: string }
}): JSX.Element {
  const elements = values.split('</li>')

  return (
    <UL>
      {elements?.map((element) => (
        <LI>{cleanContent(element)}</LI>
      ))}
    </UL>
  )
}

function CoreParagraphBlock({
  attributes: { content },
}: {
  attributes: { content: string }
}): JSX.Element {
  return <Text>{cleanContent(content)}</Text>
}

const render = {
  CoreListBlock,
  CoreHeadingBlock,
  CoreSeparatorBlock,
  CoreParagraphBlock,
}

export const RenderBlocks = ({
  data,
}: {
  data: GetPostBySlugQuery
}): JSX.Element => {
  return (
    <>
      {data?.post?.blocks.map((block, i) => {
        const Component = render[block.__typename]

        if (!Component) {
          return null
        }
        return <Component {...block} key={i} />
      })}
    </>
  )
}
