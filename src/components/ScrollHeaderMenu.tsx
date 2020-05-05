import * as React from 'react'
import { HeaderMenu as Menu } from './HeaderMenu'
import { ScrollView } from 'react-native'

export const HeaderMenu: React.FC = () => {
  return (
    <ScrollView>
      <Menu />
    </ScrollView>
  )
}
