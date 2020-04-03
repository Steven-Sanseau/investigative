import React from 'react'
import { withApollo } from 'src/apollo/client'
import { Box } from 'src/components/Box'
import DayNightSwitch from 'src/components/DayNigthSwitch'
import { useTheme } from 'src/contexts/theme'

function Settings() {
  const theme = useTheme()
  const switchTheme = React.useCallback(
    () => theme.setThemeName(theme.name === 'dark' ? 'light' : 'dark'),
    [theme],
  )
  return (
    <Box>
      <DayNightSwitch value={theme.name} onChange={switchTheme} />
    </Box>
  )
}

export default withApollo(Settings)
