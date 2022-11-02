import React from "react";
import {Controller, useFormContext} from "react-hook-form";
import {FormFieldsWrapper, FormTitle} from "./Form";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {AgreementText, LinkText} from "../AgreementComponents/AgreementStyled";

const formValidHelper = {
    name: {
        required: "Name is required",
        pattern: "Invalid user name"
    },
    surname: {
        required: "Surname is required",
        pattern: "Invalid surname"
    },
    jobTitle: {
        required: "Job title is required",
        pattern: "Invalid job title"
    },
    email: {
        required: "Email is required",
        pattern: "Invalid Email address"
    },
    countryCode: {
        required: "Country Code is required",
        pattern: "Invalid Country code"
    },
    phone: {
        required: "Phone is required",
        pattern: "Invalid phone"
    },
    acceptTerms: {
        required: "Accept Terms is required",
        pattern: "Invalid phone"
    },
    acceptTermsTwo: {
        required: "Accept Terms is required",
        pattern: "Invalid phone"
    }
};


const ContactPersonForm = () => {
    const {control} = useFormContext();

    function Agreement() {
        return (
            <>
                <FormTitle>Contact person</FormTitle>
                <FormFieldsWrapper>
                    <Agreement/>
                </FormFieldsWrapper>
            </>
        );
    }

    return (
        <>
            <FormTitle>Contact Person</FormTitle>
            <FormFieldsWrapper>
                <Controller
                    control={control}
                    name="name"
                    rules={{
                        required: true,
                    }}
                    render={({field, fieldState: {error}}) => (
                        <TextField
                            {...field}
                            size="small"
                            id="name"
                            label="Name"
                            variant="outlined"
                            placeholder="Name"
                            fullWidth
                            margin="dense"
                            error={!!error}
                            helperText={error ? formValidHelper.name[error.type] : ""}
                        />

                    )}
                />
                <Controller
                    control={control}
                    name="surname"
                    rules={{
                        required: true,
                    }}
                    render={({field, fieldState: {error}}) => (
                        <TextField
                            {...field}
                            size="small"
                            id="surname"
                            label="Surname"
                            variant="outlined"
                            placeholder="Surname"
                            fullWidth
                            margin="dense"
                            error={!!error}
                            helperText={error ? formValidHelper.surname[error.type] : ""}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="jobTitle"
                    rules={{
                        required: true,
                    }}
                    render={({field, fieldState: {error}}) => (
                        <TextField
                            {...field}
                            size="small"
                            id="jobTitle"
                            label="Job title"
                            variant="outlined"
                            placeholder="Job title"
                            fullWidth
                            margin="dense"
                            error={!!error}
                            helperText={error ? formValidHelper.jobTitle[error.type] : ""}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="email"
                    rules={{
                        required: true,
                        pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                    }}
                    render={({field, fieldState: {error}}) => (
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
                            error={!!error}
                            helperText={error ? formValidHelper.email[error.type] : ""}
                        />
                    )}
                />
                <Box sx={{display: "flex"}}>
                    <Controller
                        control={control}
                        name="countryCode"
                        rules={{
                            required: true
                        }}
                        render={({field, fieldState: {error}}) => (
                            <TextField
                                {...field}
                                style={{width: "60%", paddingRight: "10px"}}
                                size="small"
                                id="countryCode"
                                label="Country code"
                                variant="outlined"
                                fullWidth
                                select
                                margin="dense"
                                error={!!error}
                                helperText={error ? formValidHelper.countryCode[error.type] : ""}
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
                        rules={{
                            required: true
                        }}
                        render={({field, fieldState: {error}}) => (
                            <TextField
                                {...field}
                                size="small"
                                id="phone"
                                label="Phone no."
                                variant="outlined"
                                placeholder="Phone no."
                                fullWidth
                                margin="dense"
                                error={!!error}
                                helperText={error ? formValidHelper.phone[error.type] : ""}
                            />
                        )}
                    />
                </Box>
                <Box sx={{display: "flex", alignItems: "flex-start", padding: "20px 0 0 0"}}>
                    <Controller
                        control={control}
                        defaultValue={false}
                        name="acceptTerms"
                        rules={{
                            required: true
                        }}
                        render={({field: {value, onChange, ...field}, fieldState: {error}}) => (
                            <FormControlLabel
                                control={
                                    <Checkbox onChange={onChange} checked={value} {...field} />
                                }
                                label={error ? formValidHelper.acceptTerms[error.type] : ""}
                                error={error ? formValidHelper.acceptTerms[error.type] : ""}
                            >
                            </FormControlLabel>
                        )}
                    />
                    <AgreementText>I hereby agree that all data submitted herein regarding the company I represent along
                        with my
                        submitted personal data shall be used for direct marketing purposes with the aim of sending
                        business
                        financing proposals targeted and tailored to the aforementioned represented company, by UAB SME
                        Finance,
                        UAB SME Finance Leasing and UAB SME Bank.
                        <LinkText onClick={Agreement}>Please, click to expand</LinkText>
                    </AgreementText>
                </Box>

                <Box sx={{display: "flex", alignItems: "flex-start", padding: "0px 0 10px 0"}}>
                    <Controller
                        control={control}
                        name="acceptTermsTwo"
                        defaultValue={false}
                        render={({field: {value, onChange, ...field}, fieldState: {error}}) => (
                            <FormControlLabel
                                control={
                                    <Checkbox onChange={onChange} checked={value} {...field} />
                                }
                                label={error ? formValidHelper.acceptTermsTwo[error.type] : ""}
                                error={error ? formValidHelper.acceptTermsTwo[error.type] : ""}
                            >
                            </FormControlLabel>
                        )}
                    />
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
        </>
    );
};

export default ContactPersonForm;
