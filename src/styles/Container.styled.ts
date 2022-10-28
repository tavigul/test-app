import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`

export const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 16px 110px 16px;
  width: 620px;
  border-radius: 15px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  overflow: scroll;
  height: fit-content;
  max-height: 80%;
`;

export const LinearStepperWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`

