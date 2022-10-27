import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 77%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

export const Logo = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
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
