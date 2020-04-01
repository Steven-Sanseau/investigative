import React from 'react'
import { Switch } from 'react-native-gesture-handler'
import { Box } from 'src/components/Box'
import styled from 'styled-components/native'

const Wrapper = styled(Box)`
  /* transition-duration: 200ms; */
`

function DayNightSwitch({ value, onChange }) {
  return (
    <>
      <Switch value={value === 'light'} onValueChange={onChange}></Switch>
      <Wrapper onClick={onChange}></Wrapper>
    </>
  )
}

export default DayNightSwitch
