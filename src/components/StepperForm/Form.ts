import styled from "styled-components";

export const Form = styled.form`
  background-color: white;
  max-width: 42%;
  width: 100%;
  margin-right: 30%;
  padding: 16px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  @media screen and (max-width: 1024px) {
    margin-right: 0;
    max-width: 100%;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80vh;

  @media screen and (min-width: 1024px) {
    .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.MuiStepIcon-root.css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root {
      display: none;
    }

    .css-8t49rw-MuiStepConnector-line {
      display: none;
    }

    .css-1hv8oq8-MuiStepLabel-label.MuiStepLabel-alternativeLabel {
      margin: 0;
      border-color: #bdbdbd;
      border-left-style: solid;
      border-left-width: 3px;
      min-height: 39px;
      display: flex;
      align-items: center;
    }

    .css-1hv8oq8-MuiStepLabel-label.MuiStepLabel-alternativeLabel.Mui-active {
      color: #1976d2;
    }

    .css-1hv8oq8-MuiStepLabel-label.MuiStepLabel-alternativeLabel {
      padding-left: 25px;
    }

    .css-14sza3e-MuiStepLabel-root {
      padding: 1px 0;
    }
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin-right: 0;
    justify-content: space-between;
    height: 70%;
    .MuiStepper-root.MuiStepper-vertical.MuiStepper-alternativeLabel.css-11r6j1z-MuiStepper-root {
      flex-direction: row;
    }
  }
`

export const FormFieldsWrapper = styled.div`
  margin: 40px 40px 20px 40px;
  height: 100%;
  max-height: 490px;
  overflow: scroll;
  @media screen and (max-width: 1024px) {
    margin: 10px;
  }

  .MuiFormControlLabel-root.MuiFormControlLabel-labelPlacementEnd.css-j204z7-MuiFormControlLabel-root {
    margin: 0 10px 0 0;
  }

  .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root {
    padding: 0;
  }
`

export const FormTitle = styled.h5`
  font-size: 18px;
  font-weight: 500;
`

export const FormButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 40px 24px 40px;
  @media screen and (max-width: 1024px) {
    padding: 10px;
  }
`






