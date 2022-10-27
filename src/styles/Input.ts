import styled from "styled-components";

export const Input = styled.input`
  background-color: transparent;
  font-size: 16px;
  padding: 10px;
  margin: 13px 0;
  border: 1px solid #CCCCCC;
  border-radius: 8px;
  opacity: 1;
  width: 100%;
  font: normal normal normal 16px/20px;
  height: 50px;

  ::placeholder {
    color: black;
  }

  :focus {
    background-color: #D9D9D9;
  }
`
