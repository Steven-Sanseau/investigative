import React from 'react'
import { H1, H4, Caps } from 'src/components/Typography'
import { Box } from 'src/components/Box'
import { UniversalLink } from 'src/components/UniversalLink'
import { Text } from 'src/components/Text'
import { Layout } from 'src/components/Layout'
import { HR } from 'src/components/Elements'
import gql from 'graphql-tag'
import { Query } from '@apollo/react-components'
import DayNightSwitch from 'src/components/DayNigthSwitch'
import { useTheme } from 'src/contexts/theme'

const SETTINGS = gql`
  {
    settings: generalSettings {
      title
    }
    pages: pages {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`

export function Header() {
  const theme = useTheme()
  const switchTheme = React.useCallback(
    () => theme.setThemeName(theme.name === 'dark' ? 'light' : 'dark'),
    [theme.name],
  )
  console.log('theme ', theme)
  return (
    <Query query={SETTINGS} fetchPolicy="cache-and-network">
      {({ data }) => (
        <Box width="full">
          <Box display="flex" flexDirection="row" justifyContent="flex-start">
            <Layout mx="auto" width="960">
              <Box mx="auto">
                <UniversalLink
                  routeName="home"
                  web={{
                    path: ``,
                  }}
                >
                  <H1>{data?.settings.title}</H1>
                </UniversalLink>
              </Box>
              <HR width="full" height="1" />
              <Box my={2}>
                {data?.pages?.edges?.map(({ node: page }, i) => (
                  <UniversalLink
                    key={i}
                    routeName="page"
                    params={{ slug: page.slug }}
                    web={{
                      path: `/page/[slug]`,
                      as: `/page/${page.slug}`,
                    }}
                  >
                    <H4>
                      <Caps>{page.title}</Caps>
                    </H4>
                  </UniversalLink>
                ))}
                <DayNightSwitch value={theme.name} onChange={switchTheme} />
              </Box>
            </Layout>
          </Box>
        </Box>
      )}
    </Query>
  )
}
