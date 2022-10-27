import styled, {css} from "styled-components";


export const buttonBaseStyles = css`
  height: 35px;
  border-radius: 20px;
  font-size: 13px;
  font: normal normal normal 16px/20px;
  padding: 10px 25px;
  border: none;
  background: transparent;
  
  :hover {
    cursor: pointer;
  }
`;

export const PrimaryButton = styled.button`
  ${buttonBaseStyles};
  background-color: #2B64F5;
  color: #ffffff;
`;

export const OutlinedButton = styled.button`
  ${buttonBaseStyles};
  background-color: transparent;
  color: #2B64F5;
  border: 1px solid #2B64F5;
`;
