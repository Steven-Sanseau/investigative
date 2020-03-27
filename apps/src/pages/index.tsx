import React from 'react'
import { Home } from 'src/screens/Home'
import { Index } from 'src/Index'
import { getPosts, getPages } from 'src/api/ghost'

export async function getStaticProps() {
  const posts = await getPosts()
  const pages = await getPages()
  return { props: { posts, pages } }
}

export default ({ posts, pages }) => {
  return (
    <Index>
      <Home posts={posts} pages={pages} />
    </Index>
  )
}
