import React from 'react'
import { Flex } from 'src/components/Grid'
import { Text } from 'src/components/primitives/Text'
import { Box } from 'src/components/primitives/Box'
import { format } from 'date-fns'
import { Layout } from 'src/components/Layout'
import { UniversalLink } from 'src/components/UniversalLink'

type TopLinkProps = {
  link: string
}
const TopLink: React.FC<TopLinkProps> = ({ link, ...props }: TopLinkProps) => (
  <Box ml="1">
    <UniversalLink
      sx={{ color: 'white' }}
      routeName={link}
      as={Text}
      {...props}
    />
  </Box>
)

export const TopBar: React.FC = () => {
  const now = format(new Date(), 'EEEE, LLLL M, y')
  return (
    <Box sx={{ bg: 'black' }}>
      <Layout>
        <Flex sx={{ width: 'full', flexDirection: 'row', height: '40hpx' }}>
          <Box sx={{ width: { xs: '1/12', lg: '1/12' } }}>
            <Box
              sx={{
                alignContent: 'flex-start',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  justifyContent: 'center',
                  alignItems: 'baseline',
                  flexDirection: 'row',
                }}
              >
                <TopLink link="http://google.fr">Test</TopLink>
                <TopLink link="http://google.fr">Test</TopLink>
                <TopLink link="http://google.fr">Test</TopLink>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: '1/2',
              flexGrow: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              sx={{
                m: 'auto',
                color: 'white',
                fontFamily: 'heading',
                fontWeight: 400,
                fontSize: '0',
                align: 'center',
              }}
            >
              {now}
            </Text>
          </Box>
          <Box
            sx={{
              width: { xs: '1/12', lg: '1/12' },
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
          >
            <Text sx={{ color: 'white' }}>Linked</Text>
          </Box>
        </Flex>
      </Layout>
    </Box>
  )
}
