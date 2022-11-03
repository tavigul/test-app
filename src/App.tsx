import LinearStepper from "./pages/LinearStepper";
import GlobalStyles from "./styles/GlobalStyles";
import MainLayout from "./layouts/MainLayout";

function App() {
    return (
        <>
            <GlobalStyles/>
            <MainLayout>
                <LinearStepper/>
            </MainLayout>
        </>
    );
}

export default App;
