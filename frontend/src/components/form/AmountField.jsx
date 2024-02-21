import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';


export default function AmountField({ handleChange, formFields, formErrors }) {
    return (
        <Grid item xs={5.5}>
            <InputLabel
                htmlFor={"amount"}
                sx={{ marginTop: 2 }}
            >
                <Typography>Amount</Typography>
            </InputLabel>
            <TextField
                name="amount"
                label="Enter amount"
                type="number"
                sx={{ marginTop: 1 }}
                fullWidth
                value={formFields.amount}
                onChange={handleChange}
                error={formErrors.amount.error}
                helperText={formErrors.amount.helperText}
                InputProps={{
                    inputProps: { 
                        min: 0 
                    }
                }}
            />
        </Grid>
    )
}