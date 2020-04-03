import React from 'react'
import { Footer as EFooter } from '@expo/html-elements'
import { styled } from 'src/utils/Styled'
import { Responsive } from 'src/utils/Responsive'
import { Text } from 'src/components/Text'
import { Box } from 'src/components/Box'
import { Layout } from 'src/components/Layout'

const WrappedFooterLinks = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  /* grid-template-rows: repeat(4, 32px); */
`

const FooterWrapper = ({ ...props }) => (
  <Responsive component={EFooter} {...props} />
)

export function Footer() {
  return (
    <FooterWrapper bg="gray.1">
      <Layout>
        <WrappedFooterLinks
          gridTemplateRows={{ xs: 'repeat(8, 32px)', lg: 'repeat(4, 32px)' }}
          gridTemplateColumns={{
            xs: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          borderTop="5px"
          borderStyle="solid"
          borderColor="dark"
        >
          <Text to="/" sx={{ variant: 'styles.navlink', p: 2 }}>
            Home
          </Text>
          <Text to="/work" sx={{ variant: 'styles.navlink', p: 2 }}>
            Work
          </Text>
          <Text to="/blog" sx={{ variant: 'styles.navlink', p: 2 }}>
            Blog
          </Text>
          <Text to="/about" sx={{ variant: 'styles.navlink', p: 2 }}>
            About
          </Text>
          <Text to="/products" sx={{ variant: 'styles.navlink', p: 2 }}>
            Products
          </Text>
          <Text to="/community" sx={{ variant: 'styles.navlink', p: 2 }}>
            Community
          </Text>
          <Text to="/support" sx={{ variant: 'styles.navlink', p: 2 }}>
            Support
          </Text>
          <Text to="/contact" sx={{ variant: 'styles.navlink', p: 2 }}>
            Contact
          </Text>
          <Text to="/support" sx={{ variant: 'styles.navlink', p: 2 }}>
            Support
          </Text>
          <Text to="/products" sx={{ variant: 'styles.navlink', p: 2 }}>
            Products
          </Text>
          <Text to="/contact" sx={{ variant: 'styles.navlink', p: 2 }}>
            Contact
          </Text>
          <Text to="/community" sx={{ variant: 'styles.navlink', p: 2 }}>
            Community
          </Text>
          <Text to="/products" sx={{ variant: 'styles.navlink', p: 2 }}>
            Products
          </Text>
          <Text to="/community" sx={{ variant: 'styles.navlink', p: 2 }}>
            Community
          </Text>
          <Text to="/support" sx={{ variant: 'styles.navlink', p: 2 }}>
            Support
          </Text>
          <Text to="/contact" sx={{ variant: 'styles.navlink', p: 2 }}>
            Contact
          </Text>
        </WrappedFooterLinks>
        <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
          <Box>
            <Text to="/privacy-policy" sx={{ color: 'inherit' }}>
              Privacy Policy Terms of Use
            </Text>
            <Text>© 2019 Jane Doe</Text>
          </Box>
        </Box>
      </Layout>
    </FooterWrapper>
  )
}
