import GhostContentAPI from '@tryghost/content-api'

// const api = new GhostContentAPI({
//   url: process.env.GHOST_API_URL,
//   key: process.env.GHOST_API_KEY,
//   version: 'v3',
// })
const api = GhostContentAPI({
  url: 'http://64.227.39.106',
  key: 'ad471ca29e20e8369087155235',
  version: 'v3',
})

export async function getPosts() {
  return await api.posts
    .browse({ limit: 'all', include: 'tags,authors' })
    .catch((err) => {
      // console.error(err)
    })
}

export async function getFeaturedPosts() {
  return await getPosts()
}

export async function getPostBySlug(slug) {
  return await api.posts

    .read({
      slug,
    })
    .catch((err) => {
      // console.error('Error getting post by slug: ', slug)
    })
}

export async function getPages() {
  return await api.pages.browse({ filter: 'featured:true' })
}

export async function getPageBySlug(slug) {
  return await api.pages
    .read({
      slug,
    })
    .catch((err) => {
      // console.error('Error getting post by slug: ', slug)
    })
}
