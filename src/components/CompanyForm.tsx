import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {FormFieldsWrapper, FormTitle} from "../styles/Form";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import * as Yup from "yup";

interface IFormValue {
    companyCode: string;
    companyName: string;
    companyRegistration: string;
}

const defaultValues = {
    companyCode: "",
    companyName: "",
    companyRegistration: ""
};

const schema = Yup.object().shape({
    companyCode: Yup.string().required('companyCode is required'),
    companyName: Yup.string().required('companyName is required'),
    companyRegistration: Yup.string().required('companyRegistration is required'),
})


 function CompanyForm() {
    const {control, formState: {errors}} = useForm<IFormValue>
    ({
        mode: "onChange",
        defaultValues,
        resolver: yupResolver(schema),
    });
    {
        // const {control} = useFormContext();
        return (
            <>
                {/*{control.map(home => <div>{home.id}</div>)}*/}
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
                                error={!!errors.companyCode}
                                helperText={errors.companyCode && `${errors.companyCode.message}`}
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
                                error={!!errors.companyName}
                                helperText={errors.companyName && `${errors.companyName.message}`}
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
                                error={!!errors.companyRegistration}
                                helperText={errors.companyRegistration && `${errors.companyRegistration.message}`}
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
    }
};

export default CompanyForm;
