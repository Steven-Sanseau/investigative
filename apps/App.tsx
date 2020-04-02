import React from 'react'
import { enableScreens } from 'react-native-screens'
enableScreens()

import { Index } from 'src/Index'
import Navigation from 'src/navigations/Home'
import { withApollo } from 'src/apollo/client'

export default withApollo(function Main() {
  return (
    <Index>
      <Navigation />
    </Index>
  )
})
