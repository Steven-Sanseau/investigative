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
  home: {
    posts: {
      loadMore: 'More',
      noMore: 'End',
    },
  },
  author: {
    postList: {
      writtenBy: 'Written by {{name}}:',
    },
  },
  loading: '...',
}
