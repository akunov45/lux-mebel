
import styled from "styled-components"

const StyledTextArea = styled.textarea`
width: 100%;
resize: none;
border: 1px solid #e6e6e6;
background-color: #f9f9f9;
box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.07);
outline: none;
padding: 15px;
`

const TextArea = () => {
  return (
    <StyledTextArea name="" id="" cols="30" rows="10" />
  )
}

export default TextArea