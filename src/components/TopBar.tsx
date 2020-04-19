import React from 'react'
import { Flex } from 'src/components/Grid'
import { Text } from 'src/components/primitives/Text'
import { Box } from 'src/components/primitives/Box'
import { format } from 'date-fns'
import { Layout } from 'src/components/Layout'

export const TopBar: React.FC = () => {
  const now = format(new Date(), 'EEEE, LLLL M, y')
  return (
    <Box sx={{ bg: 'darkGray' }}>
      <Layout>
        <Flex sx={{ width: 'full', flexDirection: 'row' }}>
          <Box sx={{ width: { xs: '1/12', lg: '1/12' } }}>
            <Box sx={{ alignContent: 'flex-start' }}>
              <Box
                sx={{
                  justifyContent: 'space-start',
                  alignItems: 'baseline',
                  flexDirection: 'row',
                }}
              >
                <Text
                  sx={{
                    color: 'white',
                  }}
                >
                  Link
                </Text>
                <Box ml="1">
                  <Text
                    sx={{
                      color: 'white',
                    }}
                  >
                    Link
                  </Text>
                </Box>
                <Box
                  sx={{
                    ml: 1,
                  }}
                >
                  <Text
                    sx={{
                      color: 'white',
                    }}
                  >
                    Link
                  </Text>
                </Box>
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
                color: { xs: 'red', xl: 'grayDark' },
                fontFamily: 'heading',
                fontWeight: 'heading',
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
              justifyContent: 'flex-end',
            }}
          >
            <Text sx={{ color: 'white' }}>Linked</Text>
          </Box>
        </Flex>
      </Layout>
    </Box>
  )
}
