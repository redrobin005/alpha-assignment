import { useState } from 'react';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, Grid, InputLabel, Typography, DialogContent, DialogActions} from '@mui/material';


const currencies = ['GBP', 'USD', 'EUR', 'JPY', 'MXN', 'AED']

export default function NewPaymentForm({ handleChange, formFields, formErrors, handleNext}) {

    return (
        <>
            <DialogContent>
                <InputLabel
                    htmlFor={"recipient"}
                >
                    <Typography>Recipient</Typography>
                </InputLabel>
                <TextField
                    name="recipient"
                    label="Type recipient name"
                    fullWidth
                    sx={{ marginTop: 1 }}
                    value={formFields.recipient}
                    onChange={handleChange}
                    error={formErrors.recipient.error}
                    helperText={formErrors.recipient.helperText}
                />

                <Grid container sx={{ justifyContent: "space-between" }}>
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
                        />
                    </Grid>
                </Grid >

                <Grid container >
                    <Grid item xs={5.5}>
                        <InputLabel
                            htmlFor={"date"}
                            sx={{ marginTop: 2 }}
                        >
                            <Typography>Value Date</Typography>
                        </InputLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker
                                    name="date"
                                    value={formFields.date}
                                    onChange={
                                        date => handleChange({
                                            target: {
                                                name: 'date', value: dayjs(date)
                                            }
                                        })}
                                    format="DD-MM-YYYY"
                                    slotProps={{
                                        textField: {
                                            error: formErrors.date.error,
                                            helperText: formErrors.date.helperText,
                                        },
                                    }}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                </Grid>

                <InputLabel
                    htmlFor={"reference"}
                    sx={{ marginTop: 2 }}
                >
                    <Typography>Reference</Typography>
                </InputLabel>
                <TextField
                    name="reference"
                    label="Type reference"
                    fullWidth
                    sx={{ marginTop: 1 }}
                    value={formFields.reference}
                    onChange={handleChange}
                    error={formErrors.reference.error}
                    helperText={formErrors.reference.helperText}
                />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </DialogActions>
        </>
    )
}