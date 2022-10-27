import styled from "styled-components";

export const Form = styled.form`
   background-color: white;
  max-width: 42%;
  width: 100%;
  margin-right: 25%;
  padding: 16px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .MuiPaper-root {
    background-color: transparent;
  }
  .MuiStepLabel-root.MuiStepLabel-alternativeLabel {
    flex-direction: row;
  }
`

export const FormFieldsWrapper = styled.div`
  margin: 40px 40px 20px 40px;
`

export const FormTitle = styled.h5`
  font-size: 18px;
  font-weight: 500;
`
export const FormBody = styled.div`
  padding: 40px 40px 10px 40px;
`
export const FormButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 40px 84px 40px;
`

export const ScrollContainer = styled.div`
  overflow: scroll;
  max-height: 500px;
  height: 100%;
  margin: 40px;
`

export const AgreementText = styled.p`
  font-size: 13px;
  letter-spacing: 0;
  color: #B2B2B2;
  opacity: 1;
  font: normal normal normal 16px/20px Inter "sans-serif";
  padding-bottom: 20px;
  padding-right: 10px;
`

export const AgreementTextCheckbox = styled.p`
  font-size: 12px;
  letter-spacing: 0;
  color: #B2B2B2;
  opacity: 1;
  padding-left: 10px;
`

export const LinkText = styled.a`
  color: #2B64F5;
`


