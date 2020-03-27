import React from 'react'
import { H1 } from 'src/components/Typography'
import { Box } from 'src/components/Box'
import { UniversalLink } from 'src/components/UniversalLink'
import { Text } from 'src/components/Text'
import { View } from 'react-native'

export function Header({ pages }) {
  return (
    <>
      <Box display="flex" flexDirection="row" justifyContent="flex-start">
        <Box>
          <H1>Investigative</H1>
          {pages?.map((page, i) => (
            <UniversalLink
              key={i}
              routeName="page"
              params={{ slug: page.slug }}
              web={{
                path: `page/${page.slug}`,
                as: `page/${page.slug}`,
              }}
              as={View}
            >
              <Text>{page.title}</Text>
            </UniversalLink>
          ))}
        </Box>
      </Box>
    </>
  )
}
