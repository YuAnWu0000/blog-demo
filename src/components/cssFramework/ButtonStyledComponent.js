// jsx
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import PropTypes from 'prop-types'

const ButtonDefault = (props) => css`
  width: 120px;
  height: 30px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  line-height: 30px;
  box-shadow:
    rgba(0, 0, 0, 0.1) 2px 2px 5px,
    rgba(0, 0, 0, 0.1) 1px 1px 3px;
  pointer-events: ${props.isDisable ? 'none' : 'auto'};
`
const PrimaryButton = styled.div`
  ${ButtonDefault};
  color: #313934;
  background-color: #d3a326;
  border-radius: 8px;
`
const BigButton = styled.div`
  ${ButtonDefault};
  width: 200px;
  height: 50px;
  line-height: 50px;
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
