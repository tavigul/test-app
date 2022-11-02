import {Container} from "../styles/Container.styled"
import Header from "../components/Header/Header";
import React, {FC, ReactNode} from "react";

interface Props {
    children: ReactNode;
}

const MainLayout: FC<Props> = ({children}) => {
    return (
        <>
            <Container>
                <Header/>
                <main>{children}</main>
            </Container>
        </>
    )
}

export default MainLayout;
