import React, {useState} from "react";
import AgreementComponent from "./components/Agreement";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import {Form, FormButtons, FormTitle, FormFieldsWrapper, Wrapper} from "./styles/Form";
import {AgreementText, LinkText} from "./styles/Agreement";
import {PrimaryButton, OutlinedButton} from "./styles/Button";
import {
    useForm,
    Controller,
    FormProvider,
    useFormContext
} from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";


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
                            {...field}
                            size="small"
                            id="companyCode"
                            label="Company code"
                            variant="outlined"
                            placeholder="Company code"
                            fullWidth
                            margin="dense"
                            name="companyCode"
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="companyName"
                    render={({field}) => (
                        <TextField
                            {...field}
                            size="small"
                            id="companyName"
                            label="Company name"
                            variant="outlined"
                            placeholder="Company name"
                            fullWidth
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
                            select
                            {...field}
                            margin="dense"
                        >
                            <MenuItem value="USA">USA</MenuItem>
                            <MenuItem value="USA">USA</MenuItem>
                            <MenuItem value="USA">USA</MenuItem>
                        </TextField>
                    )}
                />
            </FormFieldsWrapper>

        </>
    );
};
const ContactPersonForm = () => {
    const {control} = useFormContext();
    // const {
    //     register,
    //     control,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    // } = useForm<IFormInputs>({
    //     resolver: yupResolver(schema),
    // });
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
                                style={{width: "60%", paddingRight: "10px"}}
                                size="small"
                                id="countryCode"
                                label="Country code"
                                variant="outlined"
                                fullWidth
                                select
                                {...field}
                                margin="dense"
                            >
                                <MenuItem value="USA">+223</MenuItem>
                                <MenuItem value="USA">+223</MenuItem>
                                <MenuItem value="USA">+223</MenuItem>
                            </TextField>
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
                <Box sx={{display: "flex", alignItems: "flex-start", padding: "20px 0 10px 0"}}>
                    <Checkbox checked/>
                    <AgreementText>I hereby agree that all data submitted herein regarding the company I represent along
                        with my
                        submitted personal data shall be used for direct marketing purposes with the aim of sending
                        business
                        financing proposals targeted and tailored to the aforementioned represented company, by UAB SME
                        Finance,
                        UAB SME Finance Leasing and UAB SME Bank. <LinkText>Please, click to expand</LinkText>
                    </AgreementText>
                </Box>

                <Box sx={{display: "flex", alignItems: "flex-start", padding: "0px 0 10px 0"}}>
                    <Checkbox checked/>
                    <AgreementText>I hereby agree that all data submitted herein regarding the company I represent along
                        with my
                        submitted personal data shall be used for direct marketing purposes with the aim of sending
                        business
                        financing proposals targeted and tailored to the aforementioned represented company, by UAB SME
                        Finance,
                        UAB SME Finance Leasing and UAB SME Bank. <LinkText>Please, click to expand</LinkText>
                    </AgreementText>
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
                <AgreementComponent/>
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
        default:
            return "unknown step";
    }
}

const LinearStepper = () => {
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
            phone: "",
            checkbox: "",
            checkboxTwo: "",
        },
    });
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const handleNext = (data: any) => {
        setActiveStep(activeStep + 1);
        console.log(data);
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
                <Typography variant="h4">
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
