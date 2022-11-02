import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 70%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`

export const Logo = styled.div`
  height: 20px;
  width: 15px;
  display: flex;
  align-items: center;
  margin-left: -15px;
  img {
    height: 18px;
  }
`

export const HeaderTitle = styled.h4`
  text-align: left;
  font-size: 20px;
  letter-spacing: 0;
  color: #000000;
  opacity: 1;
  font-weight: 500;
`

export const HeaderLink = styled.a`
  text-align: left;
  font-size: 13px;
  letter-spacing: 0;
  color: #2B64F5;
  opacity: 1;
`

export const HeaderTitles = styled.div`
  max-width: 60%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
