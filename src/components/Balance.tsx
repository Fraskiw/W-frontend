import React, { useEffect, useRef } from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'
import { Text } from '@pancakeswap-libs/uikit'

interface TextProps {
  isDisabled?: boolean
  fontSize?: string
  color?: string
}

interface BalanceProps extends TextProps {
  value?: number
  decimals?: number
  unit?: string
}

const StyledText = styled(Text)<TextProps>`
  color: ${({ isDisabled, color, theme }) => (isDisabled ? theme.colors.textDisabled : color)};
`

const Balance: React.FC<BalanceProps> = ({ value, fontSize, color, decimals, isDisabled, unit }) => {
  const previousValue = useRef(0)
  let dec = decimals
  if (value > 0 && value < 0.001) {
    dec = 9
  }
  useEffect(() => {
    previousValue.current = value
  }, [value])

  return (
    <StyledText bold color={color} fontSize={fontSize} isDisabled={isDisabled}>
      <CountUp start={previousValue.current} end={value} decimals={dec} duration={1} separator="," />
      {value && unit && <span>{unit}</span>}
    </StyledText>
  )
}

Balance.defaultProps = {
  fontSize: '16px',
  isDisabled: false,
  color: 'text',
  decimals: 2,
}

export default Balance
