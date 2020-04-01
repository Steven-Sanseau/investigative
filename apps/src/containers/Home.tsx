import React from 'react'
import { PostList } from 'src/components/Post/List'
import { Header } from 'src/components/Header'

export function Home() {
  return (
    <>
      <Header />
      <PostList />
    </>
  )
}
