import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Home } from 'src/screens/Home'
import { Index } from 'src/Index'
import { getPosts } from 'src/api/ghost'

export async function getServerSideProps() {
  const posts = await getPosts()
  return { props: { posts } }
}

export default ({ posts }) => {
  return (
    <Index>
      <Home initialData={posts || null} />
    </Index>
  )
}
