import * as React from 'react'
import { Box } from './primitives/Box'
import { CategoriesList } from './CategoriesList'
import { Row, Flex } from './Grid'
import { PagesList } from './PagesList'
import { UniversalLink } from './UniversalLink'
import { H3, H4 } from './Typography'

export const HeaderMenu: React.FC = () => {
  return (
    <Flex
      sx={{
        width: { xs: 'full', lg: '10/12' },
        mx: 'auto',
        flexWrap: 'wrap',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
      }}
    >
      <Box sx={{ width: { xs: 'full', lg: '1/2' } }}>
        <CategoriesList />
      </Box>
      <Box sx={{ width: { xs: 'full', lg: '1/2' } }}>
        <PagesList />
      </Box>
      <Row sx={{ alignContent: 'flex-end', width: 'full' }}>
        <Box sx={{ width: '1/2' }}>
          <H3>Donate</H3>
          <H3>Newsletter</H3>
        </Box>
        <Box sx={{ width: '1/2' }}>
          <UniversalLink routeName="search">
            <H4>Search</H4>
          </UniversalLink>
        </Box>
      </Row>
    </Flex>
  )
}
