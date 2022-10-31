import {Controller, useFormContext} from "react-hook-form";
import {FormFieldsWrapper, FormTitle} from "../../styles/Form";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import React from "react";

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


export default CompanyForm;
