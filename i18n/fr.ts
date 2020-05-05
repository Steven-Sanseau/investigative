const plural = (count, values) => {
  if (count < 2) return values['one'] || values['other']
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
  posts: {
    author: 'par {{name}}',
    loadMore: 'Plus',
    noMore: 'Fin',
    noResult: 'Aucun Article',
  },
  author: {
    postList: {
      writtenBy: 'Articles écrits par {{name}}:',
    },
  },
  comment: {
    input: {
      email: 'Adresse Email',
      name: 'Nom',
      content: 'Commentaire',
    },
    form: {
      notSend:
        'Un problème est survenue avec votre commentaire, veuillez réessayer',
      success: 'Votre commentaire à bien été posté',
    },
  },
  loading: '...',
  menu: {
    button: 'Menu',
    close: 'Fermer',
    search: 'Recherche',
    donate: 'Faire un don',
    newsletter: 'Newsletter',
    signin: 'Connexion',
  },
}
