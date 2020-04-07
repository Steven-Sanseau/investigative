import React from 'react'
import { Grid } from 'src/components/Grid'
import { Text } from 'src/components/Text'
import { Box } from 'src/components/Box'
import { format } from 'date-fns'
import { Layout } from 'src/components/Layout'

export const TopBar: React.FC = () => {
  const now = format(new Date(), 'EEEE, LLLL M, y')
  return (
    <Box bg="black" alignItems="center">
      <Layout alignItems="center">
        <Grid
          width="full"
          alignItems="center"
          gridAutoFlow="row"
          gridGap={{ xs: 5, sm: 50, md: 100, lg: 200, xl: 400 }}
          gridTemplateColumns="repeat(3, 1fr)"
        >
          <Box
            alignItems="center"
            justifyContent="flex-start"
            flexDirection="row"
            alignContent="space-between"
          >
            <Text color="white">Link</Text>
            <Text color="white">Link</Text>
            <Text color="white">Link</Text>
          </Box>
          <Box alignItems="center" justifyContent="center">
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
          <Box alignItems="center" justifyContent="flex-end">
            <Text color="white">Linkend</Text>
          </Box>
        </Grid>
      </Layout>
    </Box>
  )
}
