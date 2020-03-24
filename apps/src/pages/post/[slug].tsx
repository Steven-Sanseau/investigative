import React from 'react'
// import parse from 'rehype-parse'
// import rehype2remark from 'rehype-remark'
// import stringify from 'remark-stringify'
// import useSWR from 'swr'
// import unified from 'unified'
// import Markdown from '../../components/MarkdownRenderer'
// import { BlogPost } from '../../types'

// import { useRouting } from 'expo-next-react-navigation'
import { Post as PostScreen } from 'src/screens/Post'
import { getPostBySlug, getPosts } from 'src/api/ghost'

// export const config = { amp: true }

// interface Props {
//   post: BlogPost
// }

// function Post({ post: { html } }) {
//   const md = unified()
//     .use(parse)
//     .use(rehype2remark)
//     .use(stringify)
//     .processSync(html)
//     .toString()

//   return <Markdown>{md}</Markdown>
// }

// // PostPage page component
// export default ({ slug, post: initialData }) => {
//   const { data: post } = useSWR(`${slug}`, getPostBySlug, {
//     initialData,
//   })

//   return (
//     <>
//       {post ? (
//         <div>
//           <h1>{post.title}</h1>
//           <Post post={post} />
//         </div>
//       ) : (
//         'NOT FOUND'
//       )}
//     </>
//   )
// }
export async function getStaticPaths() {
  const posts = await getPosts()

  return {
    fallback: true,
    paths: posts.map((post) => `/post/${post.slug}`),
  }
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug)

  if (!post || post.visibility !== 'public') {
    return {
      props: {
        redirect: '/',
        preview: false,
      },
      revalidate: 5,
    }
  }
  return { props: { post } }
}

// export async function getServerSideProps(context) {
//   const { getParam } = useRouting()
//   const slug = getParam('slug')
//   const post = await getSinglePost(context.query.slug)
//   return { props: { post } }
// }

export default function Post({ post: initialData }) {
  return <PostScreen initialData={initialData} />
}
