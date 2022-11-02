import LinearStepper from "./pages/LinearStepper";
import GlobalStyles from "./styles/GlobalStyles";
import {LinearStepperWrapper} from "./styles/Container.styled"
import MainLayout from "./layouts/MainLayout";

function App() {
    return (
        <>
            <GlobalStyles/>
            <MainLayout>
                <LinearStepperWrapper>
                    <LinearStepper/>
                </LinearStepperWrapper>
            </MainLayout>
        </>
    );
}

export default App;
