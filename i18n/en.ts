const plural = (count, values) => {
  if (count === 0) return values['zero'] || values['other']
  if (count % 10 === 1 && count % 100 !== 11) {
    if (count === 1)
      return values['ord-one'] || values['one'] || values['other']
    return values['ord-one'] || values['other']
  }
  if (count % 10 === 2 && count % 100 !== 12)
    return values['ord-two'] || values['other']
  if (count % 10 === 3 && count % 100 !== 13)
    return values['ord-three'] || values['other']

  return values['other']
}

export default {
  footer: {
    terms: '© {{now}} All rights reserved',
    plural: ({ count }) =>
      plural(count, {
        one: '© {{now}} All rights reserved',
        zero: '',
        other: '',
      }),
  },
  growl: {
    title: {},
    message: {
      refreshPost: 'This post has been updated',
      refreshPosts: 'Updated',
    },
  },
  posts: {
    loadMore: 'More',
    noMore: 'End',
    noResult: 'No Post',
  },
  author: {
    postList: {
      writtenBy: 'Written by {{name}}:',
    },
  },
  comment: {
    input: {
      email: 'Email address',
      name: 'Name',
      content: 'Comment',
    },
    form: {
      notSend: 'Comment failed to post',
      success: 'Your comment has been posted',
    },
  },
  loading: '...',
  menu: {
    button: 'Menu',
    close: 'Close',
    donate: 'Donate',
    search: 'Search',
    newsletter: 'Newsletter',
    signin: 'Sign in',
  },
}
