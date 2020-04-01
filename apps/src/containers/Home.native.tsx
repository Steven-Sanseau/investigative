import React from 'react'
import { PostList } from 'src/components/Post/List'
import { CollapsibleHeader } from 'src/components/ScrollHeader'

export function Home() {
  return (
    <CollapsibleHeader>
      <PostList />
    </CollapsibleHeader>
  )
}
