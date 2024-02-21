import { Button, DialogContent, DialogActions, Grid } from '@mui/material';
import RecipientField from './RecipientField';
import CurrencyField from './CurrencyField';
import AmountField from './AmountField';
import DateField from './DateField';
import ReferenceField from './ReferenceField';


export default function NewPaymentForm({ handleChange, formFields, formErrors, handleNext }) {
    const formProps = {
        handleChange: handleChange,
        formFields: formFields,
        formErrors: formErrors
    }

    return (
        <>
            <DialogContent>
                <RecipientField {...formProps}></RecipientField>
                <Grid container sx={{ justifyContent: "space-between" }}>
                    <CurrencyField {...formProps}></CurrencyField>
                    <AmountField {...formProps}></AmountField>
                </Grid >
                <DateField {...formProps}></DateField>
                <ReferenceField {...formProps}></ReferenceField>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </DialogActions>
        </>
    )
}