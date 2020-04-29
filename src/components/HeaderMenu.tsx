import * as React from 'react'
import { Box } from './primitives/Box'
import { CategoriesList } from './CategoriesList'
import { Row } from './Grid'
import { PagesList } from './PagesList'
import { UniversalLink } from './UniversalLink'
import { H3 } from './Typography'

interface HeaderMenuProps {}

export const HeaderMenu: React.FC<HeaderMenuProps> = (
  props: HeaderMenuProps,
) => {
  return (
    <Row sx={{ width: { xs: 'full', lg: '10/12' }, mx: 'auto' }}>
      <Box sx={{ width: { xs: 'full', lg: '1/2' } }}>
        <CategoriesList />
        <Box sx={{ alignContent: 'flex-end' }}>
          <H3>Donate</H3>
          <H3>Newsletter</H3>
        </Box>
      </Box>
      <Box sx={{ width: { xs: 'full', lg: '1/2' } }}>
        <PagesList />
        <Box sx={{ alignContent: 'flex-end' }}>
          <UniversalLink routeName="search">
            <H3>Search</H3>
          </UniversalLink>
        </Box>
      </Box>
    </Row>
  )
}
