import {HeaderStyled, Logo, HeaderTitle, HeaderLink, HeaderTitles} from "./Header.styled.js";

function Header() {
    return (
        <>
            <HeaderStyled>
                <Logo>
                    <img src="/src/assets/images/logo.svg" alt="logo" style={{height: "18px"}}/>
                </Logo>
                <HeaderTitles>
                    <HeaderTitle>Application</HeaderTitle>
                    <HeaderLink>Fill in later</HeaderLink>
                </HeaderTitles>
            </HeaderStyled>
        </>
    )
}

export default Header;
