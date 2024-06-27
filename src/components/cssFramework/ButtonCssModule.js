import PropTypes from 'prop-types'

// jsx
function MyButton({ variant, size, status, isHidden, color, className }) {
  return (
    <div
      className={`button button-${variant} button-${size} button-${status}
        ${isHidden ? 'hidden' : ''} ${className}`}
      style={{ color }}
    >
      Button
    </div>
  )
}

MyButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'warning', 'error']),
  size: PropTypes.oneOf(['big', 'small']),
  status: PropTypes.oneOf(['disable']),
  isHidden: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string
}
export default MyButton
