import * as React from 'react';
import {useState} from "react";
import  Typography  from '@mui/material/Typography';
import  TextField  from '@mui/material/TextField';
import  Stepper  from '@mui/material/Stepper';
import  Step  from '@mui/material/Step';
import  StepLabel  from '@mui/material/StepLabel';
//     TextField,
//     Stepper,
//     Step,
//     StepLabel,
// } from "@material-ui";
// import {makeStyles} from "@material-ui/core/styles";
import {
    useForm,
    Controller,
    FormProvider,
    useFormContext,
} from "react-hook-form";
import {Form, FormButtons, FormTitle, FormFieldsWrapper, Wrapper} from "./styles/Form";
import {PrimaryButton, OutlinedButton} from "./styles/Button";
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, {SelectChangeEvent} from '@mui/material/Select';
import Box from '@mui/material/Box';
import AgreementText from "./components/Agreement"

// const useStyles = makeStyles((theme) => ({
//     button: {
//         marginRight: theme.spacing(1),
//     },
// }));

function getSteps() {
    return [
        "Product and Amount",
        "Company",
        "Contact person"
    ];
}

const BasicForm = () => {
    const {control} = useFormContext();
    return (
        <>
            <FormTitle>Company</FormTitle>
            <FormFieldsWrapper>
                <Controller
                    control={control}
                    name="firstName"
                    render={({field}) => (
                        <TextField
                            size="small"
                            id="first-name"
                            label="First Name"
                            variant="outlined"
                            placeholder="Enter Your First Name"
                            fullWidth
                            {...field}
                            margin="dense"
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="firstName"
                    render={({field}) => (
                        <TextField
                            size="small"
                            id="first-name"
                            label="First Name"
                            variant="outlined"
                            placeholder="Enter Your First Name"
                            fullWidth
                            {...field}
                            margin="dense"
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="lastName"
                    render={({field}) => (
                        <TextField
                            size="small"
                            id="last-name"
                            label="Last Name"
                            variant="outlined"
                            placeholder="Enter Your Last Name"
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
const ContactForm = () => {
    const {control} = useFormContext();
    return (
        <>
            <FormTitle>Company</FormTitle>
            <FormFieldsWrapper>
                <Controller
                    control={control}
                    name="firstName"
                    render={({field}) => (
                        <TextField
                            size="small"
                            id="first-name"
                            label="First Name"
                            variant="outlined"
                            placeholder="Enter Your First Name"
                            fullWidth
                            {...field}
                            margin="dense"
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="lastName"
                    render={({field}) => (
                        <TextField
                            size="small"
                            id="last-name"
                            label="Last Name"
                            variant="outlined"
                            placeholder="Enter Your Last Name"
                            fullWidth
                            {...field}
                            margin="dense"
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="lastName"
                    render={({field}) => (
                        <TextField
                            size="small"
                            id="last-name"
                            label="Last Name"
                            variant="outlined"
                            placeholder="Enter Your Last Name"
                            fullWidth
                            {...field}
                            margin="dense"
                        />
                    )}
                />


                <Controller
                    control={control}
                    name="lastName"
                    render={({field}) => (
                        <TextField
                            size="small"
                            id="last-name"
                            label="Last Name"
                            variant="outlined"
                            placeholder="Enter Your Last Name"
                            fullWidth
                            {...field}
                            margin="dense"
                        />
                    )}
                />


                <Box sx={{display: "flex"}}>
                    <Controller
                        control={control}
                        name="lastName"
                        render={({field}) => (
                            <TextField
                                size="small"
                                id="last-name"
                                label="Last Name"
                                variant="outlined"
                                placeholder="Enter Your Last Name"
                                fullWidth
                                {...field}
                                margin="dense"
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="lastName"
                        render={({field}) => (
                            <TextField
                                size="small"
                                id="last-name"
                                label="Last Name"
                                variant="outlined"
                                placeholder="Enter Your Last Name"
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
    // const {control} = useFormContext();
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
            return <BasicForm/>;
        case 1:
            return <ContactForm/>;
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
