// jsx
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import PropTypes from 'prop-types'

const ButtonDefault = (props) => css`
  width: 120px;
  height: 30px;
  font-size: 14px;
  font-weight: 500;
  color: white;
  background-color: black;
  pointer-events: ${props.isDisable ? 'none' : 'auto'};
`
const PrimaryButton = styled.div`
  ${ButtonDefault};
  font-weight: bold;
  background-color: green;
  border-radius: 10px;
`
const BigButton = styled.div`
  ${ButtonDefault};
  width: 200px;
  height: 50px;
`
function MyButton() {
  // return <PrimaryButton isDisable={true}>Button</PrimaryButton>
  return <BigButton isDisable={true}>Button</BigButton>
}

MyButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'warning', 'error']),
  size: PropTypes.oneOf(['big', 'small']),
  isDisable: PropTypes.bool
}
export default MyButton
