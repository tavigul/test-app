// import { CssBaseline, Paper, Box } from "@material-ui/core";
import LinearStepper from "./LinearStepper";
import GlobalStyles from "./styles/GlobalStyles";
import { Container, LinearStepperWrapper } from "./styles/Container.styled"
import Header from "./components/Header";

function App() {
    return (
        <>
            <GlobalStyles />
            {/*<CssBaseline />*/}
            {/*<Container component={Box}>*/}
                {/*<Paper component={Box}>*/}

            <Container>
                <Header />

                <LinearStepperWrapper>
                <LinearStepper />
                </LinearStepperWrapper>
            </Container>
                {/*</Paper>*/}
            {/*</Container>  */}
        </>
    );
}

export default App;
