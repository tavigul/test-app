import React, {FC} from "react";
import {Controller, useFormContext} from "react-hook-form";
import {FormFieldsWrapper, FormTitle} from "./Form";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";


export type CommonObjectType = {
    [key: string]: string
}

export type MainObjectStatic = {
    companyCode: CommonObjectType;
    companyName: CommonObjectType;
    companyRegistration: CommonObjectType;
}

const formValidHelper: MainObjectStatic = {
    companyCode: {
        required: 'Company code is required',
        pattern: "Invalid Company code"
    },
    companyName: {
        required: "Company name is required",
        pattern: "Invalid Company name"
    },
    companyRegistration: {
        required: "Company registration is required",
        pattern: "Invalid Company registration"
    }
};


const CompanyForm = () => {
    const methods = useFormContext();
    return (
        <>
            <FormTitle>Company</FormTitle>
            <FormFieldsWrapper>
                <Controller
                    name="companyCode"
                    defaultValue=""
                    rules={{
                        required: true,
                    }}
                    render={({field, fieldState: {error}}) => (
                        <TextField
                            {...methods.register("companyCode")}
                            size="small"
                            id="companyCode"
                            label="Company code"
                            variant="outlined"
                            placeholder="Company code"
                            fullWidth
                            margin="dense"
                            name="companyCode"
                            error={!!error}
                            helperText={error ? formValidHelper.companyCode[error.type] : ""}
                        />
                    )}
                />

                <Controller
                    name="companyName"
                    rules={{
                        required: true,
                    }}
                    render={({field, fieldState: {error}}) => (
                        <TextField
                            {...field}
                            size="small"
                            id="companyName"
                            label="Company name"
                            variant="outlined"
                            placeholder="Company name"
                            fullWidth
                            margin="dense"
                            error={!!error}
                            helperText={error ? formValidHelper.companyName[error.type] : ""}
                        />
                    )}
                />

                <Controller
                    name="companyRegistration"
                    rules={{
                        required: true,
                    }}
                    render={({field, fieldState: {error}}) => (
                        <TextField
                            {...field}
                            size="small"
                            id="companyRegistration"
                            label="Company of registration"
                            variant="outlined"
                            placeholder="Company of registration"
                            fullWidth
                            select
                            margin="dense"
                            error={!!error}
                            helperText={error ? formValidHelper.companyRegistration[error.type] : ""}
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

export default CompanyForm
