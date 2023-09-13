import styled from "styled-components";

export const Button = styled.button`
  padding: 12px 50px;
  background-color: ${props => props.$bgColor || "#245462"};
  color: ${props => props.$color || "#fff"};
  border: none;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  box-shadow: ${({ shadow }) => { shadow ? "0px 2px 4px 0px rgba(0, 0, 0, 0.07)" : "" }};
  @media screen and (max-width: 425px) {
    padding: 9px 30px;
  }
`;

