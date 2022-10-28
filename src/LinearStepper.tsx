// import * as  from 'react';
import React, {useState} from "react";
import AgreementText from "./components/Agreement";
import  TextField  from '@mui/material/TextField';
import  Typography  from '@mui/material/Typography';
import  Stepper  from '@mui/material/Stepper';
import  Step  from '@mui/material/Step';
import  StepLabel  from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import {Form, FormButtons, FormTitle, FormFieldsWrapper, Wrapper} from "./styles/Form";
import {PrimaryButton, OutlinedButton} from "./styles/Button";
import {
    useForm,
    Controller,
    FormProvider,
    useFormContext,
} from "react-hook-form";

function getSteps() {
    return [
        "Product and Amount",
        "Company",
        "Contact person"
    ];
}

const CompanyForm = () => {
    const {control} = useFormContext();
    return (
        <>
            <FormTitle>Company</FormTitle>
            <FormFieldsWrapper>
                <Controller
                    control={control}
                    name="companyCode"
                    render={({field}) => (
                        <TextField
                            size="small"
                            id="companyCode"
                            label="Company code"
                            variant="outlined"
                            placeholder="Company code"
                            fullWidth
                            {...field}
                            margin="dense"
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="companyName"
                    render={({field}) => (
                        <TextField
                            size="small"
                            id="companyName"
                            label="Company name"
                            variant="outlined"
                            placeholder="Company name"
                            fullWidth
                            {...field}
                            margin="dense"
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="companyRegistration"
                    render={({field}) => (
                        <TextField
                            size="small"
                            id="companyRegistration"
                            label="Company of registration"
                            variant="outlined"
                            placeholder="Company of registration"
                            fullWidth
                            {...field}
                            margin="dense"
                        />
                    )}
                />
            </FormFieldsWrapper>

        </>
    );
};
const ContactPersonForm = () => {
    const {control} = useFormContext();
    return (
        <>
            <FormTitle>Company</FormTitle>
            <FormFieldsWrapper>
                <Controller
                    control={control}
                    name="name"
                    render={({field}) => (
                        <TextField
                            size="small"
                            id="name"
                            label="Name"
                            variant="outlined"
                            placeholder="Name"
                            fullWidth
                            {...field}
                            margin="dense"
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="surname"
                    render={({field}) => (
                        <TextField
                            size="small"
                            id="surname"
                            label="Surname"
                            variant="outlined"
                            placeholder="Surname"
                            fullWidth
                            {...field}
                            margin="dense"
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="jobTitle"
                    render={({field}) => (
                        <TextField
                            size="small"
                            id="jobTitle"
                            label="Job title"
                            variant="outlined"
                            placeholder="Job title"
                            fullWidth
                            {...field}
                            margin="dense"
                        />
                    )}
                />


                <Controller
                    control={control}
                    name="email"
                    render={({field}) => (
                        <TextField
                            size="small"
                            id="email"
                            label="E-mail address"
                            variant="outlined"
                            placeholder="E-mail address"
                            fullWidth
                            type="email"
                            {...field}
                            margin="dense"
                        />
                    )}
                />


                <Box sx={{display: "flex"}}>
                    <Controller
                        control={control}
                        name="countryCode"
                        render={({field}) => (
                            <TextField
                                size="small"
                                id="countryCode"
                                label="Country code"
                                variant="outlined"
                                placeholder="Country code"
                                fullWidth
                                {...field}
                                margin="dense"
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="phone"
                        render={({field}) => (
                            <TextField
                                size="small"
                                id="phone"
                                label="Phone no."
                                variant="outlined"
                                placeholder="Phone no."
                                fullWidth
                                {...field}
                                margin="dense"
                            />
                        )}
                    />
                </Box>


            </FormFieldsWrapper>
            {/*<Controller*/}
            {/*    control={control}*/}
            {/*    name="emailAddress"*/}
            {/*    render={({field}) => (*/}
            {/*        <TextField*/}
            {/*            id="email"*/}
            {/*            label="E-mail"*/}
            {/*            variant="outlined"*/}
            {/*            placeholder="Enter Your E-mail Address"*/}
            {/*            fullWidth*/}
            {/*            margin="normal"*/}
            {/*            {...field}*/}
            {/*        />*/}
            {/*    )}*/}
            {/*/>*/}

            {/*<Controller*/}
            {/*    control={control}*/}
            {/*    name="phoneNumber"*/}
            {/*    render={({field}) => (*/}
            {/*        <TextField*/}
            {/*            id="phone-number"*/}
            {/*            label="Phone Number"*/}
            {/*            variant="outlined"*/}
            {/*            placeholder="Enter Your Phone Number"*/}
            {/*            fullWidth*/}
            {/*            margin="normal"*/}
            {/*            {...field}*/}
            {/*        />*/}
            {/*    )}*/}
            {/*/>*/}
            {/*<Controller*/}
            {/*    control={control}*/}
            {/*    name="alternatePhone"*/}
            {/*    render={({field}) => (*/}
            {/*        <TextField*/}
            {/*            id="alternate-phone"*/}
            {/*            label="Alternate Phone"*/}
            {/*            variant="outlined"*/}
            {/*            placeholder="Enter Your Alternate Phone"*/}
            {/*            fullWidth*/}
            {/*            margin="normal"*/}
            {/*            {...field}*/}
            {/*        />*/}
            {/*    )}*/}
            {/*/>*/}
        </>
    );
};
const Agreement = () => {
    return (
        <>
            <FormTitle>Contact person</FormTitle>
            <FormFieldsWrapper>
                <AgreementText />
            </FormFieldsWrapper>
        </>
    );
};


function getStepContent(step: number) {
    switch (step) {
        case 0:
            return <CompanyForm/>;
        case 1:
            return <ContactPersonForm/>;
        case 2:
            return <Agreement/>;

        default:
            return "unknown step";
    }
}

const LinearStepper = () => {
    // const classes = useStyles();
    const methods = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            nickName: "",
            emailAddress: "",
            phoneNumber: "",
            alternatePhone: "",
            address1: "",
            address2: "",
            country: "",
            cardNumber: "",
            cardMonth: "",
            cardYear: "",
        },
    });
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const handleNext = (data: any) => {
        setActiveStep(activeStep + 1);
        console.log(data);

        // if (activeStep == steps.length - 1) {
        //     fetch("https://jsonplaceholder.typicode.com/comments")
        //         .then((data) => data.json())
        //         .then((res) => {
        //             console.log(res);
        //             setActiveStep(activeStep + 1);
        //         });
        // } else {
        //     setActiveStep(activeStep + 1);
        //     setSkippedSteps(
        //         skippedSteps.filter((skipItem) => skipItem !== activeStep)
        //     );
        // }
    };
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    // const onSubmit = (data) => {
    //   console.log(data);
    // };
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

            {activeStep === steps.length ? (
                <Typography variant="h4" align="left">
                    Thank You, we will send you
                </Typography>
            ) : (
                <>
                    <FormProvider  {...methods}>
                        <Form onSubmit={methods.handleSubmit(handleNext)}>
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
                                    // onClick={handleNext}
                                    type="submit"
                                >
                                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                                </PrimaryButton>
                            </FormButtons>
                        </Form>
                    </FormProvider>
                </>
            )}
        </Wrapper>
    );
};

export default LinearStepper;
