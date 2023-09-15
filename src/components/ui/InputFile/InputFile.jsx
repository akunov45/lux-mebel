import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledInputFile = styled.input`
display: none;
`

const InputFile = ({ id }) => {
  return (
    <StyledInputFile id={id} type='file' />
  )
}

export default InputFile

InputFile.propTypes = {
  id: PropTypes.string
}