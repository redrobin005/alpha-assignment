import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';


const currencies = ['GBP', 'USD', 'EUR', 'JPY', 'MXN', 'AED']

export default function CurrencyField({ handleChange, formFields, formErrors }) {
    return (
        <Grid item xs={5.5}>
            <InputLabel
                htmlFor={"currency"}
                sx={{ marginTop: 2 }}
            >
                <Typography>Currency</Typography>
            </InputLabel>
            <TextField
                select
                name="currency"
                label="Select"
                value={formFields.currency}
                onChange={handleChange}
                sx={{ marginTop: 1, width: "100%" }}
                error={formErrors.currency.error}
                helperText={formErrors.currency.helperText}
            >
                {currencies.map(currency => {
                    return (
                        <MenuItem
                            key={currency}
                            value={currency}
                        >
                            {currency}
                        </MenuItem>
                    )
                })}
            </TextField>
        </Grid>
    )
}