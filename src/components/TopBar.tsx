import React from 'react'
import { Flex } from 'src/components/Grid'
import { Text } from 'src/components/Text'
import { Box } from 'src/components/Box'
import { format } from 'date-fns'
import { Layout } from 'src/components/Layout'

export const TopBar: React.FC = () => {
  const now = format(new Date(), 'EEEE, LLLL M, y')
  return (
    <Box bg="black">
      <Layout>
        <Flex width="full" flexDirection="row">
          <Box width={{ xs: '1/12', lg: '1/12' }}>
            <Box alignContent="flex-start">
              <Flex
                justifyContent="space-start"
                alignItems="baseline"
                flexDirection="row"
              >
                <Text color="white">Link</Text>
                <Box ml="1">
                  <Text color="white">Link</Text>
                </Box>
                <Box ml="1">
                  <Text color="white">Link</Text>
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box
            width="1/2"
            flexGrow={1}
            alignItems="center"
            justifyContent="center"
          >
            <Text
              m="auto"
              color="white"
              fontFamily="heading"
              fontWeight="heading"
              fontSize="0"
              align="center"
            >
              {now}
            </Text>
          </Box>
          <Box
            width={{ xs: '1/12', lg: '1/12' }}
            alignItems="flex-end"
            justifyContent="flex-end"
          >
            <Text color="white">Linked</Text>
          </Box>
        </Flex>
      </Layout>
    </Box>
  )
}
