import React, {useState, useMemo} from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import {FormProvider, useForm} from "react-hook-form";
import {Form, FormButtons} from "./Form";
import {OutlinedButton, PrimaryButton} from "../Button/Button";
import CompanyForm from "./CompanyForm";
import ContactPerson from "./ContactPersonForm";
import Agreement from "../AgreementComponents/Agreement";

function getSteps() {
    return [
        "Product and Amount",
        "Company",
    ];
}

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

function LinearStepperComponent() {
    const [activeStep, setActiveStep] = useState(0);

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

    const stepContent = useMemo(() => getStepContent(activeStep), [activeStep]);

    const {handleSubmit} = methods;

    const steps = getSteps();

    const handleNext = (data: { [index: string]: any }) => {
        setActiveStep(activeStep + 1);
        console.log("Multistep form data", data)
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <>
            <Stepper alternativeLabel activeStep={activeStep} orientation="vertical">
                {steps.map((step: string, index: number) => {
                    return (
                        <Step key={index}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <>
                <FormProvider  {...methods}>
                    <Form onSubmit={handleSubmit(handleNext)}>
                        {stepContent}
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
        </>
    )
}

export default LinearStepperComponent;
