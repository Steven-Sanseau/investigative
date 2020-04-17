import React from 'react'
import { Footer as EFooter } from '@expo/html-elements'
import { styled } from 'src/utils/Styled'
import { Responsive } from 'src/utils/Responsive'
import { Text } from 'src/components/Text'
import { Box } from 'src/components/Box'
import { Layout } from 'src/components/Layout'
import { T, useI18n } from 'src/contexts/I18n'

const WrappedFooterLinks = styled(Box)`
  display: grid;
  grid-auto-flow: column;
`

const FooterWrapper = ({ ...props }) => (
  <Responsive component={EFooter} {...props} />
)

export function Footer() {
  const { setLocale } = useI18n()
  const changeLangue = React.useCallback(() => {
    return setLocale('en')
  }, [])
  return (
    <FooterWrapper bg="gray.1">
      <Layout>
        <WrappedFooterLinks
          gridTemplateRows={{ xs: 'repeat(8, 32px)', lg: 'repeat(4, 32px)' }}
          gridTemplateColumns={{
            xs: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          borderStyle="solid"
          borderColor="dark"
        >
          <Text>Home</Text>
          <Text>Work</Text>
          <Text>Blog</Text>
          <Text>About</Text>
          <Text>Products</Text>
          <Text>Community</Text>
          <Text>Support</Text>
          <Text>Contact</Text>
          <Text>Support</Text>
          <Text>Products</Text>
          <Text>Contact</Text>
          <Text>Community</Text>
          <Text>Products</Text>
          <Text>Community</Text>
          <Text>Support</Text>
          <Text>Contact</Text>
        </WrappedFooterLinks>
        <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
          <Box>
            <Text onPress={changeLangue}>Privacy Policy Terms of Use</Text>
            <T id="footer.terms" />
          </Box>
        </Box>
      </Layout>
    </FooterWrapper>
  )
}
