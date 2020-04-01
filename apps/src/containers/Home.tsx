import React from 'react'
import { Header } from 'src/components/Header'
import { PostList } from 'src/components/Post/List'

export function Home() {
  return (
    <>
      <Header />
      <PostList />
    </>
  )
}
