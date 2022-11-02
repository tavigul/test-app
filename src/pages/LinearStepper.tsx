import React, {useState} from "react";
import Agreement from "../components/AgreementComponents/Agreement";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {Form, FormButtons, Wrapper} from "../components/FormComponents/Form";
import {PrimaryButton, OutlinedButton} from "../styles/Button";
import {
    useForm,
    FormProvider,
} from "react-hook-form";
import CompanyForm from "../components/FormComponents/CompanyForm";
import ContactPerson from "../components/FormComponents/ContactPersonForm";

function getSteps() {
    return [
        "Product and Amount",
        "Company",
    ];
}

const LinearStepper = () => {
    function getStepContent(step: number) {
        switch (step) {
            case 0:
                return <CompanyForm/>;
            case 1:
                return <ContactPerson/>;
            case 2:
                return <Agreement/>;
            default:
                return "unknown step";
        }
    }

    const methods = useForm({
        defaultValues: {
            companyCode: "",
            companyName: "",
            countryRegistration: "",
            name: "",
            surname: "",
            jobTitle: "",
            email: "",
            countryCode: "",
            phone: ""
        },
    });

    const {handleSubmit} = methods;

    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const handleNext = (data: any) => {
        setActiveStep(activeStep + 1);
        console.log("handleNext data", data);
    };
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    return (
        <Wrapper>
            <Stepper alternativeLabel activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    return (
                        <Step {...stepProps} key={index}>
                            <StepLabel {...labelProps}>{step}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <>
                <FormProvider  {...methods}>
                    <Form onSubmit={handleSubmit(handleNext)}>
                        {getStepContent(activeStep)}
                        <FormButtons>
                            <OutlinedButton
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                type="button"
                            >
                                Back
                            </OutlinedButton>
                            <PrimaryButton
                                type="submit"
                            >
                                {activeStep === steps.length - 1 ? "Finish" : "Next"}
                            </PrimaryButton>
                        </FormButtons>
                    </Form>
                </FormProvider>
            </>
        </Wrapper>
    );
};

export default LinearStepper;
