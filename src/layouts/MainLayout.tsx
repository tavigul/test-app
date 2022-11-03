import React, {FC, ReactNode} from "react";
import {Container} from "./Container.styled"
import Header from "../components/Header/Header";

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
