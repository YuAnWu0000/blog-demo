import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

const MyButton = ({ variant, size, isDisable, isHidden, color, className }) => {
  const defaultStyles =
    'w-[120px] h-[30px] text-[18px] text-center font-medium border border-solid shadow-[rgba(0,0,0,0.1)_2px_2px_5px,rgba(0,0,0,0.1)_1px_1px_3px]'
  const variantStyles = {
    primary:
      'text-[#313934] bg-[#d3a326] font-medium border-white rounded-[8px]',
    warning: 'bg-orange-500 font-medium border-white rounded-lg',
    error: 'bg-red-500 font-medium border-white rounded-lg'
  }
  const sizeStyles = {
    big: 'w-[200px] h-[50px] !leading-[50px] text-lg',
    small: 'w-[100px] h-[20px] !leading-[20px] text-sm'
  }
  const disableStyles = 'bg-gray-500 pointer-events-none'
  let totalStyles = twMerge(
    defaultStyles,
    variantStyles[variant] ? variantStyles[variant] : '',
    sizeStyles[size] ? sizeStyles[size] : '',
    isDisable ? disableStyles : '',
    isHidden ? 'hidden' : '',
    `text-${color}-500`,
    className
  )
  return <div className={totalStyles}>Button</div>
}
MyButton.propTypes = {
  variant: PropTypes.oneOf(['', 'primary', 'secondary', 'warning']),
  size: PropTypes.oneOf(['', 'big', 'small']),
  isDisable: PropTypes.bool,
  isHidden: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string
}
export default MyButton
