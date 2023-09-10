import PropTypes from 'prop-types'
import './InputField.scss'

const InputField = ({ type, hint }) => {
  return (
    <input className='text-field' type={type} placeholder={hint} />
  )
}

export default InputField

InputField.propTypes = {
  type: PropTypes.string,
  hint: PropTypes.string
}