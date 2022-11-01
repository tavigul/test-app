import LinearStepper from "./LinearStepper";
import GlobalStyles from "./styles/GlobalStyles";
import {Container, LinearStepperWrapper} from "./styles/Container.styled"
import Header from "./components/Header/Header";

function App() {
    return (
        <>
            <GlobalStyles/>
            <Container>
                <Header/>
                <LinearStepperWrapper>
                    <LinearStepper/>
                </LinearStepperWrapper>
            </Container>
        </>
    );
}

export default App;
