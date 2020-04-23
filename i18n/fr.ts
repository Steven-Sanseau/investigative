const plural = (count, values) => {
  if (count === 0) return values['zero'] || values['other']
  if (count === 1) return values['one'] || values['other']
  return values['other']
}

export default {
  footer: { terms: '© {{now}} Touts droits réservés' },
  growl: {
    title: {
      success: 'Success',
      info: 'Info',
      error: 'Error',
    },
    message: {
      refreshPost: 'Le post à été mis à jour',
      refreshPosts: 'Mis a jour',
    },
  },
  home: {
    posts: {
      loadMore: 'Plus',
      noMore: 'Fin',
    },
  },
  loading: '...',
}
