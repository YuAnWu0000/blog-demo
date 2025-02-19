/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import PropTypes from 'prop-types'

const buttonDefaultCSS = {
  width: '120px',
  height: '30px',
  fontSize: '18px',
  fontWeight: 500,
  textAlign: 'center',
  lineHeight: '30px',
  boxShadow: 'rgba(0, 0, 0, 0.1) 2px 2px 5px, rgba(0, 0, 0, 0.1) 1px 1px 3px'
}
const variantButtonCSS = {
  primary: {
    ...buttonDefaultCSS,
    fontWeight: 'bold',
    backgroundColor: 'green',
    borderRadius: '10px'
  }
}
const sizeButtonCSS = {
  big: {
    width: '200px',
    height: '50px',
    lineHeight: '50px'
  }
}
const disableCSS = {
  pointerEvents: 'none',
  backgroundColor: 'gray'
}

function MyButton({ variant, size, isDisable, isHidden, color, className }) {
  const buttonStyles = css({
    ...variantButtonCSS[variant],
    ...sizeButtonCSS[size],
    ...(isDisable ? disableCSS : null),
    display: `${isHidden ? 'none' : 'block'}`,
    color,
    ...className
  })
  return <div css={buttonStyles}>Button</div>
}

MyButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'warning', 'error']),
  size: PropTypes.oneOf(['big', 'small']),
  isDisable: PropTypes.bool,
  isHidden: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string
}
export default MyButton
