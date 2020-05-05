import React, { ReactElement } from 'react'
import { Text } from 'src/components/primitives/Text'
import { Box, BoxProps } from 'src/components/primitives/Box'
import { Layout } from 'src/components/Layout'
import { T, useI18n } from 'src/contexts/I18n'
import { useTheme } from 'src/contexts/theme'

const WrappedFooterLinks: React.FC<BoxProps> = ({
  sx,
  ...props
}: BoxProps): ReactElement => (
  <Box sx={{ ...sx, display: 'grid', gridAutoFlow: 'column' }} {...props} />
)

export function Footer(): ReactElement {
  const { setLocale } = useI18n()
  const { setThemeName, name: theme } = useTheme()
  const changeLangue = React.useCallback(() => {
    return setLocale('en')
  }, [setLocale])

  return (
    <Box
      sx={{
        bg: 'footerGray',
        boxShadow: 'topxs',
        p: 4,
      }}
    >
      <Layout>
        <WrappedFooterLinks
          sx={{
            gridTemplateRows: { xs: 'repeat(8, 32px)', lg: 'repeat(4, 32px)' },
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            borderStyle: 'solid',
            borderColor: 'dark',
          }}
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
        >
          <Box>
            <Text
              onPress={() => setThemeName(theme === 'dark' ? 'light' : 'dark')}
            >
              Use {theme === 'dark' ? 'light' : 'dark'} Theme
            </Text>
            <Text onPress={changeLangue}>Privacy Policy Terms of Use</Text>
            <T id="footer.terms" />
          </Box>
        </Box>
      </Layout>
    </Box>
  )
}
