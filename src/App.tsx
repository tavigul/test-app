// import { CssBaseline, Paper, Box } from "@material-ui/core";
import LinearStepper from "./LinearStepper";
import GlobalStyles from "./styles/GlobalStyles";
import { Container } from "./styles/Container.styled"

function App() {
    return (
        <>
            <GlobalStyles />
            {/*<CssBaseline />*/}
            {/*<Container component={Box}>*/}
                {/*<Paper component={Box}>*/}
            <Container>
                <LinearStepper />
            </Container>
                {/*</Paper>*/}
            {/*</Container>  */}
        </>
    );
}

export default App;
